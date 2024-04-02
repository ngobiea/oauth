import { FaLinkedin } from 'react-icons/fa';

const LinkedInLogin = () => {
  return (
    <button
      onClick={() => {
        window.location.href = 'http://localhost:8081/authLinkedIn';
      }}
      className='w-full flex text-white justify-center  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
    >
      <FaLinkedin className=' mr-2 self-center' />
      Login with LinkedIn
    </button>
  );
};

export default LinkedInLogin;
