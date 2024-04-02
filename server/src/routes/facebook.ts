import { Router } from 'express';
import { postLogin } from '../controllers/facebook';
import { body } from 'express-validator';
// import authFacebook from '../middlewares/is-facebook-auth';
const facebookRouter = Router();

facebookRouter.post(
  '/api/facebook/login',
  [
    body('email').trim().isEmail().withMessage('Invalid email format.'),
    body('accessToken').trim().isString().withMessage('Invalid token format.'),
    body('first_name')
      .trim()
      .isString()
      .withMessage('Invalid first name format.'),
    body('last_name')
      .trim()
      .isString()
      .withMessage('Invalid last name format.'),
    body('picture')
      .optional()
      .trim()
      .isString()
      .withMessage('Invalid image format.'),
    body('id').trim().notEmpty().withMessage('Id is required.'),
  ],
  postLogin
);

// facebookRouter.post(
//   '/api/facebook/campaign',
//   [
//     body('campaignName')
//       .trim()
//       .isString()
//       .notEmpty()
//       .withMessage('Invalid campaign name format.'),
//     body('campaignObjectives')
//       .trim()
//       .isString()
//       .notEmpty()
//       .withMessage('Invalid objective format.'),
//     body('campaignStatus')
//       .trim()
//       .isString().notEmpty()
//       .withMessage('Invalid status format.'),
//   ],
//   authFacebook,
//   postCampaign
// );

export default facebookRouter;
