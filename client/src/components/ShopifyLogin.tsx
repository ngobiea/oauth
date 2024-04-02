import { FaShopify } from 'react-icons/fa';
import { useShopifyLoginMutation } from '../store/apis/shopifyApi';
import { useEffect } from 'react';

const ShopifyLogin = () => {
  const [shopifyLogin, { isSuccess, data, isError, error }] =
    useShopifyLoginMutation();
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
        shopifyLogin({});
      }}
      className='w-full flex text-white justify-center  bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800'
    >
      <FaShopify className=' mr-2 self-center' />
      Login with Shopify
    </button>
  );
};

export default ShopifyLogin;
