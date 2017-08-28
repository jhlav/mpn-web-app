import DataType from 'sequelize';
import Model from '../sequelize';

const Game = Model.define('Game', {
  id: {
    type: DataType.UUID,
    defaultValue: DataType.UUIDV1,
    primaryKey: true,
  },

  game: {
    type: DataType.STRING(30),
  },

  gamemode: {
    type: DataType.STRING(30),
  },

  platform: {
    type: DataType.STRING(30),
  },

  board: {
    type: DataType.STRING(50),
  },

  date: {
    type: DataType.STRING(30),
  },
});

export default Game;
