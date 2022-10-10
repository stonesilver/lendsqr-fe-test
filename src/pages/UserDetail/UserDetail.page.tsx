import * as React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as BackIcon } from 'assets/svg/arrow-back.svg';
import './UserDetail.styles.scss';
import HeaderAndActionBtn from './HeaderAndActionBtn/HeaderAndActionBtn.component';
import UserBio from './UserBioAndDetailsNav/UserBioAndDetailsNav.component';

const UserDetail: React.FC = () => {
  return (
    <div className='user-detail'>
      <Link to='/users' className='user-detail-go-back'>
        <BackIcon /> Back to Users
      </Link>
      <HeaderAndActionBtn />
      <UserBio />
    </div>
  );
};

export default UserDetail;
