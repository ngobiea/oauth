import { Router } from 'express';
import { redirect, authorizePinterest } from '../controllers/pinterest';

const pinterestRouter = Router();

pinterestRouter.get('/authPinterest', authorizePinterest);

pinterestRouter.get('/auth/pinterest/callback', redirect);

export default pinterestRouter;

