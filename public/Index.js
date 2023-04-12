
import New from './pages/New';
import { BrowserRouter as Router, Routes, Route, Outlet, createBrowserRouter,
} from 'react-router-dom'
import React from "react";
import Home from './pages/Home';

function Index() {
  return (
    <div >
   
    <header class="s-header">

     
<div class="header-logo">
  <a class="site-logo" href="index.html">
      <img src="images/logo.png" alt="Homepage" />
  </a>
</div>
<nav class="header-nav">

    <a  class="header-nav__close" title="close"><span>Close</span></a>

    <div class="header-nav__content">
        <h3>Close</h3>
        
        <ul class="header-nav__list">
            <li class="current"><a class="smoothscroll"  href="home" title="home">Home</a></li>
            <li>  <a class="smoothscroll"  href="/src/pages/Home.js" title="about">About</a></li>
            <li><a class="smoothscroll"  href="#services" title="services">Strategy</a></li>
            <li><a class="smoothscroll"  href="#works" title="works">Works</a></li>
            <li><a class="smoothscroll"  href="#clients" title="clients">Testimonials</a></li>
            <li><a class="smoothscroll"  href="#clients" title="clients">Book a call</a></li>
      
        </ul>

        <p>Perspiciatis hic praesentium nesciunt. Et neque a dolorum <a href='#0'>voluptatem</a> porro iusto sequi veritatis libero enim. Iusto id suscipit veritatis neque reprehenderit.</p>

        <ul class="header-nav__social">
            <li>
                <a href="#"><i class="fa fa-facebook"></i></a>
            </li>
            <li>
                <a href="#"><i class="fa fa-twitter"></i></a>
            </li>
            <li>
                <a href="#"><i class="fa fa-instagram"></i></a>
            </li>
            <li>
                <a href="#"><i class="fa fa-behance"></i></a>
            </li>
            <li>
                <a href="#"><i class="fa fa-dribbble"></i></a>
            </li>
        </ul>

    </div> 

</nav>  

<a class="header-menu-toggle" href="#0">
    <span class="header-menu-text">Menu</span>
    <span class="header-menu-icon"></span>
</a>

</header> 
    
    </div>
  );
}

export default Index;
