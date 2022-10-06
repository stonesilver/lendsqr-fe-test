import { useState } from 'react';
import { useLocalStorage } from 'Hooks/useLocalStorage';
import { ReactComponent as CaretDownIcon } from 'assets/svg/caret-down.svg';
import './User.styles.scss';

const User = () => {
  const [open, setOpen] = useState(false);

  const toggleDropdown = () => {
    setOpen((prevS) => !prevS);
  };
  const { getLocalStorage } = useLocalStorage('user');
  return (
    <div className='user-dropdown'>
      <img
        src='/img/user.webp'
        alt='user avatar'
        className='user-dropdown-avatar'
      />
      <p className='user-dropdown-username' onClick={toggleDropdown}>
        {getLocalStorage?.email.slice(0, getLocalStorage?.email.indexOf('@'))}
      </p>
      <CaretDownIcon className='user-dropdown-caret' />

      {open && <div className='user-dropdown-dropdown'></div>}
    </div>
  );
};

export default User;
