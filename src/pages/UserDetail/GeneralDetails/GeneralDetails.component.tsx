import * as React from 'react';
import DetailsCategory from '../DetailsOnDisplay/DetailsCategory/DetailsCategory.component';
import UserInfoCard from '../DetailsOnDisplay/UserInfoCard/UserInfoCard.component';
import {
  personalInfo,
  educationAndEmployment,
  socials,
  guarantor,
} from 'utils/data/userInfoData';
import UserDetailContext from 'Context/UserDetailsContext';
import './GeneralDetails.styles.scss';
import Loader from 'components/Loader/Loader.component';

const GeneralDetails: React.FC = () => {
  const { userDetails, isLoading } = React.useContext(UserDetailContext);

  return isLoading ? (
    <div className='general-details-loader'>
      <Loader />
    </div>
  ) : (
    <div className='general-details'>
      <DetailsCategory title='Personal Information'>
        <div className='general-details-personal-info'>
          {personalInfo({
            ...userDetails.profile,
            email: userDetails.email,
            username: userDetails.userName,
          }).map(({ title, value }) => (
            <UserInfoCard key={title} title={title} value={value} />
          ))}
        </div>
      </DetailsCategory>
      <DetailsCategory title='Education and Employment'>
        <div className='general-details-education'>
          {educationAndEmployment(userDetails.education).map(
            ({ title, value }) => (
              <UserInfoCard key={title} title={title} value={value} />
            )
          )}
        </div>
      </DetailsCategory>

      <DetailsCategory title='Socials'>
        <div className='general-details-socials'>
          {socials(userDetails.socials).map(({ title, value }) => (
            <UserInfoCard key={title} title={title} value={value} />
          ))}
        </div>
      </DetailsCategory>

      <DetailsCategory title='Guarantor'>
        <div className='general-details-guarantor'>
          {guarantor(userDetails.guarantor).map(({ title, value }) => (
            <UserInfoCard key={title} title={title} value={value} />
          ))}
        </div>
      </DetailsCategory>
    </div>
  );
};

export default GeneralDetails;
