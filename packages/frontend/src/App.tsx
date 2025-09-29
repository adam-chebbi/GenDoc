import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { SignInPage, SignUpPage, PostSignUpModal } from './components/Auth';
import Root from './routes/Root';
import LandingPage from './components/LandingPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<LandingPage />} />
          <Route path="sign-in" element={<SignInPage />} />
          <Route path="sign-up" element={<SignUpPage />} />
          <Route path="post-signup" element={<PostSignUpModal />} />
          <Route path="dashboard" element={<div>Dashboard Placeholder</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;