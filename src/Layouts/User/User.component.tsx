import * as React from 'react';
import { useLocalStorage } from 'Hooks/useLocalStorage';
import { ReactComponent as CaretDownIcon } from 'assets/svg/caret-down.svg';
import { useClickOutside } from 'Hooks/useClickOutside';
import { useNavigate } from 'react-router-dom';
import './User.styles.scss';

const User = () => {
  const { visible, setVisible, ref, ref1 } = useClickOutside();

  const navigate = useNavigate();

  const toggleDropdown = () => {
    setVisible((prevS) => !prevS);
  };

  const { getLocalStorage, removeLocalStorage } = useLocalStorage('user');

  const handleLogout = () => {
    removeLocalStorage();
    navigate('auth/sign-in');
  };

  return (
    <div ref={ref1} className='user-dropdown'>
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

      {visible && (
        <div ref={ref} className='user-dropdown-dropdown'>
          <p className='user-dropdown-dropdown-email'>
            {getLocalStorage?.email}
          </p>
          <p
            className='user-dropdown-dropdown-profile user-dropdown-dropdown-item'
            onClick={toggleDropdown}
          >
            Profile
          </p>
          <p
            className='user-dropdown-dropdown-setting user-dropdown-dropdown-item'
            onClick={toggleDropdown}
          >
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
