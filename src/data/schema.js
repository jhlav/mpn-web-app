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

import createDiscordUser from './mutations/createDiscordUser';
import createGame from './mutations/createGame';

import games from './queries/games';
import me from './queries/me';
import news from './queries/news';
import player from './queries/player';
import players from './queries/players';

const schema = new Schema({
  query: new ObjectType({
    name: 'Query',
    fields: {
      games,
      me,
      news,
      player,
      players,
    },
  }),
  mutation: new ObjectType({
    name: 'Mutation',
    fields: {
      createDiscordUser,
      createGame,
    },
  }),
});

export default schema;
