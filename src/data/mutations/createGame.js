import uuid from 'uuid/v1';

import Game from '../models/Game';
import GameType from '../types/GameType';

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
              description: 'Which game in the series?  i.e \'Mario Party 1\'',
            },
            gamemode: {
              type: new NonNull(StringType),
              description: 'Which gamemode was played.',
            },
            platform: {
              type: new NonNull(StringType),
              description: 'Which platform the game is on.  Use \'n64\', \'gamecube\', or \'wii\'',
            },
          },
        }),
      ),
    },
  },
  async resolve(_, args) {
    const { input } = args;
    const data = Game.create({
      id: uuid(),
      game: input.game,
      gamemode: input.gamemode,
      platform: input.platform,
    })
      .then(res => ({ ...res.dataValues }))
      .catch(error => console.warn(error));
  },
};

export default createGame;
