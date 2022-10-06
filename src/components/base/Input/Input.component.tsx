import React from 'react';

interface InputProps {
  type?: string;
  name: string;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const Input = ({
  type,
  name,
  value,
  handleChange,
  placeholder,
}: InputProps) => {
  return (
    <input
      type={type}
      name={name}
      onChange={handleChange}
      placeholder={placeholder}
    />
  );
};

export default Input;
