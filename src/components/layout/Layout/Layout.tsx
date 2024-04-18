import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className='c-layout'>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;
