import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';
import './LoginForm.css'; // Reuse the login form styles

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await dispatch(signUp(username, email, password));
      if (data) {
        setErrors(data)
      }
    } else {
      setErrors(['Passwords do not match']);
    }
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div className="login-form-bg">
      <div className="login-form-container">
        <form className="login-form" onSubmit={onSignUp}>
          <h2>Sign Up</h2>
          <div className="login-errors">
            {errors.map((error, ind) => (
              <div key={ind}>{error}</div>
            ))}
          </div>
          <div className="login-field">
            <label htmlFor='username'>User Name</label>
            <input
              type='text'
              name='username'
              onChange={e => setUsername(e.target.value)}
              value={username}
              required
            />
          </div>
          <div className="login-field">
            <label htmlFor='email'>Email</label>
            <input
              type='text'
              name='email'
              onChange={e => setEmail(e.target.value)}
              value={email}
              required
            />
          </div>
          <div className="login-field">
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              name='password'
              onChange={e => setPassword(e.target.value)}
              value={password}
              required
            />
          </div>
          <div className="login-field">
            <label htmlFor='repeat_password'>Repeat Password</label>
            <input
              type='password'
              name='repeat_password'
              onChange={e => setRepeatPassword(e.target.value)}
              value={repeatPassword}
              required
            />
          </div>
          <button className="login-btn" type='submit'>Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;