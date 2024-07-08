import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import MiniDrawer from './components/driver-side/layout/MiniDrawer';
import AddCarPage from './pages/driver/AddCarPage';
import CarsPage from './pages/driver/CarsPage';
import DashboardPage from './pages/driver/DashboardPage';
import ManageDriverPage from './pages/driver/ManageDriverPage';
import ForgotPassword from './pages/forgotpassword/ForgotPassword';
import Login from './pages/login/Login';
import Password from './pages/signup/Password';
import PersonalInfo from './pages/signup/PersonalInfo';
import UploadCnic from './pages/signup/UploadCnic';
import AssignDriverPage from './pages/driver/AssignDriverPage';

function App() {
  return (
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

        {/* DriverSide - Routes */}
        <Route path="/driver" element={<MiniDrawer />}>
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="cars" element={<CarsPage />} />
          <Route path="cars/add-car" element={<AddCarPage />} />
          <Route path="cars/assign-driver" element={<AssignDriverPage />} />
          <Route path="manage-drivers" element={<ManageDriverPage />} />
        </Route>

        {/* Global - Page Not Found - Route */}
        <Route path="*" element={<div>Page not found</div>} />
      </Routes>
    </Router>
  );
}

export default App;
