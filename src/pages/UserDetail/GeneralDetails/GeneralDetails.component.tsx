import * as React from 'react';
import DetailsCategory from '../DetailsOnDisplay/DetailsCategory/DetailsCategory.component';
import UserInfoCard from '../DetailsOnDisplay/UserInfoCard/UserInfoCard.component';
import {
  personalInfo,
  educationAndEmployment,
  socials,
  guarantor,
} from 'utils/data/userInfoData';
import './GeneralDetails.styles.scss';

const dummyyPersonalInfo = {
  firstName: 'Grace',
  lastName: 'Effiom',
  bvn: '07060780922',
  gender: 'Female',
  email: 'grace@gmail.com',
  username: 'gracey',
  phoneNumber: '07060780922',
  address: '2 fountain road',
};

const dummyEducationAndEmployment = {
  duration: '2 Years',
  employmentStatus: 'Employed',
  level: 'Bsc',
  loanRepayment: '818.12',
  monthlyIncome: ['616.57', '295.72'],
  officeEmail: 'Kitty.Swaniawski28@gmail.com',
  sector: 'FinTech',
};

const dummySocials = {
  facebook: '@lendsqr',
  instagram: '@lendsqr',
  twitter: '@lendsqr',
};

const dummyGuarantor = {
  address: 'Goyette Trail',
  firstName: 'Johnathon',
  gender: 'Male',
  lastName: 'Hane',
  phoneNumber: '(573) 413-3844 x9178',
};

const GeneralDetails: React.FC = () => {
  return (
    <div className='general-details'>
      <DetailsCategory title='Personal Information'>
        <div className='general-details-personal-info'>
          {personalInfo(dummyyPersonalInfo).map(({ title, value }) => (
            <UserInfoCard key={title} title={title} value={value} />
          ))}
        </div>
      </DetailsCategory>
      <DetailsCategory title='Education and Employment'>
        <div className='general-details-education'>
          {educationAndEmployment(dummyEducationAndEmployment).map(
            ({ title, value }) => (
              <UserInfoCard key={title} title={title} value={value} />
            )
          )}
        </div>
      </DetailsCategory>

      <DetailsCategory title='Socials'>
        <div className='general-details-socials'>
          {socials(dummySocials).map(({ title, value }) => (
            <UserInfoCard key={title} title={title} value={value} />
          ))}
        </div>
      </DetailsCategory>

      <DetailsCategory title='Guarantor'>
        <div className='general-details-guarantor'>
          {guarantor(dummyGuarantor).map(({ title, value }) => (
            <UserInfoCard key={title} title={title} value={value} />
          ))}
        </div>
      </DetailsCategory>
    </div>
  );
};

export default GeneralDetails;
