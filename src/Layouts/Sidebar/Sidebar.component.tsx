import NavLink from './NavLink/NavLink.component';
import './Sidebar.styles.scss';
import Icon from 'assets/svg/home.svg';
import SwitchOrganisation from './SwitchOrganisation/SwitchOrganisation.component';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebar-contents'>
        <SwitchOrganisation />
        <NavLink svgSrc={Icon} text='Dashboard' />
      </div>
    </div>
  );
};

export default Sidebar;
