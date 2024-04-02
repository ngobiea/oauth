import { useGoogleLoginMutation } from '../store/apis/googleApi';
import { useEffect } from 'react';
import { FcGoogle } from 'react-icons/fc';
const GoogleLogin = () => {
  const [googleLogin, { isSuccess, data, isError, error }] =
    useGoogleLoginMutation();
  useEffect(() => {
    if (isSuccess) {
      console.log(data);
      window.location.href = data as string;
    }
    if (isError) {
      console.log(error);
    }
  }, [isSuccess, data, isError, error]);
  return (
    <button
      onClick={() => {
        googleLogin({});
      }}
      className='w-full flex text-black justify-center  bg-gray-300 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center'
    >
      <FcGoogle className=' mr-2 self-center' />
      Login with Google
    </button>
  );
};

export default GoogleLogin;
