import * as React from 'react';
import UserIcon from 'assets/svg/user.svg';
import { ReactComponent as RatingIcon } from 'assets/svg/rating.svg';
import './UserBioAndDetailsNav.styles.scss';

const UserBioAndDetailsNav: React.FC = () => {
  return (
    <div className='user-bio-and-details-nav'>
      <div className='user-bio-and-details-nav-bio'>
        <div className='user-bio-and-details-nav-bio-avatar'>
          <img
            src={UserIcon}
            className='user-bio-and-details-nav-bio-avatar-img'
            alt='user avatar'
          />
        </div>
        <div className='user-bio-and-details-nav-bio-name-and-id'>
          <p className='user-bio-and-details-nav-bio-name-and-id-name'>
            Grace Effiom
          </p>
          <p className='user-bio-and-details-nav-bio-name-and-id-id'>
            LSQFf587g90
          </p>
        </div>
        <div className='user-bio-and-details-nav-bio-tier'>
          <p className='user-bio-and-details-nav-bio-tier-title'>Tier</p>
          <div className='user-bio-and-details-nav-bio-tier-tier'>
            {[0, 1, 2].map((rating: number) => (
              <RatingIcon
                key={rating}
                className='user-bio-and-details-nav-bio-tier-tier-rating'
              />
            ))}
          </div>
        </div>
        <div className='user-bio-and-details-nav-bio-account-details'>
          <p className='user-bio-and-details-nav-bio-account-details-account-balance'>
            $200,000
          </p>
          <p className='user-bio-and-details-nav-bio-account-details-account-no'>
            <span className='ac-no'>9912345678</span>/
            <span className='bank-name'>Providus Bank</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserBioAndDetailsNav;
