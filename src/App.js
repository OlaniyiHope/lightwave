
import New from './pages/New';
import { BrowserRouter as Router, Routes, Route, Outlet, createBrowserRouter,
} from 'react-router-dom'
import React from "react";
import Home from './pages/Home';

function App() {
  return (
    <div >
      <Router>
      <Routes>
      <Route exact path="/" element={<New />}/>
      <Route exact path="/home" element={<Home />}/>
    
        </Routes>
      </Router>
    
    </div>
  );
}

export default App;
