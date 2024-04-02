/* eslint-disable @typescript-eslint/ban-ts-comment */
import type { Request, Response, NextFunction } from 'express';
import { statusCode } from '../../utils/statusCode';
import adsSdk from 'facebook-nodejs-business-sdk';
const AdAccount = adsSdk.AdAccount;
const Campaign = adsSdk.Campaign;

export const getCampaign = async(
    req: Request,
    res: Response,
    next: NextFunction
    ) => {
    try {
        // @ts-expect-error
        const accessToken = req.facebookToken;
        adsSdk.FacebookAdsApi.init(accessToken);
        // @ts-expect-error
        const accountId = req.FaceBookAccountId;
        const account = new AdAccount(accountId);
        const { campaignName,  } = req.body;
        const campaign = await account.getCampaigns([Campaign.Fields.name], {
            [Campaign.Fields.name]: campaignName,
            [Campaign.Fields.objective]: Campaign.Status.active,
            [Campaign.Fields.status]: Campaign.Objective.page_likes,
        });
        
        res.status(statusCode.CREATED).json(campaign);
    } catch (error) {
        console.log(error, 'line')
        next(error);
    }
    }