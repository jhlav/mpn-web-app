import { GraphQLString as StringType } from 'graphql';

import { DiscordUser } from '../models';
import DiscordUserType from '../types/DiscordUserType';

const player = {
  type: DiscordUserType,
  args: {
    id: {
      type: StringType,
    },
    tag: {
      type: StringType,
    },
  },
  async resolve(_, args) {
    // TODO validate args
    // id.length must be 1 or 18
    // tag must start with any type & quantity of characters then end with # and 4 digits

    const { id, tag } = args;
    // If we have both id and tag, or only ID
    if ((id && tag) || (id && !tag)) {
      const findUserById = await DiscordUser.findById(id);

      return findUserById;
    }
    // Or we have no ID, but have tag
    const findUserByTag = await DiscordUser.findOne({
      where: { tag },
    });

    return findUserByTag;
  },
};

export default player;
