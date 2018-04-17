import {
  GraphQLInputObjectType as InputObjectType,
  GraphQLNonNull as NonNull,
  GraphQLString as StringType,
} from 'graphql';
// import uuid from 'node-uuid';
// import validator from 'validator';

import { DiscordUser } from '../models';
import DiscordUserType from '../types/DiscordUserType';
import formatErrors from '../formatErrors';
// import ValidationError from '../../core/ValidationError';

const createDiscordUser = {
  type: DiscordUserType,
  args: {
    input: {
      type: new NonNull(
        new InputObjectType({
          name: 'CreateDiscordUserInput',
          fields: {
            id: {
              type: new NonNull(StringType),
              description: "The user's unique (Snowflake) identifier.",
            },
            avatar: {
              type: StringType,
              description:
                "The unique snowflake identifier for the user's avatar image.",
            },
            tag: {
              type: new NonNull(StringType),
              description: "The username followed by '#' and discriminator.",
            },
          },
        }),
      ),
    },
  },
  async resolve(_, args) {
    const { input } = args;
    // const errors = [];
    //
    // if (validator.isEmpty(input.data)) {
    //   errors.push({
    //     key: 'data',
    //     message: 'The data (serialized JSON) field must not be empty.',
    //   });
    // }
    //
    // if (validator.isEmpty(input.imageURI)) {
    //   errors.push({
    //     key: 'imageURI',
    //     message: 'The imageURI field must not be empty.',
    //   });
    // }
    //
    // if (errors.length) throw new ValidationError(errors);

    try {
      const user = await DiscordUser.findOrCreate({
        defaults: {
          id: input.id,
          avatar: input.avatar,
          tag: input.tag,
        },
        where: { id: input.id },
      }).spread(res => ({ ...res.dataValues }));

      return {
        ok: true,
        user,
      };
    } catch (error) {
      return {
        ok: false,
        errors: formatErrors(error, { DiscordUser }),
      };
    }

    // const findOrCreateUser = await DiscordUser.findOrCreate({
    //   defaults: {
    //     id: input.id,
    //     avatar: input.avatar,
    //     tag: input.tag,
    //   },
    //   where: { id: input.id },
    // })
    //   .then(user => {
    //     console.log('[findOrCreateUser]');
    //     console.info(user);
    //     if (input.guildId !== null) {
    //       const findOrCreateGuild = DiscordGuild.findOrCreate({
    //         defaults: {
    //           id: input.guild.id,
    //           name: input.guild.name,
    //         },
    //         where: { id: input.guildId },
    //       });
    //       findOrCreateGuild
    //         .then(guild => {
    //           console.log('[findOrCreateGuild]');
    //           console.info(guild);
    //           guild.addMember(user);
    //           // user.addMember(user);
    //         })
    //         .catch(error => console.warn(error));
    //     }
    //     return user;
    //   })
    //   .then(res => {
    //     console.log('[spread response values]');
    //     console.info({ ...res.dataValues });
    //     return { ...res.dataValues };
    //   })
    //   .catch(error => {
    //     console.warn(error);
    //     return error;
    //   });
    //
    // return findOrCreateUser;

    // The fastest way to find a user, by unique ID (primary key)
    // const findUser = await DiscordUser.findById(input.id);
    //
    // if (findUser) {
    //   const { id, ...data } = input;
    //   const updateUser = await DiscordUser.update(
    //     { ...data },
    //     { where: { id } },
    //   )
    //     .then(res => ({ ...res.dataValues })) // Return the data inserted into DB
    //     .catch(error => console.warn(error)); // Log errors if there are any
    //
    //   return updateUser;
    // }
    // const createUser = await DiscordUser.create({
    //   id: input.id,
    //   avatar: input.avatar,
    //   tag: input.tag,
    // })
    //   .then(user => {
    //     const { guildId } = input;
    //     console.info('[createUser] guildId:  ', guildId);
    //     if (guildId !== null) {
    //       const findGuild = DiscordGuild.findById(guildId, {
    //         attributes: ['id'],
    //       });
    //       // The guild exists already, else create
    //       if (findGuild) {
    //         findGuild.addUser(user);
    //       } else {
    //         const createGuild = DiscordGuild.create({
    //           id: guildId,
    //         });
    //
    //         return createGuild.then(guild => {
    //           guild.addUser(user);
    //           user.addGuild(guild);
    //         });
    //       }
    //     }
    //     return user;
    //   })
    //   .then(res => ({ ...res.dataValues }))
    //   .catch(error => console.warn(error));
    //
    // return createUser;
  },
};

export default createDiscordUser;
