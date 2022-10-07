import * as React from 'react';
import './Input.styles.scss';

interface InputProps {
  type?: string;
  name: string;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  error?: string;
}

const Input: React.FC<InputProps> = ({
  type,
  name,
  value,
  handleChange,
  placeholder,
  error,
}) => {
  return (
    <div>
      <input
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className={`custom-form-input ${error && 'error-active'}`}
      />
      {error && <p className='helperError'>{error}</p>}
    </div>
  );
};

Input.defaultProps = {
  type: 'text',
};

export default Input;
