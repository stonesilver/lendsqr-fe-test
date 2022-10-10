import * as React from 'react';
import { ReactComponent as OrganizationIcon } from 'assets/svg/briefcase.svg';
import { ReactComponent as ChevronIcon } from 'assets/svg/chevron-down.svg';
import { useClickOutside } from 'Hooks/useClickOutside';
import './SwitchOrganisation.styles.scss';

const SwitchOrganisation: React.FC = () => {
  const { visible, setVisible, ref, ref1 } = useClickOutside();

  const toggleDropdown = () => {
    setVisible((prevS) => !prevS);
  };

  return (
    <div className='switch-organisation' ref={ref1}>
      <div className='switch-organisation-contents' onClick={toggleDropdown}>
        <OrganizationIcon />
        <p className='switch-organisation-contents-text'>Switch Organization</p>
        <ChevronIcon />
      </div>

      {/* dropdown */}
      {visible && (
        <div ref={ref} className='switch-organisation-drop-down'>
          {['LendSqr', 'FastPay', 'Borrow Me', 'Pay Later'].map((org) => (
            <p
              key={org}
              className='switch-organisation-drop-down-items'
              onClick={toggleDropdown}
            >
              {org}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default SwitchOrganisation;
