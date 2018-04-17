import {
  GraphQLInputObjectType as InputObjectType,
  GraphQLNonNull as NonNull,
  GraphQLString as StringType,
} from 'graphql';
// import uuid from 'node-uuid';
// import validator from 'validator';

import { DiscordGuild } from '../models';
import DiscordGuildType from '../types/DiscordGuildType';
import formatErrors from '../formatErrors';
import sequelize from '../sequelize';
// import ValidationError from '../../core/ValidationError';

const createDiscordGuild = {
  type: DiscordGuildType,
  args: {
    input: {
      type: new NonNull(
        new InputObjectType({
          name: 'CreateDiscordGuildInput',
          fields: {
            id: {
              type: new NonNull(StringType),
              description: "The guild's unique (Snowflake) identifier.",
            },
            name: {
              type: new NonNull(StringType),
              description: 'The name of the guild.',
            },
            owner: {
              type: new NonNull(StringType),
              description: "The guild owner's (Snowflake) ID.",
            },
          },
        }),
      ),
    },
  },
  async resolve(_, args) {
    const { input } = args;
    let dataValues = {};

    try {
      const response = await sequelize.transaction(async () => {
        const guild = DiscordGuild.findOrCreate(
          {
            defaults: {
              id: input.id,
              name: input.name,
              owner: input.owner,
            },
            where: { id: input.id },
          },
          // { raw: true },
        ).spread(res => {
          dataValues = { ...res.dataValues };
        });
        return guild;
      });

      return {
        ok: true,
        guild: response,
        ...dataValues,
      };
    } catch (error) {
      return {
        ok: false,
        errors: formatErrors(error, { DiscordGuild }),
      };
    }
  },
};

export default createDiscordGuild;
