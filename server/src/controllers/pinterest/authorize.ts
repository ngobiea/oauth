import type { Request, Response } from 'express';
import { statusCode } from '../../utils/statusCode';

export const authorizePinterest = (_req: Request, res: Response) => {
  const authURL =
    'https://www.pinterest.com/oauth/?client_id=1497300&redirect_uri=http%3A%2F%2Flocalhost%3A8081%2Fauth%2Fpinterest%2Fcallback&response_type=code&scope=boards:read,pins:read&state=1';
  res.status(statusCode.OK).json(authURL);
};
