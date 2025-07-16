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

        {user ? (
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


        {!isLoggedIn && !user ? (
          <div className='demo-login'>

            <NavLink to='/login' exact={true} >
              Login
            </NavLink>


            <button
              sx={{ fontWeight: 550, backgroundColor: "#fb6c45", color: "white", "&:hover": { backgroundColor: "white", color: '#fb6c45' } }}
              variant="contained"
              className="demo-login"
              onClick={demoLoginButton}
            >
              Guest Login
            </button>



          </div>
        ) : null}


        <div className='logout-component'>
        <LogoutButton />
      </div>
      </div >
    </nav>
  );
}

export default NavBar;