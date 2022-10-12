import { ReactComponent as NotificationIcon } from 'assets/svg/notification.svg';
import { Link } from 'react-router-dom';
import AppSearch from 'Layouts/AppSearch/AppSearch.component';
import User from 'Layouts/User/User.component';
import './NavBar.styles.scss';
import MobileHamburger from './MobileHamburger/MobileHamburger.component';

const NavBar = () => {
  return (
    <div className='navbar'>
      <div className='navbar-column-one'>
        <MobileHamburger />
        <Link to='/users'>
          <img
            src='/img/brand-logo.webp'
            alt='brand logo'
            className='navbar-column-one-brand-logo'
          />
        </Link>
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
