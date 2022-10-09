import * as React from 'react';
import CustomSelect from './CustomSelect/CustomSelect.component';
import TableContext from 'Context/TableContext';
import './FilterUsers.styles.scss';

interface FilterProps {
  hideFilter: () => void;
}

const FilterUsers = React.forwardRef<HTMLDivElement, FilterProps>(
  (props, ref) => {
    const { filterData, selectChange } = React.useContext(TableContext);
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
      </div>
    );
  }
);

export default FilterUsers;
