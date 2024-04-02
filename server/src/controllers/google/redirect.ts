/* eslint-disable @typescript-eslint/ban-ts-comment */
import type { Request, Response } from 'express';
import { oAuth2Client } from '../../utils/oauthClient';
export const redirectGoogle = async (req: Request, res: Response) => {
  const { code } = req.query;
  console.log(req.query, 'line 4');
  const tokens = await oAuth2Client.getToken(code as string);
  // Now tokens contains an access_token and an optional refresh_token. Save them.
  // @ts-expect-error
  oAuth2Client.setCredentials(tokens);
  console.log(tokens);
  // @ts-expect-error
  const tokenInfo = await oAuth2Client.getTokenInfo(tokens.tokens.access_token);

  // take a look at the scopes originally provisioned for the access token
  console.log(tokenInfo);
  res.redirect('https://localhost:5173/google?google=success');
};
