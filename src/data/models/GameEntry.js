import DataType from 'sequelize';
import Model from '../sequelize';

const GameEntry = Model.define('GameEntry', {
  place: {
    type: DataType.INTEGER(2),
  },

  character: {
    type: DataType.STRING(30),
  },

  coins: {
    type: DataType.INTEGER(10),
  },

  minigameCoins: {
    type: DataType.INTEGER(10),
  },

  stars: {
    type: DataType.INTEGER(10),
  },
});

export default GameEntry;
