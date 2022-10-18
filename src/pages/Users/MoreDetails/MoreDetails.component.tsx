import * as React from 'react';
import { ReactComponent as MoreIcon } from 'assets/svg/more.svg';
import { ReactComponent as EyeIcon } from 'assets/svg/eye.svg';
import { ReactComponent as UserBlacklistedIcon } from 'assets/svg/user-x.svg';
import { ReactComponent as UserActivateIcon } from 'assets/svg/user-ok.svg';
import { useNavigate } from 'react-router-dom';
import { useClickOutside } from 'Hooks/useClickOutside';
import { useLocalStorage } from 'Hooks/useLocalStorage';
import { UserObjectType } from 'Context/context.types';
import './MoreDetails.styles.scss';

type listProps = { icon: JSX.Element; text: string; link?: string }[];

const list: listProps = [
  {
    icon: <EyeIcon />,
    text: 'View details',
    link: '/users',
  },
  {
    icon: <UserBlacklistedIcon />,
    text: 'Blactlist User',
  },
  {
    icon: <UserActivateIcon />,
    text: 'Activate User',
  },
];

const MoreDetails: React.FC<{ user: UserObjectType }> = ({ user }) => {
  const { visible, setVisible, ref, ref1 } = useClickOutside();
  const { setLocalStorage } = useLocalStorage('__userData');
  const navigate = useNavigate();

  const openDropdown = () => {
    setVisible(true);
  };

  const closeDropdown = (link?: string) => {
    if (link) {
      setLocalStorage(user);
      navigate(link);
    } else {
      setVisible(false);
    }
  };

  return (
    <div className='more-details'>
      <div ref={ref1}>
        <MoreIcon className='more-details-icon' onClick={openDropdown} />
      </div>
      {visible && (
        <div
          ref={ref}
          tabIndex={-1}
          className='more-details-dropdown'
          onBlur={() => closeDropdown}
        >
          {list.map(({ icon, text, link }) => (
            <div
              key={text}
              className='more-details-dropdown-list'
              onClick={() => closeDropdown(link && `${link}/${user.id}`)}
            >
              {icon}
              <p className='more-details-dropdown-list-text'>{text}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MoreDetails;
