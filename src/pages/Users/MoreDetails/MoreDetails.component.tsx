import * as React from 'react';
import { ReactComponent as MoreIcon } from 'assets/svg/more.svg';
import { ReactComponent as EyeIcon } from 'assets/svg/eye.svg';
import { ReactComponent as UserBlacklistedIcon } from 'assets/svg/user-x.svg';
import { ReactComponent as UserActivateIcon } from 'assets/svg/user-ok.svg';
import { useNavigate } from 'react-router-dom';
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

const MoreDetails: React.FC = () => {
  const [open, setOpen] = React.useState<boolean>(false);
  const ref = React.useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const openDropdown = () => {
    setOpen(true);
    setTimeout(() => {
      ref.current && ref.current.focus();
    }, 100);
  };

  const closeDropdown = (link?: string) => {
    link ? navigate(link) : setOpen(false);
  };

  return (
    <div className='more-details'>
      <MoreIcon className='more-details-icon' onClick={openDropdown} />
      {open && (
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
