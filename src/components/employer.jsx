import { useState } from 'react';

const EmployerSignupForm = () => {
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    workEmail: '',
    createPassword: '',
    companyName: '',
  });
  const registerEmployer = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={registerEmployer}>
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
      <label> Work Email</label>
      <input
        type='text'
        value={data.workEmail}
        onChange={(e) => setData({ ...data, workEmail: e.target.value })}
      />
      <label> Create Password</label>
      <input
        type='text'
        value={data.createPassword}
        onChange={(e) => setData({ ...data, createPassword: e.target.value })}
      />
      <label> Company Name</label>
      <input type='text' />
      <button type='submit'>Submit</button>
    </form>
  );
};

export default EmployerSignupForm;
