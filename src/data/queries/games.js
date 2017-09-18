import { GraphQLList as List } from 'graphql';
import { resolver } from 'graphql-sequelize';

import Game from '../models/Game';
import GameType from '../types/GameType';

const games = {
  type: new List(GameType),
  resolve: resolver(Game),
};

export default games;
