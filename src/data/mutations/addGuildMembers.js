/* eslint-disable no-console */

import {
  GraphQLInputObjectType as InputObjectType,
  GraphQLList as List,
  GraphQLNonNull as NonNull,
  GraphQLString as StringType,
} from 'graphql';

import { DiscordGuild, DiscordUser, Member } from '../models';
import MemberType from '../types/MemberType';
import formatErrors from '../formatErrors';

const addGuildMembers = {
  type: new List(MemberType),
  args: {
    input: {
      type: new NonNull(
        new InputObjectType({
          name: 'addGuildMembersInput',
          fields: () => ({
            guildId: {
              type: new NonNull(StringType),
              description: "The guild's unique (Snowflake) identifier.",
            },
            members: {
              type: new List(StringType),
              description: 'A list of user IDs to add to the guild.',
            },
          }),
        }),
      ),
    },
  },
  async resolve(_, args) {
    const { input } = args;

    try {
      const response = [];
      const findGuild = DiscordGuild.findById(input.guildId);

      if (!findGuild) {
        return formatErrors(
          null,
          'The guild does not exist.  Create it first.',
        );
      }
      // Add the guild and all its users to the Member join table
      await input.members.map(userId =>
        // const findUser
        Member.create(
          {
            userId,
            guildId: input.guildId,
          },
          {
            include: [DiscordGuild, DiscordUser],
          },
        ).then(res => response.push(res.dataValues)),
      );

      console.log(response);

      return response;
    } catch (error) {
      return formatErrors(error, { DiscordUser, Member });
    }
  },
};

export default addGuildMembers;
