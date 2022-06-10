import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Contact from './Components/Pages/Contact/Contact';
import Profile from './Components/Pages/Profile/Profile';

function App() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3" >
            <div className="profile-part">
              <Profile></Profile>
            </div>
          </div>
          <div className="col-lg-9 main-part">
            main page

            <Routes>
              <Route path='/contact' element={<Contact></Contact>}></Route>
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
