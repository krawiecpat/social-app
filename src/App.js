import React from 'react';
import './App.css';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Home from  './Home';
import Login from './Login';
import SignUp from './SignUp';

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="sign-up" element={<SignUp />} />
        </Route>
      </Routes>
    </div>
  );
}

function Layout() {
  return (
    <div>
      <header className='App-header'>
        <nav>
          <ul>
            <li>
              <Link className='nav-link' to="/">Home</Link>
            </li>
            <li>
              <Link className='nav-link' to="/login">Login </Link>
            </li>
            <li>
              <Link className='nav-link' to="/sign-up">Sign Up</Link>
            </li>
          </ul>
        </nav>
      </header>

      <Outlet />
    </div>
  );
}