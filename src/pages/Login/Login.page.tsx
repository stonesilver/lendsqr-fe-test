import Input from 'components/base/Input/Input.component';
import * as React from 'react';
import './Login.styles.scss';

const Login = () => {
  const [formData, setFormData] = React.useState({
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = React.useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevS) => ({ ...prevS, [name]: value }));
  };

  const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert(JSON.stringify(formData));
  };

  return (
    <div className='user-login'>
      <div className='user-login-brand-logo'>
        <img src='/img/brand-logo.png' alt='brand-logo' className='' />
      </div>

      <div className='user-login-content'>
        {/* left illustrustion on larger screens */}
        <div className='user-login-content-left'>
          <img
            src='img/sign-in-illustration.png'
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
              value={formData.email}
              handleChange={handleChange}
              placeholder='Email'
              name='email'
            />

            {/* Password input */}
            <Input
              value={formData.password}
              handleChange={handleChange}
              placeholder='Password'
              name='password'
              type={showPassword ? 'text' : 'password'}
            />

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
