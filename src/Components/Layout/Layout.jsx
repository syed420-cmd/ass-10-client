import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from './Header/Header';

const Layout = () => {
  return (
    <div className='md:w-11/12 w-full mx-auto'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
