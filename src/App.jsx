import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import MiniDrawer from './components/MiniDrawer';
import PersonalInfo from './pages/signup/PersonalInfo';
import Password from './pages/signup/Password';
import UploadCnic from './pages/signup/UploadCnic';
import Login from './pages/login/Login';
import ForgotPassword from './pages/forgotpassword/ForgotPassword';

function App() {

  return (
    <>
      <Router>
        <Routes>
          {/* Signup - Routes */}
          <Route path="/signup">
            <Route path="personal-info" element={<PersonalInfo />} />
            <Route path="upload-cnic" element={<UploadCnic />} />
            <Route path="password" element={<Password />} />
          </Route>

          {/* Login - Route */}
          <Route path="/login" element={<Login />} />

          {/* Forgot - Route */}
          <Route path="/forgot-password" element={<ForgotPassword />} />

          {/* global - Page Not Found - Route */}
          <Route path="*" element={<div>Page not found</div>} />
        </Routes>
      </Router>
      {/* <MiniDrawer /> */}
    </>
  )
}

export default App
