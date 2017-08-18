import DataType from 'sequelize';
import Model from '../sequelize';

const GameEntry = Model.define('GameEntry', {
  character: {
    type: DataType.STRING(31),
  },

  coins: {
    type: DataType.INTEGER,
  },

  stars: {
    type: DataType.INTEGER,
  },
});

export default GameEntry;
