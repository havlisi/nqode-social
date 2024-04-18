import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from 'src/components/core/Button/Button';
import Input from 'src/components/core/Input/Input';
import Card from 'src/components/Card/Card';
import classes from 'src/pages/Login/Login.module.scss';
import { login } from 'src/services/AuthService';
import ValidationMessage from 'src/components/core/ValidationMessage/ValidationMessage';
import { AuthenticationRequest } from 'src/models/AuthenticationRequest';
import { FormikHelpers, FormikProps, useFormik } from 'formik';
import { loginValidationSchema } from 'src/shared/schemas/validation';

const Login = () => {
  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState('');

  const onSubmit = (
    values: AuthenticationRequest,
    actions: FormikHelpers<AuthenticationRequest>
  ) => {
    login(values)
      .then((response) => {
        if (response) {
          localStorage.setItem('user', JSON.stringify(response.data));
          navigate('/home');
          setErrorMessage('');
        }
      })
      .catch((error) => {
        setErrorMessage(error.response.data.message);
      });
    actions.setSubmitting(true);
  };

  const { values, errors, handleChange, handleSubmit }: FormikProps<AuthenticationRequest> =
    useFormik({
      initialValues: {
        username: '',
        password: ''
      },
      validationSchema: loginValidationSchema,
      onSubmit
    });

  return (
    <form className={`${classes['c-login-form']}`} onSubmit={handleSubmit}>
      <Card title='Login'>
        <Input
          type='text'
          label='Username'
          placeholder='Please provide username'
          value={values.username}
          name='username'
          onChange={handleChange}
          error={errors.username}
        />
        <Input
          type='password'
          label='Password'
          placeholder='Please provide password'
          value={values.password}
          name='password'
          onChange={handleChange}
          error={errors.password}
        />
        <Button type='submit' label='Sign in' />
        <ValidationMessage message={errorMessage} />
        <div className={`${classes['c-login-form__span']}`}>
          <span>Don't have an account?</span>&nbsp;&nbsp;
          <Link className={`${classes['c-login-form__link']}`} to='/register'>
            Sign up
          </Link>
        </div>
      </Card>
    </form>
  );
};

export default Login;
