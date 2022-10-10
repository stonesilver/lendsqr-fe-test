import * as React from 'react';
import TableContext from 'Context/TableContext';
import { useClickOutside } from 'Hooks/useClickOutside';
import { ReactComponent as ChevronDown } from 'assets/svg/chevron-down.svg';
import './NumberOfDataToShow.styles.scss';

const NumberOfDataToShow: React.FC = () => {
  const { pageSize, changePageSize, data } = React.useContext(TableContext);
  const { visible, setVisible, ref } = useClickOutside();

  const handleOptionOnClick = (value: number) => {
    changePageSize(value);
    
    setTimeout(() => {
      setVisible(false);
    }, 100);
  };
  return (
    <div className='number-of-data-to-show'>
      Showing
      <div
        ref={ref}
        className='number-of-data-to-show-select'
        onClick={() => setVisible(prevS => !prevS)}
      >
        <p className='number-of-data-to-show-select-selected'>{pageSize}</p>
        <ChevronDown />
        {visible && (
          <ul className='number-of-data-to-show-select-dropdown'>
            {[2, 5, 10].map((number) => (
              <li
                className='number-of-data-to-show-select-dropdown-option'
                key={number}
                onClick={() => handleOptionOnClick(number)}
              >
                {number}
              </li>
            ))}
          </ul>
        )}
      </div>
      out of
      <span className='number-of-data-to-show-total-data'>{data.length}</span>
    </div>
  );
};

export default NumberOfDataToShow;
