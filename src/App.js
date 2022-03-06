import './App.css';
import React from 'react';

import BeforeLogin from './components/BeforeLogin';
import Profile from './components/Profile';
import CLickContext from './context/click-context';

function App() {
  return (
   <React.Fragment>
      <BeforeLogin/>
      {/* <Profile/> */}
   </React.Fragment>
  );
}

export default App;
