import {
  GraphQLID as ID,
  // GraphQLInt as Integer,
  GraphQLList as List,
  GraphQLString as StringType,
  GraphQLNonNull as NonNull,
  GraphQLObjectType as ObjectType,
} from 'graphql';
import { resolver } from 'graphql-sequelize';

import DiscordUserType from './DiscordUserType';
import GameType from './GameType';
import { Record } from '../models';

const RecordType = new ObjectType({
  name: 'Record',
  fields: () => ({
    id: { type: new NonNull(ID) },
    game: {
      type: new NonNull(GameType),
      resolve: resolver(Record.Game),
    },
    players: {
      type: new List(DiscordUserType),
      resolve: resolver(Record.DiscordUsers),
    },
    // template: { type: new NonNull(RecordTemplateType) },
    date: { type: new NonNull(StringType) },
  }),
});

export default RecordType;
