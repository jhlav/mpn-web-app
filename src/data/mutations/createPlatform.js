// import {
//   GraphQLInputObjectType as InputObjectType,
//   GraphQLNonNull as NonNull,
//   GraphQLString as StringType,
// } from 'graphql';
import uuid from 'uuid/v1';

import { Platform } from '../models';
import PlatformType from '../types/PlatformType';
import PlatformInputType from '../types/PlatformInputType';

const createPlatform = {
  type: PlatformType,
  args: {
    input: {
      type: PlatformInputType,
    },
  },
  async resolve(_, args) {
    const { name } = args;
    const id = await uuid();
    const data = await Platform.create({
      id,
      name,
    });

    return data;
  },
};

export default createPlatform;
