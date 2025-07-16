import React from 'react';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import { useSelector, useDispatch } from 'react-redux';
import './NavBar.css';
import { demoLogin } from '../store/session';
const NavBar = () => {
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const demoLoginButton = async (e) => {
    e.preventDefault();
    await dispatch(demoLogin());
    history.push("/");
  };

  const onLoginClick = () => {
    history.push('/login');
  };

  const onSignupClick = () => {
    history.push('/signup');
  };

  return (
    <nav className='nav-bar'>
      <div className='nav-links'>
        {/* Show buttons only if not logged in */}
        {!user && (
          <>
            <button className="demo-login nav-btn-white" onClick={demoLoginButton}>
              Guest Login
            </button>
            {/* Show Login unless already on /login */}
            {location.pathname !== '/login' && (
              <button className="login-btn nav-btn-white" onClick={onLoginClick}>
                Login
              </button>
            )}
            {/* Show Sign Up unless already on /signup */}
            {location.pathname !== '/signup' && (
              <button className="signup nav-btn-white" onClick={onSignupClick}>
                Sign Up
              </button>
            )}
          </>
        )}

        {/* If logged in, show nav links and logout */}
        {user && (
          <>
            <div>
              <NavLink to='/' exact={true} activeClassName='active'>
                Home
              </NavLink>
            </div>
            <div>
              <NavLink to="/general-information">General-Info</NavLink>
            </div>
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
            <LogoutButton />
          </>
        )}
      </div>
    </nav>
  );
}

export default NavBar;