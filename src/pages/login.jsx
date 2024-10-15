import { useState } from 'react';
import Navbar from '../components/Navbar';
import { toast } from 'react-hot-toast';

export default function LoginUserForm() {
  const [data, setData] = useState({
    email: '',
    password: '',
  });
  const Login = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://127.0.0.1:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const formData = await response.json();
      if (response.ok) {
        toast.success('Login successful:', formData);
        localStorage.setItem('token', data.token);
      } else {
        toast.error('Registration error:', formData);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleOnChange = (event, field) => {
    setData({ ...data, [field]: event.target.value });
  };
  return (
    <div>
      <Navbar />
      <form onSubmit={Login}>
        <label>Email</label>
        <input
          type='text'
          value={data.email}
          onChange={(event) => handleOnChange(event, 'email')}
        />
        <label>Password</label>
        <input
          type='text'
          value={data.password}
          onChange={(event) => handleOnChange(event, 'password')}
        />
        <button type='submit'>LogIn</button>
      </form>
    </div>
  );
}
