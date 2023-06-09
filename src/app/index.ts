import express, {Express} from 'express';
import cors from 'cors';

import {server} from './socket/socket';
import {registerRouter} from './register';

export const app = express();

app.use(express.json());
app.use(cors());

const initApp = async (app: Express) => {
  await registerRouter(app);
  app.listen(8000, () => {
    console.log('Server is running at http://localhost:8000');
  });
  server.listen(8001, () => {
    console.log('Server is running at http://localhost:8001');
  });
};

initApp(app);
