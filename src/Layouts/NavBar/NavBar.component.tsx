import { ReactComponent as NotificationIcon } from 'assets/svg/notification.svg';
import AppSearch from 'Layouts/AppSearch/AppSearch.component';
import User from 'Layouts/User/User.component';
import './NavBar.styles.scss';

const NavBar = () => {
  return (
    <div className='navbar'>
      <div className='navbar-column-one'>
        <img
          src='/img/brand-logo.webp'
          alt='brand logo'
          className='navbar-column-one-brand-logo'
        />
        <AppSearch />
      </div>
      <div className='navbar-column-two'>
        <p className='navbar-column-two-docs'>Docs</p>
        <NotificationIcon className='navbar-column-two-nitification-icon' />
        <User />
      </div>
    </div>
  );
};

export default NavBar;
