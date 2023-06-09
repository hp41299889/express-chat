import {Express} from 'express';

import {routers} from '../api';

export const registerRouter = async (app: Express): Promise<void> => {
  console.log('Api register');
  Object.entries(routers).forEach(([route, router]) => {
    router.stack.forEach(r => {
      r.route.stack.forEach((s: any) => {
        console.log(
          `endpoint：/${route}${r.route.path}，method：${s.method}，handler：${s.name}`
        );
      });
    });
    app.use(`/${route}`, router);
  });
};
