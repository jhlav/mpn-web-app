import sequelize from '../sequelize';
import DiscordGuild from './DiscordGuild';
import DiscordUser from './DiscordUser';
import Game from './Game';
import Member from './Member';
import Platform from './Platform';
import Record from './Record';
import User from './User';
import UserLogin from './UserLogin';
import UserClaim from './UserClaim';
import UserProfile from './UserProfile';

Game.Platforms = Game.belongsToMany(Platform, {
  through: 'GamePlatform', // join table 'GamePlatform'
  foreignKey: {
    name: 'gameId', // foreign key of Game
    field: 'game_id', // primary key of Platform
  },
});

Platform.Games = Platform.belongsToMany(Game, {
  through: 'GamePlatform', // join table
  foreignKey: {
    name: 'platformId', // foreign key
    field: 'platform_id', // primary key
  },
});

// Record will have a column 'game' which relates to a Game
Record.Game = Record.belongsTo(Game, {
  foreignKey: 'game',
});

Record.hasMany(DiscordUser, {
  foreignKey: 'recordId',
  as: 'players',
  onUpdate: 'cascade',
  onDelete: 'cascade',
});

DiscordGuild.Users = DiscordGuild.belongsToMany(DiscordUser, {
  through: Member, // join table
  foreignKey: {
    name: 'guildId', // foreign key
    field: 'guild_id', // primary key
  },
});
// DiscordGuild will have a column 'owner' which relates to a DiscordUser
DiscordGuild.Owner = DiscordGuild.belongsTo(DiscordUser, {
  foreignKey: {
    name: 'ownerId',
    field: 'owner_id',
  },
});

DiscordUser.Guilds = DiscordUser.belongsToMany(DiscordGuild, {
  through: Member, // join table
  foreignKey: {
    name: 'userId', // foreign key
    field: 'user_id', // primary key
  },
});

User.hasMany(UserLogin, {
  foreignKey: 'userId',
  as: 'logins',
  onUpdate: 'cascade',
  onDelete: 'cascade',
});

User.hasMany(UserClaim, {
  foreignKey: 'userId',
  as: 'claims',
  onUpdate: 'cascade',
  onDelete: 'cascade',
});

User.hasOne(UserProfile, {
  foreignKey: 'userId',
  as: 'profile',
  onUpdate: 'cascade',
  onDelete: 'cascade',
});

function sync(...args) {
  return sequelize.sync(...args);
}

export default { sync };
export {
  DiscordGuild,
  DiscordUser,
  Game,
  Member,
  Platform,
  Record,
  User,
  UserLogin,
  UserClaim,
  UserProfile,
};
