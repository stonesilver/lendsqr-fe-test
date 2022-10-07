import './Sidebar.styles.scss';
import SwitchOrganisation from './SwitchOrganisation/SwitchOrganisation.component';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebar-contents'>
        <SwitchOrganisation />
      </div>
    </div>
  );
};

export default Sidebar;
