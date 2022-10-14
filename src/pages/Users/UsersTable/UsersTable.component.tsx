import * as React from 'react';
import { ReactComponent as FilterIcon } from 'assets/svg/filter.svg';
import FilterUsers from '../FilterUsers/FilterUsers.component';
import MoreDetails from '../MoreDetails/MoreDetails.component';
import TableContext from 'Context/TableContext';
import Pagination from 'components/Pagination/Pagination.component';
import TableDescription from './TableDescription/TableDescription.component';
import { formatDate } from 'utils/formatDate';
import './UsersTable.styles.scss';
import Loader from 'components/Loader/Loader.component';

const head: string[] = [
  'ORGANISATION',
  'USERNAME',
  'EMAIL',
  'PHONE NUMBER',
  'DATE JOINED',
  'STATUS',
];

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
                <TableDescription>
                  <p className='error'>Error</p>
                </TableDescription>
              </tr>
            ) : loading ? (
              <tr className='user-table-loading'>
                <TableDescription>
                  <div className='loading'>
                    <Loader />
                  </div>
                </TableDescription>
              </tr>
            ) : (
              currentTableData.map((user: any, index) => (
                <tr key={index} className='users-table-container-row'>
                  <TableDescription text={user.orgName} />
                  <TableDescription text={user.userName} />
                  <TableDescription text={user.email} />
                  <TableDescription text={user.phoneNumber.split(' x')[0]} />
                  <TableDescription text={formatDate(user.createdAt)} />
                  <TableDescription>
                    <p
                      className={`users-table-container-row-description-status-text users-table-container-row-description-${user.status}`}
                    >
                      {user.status}
                    </p>
                  </TableDescription>
                  <TableDescription>
                    <MoreDetails user={user} />
                  </TableDescription>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {users.length > 0 && (
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
