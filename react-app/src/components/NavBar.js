import React, { useState } from 'react';
import { NavLink, useHistory, useLocation } from 'react-router-dom'; // <-- import useLocation
import LogoutButton from './auth/LogoutButton';
import { useSelector, useDispatch } from 'react-redux';
import './NavBar.css';
import { demoLogin } from '../store/session';

const NavBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation(); // <-- get current location

  const demoLoginButton = async (e) => {
    e.preventDefault();
    dispatch(demoLogin());
    setIsLoggedIn(true);
    history.push("/");
  };

  return (
    <nav className='nav-bar'>
      <div className='nav-links'>
        {!user && (
          <div className='signup'>
            <NavLink to='/signup' exact={true} activeClassName='active'>
              Sign Up
            </NavLink>
          </div>
        )}


        {!user && !isLoggedIn && location.pathname !== '/login' ? (
          <button
            className="demo-login"
            onClick={demoLoginButton}
          >
            Guest Login
          </button>
        ) : user === null && location.pathname !== '/login' ? (
          <NavLink to='/login'>
            Login
          </NavLink>
        ) : null}

        {isLoggedIn && user ? (
          <div>
            <section>
              <NavLink to='/' exact={true} activeClassName='active'>
                Home
              </NavLink>
            </section>
            <section>
              <NavLink to="/general-information">General-Info</NavLink>
            </section>
            <section>
              <NavLink to='/steps-of-service'>
                Steps of Service
              </NavLink>
            </section>
            <section>
              <NavLink to='/menus' exact={true} activeClassName='active'>
                Menu
              </NavLink>
            </section>
          </div>
        ) : null}

        <LogoutButton />
      </div>
    </nav>
  );
}

export default NavBar;