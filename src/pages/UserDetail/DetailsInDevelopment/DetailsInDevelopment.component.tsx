import * as React from 'react';
import UserDetailContext from 'Context/UserDetailsContext';
import './DetailsInDevelopment.styles.scss';

const DetailsInDevelopment: React.FC = () => {
  const { activeTab } = React.useContext(UserDetailContext);

  return (
    <div className='details-in-development'>
      <img
        src='/img/developer.gif'
        alt='developer'
        className='details-in-development-gif'
      />
      <p className='details-in-development-text'>
        {activeTab} info is still in development. Please check back later
      </p>
    </div>
  );
};

export default DetailsInDevelopment;
