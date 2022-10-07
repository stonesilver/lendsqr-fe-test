import React from 'react';

interface Props {
  heading: string;
  options: Array<{ text: string; svgsrc: string }>;
}

const NavLinkCategory: React.FC<Props> = ({ heading, options }) => {
  return <div className='Nav-link-category'>

  </div>;
};

export default NavLinkCategory;
