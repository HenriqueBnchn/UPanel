import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar.jsx';
import Header from './components/Header/Header.jsx';
import Home from './components/Home/Home.jsx';
import Folder from './components/Folder/Folder.jsx';
import Network from './components/Network/Network.jsx';
import Terminal from './pages/Terminal.jsx';
import './App.css';


function App() {
  return (
    <Router>
      <div className="app light">
        <Sidebar />
        <div className="main">
          <Header />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/folder" element={<Folder />} />
              <Route path="/network" element={<Network />} />
              <Route path="/terminal" element={<Terminal />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
