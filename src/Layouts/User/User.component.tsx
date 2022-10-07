import * as React from 'react';
import { useLocalStorage } from 'Hooks/useLocalStorage';
import { ReactComponent as CaretDownIcon } from 'assets/svg/caret-down.svg';
import { useNavigate } from 'react-router-dom';
import './User.styles.scss';

const User = () => {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setOpen((prevS) => !prevS);

    setTimeout(() => {
      ref.current && ref.current.focus();
    }, 100);
  };

  const closeDropdown = () => {
    setOpen(false);
  };

  const { getLocalStorage, removeLocalStorage } = useLocalStorage('user');

  const handleLogout = () => {
    removeLocalStorage();
    navigate('auth/sign-in');
  };

  return (
    <div className='user-dropdown'>
      <div className='user-dropdown-container' onClick={toggleDropdown}>
        <img
          src='/img/user.webp'
          alt='user avatar'
          className='user-dropdown-container-avatar'
        />
        <p className='user-dropdown-container-username'>
          {getLocalStorage?.email.slice(0, getLocalStorage?.email.indexOf('@'))}
        </p>
        <CaretDownIcon className='user-dropdown-container-caret' />
      </div>

      {open && (
        <div
          ref={ref}
          tabIndex={1}
          onBlur={closeDropdown}
          className='user-dropdown-dropdown'
        >
          <p className='user-dropdown-dropdown-email'>
            {getLocalStorage?.email}
          </p>
          <p className='user-dropdown-dropdown-profile user-dropdown-dropdown-item'>
            Profile
          </p>
          <p className='user-dropdown-dropdown-setting user-dropdown-dropdown-item'>
            Settings
          </p>
          <p
            className='user-dropdown-dropdown-logout user-dropdown-dropdown-item'
            onClick={handleLogout}
          >
            Logout
          </p>
        </div>
      )}
    </div>
  );
};

export default User;
