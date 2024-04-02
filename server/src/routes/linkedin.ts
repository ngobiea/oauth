import { Router } from 'express';
import passport from '../utils/passport';
import { authorizeLinkedIn, redirect } from '../controllers/linkedIn';
const linkedInRouter = Router();

linkedInRouter.get(
  '/authLinkedIn',
  passport.authenticate('linkedin', { state: 'SOME STATE' }),
  authorizeLinkedIn
);

linkedInRouter.get(
  '/auth/linkedin/callback',
  passport.authenticate('linkedin', { failureRedirect: '/login' }),
  redirect
);

export default linkedInRouter;
