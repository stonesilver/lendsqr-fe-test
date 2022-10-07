import { ReactComponent as UsersIcon } from 'assets/svg/stat-users.svg';
import { ReactComponent as UsersAtiveIcon } from 'assets/svg/stat-active.svg';
import { ReactComponent as UsersLoansIcon } from 'assets/svg/stat-loan.svg';
import { ReactComponent as UsersSavingsIcon } from 'assets/svg/stat-savings.svg';
import './UserStatistics.styles.scss';

const className = 'statistics-card-icon';

const stats = [
  { name: 'USERS', icon: <UsersIcon className={className} />, value: '2,453' },
  {
    name: 'ACTIVE USERS',
    icon: <UsersAtiveIcon className={className} />,
    value: '2,453',
  },
  {
    name: 'USERS WITH LOANS',
    icon: <UsersLoansIcon className={className} />,
    value: '12,453',
  },
  {
    name: 'USERS WITH SAVINGS',
    icon: <UsersSavingsIcon className={className} />,
    value: '102,453',
  },
];

const UserStatistics = () => {
  return (
    <div className='user-statistics'>
      {stats.map(({ name, icon, value }) => (
        <div key={name} className='statistics-card'>
          {icon}
          <p className='statistics-card-title'>{name}</p>
          <p className='statistics-card-value'>{value}</p>
        </div>
      ))}
    </div>
  );
};

export default UserStatistics;
