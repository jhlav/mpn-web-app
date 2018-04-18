/* eslint-disable no-console */

import {
  GraphQLInputObjectType as InputObjectType,
  GraphQLNonNull as NonNull,
  GraphQLString as StringType,
} from 'graphql';

import { DiscordGuild, DiscordUser } from '../models';
import DiscordGuildType from '../types/DiscordGuildType';
import formatErrors from '../formatErrors';

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
    // let dataValues = {};

    try {
      // Check if it exists first to prevent errors
      const findGuild = DiscordGuild.findById(input.id);

      // The guild was found
      if (findGuild) {
        // Update the name if it changed
        if (findGuild.get('name') !== input.name) {
          DiscordGuild.set('name', input.name);
        }
        // This guild already existed and is updated; exit
        return {
          ...input,
        };
      }
      console.log('This should not have run but did');

      const findOwner = DiscordUser.findById(input.owner);

      if (!findOwner) {
        console.log('The guild owner was not found.  Submit that user first.');
        // TODO Implement proper error handling
        return {};
      }

      // This guild did not exist, create it
      const guild = DiscordGuild.create(
        {
          id: input.id,
          name: input.name,
          owner: input.owner,
        },
        {
          include: [DiscordUser],
        },
      ).then(res => ({
        ...res.dataValues,
      }));

      return guild;
    } catch (error) {
      return formatErrors(error, { DiscordGuild });
    }
  },
};

export default createDiscordGuild;
