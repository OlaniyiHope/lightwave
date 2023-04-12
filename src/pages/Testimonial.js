
import { React, useEffect } from 'react';


import imagess from "./images/work.avif.avif"
import wood from "./images/portfolio/gallery/g-woodcraft.jpg"
import wood1 from "./images/portfolio/woodcraft.jpg"
import bee from "./images/portfolio/gallery/g-beetle.jpg"
import bee1 from "./images/portfolio/the-beetle.jpg"
import shu from "./images/portfolio/gallery/g-shutterbug.jpg"
import shu1 from "./images/portfolio/lady-shutterbug.jpg"
import shu2 from "./images/portfolio/lady-shutterbug@2x.jpg"
import AOS from 'aos';

import 'aos/dist/aos.css';


const Testimonial = () => {
    useEffect(() => {
        AOS.init();
      }, [])

  return (
   
<div>
<section id="home" class="s-home target-section" data-parallax="scroll" data-image-src={imagess} data-natural-width='3000' data-natural-height='2000' data-position-y='center'>
<div class="overlay"></div>
<div class="shadow-overlay"></div>
<div class="home-content">

<div class="row home-content__main">


<h1 data-aos="zoom-in">
See Why our customers love LightWave
</h1>



<div class="home-content__buttons">
   
   
  
    <a href="/book" class="smoothscroll btn btn--stroke">
    Book a call
    </a>
</div>

</div>
<div class="home-content__scroll">
                <a href="#about" class="scroll-link smoothscroll">
                    <span>Scroll Down</span>
                </a>
            </div>
            <div class="home-content__line"></div>
            </div>

            <ul class="home-social">
            <li>
                <a href="#0"><i class="fa fa-facebook" aria-hidden="true"></i><span>Facebook</span></a>
            </li>
            <li>
                <a href="#0"><i class="fa fa-twitter" aria-hidden="true"></i><span>Twiiter</span></a>
            </li>
            <li>
                <a href="#0"><i class="fa fa-instagram" aria-hidden="true"></i><span>Instagram</span></a>
            </li>
         
        </ul>  

      
</section>





<div class="row clients-testimonials" data-aos="fade-up">
      <h3 class="subhead">Our Testimomials</h3>
    <div class="col-full">
        <div class="testimonials">
      
            <div class="testimonials__slide">

                <p>Qui ipsam temporibus quisquam vel. Maiores eos cumque distinctio nam accusantium ipsum. 
                Laudantium quia consequatur molestias delectus culpa facere hic dolores aperiam. Accusantium quos qui praesentium corpori.
                Excepturi nam cupiditate culpa doloremque deleniti repellat.</p>

                <img src="images/avatars/user-01.jpg" alt="Author image" class="testimonials__avatar" />
                <div class="testimonials__info">
                    <span class="testimonials__name">Tim Cook</span> 
                    <span class="testimonials__pos">CEO, Apple</span>
                </div>

            </div>

            <div class="testimonials__slide">
                
                <p>Excepturi nam cupiditate culpa doloremque deleniti repellat. Veniam quos repellat voluptas animi adipisci.
                Nisi eaque consequatur. Quasi voluptas eius distinctio. Atque eos maxime. Qui ipsam temporibus quisquam vel.</p>

                <img src="images/avatars/user-05.jpg" alt="Author image" class="testimonials__avatar" />
                <div class="testimonials__info">
                    <span class="testimonials__name">Sundar Pichai</span> 
                    <span class="testimonials__pos">CEO, Google</span>
                </div>

            </div>

            <div class="testimonials__slide">
                
                <p>Repellat dignissimos libero. Qui sed at corrupti expedita voluptas odit. Nihil ea quia nesciunt. Ducimus aut sed ipsam.  
                Autem eaque officia cum exercitationem sunt voluptatum accusamus. Quasi voluptas eius distinctio.</p>

                <img src="images/avatars/user-02.jpg" alt="Author image" class="testimonials__avatar" />
                <div class="testimonials__info">
                    <span class="testimonials__name">Satya Nadella</span> 
                    <span class="testimonials__pos">CEO, Microsoft</span>
                </div>

            </div>

        </div>
        
    </div> 
</div> 
<footer>

<div class="row footer-main">

    <div class="col-six tab-full left footer-desc">

        <div class="footer-logo"></div>
        Proin eget tortor risus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Nulla porttitor accumsan tincidunt. Nulla porttitor accumsan tincidunt. Quaerat voluptas autem necessitatibus vitae aut.

    </div>

    <div class="col-six tab-full right footer-subscribe">

        <h4>Get Notified</h4>
        <p>Quia quo qui sed odit. Quaerat voluptas autem necessitatibus vitae aut non alias sed quia. Ut itaque enim optio ut excepturi deserunt iusto porro.</p>

        <div class="subscribe-form">
            <form id="mc-form" class="group" novalidate="true">
                <input type="email" value="" name="EMAIL" class="email" id="mc-email" placeholder="Email Address" required="" />
                <input type="submit" name="subscribe" value="Subscribe" />
                <label for="mc-email" class="subscribe-message"></label>
            </form>
        </div>

    </div>

</div> 

<div class="row footer-bottom">

    <div class="col-twelve">
        <div class="copyright">
            <span>© Copyright LightWave</span> 
            
        </div>

        <div class="go-top">
            <a class="smoothscroll" title="Back to Top" href="#top"><i class="icon-arrow-up" aria-hidden="true"></i></a>
        </div>
    </div>

</div>

</footer>
</div>
  );
};

export default Testimonial;
