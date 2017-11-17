import { StoreUser } from '../model';

export default class UserDao {
  constructor() {

  }

  async getUserList() {
    const user = await StoreUser.findAndCount({
      limit: 10,
      offset: 0
    });
    return user;
  }
}
