import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import { authenticate } from './store/session';
import HomePage from './components/HomePage';
import Menus from './components/Menus';

import GeneralInformation from './components/GeneralInformation';
import StepsOfService from './components/StepsOfService';
import Standards from './components/Standards';
import videoAlias from '../../react-app/src/assets/video.mp4'
import OverNightFlow from './components/OverNightFlow';
import Profile from './components/Profile';
import videoGreen from './assets/video-green.mp4'
function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>

        <ProtectedRoute path='/users/:userId' exact={true} >
          <Profile />
        </ProtectedRoute>
        <ProtectedRoute path='/' exact={true} >
          <HomePage />

        </ProtectedRoute>
        <ProtectedRoute path='/menu-info' exact={true} >
          <Menus />
        </ProtectedRoute>

        <ProtectedRoute path='/general-information' exact={true} >
          <GeneralInformation />
        </ProtectedRoute>
        <ProtectedRoute path='/menus'>
        <Menus />
        </ProtectedRoute>
        <ProtectedRoute path='/steps-of-service' exact={true} >
          <StepsOfService />
        </ProtectedRoute>

        <ProtectedRoute path='/standards' exact={true} >
          <Standards />
        </ProtectedRoute>

        <ProtectedRoute path='/overnightflow' exact={true} >
          <OverNightFlow />
          </ProtectedRoute>


      </Switch>
    </BrowserRouter>
  );
}

export default App;
