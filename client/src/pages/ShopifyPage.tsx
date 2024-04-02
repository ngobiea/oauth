import { Outlet } from 'react-router-dom';
import ShopifyNav from '../components/ShopifyNav';
const ShopifyPage = () => {
  return (
    <>
      <ShopifyNav />
      <div className='mt-20'>
        <Outlet />
      </div>
    </>
  );
};

export default ShopifyPage;
