import Button from 'src/components/core/Button/Button';
import classes from 'src/pages/Register/Register.module.scss';
import { register } from 'src/services/AuthService';
import { FormikHelpers, useFormik } from 'formik';
import { CreateUser } from 'src/models/CreateUser';
import { userValidationSchema } from 'src/shared/schemas/validation';
import Card from 'src/components/Card/Card';
import Input from 'src/components/core/Input/Input';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import ValidationMessage from 'src/components/core/ValidationMessage/ValidationMessage';

const Register = () => {
  const [errorMessage, setErrorMessage] = useState('');

  const onSubmit = (values: CreateUser, actions: FormikHelpers<CreateUser>) => {
    register(values)
      .then((response) => {
        if (response) {
          localStorage.setItem('user', JSON.stringify(response.data));
        }
      })
      .catch((error) => {
        setErrorMessage(error.response.data.message);
      });
    actions.resetForm();
  };

  const { values, errors, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: {
      name: '',
      username: '',
      email: '',
      password: '',
      confirmedPassword: ''
    },
    validationSchema: userValidationSchema,
    onSubmit
  });

  return (
    <form className={`${classes['c-register-form']}`} onSubmit={handleSubmit}>
      <Card title='Create an account'>
        <Input
          type='text'
          label='Name'
          placeholder='Please provide a name'
          value={values.name}
          name='name'
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.name}
        />
        <Input
          type='text'
          label='Username'
          placeholder='Please provide a username'
          value={values.username}
          name='username'
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.username}
        />
        <Input
          type='email'
          label='E-mail'
          placeholder='Please provide an e-mail'
          value={values.email}
          name='email'
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.email}
        />
        <Input
          type='password'
          label='Password'
          placeholder='Please provide a password'
          value={values.password}
          name='password'
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.password}
        />
        <Input
          type='password'
          label='Confirmation password'
          placeholder='Please provide a confirmation password'
          value={values.confirmedPassword}
          name='confirmedPassword'
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.confirmedPassword}
        />
        <Button label='Submit' />
        <ValidationMessage message={errorMessage} />
        <div className={`${classes['c-register-form__span']}`}>
          <span>Already have an account?</span>&nbsp;&nbsp;
          <Link className={`${classes['c-register-form__link']}`} to='/login'>
            Sign in
          </Link>
        </div>
      </Card>
    </form>
  );
};

export default Register;
