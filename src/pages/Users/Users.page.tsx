import './Users.styles.scss';
import UsersTable from './UsersTable/UsersTable.component';
import UserStatistics from './UserStatistics/UserStatistics.component';

const Users = () => {
  return (
    <div className='users-page'>
      <header className='users-page-header'>Users</header>
      <UserStatistics />
      <UsersTable />
    </div>
  );
};

export default Users;
