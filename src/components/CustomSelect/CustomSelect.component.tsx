import * as React from 'react';
import { ReactComponent as ChevronDown } from 'assets/svg/chevron-down.svg';
import { useClickOutside } from 'Hooks/useClickOutside';
import './CustomSelect.styles.scss';

interface SelectInterface {
  value: string;
  name: string;
  selectChange: (name: string, value: string) => void;
  title?: string;
  options: string[];
  placeholder?: string;
  className?: string;
}

const CustomSelect: React.FC<SelectInterface> = ({
  value,
  name,
  selectChange,
  title,
  options,
  placeholder,
  className,
}) => {
  const { visible, setVisible, ref } = useClickOutside();

  const toggleOptions = () => {
    setVisible((prevS) => !prevS);
  };

  const handleChange = (value: string) => {
    selectChange(name, value);
    toggleOptions();
  };

  return (
    <div className='filter-custom-select' aria-label='select'>
      {title && <p className='filter-custom-select-title'>{title}</p>}
      <div
        ref={ref}
        aria-haspopup='listbox'
        aria-expanded={visible}
        className={`filter-custom-select-selected ${
          visible && 'filter-custom-select-open'
        } ${className && className}`}
        onClick={toggleOptions}
      >
        {value || placeholder}
        <ChevronDown className='filter-custom-select-title-icon-caret' />
      </div>
      {visible && (
        <div
          className='filter-custom-select-options'
          role='listbox'
          aria-activedescendant={value}
          tabIndex={-1}
        >
          {options.map((option) => (
            <p
              key={option}
              id={option}
              role='option'
              aria-selected={value === option}
              className='filter-custom-select-options-option'
              onClick={() => handleChange(option)}
            >
              {option}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
