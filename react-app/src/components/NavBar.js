import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import { useSelector, useDispatch } from 'react-redux';
import './NavBar.css'; // Assuming you have a CSS file for styling the NavBar
import { demoLogin } from '../store/session';




const NavBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Example state
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch()
  const history = useHistory()

  const demoLoginButton = async (e) => {
    e.preventDefault();
    dispatch(demoLogin());
    setIsLoggedIn(true)
    history.push("/");
  };



  return (
    <nav className='nav-bar'>
      <div className='nav-links'>
        <div className='demo-login'>
          {!user ? (
            <button
              sx={{ fontWeight: 550, backgroundColor: "#fb6c45", color: "white", "&:hover": { backgroundColor: "white", color: '#fb6c45' } }}
              variant="contained"
              className="demo-login"
              onClick={demoLoginButton}
            >
              Guest Login
            </button>
          ) : null}

        </div>


          <NavLink to='/menus' exact={true} activeClassName='active'>
            Menu
          </NavLink>

        {!isLoggedIn && !user ? (
          <div>
            <NavLink to='/login' exact={true} activeClassName='active'>
              Login
            </NavLink>
          </div>
        ) : null}
 
        <section>
          <a href="/general-information">General-Info</a>
        </section>
          <div>
            <NavLink to='/' exact={true} activeClassName='active'>
            Home
            </NavLink>
          </div>

        {/* <div>
          <NavLink to={`/users/${user.id}`} exact={true} activeClassName='active'>
            Profile
          </NavLink>
        </div>
        )} */}



        <LogoutButton />
      </div>



    </nav>

  );
}

export default NavBar;