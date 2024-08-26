import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import styles from './registration.module.scss';

import Input from '../../ui-components/Input/Input';
import ButtonText from '../../ui-components/ButtonText/ButtonText';
import ButtonIcon from '../../ui-components/ButtonIcon/ButtonIcon';
import Link from '../../ui-components/Link/Link';

import Close from '../../assets/icons/Close';

import {
  useRegisterMutation /* , useRegisterMutation */,
} from '../../api/authAPI';

interface RegistrationProps {
  theme?: 'light' | 'dark';
  onClose: () => void;
}

interface FormValues {
  username: string;
  password: string;
}

const Registration: React.FC<RegistrationProps> = ({
  theme = 'light',
  onClose,
}) => {
  const [login /* { isLoading, error } */] = useRegisterMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      console.log(data);

      const response = await login(data).unwrap();
      console.log(response);
    } catch (err) {
      console.error('Login failed:', err);
    }
  };

  return (
    <div
      className={`${styles.registration} ${styles[`registration--${theme}`]}`}
    >
      <img className={styles.registration_logo} src="./signup.png" alt="logo" />
      <div className={styles.registration_inner}>
        <ButtonIcon
          variant="transparent"
          onClick={() => onClose()}
          theme={theme}
          icon={<Close />}
        />
        <div className={styles.registration_content}>
          <h1 className={styles.registration_title}>Create your profile</h1>
          <p className={styles.registration_subtitle}>
            If you already have an account , please{' '}
            <Link to="/login" label="log in" theme={theme} />;
          </p>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className={`${styles.registration_form} ${styles[`registration_form--${theme}`]}`}
          >
            <Input
              {...register('username', {
                required: 'Email is required',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'Invalid email address',
                },
              })}
              theme={theme}
              type="text"
              label="Email"
              error={errors.username?.message}
            />
            <Input
              {...register('password', { required: 'Password is required' })}
              theme={theme}
              type="password"
              label="Password"
              error={errors.password?.message}
            />
            <ButtonText
              theme={theme}
              label="Sign up"
              variant="primary"
              type="submit"
              onClick={handleSubmit(onSubmit)}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
