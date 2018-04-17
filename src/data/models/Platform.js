import DataType from 'sequelize';
import Model from '../sequelize';

const Platform = Model.define(
  'Platform',
  {
    id: {
      type: DataType.UUID,
      defaultValue: DataType.UUIDV1,
      primaryKey: true,
    },

    name: {
      type: DataType.STRING(100),
    },
  },
  {
    indexes: [{ fields: ['name'] }],
  },
);

export default Platform;
