import { GraphQLString as StringType } from 'graphql';
import { resolver } from 'graphql-sequelize';

import { DiscordGuild } from '../models';
import DiscordGuildType from '../types/DiscordGuildType';

const guild = {
  type: DiscordGuildType,
  args: {
    id: {
      type: StringType,
    },

    name: {
      type: StringType,
    },

    owner: {
      type: StringType,
    },
  },
  resolve: resolver(DiscordGuild),
};

export default guild;
