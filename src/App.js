import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import React, { useState } from 'react';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "#042743";
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = "white";
    }
  }
  return (
    <>
    {/* comments for router in Reactjs -> this router will not work with github pages so here I'm  commentin g it ! */}
    
      {/* <Router> */}

        <Navbar title="TextUtils " mode={mode} toggleMode={toggleMode} />
        <div className="container my-3" >

          {/* <Switch>  */}
            {/* <Route path="/about">
              <About/>
            </Route> */}
            {/* <Route path="/"> */}

              <TextForm heading="Enter Text" mode={mode} />

            {/* </Route>
          </Switch> */}
          {/* <About /> */}

        </div>
        
      {/* </Router> */}
    </>
  );
}

export default App;
