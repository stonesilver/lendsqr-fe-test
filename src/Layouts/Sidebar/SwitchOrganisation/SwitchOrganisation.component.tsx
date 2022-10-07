import { useState, useRef } from 'react';
import { ReactComponent as OrganizationIcon } from 'assets/svg/briefcase.svg';
import { ReactComponent as ChevronIcon } from 'assets/svg/chevron-down.svg';
import './SwitchOrganisation.styles.scss';

const SwitchOrganisation = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setOpen((prevS) => !prevS);

    setTimeout(() => {
      ref.current && ref.current.focus();
    }, 100);
  };

  return (
    <div className='switch-organisation'>
      <div className='switch-organisation-contents' onClick={toggleDropdown}>
        <OrganizationIcon />
        <p className='switch-organisation-contents-text'>Switch Organization</p>
        <ChevronIcon />
      </div>

      {/* dropdown */}
      {open && (
        <div
          tabIndex={1}
          ref={ref}
          onBlur={() => setOpen(false)}
          className='switch-organisation-drop-down'
        >
          {['FastPay', 'Borrow Me', 'Pay Later'].map((org) => (
            <p
              key={org}
              className='switch-organisation-drop-down-items'
              onClick={() => setOpen(false)}
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
