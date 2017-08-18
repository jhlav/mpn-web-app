/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import DataType from 'sequelize';
import Model from '../sequelize';

const DiscordUser = Model.define(
  'DiscordUser',
  {
    id: {
      type: DataType.STRING(31),
      primaryKey: true,
    },

    avatarURL: {
      type: DataType.TEXT,
    },

    nickname: {
      type: DataType.STRING(63),
    },

    tag: {
      type: DataType.STRING(127),
    },
  },
  {
    indexes: [{ fields: ['nickname', 'tag'] }],
  },
);

export default DiscordUser;
