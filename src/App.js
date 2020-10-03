import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="app__sidebar">
                <Sidebar />
              </div>
            </div>
            <div className="col-lg-9 app__main-content">
              <Navbar />
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
