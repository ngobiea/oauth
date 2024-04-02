import { useFacebookLoginMutation } from '../store/apis/facebookApi';
import { useCallback, useEffect } from 'react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { LoginSocialFacebook, type IResolveParams } from 'reactjs-social-login';
import { FacebookLoginButton } from 'react-social-login-buttons';
const REDIRECT_URI = import.meta.env.VITE_FACEBOOK_REDIRECT_URI;
const facebookAppId = import.meta.env.VITE_FACEBOOK_APP_ID;
import { useNavigate } from 'react-router-dom';
import { setProfile } from '../store/slice/facebook';
import { useAppDispatch } from '../store/hooks';
const FacebookLogin = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const onLogoutSuccess = useCallback(() => {
    alert('logout success');
  }, []);

  const [facebookLogin, { isSuccess, data, isError, error }] =
    useFacebookLoginMutation();
  useEffect(() => {
    if (isSuccess) {
      console.log(data);
      const { token, user } = data;
      localStorage.setItem('facebookToken', token);
      dispatch(setProfile(user));

      navigate('/facebook');
    }
    if (isError) {
      console.log(error);
    }
  }, [isSuccess, data, isError, error, navigate, dispatch]);

  return (
    <LoginSocialFacebook
      appId={facebookAppId || ''}
      fieldsProfile={
        'id,first_name,last_name,middle_name,name,name_format,picture,short_name,email,gender'
      }
      //   onLoginStart={onLoginStart}
      onLogoutSuccess={onLogoutSuccess}
      redirect_uri={REDIRECT_URI}
      onResolve={(result: IResolveParams) => {
        console.log(result.data);
        const { email, first_name, last_name, picture, accessToken,id } =
          result.data;
        const body: FacebookForm = {
          email,
          first_name,
          last_name,
          picture: picture ? JSON.stringify(picture) : '',
          accessToken,
          id
        };
        facebookLogin({ body });
      }}
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      onReject={(err) => {
        console.log(err);
      }}
    >
      <FacebookLoginButton />
    </LoginSocialFacebook>
  );
};

export default FacebookLogin;
