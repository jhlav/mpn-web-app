import DataType from 'sequelize';
import Model from '../sequelize';

const GameEntry = Model.define('GameEntry', {
  place: {
    type: DataType.INTEGER,
  },

  character: {
    type: DataType.STRING(30),
  },

  coins: {
    type: DataType.INTEGER,
  },

  minigameCoins: {
    type: DataType.INTEGER,
  },

  stars: {
    type: DataType.INTEGER,
  },

  guestIndex: {
    type: DataType.INTEGER,
  },
});

export default GameEntry;
