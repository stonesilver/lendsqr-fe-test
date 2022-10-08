import { ReactComponent as FilterIcon } from 'assets/svg/filter.svg';
import MoreDetails from '../MoreDetails/MoreDetails.component';
import './UsersTable.styles.scss';

const head: string[] = [
  'ORGANISATION',
  'USERNAME',
  'EMAIL',
  'PHONE NUMBER',
  'DATE JOINED',
  'STATUS',
];

const td: (string | JSX.Element)[] = [
  'Lendsqr',
  'Adedeji',
  'adedeji@lendsqr.com',
  '08078903721',
  'May 15, 2020 10:00 AM',
  'Inactive',
  <MoreDetails />,
];

const UsersTable = () => {
  return (
    <div className='users-table'>
      <table id='users-table' className='users-table-container'>
        <thead className='users-table-container-head'>
          <tr>
            {head.map((item: string) => (
              <th key={item}>
                <div className='users-table-container-head-text'>
                  {item} <FilterIcon />
                </div>
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map(
            (item: number) => (
              <tr key={item} className='users-table-container-row'>
                {td.map((desc: string | JSX.Element, index: number) => (
                  <td
                    key={index}
                    className={`users-table-container-row-description`}
                  >
                    {index === 6 ? (
                      desc
                    ) : (
                      <p
                        className={`description-text ${
                          index === 5 &&
                          'users-table-container-row-description-inactive'
                        }`}
                      >
                        {desc}
                      </p>
                    )}
                  </td>
                ))}
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
