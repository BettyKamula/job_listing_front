import { Link } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

export default function Navbar() {
  return (
    <div>
      <Toaster position='bottom-right' toastOptions={{ duration: 2000 }} />
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/signup'>Sign Up</Link>
        </li>
        <li>
          <Link to='/login'>LogIn</Link>
        </li>
      </ul>
    </div>
  );
}
