import * as React from 'react';

interface SelectInterface {
  value: string;
  name: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  title: string;
  options: string[];
  placeholder: string;
}

const CustomSelect: React.FC<SelectInterface> = ({
  value,
  name,
  handleChange,
  title,
  options,
  placeholder,
}) => {
  const [open, setOpen] = React.useState<boolean>(false);

  const toggleOptions = () => {
    setOpen((prevS) => !prevS);
  };

  return (
    <div className='filter-custom-select' aria-label='select'>
      <p className='filter-custom-select-title'>{title}</p>
      <div className='filter-custom-select-input-container'>
        <input
          type='text'
          name={name}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          className='filter-custom-select-input-container-input'
        //   aria-haspopup='listbox'
        //   aria-expanded={open}
          onClick={toggleOptions}
        />
      </div>
      <ul
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
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomSelect;
