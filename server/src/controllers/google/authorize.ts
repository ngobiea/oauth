import type { Request, Response } from 'express';
import { authorizeGoogleClient } from '../../utils/oauthClient';
import { statusCode } from '../../utils/statusCode';
export const authorizeGoogle = async (_req: Request, res: Response) => {
  const url = await authorizeGoogleClient();
  res.status(statusCode.OK).json(url);
};
