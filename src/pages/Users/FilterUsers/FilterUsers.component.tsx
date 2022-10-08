import * as React from 'react';
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
      ></div>
    );
  }
);

export default FilterUsers;
