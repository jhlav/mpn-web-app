import { GraphQLList as List } from 'graphql';
import { resolver } from 'graphql-sequelize';

import { DiscordUser } from '../models';
import DiscordUserType from '../types/DiscordUserType';

const players = {
  type: new List(DiscordUserType),
  resolve: resolver(DiscordUser),
  // async resolve() {
  //   const data = DiscordUser.findAll({
  //     order: [['updatedAt', 'DESC']],
  //   })
  //     .map(rows => ({ ...rows.dataValues }))
  //     .catch(error => ({ error }));
  //
  //   return data;
  // },
};

export default players;
