import * as React from 'react';
import { Link } from 'react-router-dom';
import TableContext from 'Context/TableContext';
import './NavLink.styles.scss';

interface Props {
  svgSrc: string;
  text: string;
}

const NavLink: React.FC<Props> = ({ svgSrc, text }) => {
  const { toggleHamburger } = React.useContext(TableContext);

  return (
    <Link
      to={text.toLocaleLowerCase().replaceAll(' ', '-')}
      className='side-nav-link'
      onClick={toggleHamburger}
    >
      <img src={svgSrc} alt={text} className='side-nav-link-icon' />
      <p className='side-nav-link-text'>{text}</p>
    </Link>
  );
};

export default NavLink;
