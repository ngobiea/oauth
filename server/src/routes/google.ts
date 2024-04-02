import { Router } from 'express';

import { authorizeGoogle, redirectGoogle } from '../controllers/google';

const googleRouter = Router();

googleRouter.get('/authGoogle', authorizeGoogle);

googleRouter.get('/auth/google/callback', redirectGoogle);

export default googleRouter;
