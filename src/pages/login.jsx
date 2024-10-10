import { useState } from 'react';
import Navbar from '../components/Navbar';

export default function Login() {
  const [data, setData] = useState({
    email: '',
    Password: '',
  });
  const LoginUser = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <Navbar />
      <form onSubmit={LoginUser}>
        <label>Email</label>
        <input
          type='text'
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />
        <label>Password</label>
        <input
          type='text'
          value={data.Password}
          onChange={(e) => setData({ ...data, Password: e.target.value })}
        />
        <button type='submit'>LogIn</button>
      </form>
    </div>
  );
}
