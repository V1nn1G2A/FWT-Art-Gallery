import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import styles from './authorization.module.scss';

import Input from '../../ui-components/Input/Input';
import ButtonText from '../../ui-components/ButtonText/ButtonText';
import ButtonIcon from '../../ui-components/ButtonIcon/ButtonIcon';
import Link from '../../ui-components/Link/Link';

import Close from '../../assets/icons/Close';

import {
  useLoginMutation /* , useRegisterMutation */,
} from '../../api/authAPI';

interface AuthorizationProps {
  theme?: 'light' | 'dark';
  onClose: () => void;
}

interface FormValues {
  username: string;
  password: string;
}

const Authorization: React.FC<AuthorizationProps> = ({
  theme = 'light',
  onClose,
}) => {
  const [login /* { isLoading, error } */] = useLoginMutation();
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
    } finally {
      onClose();
    }
  };

  return (
    <div
      className={`${styles.authorization} ${styles[`authorization--${theme}`]}`}
    >
      <img className={styles.authorization_logo} src="./login.png" alt="logo" />
      <div className={styles.authorization_inner}>
        <ButtonIcon
          variant="transparent"
          onClick={() => onClose()}
          theme={theme}
          icon={<Close />}
        />
        <div className={styles.authorization_content}>
          <h1 className={styles.authorization_title}>Welcome back</h1>
          <p className={styles.authorization_subtitle}>
            If you don&apos;t have an account yet, please{' '}
            <Link to="/signup" label="sign up" theme={theme} />;
          </p>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className={`${styles.authorization_form} ${styles[`authorization_form--${theme}`]}`}
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
              label="Log in"
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

export default Authorization;
