import { merge } from 'lodash';

/** * Queries ** */
import {
  schema as GetAllGuilds,
  queries as GetAllGuildsQueries,
  resolvers as GetAllGuildsResolver,
} from './guilds/GetAllGuilds';
import {
  schema as GetAllUsers,
  queries as GetAllUsersQueries,
  resolvers as GetAllUsersResolver,
} from './users/GetAllUsers';

/** * Mutations ** */
import {
  schema as CreateGuildInput,
  mutation as CreateGuild,
  resolvers as CreateGuildResolver,
} from './guilds/CreateGuild';
import {
  schema as CreateUserInput,
  mutation as CreateUser,
  resolvers as CreateUserResolver,
} from './users/CreateUser';
import {
  schema as LinkMembersInput,
  mutation as LinkMembers,
  resolvers as LinkMembersResolver,
} from './members/LinkMembers';

export const schema = [
  ...GetAllGuilds,
  ...GetAllUsers,
  ...CreateGuildInput,
  ...CreateUserInput,
  ...LinkMembersInput,
];

export const queries = [...GetAllGuildsQueries, ...GetAllUsersQueries];

export const mutations = [...CreateGuild, ...CreateUser, ...LinkMembers];

export const resolvers = merge(
  GetAllGuildsResolver,
  GetAllUsersResolver,
  CreateGuildResolver,
  CreateUserResolver,
  LinkMembersResolver,
);
