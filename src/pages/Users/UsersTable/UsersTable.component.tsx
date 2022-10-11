import * as React from 'react';
import { ReactComponent as FilterIcon } from 'assets/svg/filter.svg';
import FilterUsers from '../FilterUsers/FilterUsers.component';
import MoreDetails from '../MoreDetails/MoreDetails.component';
import TableContext from 'Context/TableContext';
import Pagination from 'components/Pagination/Pagination.component';
import './UsersTable.styles.scss';
import TableDescription from './TableDescription/TableDescription.component';

const head: string[] = [
  'ORGANISATION',
  'USERNAME',
  'EMAIL',
  'PHONE NUMBER',
  'DATE JOINED',
  'STATUS',
];

// predictive status login
const userStatus = () => {
  const number = Math.round(Math.random() * 4);

  return number === 1
    ? 'Inactive'
    : number === 2
    ? 'Pending'
    : number === 3
    ? 'Blacklisted'
    : 'Active';
};

const UsersTable: React.FC = () => {
  const {
    showFilter,
    ref1,
    visible,
    currentPage,
    currentTableData,
    onPageChange,
    pageSize,
    changePageSize,
    users,
    loading,
    error,
  } = React.useContext(TableContext);

  return (
    <>
      <div className='users-table'>
        {visible && <FilterUsers />}
        <table id='users-table' className='users-table-container'>
          <thead className='users-table-container-head'>
            <tr>
              {head.map((item: string) => (
                <th key={item}>
                  <div className='users-table-container-head-text'>
                    {item}
                    <FilterIcon
                      ref={ref1}
                      className='users-table-container-head-text-icon'
                      onClick={showFilter}
                    />
                  </div>
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {error ? (
              <tr className='user-table-error'>
                <TableDescription text='Error' />
              </tr>
            ) : loading ? (
              <tr className='user-table-loading'>
                <TableDescription text='loading' />
              </tr>
            ) : (
              currentTableData.map((user: any, index) => {
                const status = userStatus();
                return (
                  <tr key={index} className='users-table-container-row'>
                    <TableDescription text={user.orgName} />
                    <TableDescription text={user.userName} />
                    <TableDescription text={user.email} />
                    <TableDescription text={user.phoneNumber.split(' x')[0]} />
                    <TableDescription text={user.createdAt} />
                    <TableDescription>
                      <p
                        className={`users-table-container-row-description-status-text users-table-container-row-description-${status}`}
                      >
                        {status}
                      </p>
                    </TableDescription>
                    <TableDescription>
                      <MoreDetails user={user} />
                    </TableDescription>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      {users.length && (
        <Pagination
          className='pagination-bar'
          currentPage={currentPage}
          totalCount={users.length}
          pageSize={pageSize}
          onPageChange={onPageChange}
          changePageSize={changePageSize}
        />
      )}
    </>
  );
};

export default UsersTable;
