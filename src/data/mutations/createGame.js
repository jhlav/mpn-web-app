import {
  GraphQLInputObjectType as InputObjectType,
  GraphQLList as List,
  GraphQLNonNull as NonNull,
  GraphQLString as StringType,
} from 'graphql';
import uuid from 'uuid/v1';

import { Game } from '../models';
import GameType from '../types/GameType';
import PlatformInputType from '../types/PlatformInputType';

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
            name: {
              type: new NonNull(StringType),
              description: `The name of the game, baby!  i.e 'Mario Party 1'`,
            },
            platforms: {
              type: new List(PlatformInputType),
              description: `Which platforms this game supports, i.e 'N64'`,
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
      name: input.game,
      platforms: input.platforms,
    });
    // Might be useful as reference for the future
    // .then(game => {
    //   input.entries.map(entry => {
    //     const { playerId, ...entryData } = entry;
    //     const findPlayer = DiscordUser.findById(playerId, {
    //       attributes: ['id'],
    //     });
    //     return GameEntry.create(entryData).then(gameEntry => {
    //       game.addGameEntry(gameEntry);
    //       findPlayer.then(player => player.addGameEntry(gameEntry));
    //     });
    //   });
    //   return game;
    // });

    return data;
  },
};

export default createGame;
