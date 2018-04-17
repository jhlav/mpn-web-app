import DataType from 'sequelize';
import Model from '../sequelize';

const Record = Model.define('Record', {
  id: {
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
  },

  date: {
    type: DataType.DATE(50),
  },
});

export default Record;
