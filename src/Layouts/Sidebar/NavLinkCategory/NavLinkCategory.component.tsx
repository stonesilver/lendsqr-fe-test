import React from 'react';
import NavLink from '../NavLink/NavLink.component';
import './NavLinkCategory.styles.scss';

interface ObjectProps {
  svgSrc: string;
  text: string;
}

interface Props {
  heading: string;
  options: ObjectProps[];
}

const NavLinkCategory: React.FC<Props> = ({ heading, options }) => {
  return (
    <div className='nav-link-category'>
      <p className='nav-link-category-heading'>{heading}</p>
      {options.map(({ svgSrc, text }) => (
        <NavLink key={text} svgSrc={svgSrc} text={text} />
      ))}
    </div>
  );
};

export default NavLinkCategory;
