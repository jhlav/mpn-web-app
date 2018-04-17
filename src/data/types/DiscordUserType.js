import {
  GraphQLList as List,
  GraphQLNonNull as NonNull,
  GraphQLObjectType as ObjectType,
  GraphQLString as StringType,
} from 'graphql';
import { resolver } from 'graphql-sequelize';

import DiscordGuildType from './DiscordGuildType';
import { DiscordUser } from '../models';

const DiscordUserType = new ObjectType({
  name: 'DiscordUser',
  fields: () => ({
    id: { type: new NonNull(StringType) },
    avatar: { type: StringType },
    tag: { type: new NonNull(StringType) },
    guilds: {
      type: new List(DiscordGuildType),
      resolve: resolver(DiscordUser.Guilds, { list: true }),
    },
  }),
});

export default DiscordUserType;
