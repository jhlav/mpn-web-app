import { GraphQLID as IDType, GraphQLString as StringType } from 'graphql';

import { DiscordUser } from '../models';
import DiscordUserType from '../types/DiscordUserType';

const player = {
  type: DiscordUserType,
  args: {
    id: {
      type: IDType,
    },
    tag: {
      type: StringType,
    },
  },
  async resolve(_, args) {
    // TODO validate args
    const data = await DiscordUser.findOne({
      where: {
        id: args.id,
        tag: args.tag,
      },
    }).then(result => ({ ...result.dataValues }));
    return data;
  },
};

export default player;
