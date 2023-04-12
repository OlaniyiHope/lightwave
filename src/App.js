
import New from './pages/New';
import { BrowserRouter as Router, Routes, Route, Outlet, createBrowserRouter,
} from 'react-router-dom'
import React from "react";
import Home from './pages/About';
import Work from './pages/Work';
import About from './pages/About';

function App() {
  return (
    <div >
   
      <Router>
      <Routes>
      <Route exact path="/" element={<New />}/>
      <Route exact path="/about" element={<About />}/>
      <Route exact path="/work" element={<Work />}/>
    
        </Routes>
      </Router>
    
    </div>
  );
}

export default App;
