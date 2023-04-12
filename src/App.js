
import New from './pages/New';
import { BrowserRouter as Router, Routes, Route, Outlet, createBrowserRouter,
} from 'react-router-dom'
import React from "react";
import Home from './pages/Home';
import Work from './pages/Work';

function App() {
  return (
    <div >
   
      <Router>
      <Routes>
      <Route exact path="/" element={<New />}/>
      <Route exact path="/home" element={<Home />}/>
      <Route exact path="/work" element={<Work />}/>
    
        </Routes>
      </Router>
    
    </div>
  );
}

export default App;
