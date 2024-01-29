import axios from 'axios';
import { useState } from 'react';

export default ({ url, method, body, onSuccess }) => {
  const [errors, setErrors] = useState(null);

  const doRequest = async () => {
    try {
      setErrors(null);
      const response = await axios[method](url, body);
      if (onSuccess) onSuccess();
      return response.data;
    } catch (error) {
      setErrors(
        <div style={{ marginTop: '10px' }} className='alert alert-danger'>
          <h4>Oops...</h4>
          <ul className='my-0'>
            {error.response.data.errors.map((error) => {
              return <li key={error.message}>{error.message}</li>;
            })}
          </ul>
        </div>
      );
    }
  };

  return { doRequest, errors };
};
