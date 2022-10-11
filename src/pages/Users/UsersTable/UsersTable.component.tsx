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

          {error ? (
            <div>Error</div>
          ) : loading ? (
            <div>Laoding</div>
          ) : (
            <tbody>
              {currentTableData.map((user: any, index) => (
                <tr key={index} className='users-table-container-row'>
                  <TableDescription text={user.orgName} />
                  <TableDescription text={user.userName} />
                  <TableDescription text={user.email} />
                  <TableDescription text={user.phoneNumber.split(' x')[0]} />
                  <TableDescription text={user.createdAt} />
                  <TableDescription>
                    <p className='users-table-container-row-description-status-text users-table-container-row-description-inactive'>
                      Inactive
                    </p>
                  </TableDescription>
                  <TableDescription>
                    <MoreDetails id={user.id} />
                  </TableDescription>
                </tr>
              ))}
            </tbody>
          )}
        </table>
      </div>

      <Pagination
        className='pagination-bar'
        currentPage={currentPage}
        totalCount={users.length}
        pageSize={pageSize}
        onPageChange={onPageChange}
        changePageSize={changePageSize}
      />
    </>
  );
};

export default UsersTable;
