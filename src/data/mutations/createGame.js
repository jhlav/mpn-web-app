import {
  GraphQLInputObjectType as InputObjectType,
  GraphQLList as List,
  GraphQLNonNull as NonNull,
  GraphQLString as StringType,
} from 'graphql';
import uuid from 'uuid/v1';

import { DiscordUser, Game, GameEntry } from '../models';
import GameType from '../types/GameType';
import GameEntryInputType from '../types/GameEntryInputType';

// game.setEntries([entry1, entry2, entry3, entry4])
// spread from input args for entries
// game.setEntries([ ...input.entries ])
// set will overwrite associations
// add will just append associations

const createGame = {
  type: GameType,
  args: {
    input: {
      type: new NonNull(
        new InputObjectType({
          name: 'CreateGameInput',
          fields: {
            game: {
              type: new NonNull(StringType),
              description: `Which game in the series?  i.e 'Mario Party 1.'`,
            },
            gamemode: {
              type: new NonNull(StringType),
              description: `Which gamemode was played, i.e 'Battle Royale.'`,
            },
            platform: {
              type: new NonNull(StringType),
              description: `Which platform the game is on.  Use 'n64', 'gamecube', or 'wii.'`,
            },
            board: {
              type: new NonNull(StringType),
              description: `Which board the game was played on, i.e 'Chilly Waters.'`,
            },
            date: {
              type: new NonNull(StringType),
              description: 'The date on which the game took place.',
            },
            entries: {
              type: new List(GameEntryInputType),
              description: 'There should be four entries total.',
            },
          },
        }),
      ),
    },
  },
  async resolve(_, args) {
    const { input } = args;
    const id = await uuid();
    const data = await Game.create({
      id,
      game: input.game,
      gamemode: input.gamemode,
      platform: input.platform,
      board: input.board,
      date: input.date,
    }).then(game => {
      input.entries.map(entry => {
        const { playerId, ...entryData } = entry;
        const findPlayer = DiscordUser.findById(playerId, {
          attributes: ['id'],
        });
        return GameEntry.create(entryData).then(gameEntry => {
          game.addGameEntry(gameEntry);
          findPlayer.then(player => player.addGameEntry(gameEntry));
        });
      });
      return game;
    });

    return data;
  },
};

export default createGame;
