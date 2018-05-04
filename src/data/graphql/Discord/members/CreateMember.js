/* eslint-disable no-throw-literal */
import { DiscordGuild, DiscordUser, Member } from 'data/models';
// TODO complete this

// export const schema = [
//   `
//   # Member data for associating local Discord users to a Discord guild
//   input MembersInput {
//     # The ID of the guild to add members to
//     guildId: String!
//
//     # An array of each user ID to add to the guild
//     members: [String]!
//   }
// `,
// ];

export const mutations = [
  `
  # Creates associations between Discord users and a guild
  discordAddMembersToGuild(
    # The ID of the guild to add members to
    guildId: String!

    # An array of each user ID to add to the guild
    members: [String]!
  ): Members
`,
];

export const resolvers = {
  Mutation: {
    async discordAddMembersToGuild(parent, args) {
      const { guildId, members } = args.input;

      const lookupGuild = await DiscordGuild.findById(guildId);

      if (!lookupGuild) {
        throw 'Guild does not exist!  Create it first with "discordCreateGuild()"';
      }

      members.map(userId => {
        const lookupUser = DiscordUser.findById(userId);

        if (!lookupUser) {
          throw `User with ID "${userId}" not found.  Create this user first with "discordCreateUser()"!`;
        }

        const member = Member.create(
          {
            guildId,
            userId,
          },
          { include: [DiscordGuild, DiscordUser] },
        );

        return member;
      });
    },
  },
};

/**
 * type Member {
 *   guild: DiscordGuild
 *   members: [DiscordUser]
 * }
 *
 * input AddGuildMembersInput {
 *   guildId: String!
 *   members: [String]!
 * }
 *
 * 1) Find the guild first
 * 2) Map the array of members
 * 3) Find each user
 * 3a) Throw error if that user does not exist
 * 3b) Create a Member with that user and guild if found
 *
 * // Reference from before
 * await input.members.map(userId =>
 *   // const findUser
 *   Member.create(
 *     {
 *       userId,
 *       guildId: input.guildId,
 *     },
 *     {
 *       include: [DiscordGuild, DiscordUser],
 *     },
 *   ),
 * );

 *
 */
