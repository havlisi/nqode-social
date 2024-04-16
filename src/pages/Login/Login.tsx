import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'src/components/core/Button/Button';
import Input from 'src/components/core/Input/Input';
import Card from 'src/components/Card/Card';
import classes from 'src/pages/Login/Login.module.scss';
import { login } from 'src/services/AuthService';
import ValidationMessage from 'src/components/core/ValidationMessage/ValidationMessage';

const Login = () => {
  const [authenticationRequest, setAuthenticationRequest] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAuthenticationRequest({ ...authenticationRequest, [name]: value });
  };

  const handleSubmit = async () => {
    login(authenticationRequest)
      .then((response) => {
        if (response) {
          localStorage.setItem('user', JSON.stringify(response.data));
          setError('');
        }
      })
      .catch((error) => {
        setError(error.response.data.message);
      });
  };

  return (
    <div className={`${classes['c-login-form']}`}>
      <Card title='Login'>
        <Input
          type='text'
          label='Username'
          placeholder='Please provide username'
          value={authenticationRequest.username}
          name='username'
          onChange={handleInputChange}
        />
        <Input
          type='password'
          label='Password'
          placeholder='Please provide password'
          value={authenticationRequest.password}
          name='password'
          onChange={handleInputChange}
        />
        <Button label='Sign in' onClick={handleSubmit} />
        <ValidationMessage message={error} />
        <div className={`${classes['c-login-form__span']}`}>
          <span>Don't have an account?</span>&nbsp;&nbsp;
          <Link className={`${classes['c-login-form__link']}`} to='/register'>
            Sign up
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default Login;
