import {
  GraphQLInputObjectType as InputObjectType,
  GraphQLNonNull as NonNull,
  GraphQLString as StringType,
} from 'graphql';
// import uuid from 'node-uuid';
// import validator from 'validator';

import { DiscordUser } from '../models';
import DiscordUserType from '../types/DiscordUserType';
import formatErrors from '../formatErrors';
// import ValidationError from '../../core/ValidationError';

const createDiscordUser = {
  type: DiscordUserType,
  args: {
    input: {
      type: new NonNull(
        new InputObjectType({
          name: 'CreateDiscordUserInput',
          fields: {
            id: {
              type: new NonNull(StringType),
              description: "The user's unique (Snowflake) identifier.",
            },
            avatar: {
              type: StringType,
              description:
                "The unique snowflake identifier for the user's avatar image.",
            },
            tag: {
              type: new NonNull(StringType),
              description: "The username followed by '#' and discriminator.",
            },
          },
        }),
      ),
    },
  },
  async resolve(_, args) {
    const { input } = args;

    try {
      const values = {
        id: input.id,
        avatar: input.avatar,
        tag: input.tag,
      };
      const user = await DiscordUser.upsert(values)
        .then(() => values)
        .catch(error => console.error(error));

      return user;
    } catch (error) {
      return formatErrors(error, { DiscordUser });
    }
  },
};

export default createDiscordUser;
