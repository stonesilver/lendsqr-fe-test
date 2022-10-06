import './Input.styles.scss';

interface InputProps {
  type?: string;
  name: string;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  error?: string;
}

const Input = ({
  type,
  name,
  value,
  handleChange,
  placeholder,
  error,
}: InputProps) => {
  return (
    <>
      <input
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className='custom-form-input'
      />
      {error && <p className='helperError'>{error}</p>}
    </>
  );
};

Input.defaultProps = {
  type: 'text',
};

export default Input;
