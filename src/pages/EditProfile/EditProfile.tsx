import Card from 'src/components/Card/Card';
import Button from 'src/components/core/Button/Button';
import Input from 'src/components/core/Input/Input';
import classes from 'src/pages/EditProfile/EditProfile.module.scss';
import { updateUser } from 'src/services/UserService';
import { FormikProps, useFormik } from 'formik';
import ValidationMessage from 'src/components/core/ValidationMessage/ValidationMessage';
import { updateUserValidationSchema } from 'src/shared/schemas/validation';
import { User } from 'src/models/User';
import { useState } from 'react';

const EditProfile = () => {
  const user = JSON.parse(localStorage.getItem('user')!);
  const [errorMessage, setErrorMessage] = useState('');
  const [message, setMessage] = useState('');

  const onSubmit = (values: User) => {
    updateUser(user.id, values)
      .then(() => {
        setErrorMessage('');
        setMessage('Successful change');
      })
      .catch((error) => {
        setErrorMessage(error.response.data.message);
      });
  };

  const { values, errors, handleChange, handleSubmit }: FormikProps<User> = useFormik({
    initialValues: {
      id: user.id,
      firstName: '',
      lastName: '',
      username: '',
      email: ''
    },
    validationSchema: updateUserValidationSchema,
    onSubmit
  });

  return user ? (
    <form className={`${classes['c-edit-profile']}`} onSubmit={handleSubmit}>
      <Card title='Update account'>
        <Input
          type='text'
          label='First name'
          placeholder={'Please provide a first name'}
          value={values.firstName}
          name='firstName'
          onChange={handleChange}
          error={errors.firstName}
        />
        <Input
          type='text'
          label='Last name'
          placeholder={'Please provide a last name'}
          value={values.lastName}
          name='lastName'
          onChange={handleChange}
          error={errors.lastName}
        />
        <Input
          type='text'
          label='Username'
          placeholder='Please provide a username'
          value={values.username}
          name='username'
          onChange={handleChange}
          error={errors.username}
        />
        <Input
          type='email'
          label='E-mail'
          placeholder='Please provide an e-mail'
          value={values.email}
          name='email'
          onChange={handleChange}
          error={errors.email}
        />
        <div className={`${classes['c-edit-profile__buttons']}`}>
          <div>
            <div className={`${classes['c-edit-profile__submit']}`}>
              <Button type='submit' label='Save changes' />
            </div>
          </div>
        </div>
        <div className={`${classes['c-edit-profile__success']}`}>{message}</div>
        <ValidationMessage message={errorMessage} />
      </Card>
    </form>
  ) : null;
};

export default EditProfile;
