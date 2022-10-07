import { Outlet } from 'react-router-dom';
import NavBar from 'Layouts/NavBar/NavBar.component';
import './AppLayout.styles.scss';
import Sidebar from 'Layouts/Sidebar/Sidebar.component';

const AppLayout = () => {
  return (
    <div className='app-layout'>
      <NavBar />
      <div className='app-layout-sidebar-content'>
        <Sidebar />
        <div className='app-layout-sidebar-content-contents'>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
