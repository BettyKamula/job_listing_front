import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Register_user } from '../helper/helper';

const CustomerSignupForm = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const registerUser = async (e) => {
    e.preventDefault();
    await Register_user(data, navigate);
  };
  const handleOnChange = (event, field) => {
    setData({ ...data, [field]: event.target.value });
  };
  return (
    <form onSubmit={registerUser}>
      <label>First Name</label>
      <input
        type='text'
        value={data.firstName}
        onChange={(event) => handleOnChange(event, 'firstName')}
      />
      <label>Last Name</label>
      <input
        type='text'
        value={data.lastName}
        onChange={(event) => handleOnChange(event, 'lastName')}
      />
      <label>Email</label>
      <input
        type='text'
        value={data.email}
        onChange={(event) => handleOnChange(event, 'email')}
      />
      <label>Create Password</label>
      <input
        type='text'
        value={data.password}
        onChange={(event) => handleOnChange(event, 'password')}
      />
      <button type='submit'>Submit</button>
    </form>
  );
};

export default CustomerSignupForm;
