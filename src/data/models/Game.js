import DataType from 'sequelize';
import Model from '../sequelize';

const Game = Model.define('Game', {
  id: {
    type: DataType.UUID,
    defaultValue: DataType.UUIDV1,
    primaryKey: true,
  },

  game: {
    type: DataType.STRING(23),
  },

  gamemode: {
    type: DataType.STRING(23),
  },

  platform: {
    type: DataType.STRING(7),
  },
});

export default Game;
