import {
  GraphQLList as List,
  GraphQLNonNull as NonNull,
  GraphQLObjectType as ObjectType,
} from 'graphql';
import { resolver } from 'graphql-sequelize';

import DiscordGuildType from './DiscordGuildType';
import DiscordUserType from './DiscordUserType';
import { DiscordGuild, DiscordUser } from '../models';

const MemberType = new ObjectType({
  name: 'Member',
  fields: () => ({
    guild: {
      type: new NonNull(DiscordGuildType),
      resolve: resolver(DiscordGuild),
    },
    members: {
      type: new List(DiscordUserType),
      resolve: resolver(DiscordUser, { list: true }),
    },
  }),
});

export default MemberType;
