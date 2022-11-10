import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from 'app/components/Navbar';
import PostsList from 'features/posts/components/PostsList';
import RegisterForm from 'features/auth/components/RegisterForm';
import LoginForm from 'features/auth/components/LoginForm';
import { useSelector } from 'react-redux';
import { selectAuth } from 'features/auth/authSlice';
import UserProfile from 'features/users/components/UserProfile';
import EditProfileForm from 'features/users/components/EditProfileForm';
import styled from 'styled-components';

import "reset.scss";
import { colors } from 'app/abstracts/variables';

const Wrapper = styled.div`
  min-height: 100%;
  background: ${colors.bg};
  color: ${colors.txt};
  font-family: "Lato", sans-serif;
  font-size: 18px;
`

const AppWrapper = styled.div`
  margin-left: 5rem;
`

function App() {
  const PrivateRoute = ({ children }) => {
    const isAuth = useSelector((state) => selectAuth(state));
    return isAuth ? children : <Navigate to="/login" />;
  };

  return (
    <BrowserRouter basename="/Shmeeter">
      <Wrapper>
        <Navbar />
        <AppWrapper>
          <Routes>
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/profile" element={<PrivateRoute><UserProfile myprofile /></PrivateRoute>} />
            <Route path="/profile/edit" element={<PrivateRoute><EditProfileForm /></PrivateRoute>} />
            <Route path="/users/:userId" element={<PrivateRoute><UserProfile /></PrivateRoute>} />
            <Route path="/" element={<PostsList />} />
          </Routes>
        </AppWrapper>
      </Wrapper>
    </BrowserRouter>
  );
}

export default App;
