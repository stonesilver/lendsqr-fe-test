import NavBar from 'Layouts/NavBar/NavBar.component';
import './AppLayout.styles.scss';
import Sidebar from 'Layouts/Sidebar/Sidebar.component';
import { Outlet, Navigate } from 'react-router-dom';
import { useLocalStorage } from 'Hooks/useLocalStorage';

const AppLayout = () => {
  const { getLocalStorage } = useLocalStorage('user');

  return getLocalStorage ? (
    <div className='app-layout'>
      <NavBar />
      <div className='app-layout-sidebar-content'>
        <Sidebar />
        <div className='app-layout-sidebar-content-contents'>
          <Outlet />
        </div>
      </div>
    </div>
  ) : (
    <Navigate to='auth/sign-in' replace />
  );
};

export default AppLayout;
