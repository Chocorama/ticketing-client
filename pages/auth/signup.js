import { useEffect, useState } from 'react';
import axios from 'axios';

export default () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, seterrors] = useState([]);

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        '/api/users/signup',
        {
          email,
          password,
        },
        {
          baseURL: 'https://ticketing.dev',
        }
      );

      if (response.status === 201) seterrors([]);
      console.log(response);
    } catch (error) {
      if (error) seterrors(error.response.data.errors);
      console.log(error.response.data.errors);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <h1>Sign up</h1>
      <div style={{ margin: '5px' }}>
        <div className='form-group'>
          <label htmlFor=''>Email Address</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='form-control'
          />
        </div>
        <div className='form-group'>
          <label htmlFor=''>Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type='password'
            className='form-control'
          />
        </div>
      </div>
      <button className='btn btn-primary'>Signup</button>
      <div>
        <ul>
          {errors &&
            errors.map((error) => {
              return <li>{error.message}</li>;
            })}
        </ul>
      </div>
    </form>
  );
};
