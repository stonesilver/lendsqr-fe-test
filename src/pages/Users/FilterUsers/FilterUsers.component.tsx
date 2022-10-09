import * as React from 'react';
import CustomSelect from './CustomSelect/CustomSelect.component';
import TableContext from 'Context/TableContext';
import './FilterUsers.styles.scss';
import CustomInput from './CustomInput/CustomInput.component';

interface FilterProps {
  hideFilter: () => void;
}

const FilterUsers = React.forwardRef<HTMLDivElement, FilterProps>(
  (props, ref) => {
    const { filterData, selectChange, handleChange } =
      React.useContext(TableContext);
    return (
      <div
        ref={ref}
        tabIndex={-1}
        onBlur={props.hideFilter}
        className='filter-users'
      >
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
      </div>
    );
  }
);

export default FilterUsers;
