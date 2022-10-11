import * as React from 'react';
import { useLocation } from 'react-router-dom';
import './OtherPagesDemo.styles.scss';

const OtherPagesDemo: React.FC = () => {
  const { pathname } = useLocation();
  const pageTitle: string = pathname.slice(1).replaceAll('-', ' ');

  return (
    <div className='others-pages-demo'>
      <p className='others-pages-demo-header'>{pageTitle}</p>
      <img
        src='/img/developer.gif'
        alt='developer'
        className='others-pages-demo-developer'
      />
      <p className='others-pages-demo-text'>
        {pageTitle} page is still under development.
      </p>
    </div>
  );
};

export default OtherPagesDemo;
