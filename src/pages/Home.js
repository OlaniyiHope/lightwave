
import { Fragment, React, useState } from 'react';




const Home = () => {
 

  return (
   
<>
 
<nav class="header-nav">

    <a href="" class="header-nav__close" title="close"><span>Close</span></a>

    <div class="header-nav__content">
        <h3>Navigation</h3>
        
        <ul class="header-nav__list">
            <li class="current"><a class="smoothscroll"  href="#home" title="home">Home</a></li>
            <li><a class="smoothscroll"   title="about">About</a></li>
            <li><a class="smoothscroll"   title="services">Services</a></li>
            <li><a class="smoothscroll"  title="works">Works</a></li>
            <li><a class="smoothscroll" title="clients">Clients</a></li>
            <li><a class="smoothscroll"  title="contact">Contact</a></li>
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
    

</>
  );
};

export default Home;
