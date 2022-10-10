import * as React from 'react';
import './HeaderAndActionBtn.styles.scss';

const HeaderAndActionBtn: React.FC = () => {
  return (
    <div className='header-and-action-btn'>
      <h1 className='header-and-action-btn-header'>User Details</h1>
      <div className='header-and-action-btn-action-btns'>
        <button className='header-and-action-btn-action-btns-btn blacklist'>
          BLACKLIST USER
        </button>
        <button className='header-and-action-btn-action-btns-btn activate'>
          ACTIVATE USER
        </button>
      </div>
    </div>
  );
};

export default HeaderAndActionBtn;
