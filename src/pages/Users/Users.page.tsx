import './Users.styles.scss';
import UserStatistics from './UserStatistics/UserStatistics.component';

const Users = () => {
  return (
    <div className='users-page'>
      <header className='users-page-header'>Users</header>
      <UserStatistics />
    </div>
  );
};

export default Users;
