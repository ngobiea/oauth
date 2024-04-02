import FacebookNav from '../components/FacebookNav';

import { Outlet } from 'react-router-dom';

const FacebookPage = () => {
  return (
    <div>
      <FacebookNav />
      <Outlet />
    </div>
  );
};

export default FacebookPage;
