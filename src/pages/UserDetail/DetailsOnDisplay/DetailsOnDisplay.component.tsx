import * as React from 'react';
import GeneralDetails from '../GeneralDetails/GeneralDetails.component';
import UserDetailContext from 'Context/UserDetailsContext';
import DetailsInDevelopment from '../DetailsInDevelopment/DetailsInDevelopment.component';
import './DetailsOnDisplay.styles.scss';

const DetailsOnDisplay: React.FC = () => {
  const { activeTab } = React.useContext(UserDetailContext);
  return (
    <div className='details-on-display'>
      {activeTab === 'General Details' ? (
        <GeneralDetails />
      ) : (
        <DetailsInDevelopment />
      )}
    </div>
  );
};

export default DetailsOnDisplay;
