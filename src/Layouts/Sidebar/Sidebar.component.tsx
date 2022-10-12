import * as React from 'react';
import NavLink from './NavLink/NavLink.component';
import Icon from 'assets/svg/home.svg';
import SwitchOrganisation from './SwitchOrganisation/SwitchOrganisation.component';
import NavLinkCategory from './NavLinkCategory/NavLinkCategory.component';
import {
  customersNavLinks,
  businessesNavLinks,
  settingsNavLinks,
} from 'utils/data/sidebar.data';
import TableContext from 'Context/TableContext';
import './Sidebar.styles.scss';

const Sidebar: React.FC = () => {
  const { isMobile, showHamburger } = React.useContext(TableContext);
  return (
    <div
      className={`sidebar ${isMobile && showHamburger ? 'show-sidebar' : ''}`}
    >
      <div className='sidebar-contents'>
        <SwitchOrganisation />
        <NavLink svgSrc={Icon} text='Dashboard' />
        <NavLinkCategory heading='CUSTOMERS' options={customersNavLinks} />
        <NavLinkCategory heading='BUSINESSES' options={businessesNavLinks} />
        <NavLinkCategory heading='SETTINGS' options={settingsNavLinks} />
      </div>
    </div>
  );
};

export default Sidebar;
