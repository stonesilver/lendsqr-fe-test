import * as React from 'react';
import CustomSelect from './CustomSelect/CustomSelect.component';
import TableContext from 'Context/TableContext';
import './FilterUsers.styles.scss';
import CustomInput from './CustomInput/CustomInput.component';

const FilterUsers = React.forwardRef<HTMLDivElement>((props, ref) => {
  const {
    filterData,
    selectChange,
    handleChange,
    closeFilter,
    resetFilterData,
  } = React.useContext(TableContext);
  return (
    <div ref={ref} className='filter-users'>
      <CustomSelect
        value={filterData.organisation}
        name='organisation'
        selectChange={selectChange}
        title='Organization'
        options={['LendSqr', 'FastPay', 'Borrow Me', 'Pay Later']}
        placeholder='Select'
      />
      <CustomInput
        title='Username'
        name='username'
        value={filterData.username}
        placeholder='User'
        handleChange={handleChange}
      />
      <CustomInput
        title='Email'
        name='email'
        value={filterData.email}
        placeholder='Email'
        type='email'
        handleChange={handleChange}
      />
      <CustomInput
        title='Date'
        name='date'
        value={filterData.date}
        placeholder='Date'
        type='date'
        handleChange={handleChange}
      />
      <CustomInput
        title='Phone Number'
        name='phone'
        value={filterData.phone}
        placeholder='Phone Number'
        type='text'
        handleChange={handleChange}
      />
      <CustomSelect
        value={filterData.status}
        name='status'
        selectChange={selectChange}
        title='Status'
        options={['Inactive', 'Pending', 'Active', 'Blacklisted']}
        placeholder='Select'
      />
      <div className='filter-users-reset-filter-btns'>
        <button
          className='filter-users-reset-filter-btns-reset filter-users-reset-filter-btns-action-btn'
          onClick={resetFilterData}
        >
          Reset
        </button>
        <button
          className='filter-users-reset-filter-btns-filter filter-users-reset-filter-btns-action-btn'
          onClick={closeFilter}
        >
          Filter
        </button>
      </div>
    </div>
  );
});

export default FilterUsers;
