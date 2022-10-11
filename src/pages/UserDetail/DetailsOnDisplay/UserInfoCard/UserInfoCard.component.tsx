import * as React from 'react';
import './UserInfoCard.styles.scss';

interface UserInfoCardProps {
  title: string;
  value: string;
}

const UserInfoCard: React.FC<UserInfoCardProps> = ({ title, value }) => {
  return (
    <div className='user-info-card'>
      <p className='user-info-card-title'>{title}</p>
      <p className='user-info-card-value'>{value}</p>
    </div>
  );
};

export default UserInfoCard;
