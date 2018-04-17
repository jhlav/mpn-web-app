import {
  GraphQLInputObjectType as InputObjectType,
  GraphQLList as List,
  GraphQLNonNull as NonNull,
  GraphQLString as StringType,
} from 'graphql';
// import uuid from 'node-uuid';
// import validator from 'validator';

import { DiscordUser, Member } from '../models';
import MemberType from '../types/MemberType';
import formatErrors from '../formatErrors';
// import ValidationError from '../../core/ValidationError';

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
    let dataValues = {};

    try {
      const usersToAddPromise = input.members.map(memberId =>
        DiscordUser.findOne({ where: { id: memberId } }).then(res => {
          dataValues = { ...dataValues, ...res.dataValues };
        }),
      );

      const [usersToAdd] = await Promise.all([usersToAddPromise]);

      // Handle promise error
      if (!usersToAdd) {
        return {
          ok: false,
          errors: [
            {
              path: 'id',
              message: 'Some IDs could not be found when adding users.',
            },
          ],
        };
      }
      // Add the guild and all its users to the Member join table
      await input.members.map(memberId =>
        Member.create({
          userId: memberId,
          guildId: input.guildId,
        }).then(res => {
          dataValues = { ...dataValues, ...res.dataValues };
        }),
      );

      return {
        ok: true,
        ...dataValues,
      };
    } catch (error) {
      return {
        ok: false,
        errors: formatErrors(error, { DiscordUser, Member }),
      };
    }
  },
};

export default addGuildMembers;
