import { useState } from 'react';

const CustomerSignupForm = () => {
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    createPassword: '',
  });

  const registerUser = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={registerUser}>
      <label>First Name</label>
      <input
        type='text'
        value={data.firstName}
        onChange={(e) => setData({ ...data, firstName: e.target.value })}
      />
      <label>Last Name</label>
      <input
        type='text'
        value={data.lastName}
        onChange={(e) => setData({ ...data, lastName: e.target.value })}
      />
      <label>Email</label>
      <input
        type='text'
        value={data.email}
        onChange={(e) => setData({ ...data, email: e.target.value })}
      />
      <label>Create Password</label>
      <input
        type='text'
        value={data.createPassword}
        onChange={(e) => setData({ ...data, createPassword: e.target.value })}
      />
      <button type='submit'>Submit</button>
    </form>
  );
};

export default CustomerSignupForm;
