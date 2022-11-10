import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { store } from 'app/store';
import { Provider } from 'react-redux';
import { apiSlice } from 'features/api/apiSlice';
import { authLogin, triggerAuth } from 'features/auth/authSlice';
import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';

const token = Cookies.get("token");

const initializeAuth = async () => {
  const payload = await store.dispatch(apiSlice.endpoints.getMe.initiate());

  store.dispatch(authLogin({ userId: payload.data.id }));
}

try {
  jwtDecode(token);
  store.dispatch(triggerAuth());
  initializeAuth();
} catch {
  console.log("no user connected");
}



render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
