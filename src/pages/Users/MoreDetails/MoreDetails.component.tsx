import * as React from 'react';
import { ReactComponent as MoreIcon } from 'assets/svg/more.svg';
import { ReactComponent as EyeIcon } from 'assets/svg/eye.svg';
import { ReactComponent as UserBlacklistedIcon } from 'assets/svg/user-x.svg';
import { ReactComponent as UserActivateIcon } from 'assets/svg/user-ok.svg';
import { useNavigate } from 'react-router-dom';
import { useClickOutside } from 'Hooks/useClickOutside';
import { useLocalStorage } from 'Hooks/useLocalStorage';
import './MoreDetails.styles.scss';

type listProps = { icon: JSX.Element; text: string; link: string }[];

const list: listProps = [
  {
    icon: <EyeIcon />,
    text: 'View details',
    link: '/user',
  },
  {
    icon: <UserBlacklistedIcon />,
    text: 'Blactlist User',
    link: '',
  },
  {
    icon: <UserActivateIcon />,
    text: 'Activate User',
    link: '',
  },
];

interface MoreDetailsProps {
  id: string;
}

const MoreDetails: React.FC<MoreDetailsProps> = ({ id }) => {
  const { visible, setVisible, ref, ref1 } = useClickOutside();
  const { setLocalStorage } = useLocalStorage('__userId');
  const navigate = useNavigate();

  const openDropdown = () => {
    setVisible(true);
  };

  const closeDropdown = (link?: string) => {
    if (link) {
      setLocalStorage(id);
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
              onClick={() => closeDropdown(link)}
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
