import * as React from 'react';
import './Loader.styles.scss';

const Loader: React.FC = () => {
  return (
    <div className='custom-loader'>
      <div className='custom-loader__dot'></div>
      <div className='custom-loader__dot'></div>
      <div className='custom-loader__dot'></div>
      <div className='custom-loader__dot'></div>
    </div>
  );
};

export default Loader;
