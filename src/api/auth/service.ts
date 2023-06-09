import {Request, Response, NextFunction} from 'express';

const users = [
  {username: 'hui', password: 'hui'},
  {username: 'hua', password: 'hua'},
];

export const postLogin = async (
  req: Request<{}, {}, {username: string; password: string}>,
  res: Response,
  next: NextFunction
) => {
  try {
    const {username, password} = req.body;
    const user = users.find(user => user.username === username);
    if (!user) {
      res.status(401).json({
        status: 'failed',
        message: 'user not found',
        data: 'Login failed',
      });
    } else {
      if (user.username !== password) {
        res.status(401).json({
          status: 'failed',
          message: 'password incorrect',
          data: 'Login failed',
        });
      } else {
        res.status(200).json({
          status: 'success',
          message: 'login success',
          data: user,
        });
      }
    }
  } catch (err) {
    next(err);
  }
};
