import * as React from 'react';
import './Login.styles.scss';

const Login = () => {
  const [formData, setFormData] = React.useState({
    username: '',
    password: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevS) => ({ ...prevS, [name]: value }));
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
        <form className='user-login-content-form'>
          <p className='user-login-content-form-header'>Welcome!</p>
          <p className='user-login-content-form-description'>
            Enter details to login.
          </p>

          
        </form>
      </div>
    </div>
  );
};

export default Login;
