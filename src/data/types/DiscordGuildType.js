import {
  GraphQLList as List,
  GraphQLNonNull as NonNull,
  GraphQLObjectType as ObjectType,
  GraphQLString as StringType,
} from 'graphql';
import { resolver } from 'graphql-sequelize';

import DiscordUserType from './DiscordUserType';
import { DiscordGuild, DiscordUser } from '../models';

const DiscordGuildType = new ObjectType({
  name: 'DiscordGuild',
  fields: () => ({
    id: { type: new NonNull(StringType) },
    name: { type: new NonNull(StringType) },
    owner: {
      type: new NonNull(DiscordUserType),
      resolve: resolver(DiscordUser),
    },
    members: {
      type: new List(DiscordUserType),
      resolve: resolver(DiscordGuild.Users, { list: true }),
    },
  }),
});

export default DiscordGuildType;
