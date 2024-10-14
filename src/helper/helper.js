import { toast } from 'react-hot-toast';

export const Register_user = async (data, navigate) => {
  try {
    const response = await fetch('http://127.0.0.1:5000/register_user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const formData = await response.json();
    if (response.ok) {
      toast.success('Registration successful:', formData);
      navigate('/login');
    } else {
      toast.error('Registration error:', formData);
    }
  } catch (error) {
    console.log(Error);
  }
};
