import { GraphQLString as StringType } from 'graphql';
import { resolver } from 'graphql-sequelize';

import { DiscordUser } from '../models';
import DiscordUserType from '../types/DiscordUserType';

const user = {
  type: DiscordUserType,
  args: {
    id: {
      type: StringType,
    },

    tag: {
      type: StringType,
    },
  },
  resolve: resolver(DiscordUser),
};

export default user;
