import { FaShopify } from 'react-icons/fa';
import { NavLink, useNavigate } from 'react-router-dom';

const ShopifyNav = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('shopifyToken');
    navigate('/');
  };
  return (
    <nav className='bg-white border-gray-200 dark:bg-gray-900 fixed inset-0 h-20'>
      <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
        <span className='flex items-center space-x-3 rtl:space-x-reverse'>
          <FaShopify className='text-2xl text-blue-700 dark:text-blue-500' />
          <span className='text-xl font-bold text-gray-900 dark:text-white'>
            Shopify
          </span>
        </span>
        <div className='flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse'>
          <button
            onClick={handleLogout}
            className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
          >
            Logout
          </button>
          <button
            data-collapse-toggle='navbar-cta'
            type='button'
            className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
            aria-controls='navbar-cta'
            aria-expanded='false'
          >
            <span className='sr-only'>Open main menu</span>
            <svg
              className='w-5 h-5'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 17 14'
            >
              <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M1 1h15M1 7h15M1 13h15'
              />
            </svg>
          </button>
        </div>
        <div
          className='items-center justify-between hidden w-full md:flex md:w-auto md:order-1'
          id='navbar-cta'
        >
          <ul className='flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
            <li>
              <NavLink
                to={''}
                className='block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:dark:text-blue-500'
                aria-current='page'
              >
                Products
              </NavLink>
            </li>
            <li>
              <NavLink
                to={'orders'}
                className='block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
              >
                Orders
              </NavLink>
            </li>
            <li>
              <NavLink
                to={'/shopify'}
                className='block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
              >
                Analytics
              </NavLink>
            </li>
            <li>
              <NavLink
                to={'/shopify'}
                className='block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
              >
                Inventory
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default ShopifyNav;