import { UserHandler } from '../controller';

function userRouter(router, upload) {

  const userHandler = new UserHandler();

  router.get('/user/getUserList', async (ctx, next) => {
    const user = await userHandler.getUserList(ctx);
    ctx.body = user;
  })
}

export default userRouter;
