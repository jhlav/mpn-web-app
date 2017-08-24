import DataType from 'sequelize';
import Model from '../sequelize';

const GameEntry = Model.define('GameEntry', {
  character: {
    type: DataType.STRING(23),
  },

  coins: {
    type: DataType.INTEGER(3),
  },

  stars: {
    type: DataType.INTEGER(3),
  },
});

export default GameEntry;
