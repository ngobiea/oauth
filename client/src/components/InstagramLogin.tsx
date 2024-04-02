// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { LoginSocialInstagram ,type IResolveParams } from 'reactjs-social-login';
import { InstagramLoginButton } from 'react-social-login-buttons';

const REDIRECT_URI = import.meta.env.VITE_INSTAGRAM_REDIRECT_URI;
const CLIENT_ID = import.meta.env.VITE_INSTAGRAM_APP_ID;
// const CLIENT_SECRET = import.meta.env.VITE_INSTAGRAM_APP_SECRET;


const InstagramLogin = () => { 
    return (
      <LoginSocialInstagram
        client_id={CLIENT_ID || ''}
        // client_secret={CLIENT_SECRET || ''}
        redirect_uri={REDIRECT_URI}
        onResolve={({ provider, data }: IResolveParams) => {
          console.log(data);
          console.log(provider);
        }}
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        onReject={(err) => {
          console.log(err);
        }}
      >
        <InstagramLoginButton />
      </LoginSocialInstagram>
    );
};

export default InstagramLogin;