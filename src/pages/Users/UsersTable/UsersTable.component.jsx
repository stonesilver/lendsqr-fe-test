import { ReactComponent as FilterIcon } from 'assets/svg/filter.svg';
import { ReactComponent as MoreIcon } from 'assets/svg/more.svg';
import './UsersTable.styles.scss';

const head = [
  'ORGANISATION',
  'USERNAME',
  'EMAIL',
  'PHONE NUMBER',
  'DATE JOINED',
  'STATUS',
];

const td = [
  'Lendsqr',
  'Adedeji',
  'adedeji@lendsqr.com',
  '08078903721',
  'May 15, 2020 10:00 AM',
  'Inactive',
  <MoreIcon />,
];

const UsersTable = () => {
  return (
    <div className='users-table'>
      <table id='users-table' className='users-table-container'>
        <thead className='users-table-container-head'>
          <tr>
            {head.map((item) => (
              <th key={item}>
                <div className='users-table-container-head-text'>
                  {item} <FilterIcon />
                </div>
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {[...Array(15).keys()].map((item) => (
            <tr key={item} className='users-table-container-row'>
              {td.map((item, index) => (
                <td
                  key={item}
                  className={`users-table-container-row-description`}
                >
                  <p
                    className={`description-text ${
                      index === 5 &&
                      'users-table-container-row-description-inactive'
                    }`}
                  >
                    {item}
                  </p>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
