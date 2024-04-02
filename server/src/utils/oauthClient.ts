import { OAuth2Client } from 'google-auth-library';

const {
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  GOOGLE_REDIRECT_URI,
  GOOGLE_CLIENT_SCOPE,
} = process.env as Record<string, string>;

const oAuth2Client = new OAuth2Client(
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  GOOGLE_REDIRECT_URI
);

const authorizeGoogleClient = async () => {
  // Generate the url that will be used for the consent dialog.
  return oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: [GOOGLE_CLIENT_SCOPE],
  });
};

export { authorizeGoogleClient, oAuth2Client };
