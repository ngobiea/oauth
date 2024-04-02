/* eslint-disable @typescript-eslint/no-var-requires */
import passport from 'passport';
const LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;
const PinterestStrategy = require('passport-pinterest').Strategy;
const {
  LINKEDIN_CLIENT_ID,
  LINKEDIN_CLIENT_SECRET,
  LINKEDIN_REDIRECT_URI,
  PINTEREST_CLIENT_ID,
  PINTEREST_CLIENT_SECRET,
  PINTEREST_REDIRECT_URI,
} = process.env as Record<string, string>;

passport.serializeUser((user, cb) => {
  cb(null, user);
});
passport.deserializeUser((obj, cb) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  cb(null, obj);
});
passport.use(
  new LinkedInStrategy(
    {
      clientID: LINKEDIN_CLIENT_ID,
      clientSecret: LINKEDIN_CLIENT_SECRET,
      callbackURL: LINKEDIN_REDIRECT_URI,
      scope: ['r_emailaddress', 'r_liteprofile'],
    },
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    function (token, tokenSecret, profile, done) {
      console.log(profile);
      console.log(token);
      console.log(tokenSecret);
      return done(null, profile);
    }
  )
);
passport.use(
  new PinterestStrategy(
    {
      clientID:PINTEREST_CLIENT_ID,
      clientSecret: PINTEREST_CLIENT_SECRET,
      scope: ['ads:read', 'boards:read'],
      callbackURL: PINTEREST_REDIRECT_URI,
      state: true,
    },
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    function (accessToken, refreshToken, profile, done) {
      console.log(profile);
      console.log(accessToken);
      console.log(refreshToken);

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      return done(err, profile);
    }
  )
);

export default passport;
