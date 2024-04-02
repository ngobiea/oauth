import { FaPinterest } from 'react-icons/fa';
import { usePinterestLoginMutation } from '../store/apis/pinterestApi';
import { useEffect } from 'react';
const PinterestLogin = () => {
  const [pinterestLogin, { isSuccess, data, isError, error }] =
    usePinterestLoginMutation();
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
        pinterestLogin({});
      }}
      className='w-full flex text-white justify-center  bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800'
    >
      <FaPinterest className=' mr-2 self-center' />
      Login with Pinterest
    </button>
  );
};

export default PinterestLogin;
