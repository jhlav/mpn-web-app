// TODO complete this
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
