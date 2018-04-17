import {
  GraphQLObjectType as ObjectType,
  GraphQLID as ID,
  GraphQLList as List,
  GraphQLString as StringType,
  GraphQLNonNull as NonNull,
} from 'graphql';
import { resolver } from 'graphql-sequelize';

import { Platform } from '../models';
import GameType from './GameType';

const PlatformType = new ObjectType({
  name: 'Platform',
  fields: () => ({
    id: { type: new NonNull(ID) },
    name: { type: new NonNull(StringType) },
    games: {
      type: new List(GameType),
      resolve: resolver(Platform.Games),
    },
  }),
});

export default PlatformType;
