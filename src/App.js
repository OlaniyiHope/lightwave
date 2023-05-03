
import New from './pages/New';
import { BrowserRouter as Router, Routes, Route, Outlet, createBrowserRouter,
} from 'react-router-dom'
import React from "react";
import Home from './pages/About';
import About from './pages/About';
import Testimonial from './pages/Testimonial';
import Book from './pages/Book';
import Services from './pages/Services';
import { Banner } from './pages/Banner';
import New2 from "./pages/New2"

function App() {
  return (
    <div >
    
      <Router>
      <Routes>
     
     
      <Route exact path="/" element={<New />}/>
      <Route exact path="/banner" element={<Banner />}/>
      <Route exact path="/about" element={<About />}/>
      <Route exact path="/new" element={<New2 />}/>
      <Route exact path="/services" element={<Services />}/>
      <Route exact path="/testimonials" element={<Testimonial />}/>
      <Route exact path="/book" element={<Book />}/>
    
        </Routes>
      </Router>
    
    </div>
  );
}

export default App;
