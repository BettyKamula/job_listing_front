import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
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
