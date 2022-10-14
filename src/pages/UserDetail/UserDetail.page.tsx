import * as React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as BackIcon } from 'assets/svg/arrow-back.svg';
import HeaderAndActionBtn from './HeaderAndActionBtn/HeaderAndActionBtn.component';
import UserBio from './UserBioAndDetailsNav/UserBioAndDetailsNav.component';
import DetailsOnDisplay from './DetailsOnDisplay/DetailsOnDisplay.component';
import { UserDetailProvider } from 'Context/UserDetailsContext';
import './UserDetail.styles.scss';

const UserDetail: React.FC = () => {
  window.scrollTo(0, 0);

  return (
    <UserDetailProvider>
      <div className='user-detail'>
        <Link to='/users' className='user-detail-go-back'>
          <BackIcon /> Back to Users
        </Link>
        <HeaderAndActionBtn />
        <UserBio />
        <DetailsOnDisplay />
      </div>
    </UserDetailProvider>
  );
};

export default UserDetail;
