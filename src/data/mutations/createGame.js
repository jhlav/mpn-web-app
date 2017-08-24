import Game from '../models/Game';
import GameType from '../types/GameType';

// game.setEntries([entry1, entry2, entry3, entry4])
// spread from input args for entries
// game.setEntries([ ...input.entries ])
// set will overwrite associations
// add will just append associations

const createGame = {
  type: GameType,
  args: {},
  async resolve(_, args) {
    const { input } = args;
    const data = Game.create({
      id: _,
      game: _,
      gamemode: _,
      platform: _,
    })
      // .then(
      //   ()
      // )
      .then(res => ({ ...res.dataValues }))
      .catch(error => console.warn(error));
  },
};

export default createGame;
