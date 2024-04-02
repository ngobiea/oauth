// /* eslint-disable @typescript-eslint/ban-ts-comment */
// import type { Request, Response, NextFunction } from 'express';
// // import { statusCode } from '../../utils/statusCode';
// // import { validationResult } from 'express-validator';
// // import bizSdk from 'facebook-nodejs-business-sdk';
// // eslint-disable-next-line @typescript-eslint/no-var-requires
// const adsSdk = require('facebook-nodejs-business-sdk');
// const { FACEBOOK_ACCESS_TOKEN } = process.env as Record<string, string>;
// console.log(FACEBOOK_ACCESS_TOKEN);

// // const accountId = '7326248590800145';
// const FacebookAdsApi = adsSdk.FacebookAdsApi.init(FACEBOOK_ACCESS_TOKEN);
// console.log(FacebookAdsApi);

// export const postCampaign = async (
//   _req: Request,
//   _res: Response,
//   _next: NextFunction
// ) => {
//   //   try {
//   //     const errors = validationResult(req);
//   //     if (!errors.isEmpty()) {
//   //       return res
//   //         .status(statusCode.BAD_REQUEST)
//   //         .json({ errors: errors.array() });
//   //     }
//   //     // const accessToken = req.facebookToken;
//   //     const AdAccount = adsSdk.AdAccount;
//   //     const Campaign = adsSdk.Campaign;
//   //     // const accountId = req.FaceBookAccountId;
//   //     const account = new AdAccount('7326248590800145');
//   //     const { campaignName, objective, status } = req.body;
//   //     const campaign = await account.createCampaign([Campaign.Fields.name], {
//   //       [Campaign.Fields.name]: campaignName,
//   //       [Campaign.Fields.objective]: objective,
//   //       [Campaign.Fields.status]: status,
//   //     });
//   //     if (!campaign) {
//   //       throw new Error('Failed to create campaign.');
//   //     }
//   //     res.status(statusCode.CREATED).json(campaign);
//   //   } catch (error) {
//   //     console.log(error);
//   //     next(error);
//   //   }
// };
