
import icons from "./Icons/1.png"
import icons2 from "./Icons/2.png"
import icons3 from "./Icons/3.png"
import { React, useEffect, useRef } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';
import "./wraps.css"
import Team from "./Team";
import New2 from "./New2"
import Slidde from "./VideoCarousel";
import Ban from "./Ban";
import { Main2 } from "./Main2";

const New = () => {

    const videoEl = useRef(null);

    const attemptPlay = () => {

        
      videoEl &&
        videoEl.current &&
        videoEl.current.play().catch(error => {
          console.error("Error attempting to play", error);
        });
    };
  
    useEffect(() => {
      attemptPlay();
    }, []);

    
    const playerRef = useRef(null);
    useEffect(() => {
        AOS.init();
      }, [])
  return (
  
<>

<div className="dae"><iframe src="https://player.vimeo.com/video/823505514?h=e6cdd9d992&amp;autopause=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style={{position:'absolute', top:'0', left:'0', width:'100%', height:'100%'}} ></iframe></div>

<section id='about' class="s-about">

        <div class="row section-header has-bottom-sep" data-aos="fade-up">
            <div class="col-full">
                <h3 class="subhead subhead--dark">Who we are</h3>
                <h1 class=" display-1--light">Empowering Sustainable Brands through Digital Marketing</h1>
            </div>
        </div> 

        <div class="row about-desc" data-aos="fade-up">
            <div class="col-full">
                <p >
                Our unique blend of User-Generated Content, Paid Social, SEM, and cutting-edge technology positions us as pioneers in the sustainable e-commerce industry. We’re proud to be at the forefront of driving positive change through our creative solutions, and we’re excited to partner with businesses that share our visions for a better, brighter future.
                </p>
            </div>
       
        </div> 
       
       

        <div class="about__line"></div>

    </section> 
  
    <section id='services' class="s-services">

<div class="row section-header has-bottom-sep" data-aos="fade-up">
    <div class="col-full">
        <h3 class="subhead">What We Do</h3>
        <h1 class="display-2">OUR UNIQUE SYSTEM THAT GUARANTEES HIGH ROI</h1>
        <p>Our CAF system supercharges your sales pipeline by generating high-converting User Generated Content (UGC), driving engagement and traffic through paid social and SEM, and optimising the entire customer journey for maximum impact.
        Our data-driven insights and full-funnel approach guarantee that every marketing pound spent produces measurable outcomes
            </p>
            
    </div>
</div> 

<div class="row services-list block-1-2 block-tab-full">

    <div class="col-block service-item" data-aos="fade-up">
        <div class="service-icon">
   
       <img src={icons} style={{width: '100px', height: "100px"}}/>
        </div>
        <div class="service-text">
            <h3 class="h2">Creatives that convert</h3>
            <p>Tap into the Power of Highly Authentic User-Generated Content to Build Trust, Increase Engagement, and Drive Customer Loyalty
            </p>
        </div>
    </div>

    <div class="col-block service-item" data-aos="fade-up">
        <div class="service-icon">
        <img src={icons2} style={{width: '100px', height: "100px"}}/>
        </div>
        <div class="service-text">
            <h3 class="h2">Audience that acts</h3>
            <p>Understand Your Target Audience Fully. Our Paid Social Specialists Drive Action with Data-Driven Strategies
            </p>
        </div>
    </div>

    <div class="col-block service-item" data-aos="fade-up">
        <div class="service-icon">
        <img src={icons3} style={{width: '100px', height: "100px"}}/>
        </div>  
        <div class="service-text">
            <h3 class="h2">Full funnel approach</h3>
            <p>SEM and website optimisation that attract, engage, and convert potential customers at every stage of the sales funnel
            </p>
        </div>
    </div>

  



</div> 


</section> 

<section id='works' class="s-works">

<div class="intro-wrap">
        
    <div class="row section-header has-bottom-sep light-sep" data-aos="fade-up">
        <div class="col-full">
            
            <h1 class="display-2 display-2--light">A Showcase of some of our Highest Converting Creatives</h1>
        </div>
    </div> 
    <div class="row works-content">
    <Slidde />
    </div> 
    
</div> 




</section>
<section id="clients" class="s-clients">
<h3 class="subhead " style={{textAlign: 'center'}}>Testimonial</h3>
<Team />
{/*<Test />*/}

<Ban />

</section>
<section id="contact" class="s-contact">

<div class="row section-header" data-aos="fade-up">
    <div class="col-full">
        <h3 class="subhead" style={{color: "#fff"}}>Contact Us</h3>
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
                    Phone: (+44 7)867 266523<br />
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
            <span>© Copyright LightWave</span> 
            
        </div>

        <div class="go-top">
            <a class="smoothscroll" title="Back to Top" href="#top"><i class="icon-arrow-up" aria-hidden="true"></i></a>
        </div>
    </div>

</div>

</footer>




</>
  );
};

export default New;
