import BaseHandler from './BaseHandler';
import { UserDao } from '../dao';

/**
 * UserHandler create by burning0xb
 */
export default class UserHandler extends BaseHandler {
    constructor() {
      super();
      this.userDao = new UserDao();
    }

    async getUserList(ctx) {
      const body = ctx.request.body;
      const user = await this.userDao.getUserList();
      return { code: '0000', user };
    }

}
