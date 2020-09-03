import React, { FC, useState } from 'react';

// form  validation
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';

// components 
import { User } from '../../interfaces/user.interface';
import http from '../../services/api';
import { saveToken, setAuthState } from './authSlice';
import { setUser } from './userSlice';
import { AuthResponse } from '../../services/mirage/routes/user';
import { useAppDispatch } from '../../store';

// material ui
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }),
);

const schema = Yup.object().shape({
  username: Yup.string()
    .required('What? No username?')
    .max(16, 'Username cannot be longer than 16 characters'),
  password: Yup.string().required('Without a password, "None shall pass!"'),
  email: Yup.string().email('Please provide a valid email address (abc@xy.z)'),
});

const Auth: FC = () => {
  const { handleSubmit, register, errors } = useForm<User>({
    validationSchema: schema,
  });

  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();

  const submitForm = (data: User) => {
    const path = isLogin ? '/auth/login' : '/auth/signup';
    http
      .post<User, AuthResponse>(path, data)
      .then((res) => {
        if (res) {
          const { user, token } = res;
          dispatch(saveToken(token));
          dispatch(setUser(user));
          dispatch(setAuthState(true));
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  const classes = useStyles();

  return (
    <div>
      <form className={classes.root} noValidate autoComplete="off">
        <div>
          <TextField id="standard-basic" label="Username" ref={register} />
          {errors && errors.username && (
            <p>{errors.username.message}</p>
          )}
        </div>
        <div>
          <TextField id="standard-basic" label="Password" ref={register} type="password" />
          {errors && errors.password && (
            <p>{errors.password.message}</p>
          )}
        </div>
        {!isLogin && (
          <div className="inputWrapper">
            <TextField id="standard-basic" label="Email(optional)" ref={register} />
            {errors && errors.email && (
              <p className="error">{errors.email.message}</p>
            )}
          </div>
        )}
        <div>
          <button type="submit" disabled={loading}>
            {isLogin ? 'Login' : 'Create account'}
          </button>
        </div>
        <p onClick ={() => setIsLogin(!isLogin)}>
          {isLogin ? 'No account? Create one' : 'Already have an account?'}
        </p>

      </form>
    </div>

  );
};

export default Auth;
