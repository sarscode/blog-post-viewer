import { Navbar } from 'components';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="px-4">
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
