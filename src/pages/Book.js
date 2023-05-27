
import { React, useEffect } from 'react';
import wood from "./images/portfolio/gallery/g-woodcraft.jpg"
import wood1 from "./images/portfolio/woodcraft.jpg"
import bee from "./images/portfolio/gallery/g-beetle.jpg"
import bee1 from "./images/portfolio/the-beetle.jpg"
import shu from "./images/portfolio/gallery/g-shutterbug.jpg"
import shu1 from "./images/portfolio/lady-shutterbug.jpg"
import shu2 from "./images/portfolio/lady-shutterbug@2x.jpg"
import AOS from 'aos';
import "./boot.css"
import { GoPrimitiveDot } from 'react-icons/go';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import "./mainbook.css"

const Book = () => {
    useEffect(() => {
        AOS.init();
      }, [])

  return (
   
<div>
<div class="page-banner-wrap3 bg-cover3">
<div class="container">
    <div class="row">
        <div class="col-12 col-lg-12">
            <div class="page-heading3 text-white">
                <h1 style={{color: "white"}}>Book a free strategy call with our team - Book Now</h1>
                <h1><a className="button3 breadcrumb-item3" href="/book">Book a call</a></h1>
            </div>
         
        </div>
    </div>
</div>
</div>



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
                

                <GoPrimitiveDot  /> Sustainable businesses looking for an agency they can trust and is 100% results-driven.<br></br>
                
                <GoPrimitiveDot  />  Sustainable businesses that want to understand how they can 3x  revenue potential with UGC and Paid Social.<br></br>
                
                <GoPrimitiveDot  />   Sustainable businesses looking to create lightwaves and rise above competition. 
                </p>
            </div>

            <h3 class="h6 hide-on-fullwidth">Contact Info</h3>

            <div class="cinfo">
                <h5>Where to Find Us</h5>
                <div class="cinfo">
                <h5>Email Us At</h5>
                <p>
                    contact@lightwavecreative@gmail.com<br />
                    info@lightwavecreative.io
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


<footer style={{backgroundColor: "#000"}}>

<div class="row footer-main">

    <div class="col-six tab-full left footer-desc">
    <div class="footer-logo"></div>
    Lightwave is a digital marketing powerhouse on a mission to help supercharge sustainable brands and break through the noise. We 
    offer user-generated constent, paid social, SEM, sustanable website development and sustainable mobile 
    development. We are proud to be at hte forefront of driving positive change throught our creative 
    solutions, and we're excited to partner with businesses that share our vision for 
    a better, brighter future.
</div>


    <div class="col-six tab-full right footer-subscribe">

        <h4>Get Notified</h4>
        <p>If you want us to help your business grow, you can subscribe to our platform and we will give you tips for enhanced business growth.</p>
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

export default Book;
