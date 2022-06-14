import React from 'react';
import { Routes as RoutesDom } from 'react-router-dom';
import { RenderRoutes, Routes } from './routes';
import ErrorSnackbar from 'components/Snackbar/ErrorSnackbar';
import SuccessSnackbar from 'components/Snackbar/SuccessSnackbar';

function App() {
  const user = {
    userInfo: {
      username: '',
      email: '',
    },
    token: '',
    isAuth: false,
    isAdmin: false,
  };
  return (
    <div className='App'>
      <ErrorSnackbar />
      <SuccessSnackbar />
      <RoutesDom>{RenderRoutes(Routes, user, location)}</RoutesDom>
    </div>
  );
}

export default App;
