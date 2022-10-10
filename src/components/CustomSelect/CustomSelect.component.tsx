import * as React from 'react';
import { ReactComponent as ChevronDown } from 'assets/svg/chevron-down.svg';
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
  const [open, setOpen] = React.useState<boolean>(false);
  const ref = React.useRef<HTMLUListElement>(null);

  const toggleOptions = () => {
    setOpen((prevS) => !prevS);
    setTimeout(() => {
      ref.current && ref.current.focus();
    }, 100);
  };

  const handleChange = (value: string) => {
    selectChange(name, value);
    toggleOptions();
  };

  return (
    <div className='filter-custom-select' aria-label='select'>
      {title && <p className='filter-custom-select-title'>{title}</p>}
      <div
        aria-haspopup='listbox'
        aria-expanded={open}
        className={`filter-custom-select-selected ${
          open && 'filter-custom-select-open'
        } ${className && className}`}
        onClick={toggleOptions}
      >
        {value || placeholder}
        <ChevronDown className='filter-custom-select-title-icon-caret' />
      </div>
      {open && (
        <ul
          ref={ref}
          onBlur={toggleOptions}
          className='filter-custom-select-options'
          role='listbox'
          aria-activedescendant={value}
          tabIndex={-1}
        >
          {options.map((option) => (
            <li
              key={option}
              id={option}
              role='option'
              aria-selected={value === option}
              className='filter-custom-select-options-option'
              onClick={() => handleChange(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomSelect;
