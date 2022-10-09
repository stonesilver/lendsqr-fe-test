import * as React from 'react';
import './CustomInput.styles.scss';

interface InputInterface {
  title: string;
  name: string;
  value: string;
  type?: string;
  placeholder: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomInput: React.FC<InputInterface> = ({
  title,
  name,
  value,
  type,
  placeholder,
  handleChange,
}) => {
  return (
    <div className='filter-custom-input'>
      <p className='filter-custom-input-title'>{title}</p>
      <input
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className='filter-custom-input-input'
      />
    </div>
  );
};

CustomInput.defaultProps = {
  type: 'text',
};

export default CustomInput;
