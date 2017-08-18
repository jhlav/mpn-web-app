import {
  GraphQLInputObjectType as InputObjectType,
  GraphQLString as StringType,
  GraphQLNonNull as NonNull,
} from 'graphql';
// import uuid from 'node-uuid';
// import validator from 'validator';

import { DiscordUser } from '../models';
import DiscordUserType from '../types/DiscordUserType';
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
            avatarURL: {
              type: new NonNull(StringType),
              description: 'The URL to an avatar image.',
            },
            nickname: {
              type: StringType,
              description:
                '(Nullable) The nickname of the user - in a single guild.',
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
    // const errors = [];
    //
    // if (validator.isEmpty(input.data)) {
    //   errors.push({
    //     key: 'data',
    //     message: 'The data (serialized JSON) field must not be empty.',
    //   });
    // }
    //
    // if (validator.isEmpty(input.imageURI)) {
    //   errors.push({
    //     key: 'imageURI',
    //     message: 'The imageURI field must not be empty.',
    //   });
    // }
    //
    // if (errors.length) throw new ValidationError(errors);

    const data = await DiscordUser.create({
      id: input.id,
      avatarURL: input.avatarURL,
      nickname: input.nickname,
      tag: input.tag,
    })
      .then(res => ({ ...res.dataValues }))
      .catch(error => console.warn(error));

    return data;
  },
};

export default createDiscordUser;
