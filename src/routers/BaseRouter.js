import requireLogin from '../../config/requireLogin.json';

export default class BaseRouter {

  constructor() {
    this.whiteList = [];
    requireLogin.map((key) => {
      this.whiteList.push(`/api${key}`);
    });
  }

}
