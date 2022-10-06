import * as React from 'react';
import Input from 'components/base/Input/Input.component';
import { useLocalStorage } from 'Hooks/useLocalStorage';
import { useNavigate } from 'react-router-dom';
import './Login.styles.scss';

const Login = () => {
  const [formData, setFormData] = React.useState({
    email: '',
    password: '',
  });
  const [error, setError] = React.useState({
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = React.useState(false);
  const { setLocalStorage } = useLocalStorage('user');
  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevS) => ({ ...prevS, [name]: value }));
    setError((prevS) => ({ ...prevS, [name]: '' }));
  };

  const togglePasswordType = () => {
    setShowPassword((prevS) => !prevS);
  };

  const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { email, password } = formData;

    // Low level form input validation and error helper display because
    //  the app does not check for user record from a DB

    if (!email) {
      setError((prevS) => ({ ...prevS, email: 'Email is required' }));
    } else {
      setError((prevS) => ({ ...prevS, email: '' }));
    }

    if (!password) {
      setError((prevS) => ({ ...prevS, password: 'Password is required' }));
    } else {
      setError((prevS) => ({ ...prevS, password: '' }));
    }

    if (email && password) {
      setLocalStorage(formData);
      navigate('/users');
    }
  };

  return (
    <div className='user-login'>
      <div className='user-login-brand-logo'>
        <img src='/img/brand-logo.webp' alt='brand-logo' className='' />
      </div>

      <div className='user-login-content'>
        {/* left illustrustion on larger screens */}
        <div className='user-login-content-left'>
          <img
            src='/img/sign-in-illustration.webp'
            alt='login-illustration'
            className='user-login-content-left-illustration'
          />
        </div>
        
        {/* sign in form */}
        <form className='user-login-content-form' onSubmit={handleSubmit}>
          <p className='user-login-content-form-header'>Welcome!</p>
          <p className='user-login-content-form-description'>
            Enter details to login.
          </p>

          <div className='user-login-content-form-container'>
            {/* Email Input */}
            <Input
              type='email'
              value={formData.email}
              handleChange={handleChange}
              placeholder='Email'
              name='email'
              error={error.email}
            />

            {/* Password input */}
            <div className='user-login-content-form-container-password-field'>
              <Input
                value={formData.password}
                handleChange={handleChange}
                placeholder='Password'
                name='password'
                type={showPassword ? 'text' : 'password'}
                error={error.password}
              />
              <p
                className='user-login-content-form-container-password-field-toggle-password-type'
                onClick={togglePasswordType}
              >
                {showPassword ? 'HIDE' : 'SHOW'}
              </p>
            </div>

            <p className='user-login-content-form-container-forgot-password'>
              Forgot PASSWORD?
            </p>

            <button
              type='submit'
              className='user-login-content-form-container-submit-btn'
            >
              LOG IN
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
