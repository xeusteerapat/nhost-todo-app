import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { auth } from 'utils/nhost';

const Login = () => {
  const initialFormValue = {
    email: '',
    password: '',
  };

  const [value, setValue] = useState(initialFormValue);
  const history = useHistory();
  const { email, password } = value;

  const handleChange = e => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      await auth.login(email, password);
      alert('Login Success!');
    } catch (err) {
      alert('Error on logging in');
      return;
    }

    history.push('/');
  };

  return (
    <div>
      <h1>Login</h1>
      <form action='' onSubmit={handleSubmit}>
        <input
          type='email'
          value={email}
          placeholder='email'
          name='email'
          onChange={handleChange}
        />
        <input
          type='password'
          value={password}
          placeholder='password'
          name='password'
          onChange={handleChange}
        />
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
