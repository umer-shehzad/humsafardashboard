import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import MiniDrawer from './components/MiniDrawer';
import PersonalInfo from './pages/signup/PersonalInfo';
import Password from './pages/signup/Password';
import Confirmation from './pages/signup/Confirmation';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/signup/personal-info" element={<PersonalInfo />} />
          {/* <Route path="/signup/upload-cnic" element={<UploadCnic />} /> */}
          <Route path="/signup/password" element={<Password />} />
          <Route path="/signup/confirmation" element={<Confirmation />} />
          {/* <Route path="*" element={<div>Page not found</div>} /> */}
        </Routes>
      </Router>
      {/* <MiniDrawer /> */}
    </>
  )
}

export default App
