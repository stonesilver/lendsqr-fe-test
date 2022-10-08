import * as React from 'react';
import CustomSelect from './CustomSelect/CustomSelect.component';
import './FilterUsers.styles.scss';

interface FilterProps {
  hideFilter: () => void;
}

const FilterUsers = React.forwardRef<HTMLDivElement, FilterProps>(
  (props, ref) => {
    return (
      <div
        ref={ref}
        tabIndex={-1}
        onBlur={props.hideFilter}
        className='filter-users'
      >
        <CustomSelect
          value='yes'
          name='yes'
          handleChange={() => {}}
          title='yes'
          options={['yes']}
          placeholder='yes'
        />
      </div>
    );
  }
);

export default FilterUsers;
