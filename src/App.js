import React from 'react';
import Profile from './Components/Pages/Profile/Profile';

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3" >
            <div className="profile-part">
              <Profile></Profile>
            </div>
          </div>
          <div className="col-lg-9 main-part">
            main
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
