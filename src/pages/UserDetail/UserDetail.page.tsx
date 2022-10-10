import * as React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as BackIcon } from 'assets/svg/arrow-back.svg';
import './UserDetail.styles.scss';

const UserDetail: React.FC = () => {
  return (
    <div className='user-detail'>
      <Link to='-1' className='user-detail-go-back'>
        <BackIcon /> Back to Users
      </Link>
    </div>
  );
};

export default UserDetail;
