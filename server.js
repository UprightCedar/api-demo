import Koa from 'koa2';
import config from './config.json';
import router from './router';
import Logger from 'koa-logger';
import bodyParser from 'koa-bodyparser';
import { logger, logger_date } from './util/logger';
import BaseRouter from './src/routers/BaseRouter';
import convert from "koa-convert"
import cors from 'koa-cors';

logger.info('api server start');
logger.warn('do not kill this');

const app = new Koa();

app.use(bodyParser());
app.use(Logger());
app.use(convert(cors()));

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(config.port, () => {
  logger.info(`server is running port ${config.port}`);
});
