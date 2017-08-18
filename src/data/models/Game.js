import DataType from 'sequelize';
import Model from '../sequelize';

const Game = Model.define('Game', {
  id: {
    type: DataType.UUID,
    defaultValue: DataType.UUIDV1,
    primaryKey: true,
  },

  game: {
    type: DataType.STRING(31),
  },

  gamemode: {
    type: DataType.STRING(31),
  },

  platform: {
    type: DataType.STRING(15),
  },
});

export default Game;
