import {
  GraphQLObjectType as ObjectType,
  GraphQLID as ID,
  GraphQLString as StringType,
  GraphQLNonNull as NonNull,
} from 'graphql';

const DiscordUserType = new ObjectType({
  name: 'DiscordUser',
  fields: {
    id: { type: new NonNull(ID) },
    avatarURL: { type: new NonNull(StringType) },
    nickname: { type: StringType },
    tag: { type: new NonNull(StringType) },
  },
});

export default DiscordUserType;
