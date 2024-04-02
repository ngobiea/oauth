import { FaFacebook } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const FacebookNav = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('shopifyToken');
    navigate('/');
  };
  return (
    <nav className='bg-white border-gray-200 dark:bg-gray-900 fixed inset-0 h-20'>
      <div className='flex justify-between items-center h-20'>
        <Link
          to={'/facebook'}
          className='flex self-center w-1/12 ml-5 space-x-2'
        >
          <FaFacebook className='text-2xl text-blue-700 dark:text-blue-500 self-center' />
          <span className='text-xl font-bold text-gray-900 dark:text-white self-center'>
            Facebook
          </span>
        </Link>
        <div className='flex self-center w-5/12 space-x-5'>
          <Link
            to={'/facebook/form'}
            className='bg-blue-700  w-auto text-white px-3 py-1.5 rounded-lg'
          >
            Create Ads
          </Link>
          <button
            onClick={handleLogout}
            className='bg-red-700 w-auto text-white px-3 py-1.5 rounded-lg'
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default FacebookNav;
