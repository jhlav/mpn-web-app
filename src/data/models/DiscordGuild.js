import DataType from 'sequelize';
import Model from '../sequelize';

const DiscordGuild = Model.define(
  'DiscordGuild',
  {
    id: {
      type: DataType.STRING(50),
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

export default DiscordGuild;
