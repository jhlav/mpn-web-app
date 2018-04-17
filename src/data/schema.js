/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import {
  GraphQLSchema as Schema,
  GraphQLObjectType as ObjectType,
} from 'graphql';

import addGuildMembers from './mutations/addGuildMembers';
import createDiscordGuild from './mutations/createDiscordGuild';
import createDiscordUser from './mutations/createDiscordUser';
import createGame from './mutations/createGame';
import createPlatform from './mutations/createPlatform';

import games from './queries/games';
import guild from './queries/guild';
import me from './queries/me';
import news from './queries/news';
import player from './queries/player';
import players from './queries/players';
import user from './queries/user';

const schema = new Schema({
  query: new ObjectType({
    name: 'Query',
    fields: {
      games,
      guild,
      me,
      news,
      player,
      players,
      user,
    },
  }),
  mutation: new ObjectType({
    name: 'Mutation',
    fields: {
      addGuildMembers,
      createDiscordGuild,
      createDiscordUser,
      createGame,
      createPlatform,
    },
  }),
});

export default schema;
