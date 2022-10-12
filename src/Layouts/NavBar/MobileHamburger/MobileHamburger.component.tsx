import * as React from 'react';
import TableContext from 'Context/TableContext';
import './MobileHamburger.styles.scss';

const MobileHamburger: React.FC = () => {
  const { showHamburger, toggleHamburger } = React.useContext(TableContext);

  return (
    <label htmlFor='check' className='bar' onClick={toggleHamburger}>
      <span className={`top ${showHamburger ? 'transform' : ''}`}></span>
      <span className={`middle ${showHamburger ? 'transform' : ''}`}></span>
      <span className={`bottom ${showHamburger ? 'transform' : ''}`}></span>
    </label>
  );
};

export default MobileHamburger;
