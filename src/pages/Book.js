
import { React, useEffect } from 'react';


import imagess from "./images/wheel.jpg"
import wood from "./images/portfolio/gallery/g-woodcraft.jpg"
import wood1 from "./images/portfolio/woodcraft.jpg"
import bee from "./images/portfolio/gallery/g-beetle.jpg"
import bee1 from "./images/portfolio/the-beetle.jpg"
import shu from "./images/portfolio/gallery/g-shutterbug.jpg"
import shu1 from "./images/portfolio/lady-shutterbug.jpg"
import shu2 from "./images/portfolio/lady-shutterbug@2x.jpg"
import AOS from 'aos';

import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';


const Book = () => {
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
Book A Free Strategy Call With Our Team
</h1>



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


<section id="contact" class="s-contact">

<div class="overlay"></div>


<div class="row section-header" data-aos="fade-up">
    <div class="col-full">
        <h3 class="subhead">Contact Us</h3>
        <h1 class="display-2 display-2--light">Reach out for a new project or book a call</h1>
    </div>
</div>

<div class="row contact-content" data-aos="fade-up">
    
    <div class="contact-primary">

        <h3 class="h6">Book an appointment</h3>

        <form >
            <fieldset>

          
       <div style={{ height: "800px" }}>
       <iframe
         src="https://calendly.com/lightwavecreativeagencycall/30min"
         width="100%"
         height="100%"
         frameborder="0"
       ></iframe>
     </div>
            </fieldset>
        </form>
      
       
      
    </div> 

    <div class="contact-secondary">
        <div class="contact-info">

         
            <div class="cinfo">
                <h5>THIS ONBOARDING CALL IS PERFECT FOR:</h5>
                <p>
                

                Sustainable businesses looking for an agency they can trust and is 100% results-driven.
                
                Sustainable businesses that want to understand how they can 3x  revenue potential with UGC and Paid Social.
                
                Sustainable businesses looking to create lightwaves and rise above competition. 
                </p>
            </div>

            <h3 class="h6 hide-on-fullwidth">Contact Info</h3>

            <div class="cinfo">
                <h5>Where to Find Us</h5>
                <div class="cinfo">
                <h5>Email Us At</h5>
                <p>
                    contact@lightwavecreative@gmail.com<br />
                    info@lightwavecreative.com
                </p>
            </div>

            <div class="cinfo">
                <h5>Call Us At</h5>
                <p>
                    Mobile: (+44 7) 311 334436<br />
                  
                </p>
            </div>

            </div>
        

            <ul class="contact-social">
            <li>
            <a href="https://www.linkedin.com/company/lightwave-creative-agency"><i class="fa fa-linkedin"></i></a>
        </li>
        <li>
            <a href="https://instagram.com/lightwavecreative.io"><i class="fa fa-instagram"></i></a>
        </li>
        <li>
          <a href="#"><i class="fa fa-facebook"></i></a>
      </li>
              
            </ul> 

        </div> 
    </div> 

</div> 

</section>



<footer  style={{backgroundColor: "#000"}}>

<div class="row footer-main">

    <div class="col-six tab-full left footer-desc">

    <div class="footer-logo"></div>
    Lightwave Creative Agency is a team of innovative marketers who specialize in creating authentic and engaging content that tells the unique story of each brand we work with. Whatever your marketing goals, Lightwave is here to help you achieve them

</div>

    <div class="col-six tab-full right footer-subscribe">

        <h4>Get Notified</h4>
        <p>If you want us to help your business grow, you can subscribe to our platform and we will give you tips for enhanced business growth</p>
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
            <span>© Copyright Lightwave</span> 
          
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

export default Book;
