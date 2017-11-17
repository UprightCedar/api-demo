import koaRouter from 'koa-router';
import multer from 'koa-multer';
import { logger } from '../util/logger';
import { Common } from '../util/common';
import * as routers from '../src/routers';

const util = new Common();

let path = '';
if (process.env.NODE_ENV === 'development') {
  // 自己修改dev路径
  path = '/Users/burning/uploads/api-rest';
} else {
  // 服务器路径
  path = '/root/uploads/api-rest';
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path);
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
})

const upload = multer({ storage });

const router = koaRouter({
  prefix: '/api'
});

router.get('/', (ctx, next) => {
  ctx.body = "this is the home page, we only support api";
})

for (let _router in routers) {
  if (_router !== '') {
    routers[_router](router, upload);
    console.log(`${_router} 加载成功 👌`);
  }
}

export default router;
