import {Router} from 'express';
import {postLogin} from './service';

export const authRouter = Router();

authRouter
  .route('')
  .post(postLogin)
  .get((req, res) => {
    res.status(200).json('hello basic');
  });
authRouter.route('/:id').get((req, res) => {
  res.status(200).json(`hi ${req.params.id}`);
});
