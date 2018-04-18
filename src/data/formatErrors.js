import _ from 'lodash';
import sequelize from './sequelize';

export default e => {
  if (e instanceof sequelize.ValidationError) {
    //  _.pick({a: 1, b: 2}, 'a') => {a: 1}
    return e.errors.map(x => _.pick(x, ['path', 'message']));
  }
  return [{ path: 'name', message: 'Something went wrong.' }];
};
