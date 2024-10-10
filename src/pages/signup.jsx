import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function Signup() {
  return (
    <div>
      <ul>
        <li>
          <Link to='customer'>Customer</Link>
        </li>
        <li>
          <Link to='employer'>Employer</Link>
        </li>
      </ul>
      <div>
        {/* This is where the nested routes will be rendered */}
        <Outlet />
      </div>
    </div>
  );
}
