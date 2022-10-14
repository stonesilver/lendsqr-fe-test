import UsersTable from './UsersTable/UsersTable.component';
import UserStatistics from './UserStatistics/UserStatistics.component';
import { TableProvider } from 'Context/TableContext';
import './Users.styles.scss';

const Users = () => {
  return (
    <TableProvider>
      <div className='users-page'>
        <header className='users-page-header'>Users</header>
        <UserStatistics />
        <UsersTable />
      </div>
    </TableProvider>
  );
};

export default Users;
