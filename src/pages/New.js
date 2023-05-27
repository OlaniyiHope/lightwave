
import icons from "./Icons/1.png"
import icons2 from "./Icons/2.png"
import icons3 from "./Icons/3.png"
import { React, useEffect, useRef } from 'react';
import Faq from "./Faq"
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./wraps.css"
import Team from "./Team";
import New2 from "./New2"
import Slidde from "./VideoCarousel";
import VideoSlide from "../components/VideoSlide"
import Ban from "./Ban";
import { Main2 } from "./Main2";
import { GoPrimitiveDot } from 'react-icons/go';
import BannerSlide from "../component/BannerSlide";
const New = () => {
   
    
    useEffect(() => {
        AOS.init();
      }, [])
  return (
  
<>
<VideoSlide />

<section id='about' class="s-about" >

        <div class="row section-header has-bottom-sep" data-aos="fade-up" >
            <div class="col-full"  >
            <h2 class=" display-1--light" style={{marginTop: "20px", color: "black"}} >WHO WE ARE</h2>

                <h1 class=" display-1--light" style={{fontSize: "25px"}}>Empowering Sustainable Brands through Digital Marketing</h1>
            </div>
        </div> 

        <div class="row about-desc" data-aos="fade-up" >
            <div class="col-full"  >
                <p >
                Our unique blend of User-Generated Content, Paid Social, SEM, Sustainable website/Software development and cutting-edge technology positions us as pioneers in the sustainable e-commerce industry. We’re proud to be at the forefront of driving positive change through our creative solutions, and we’re excited to partner with businesses that share our visions for a better, brighter future.
                </p>
            </div>
       
        </div> 


        
        <div class="about__line"></div>

    </section> 
  
    <section id='services' class="s-services" >

<div class="row section-header has-bottom-sep" data-aos="fade-up" >
    <div class="col-full" >
        <h3 class="subhead" >What We Do</h3>
        <h1 class="display-2" style={{ color: "black", fontSize: "30px"}}>OUR UNIQUE SYSTEM THAT GUARANTEES HIGH ROI</h1>
        <p style={{fontSize: "18px"}}>Our CAF system supercharges your sales pipeline by generating high-converting User Generated Content (UGC), driving engagement and traffic through paid social and SEM,  and optimising the entire customer journey for maximum impact.
        Our data-driven insights and full-funnel approach guarantee that every marketing pound spent produces measurable outcomes
            </p>
            
    </div>
</div> 

<div class="row services-list block-1-3 block-tab-full" style={{margin: "auto", textAlign: "center"}}>

    <div class="col-block service-item" data-aos="fade-up" style={{margin: "auto", textAlign: "center"}}>
        <div class="service-icon">
   
       <img src={icons} style={{width: '100px', height: "100px"}} />
        </div>
        <div class="service-text">
            <h3 class="h2">Creatives that convert</h3>
            <p style={{fontSize: "18px"}}>Tap into the Power of Highly Authentic User-Generated Content to Build Trust, Increase Engagement, and Drive Customer Loyalty
            </p>
        </div>
    </div>

    <div class="col-block service-item" data-aos="fade-up">
        <div class="service-icon">
        <img src={icons2} style={{width: '100px', height: "100px"}}/>
        </div>
        <div class="service-text">
            <h3 class="h2">Audience that acts</h3>
            <p style={{fontSize: "18px"}}>Understand Your Target Audience Fully. Our Paid Social Specialists Drive Action with Data-Driven Strategies
            </p>
        </div>
    </div>

    <div class="col-block service-item" data-aos="fade-up">
        <div class="service-icon">
        <img src={icons3} style={{width: '100px', height: "100px"}}/>
        </div>  
        <div class="service-text">
            <h3 class="h2">Full funnel approach</h3>
            <p style={{fontSize: "18px"}}>SEM and website optimisation that attract, engage, and convert potential customers at every stage of the sales funnel
            </p>
        </div>
    </div>

  


        
</div> 


</section> 

<section id='works' className="s-works" style={{marginTop: '30px'}}>

<div className="intro-wrap">
        
    <div className="row section-header has-bottom-sep light-sep" data-aos="fade-up">
        <div className="col-full">
            
            <h1 className="display-2 display-2--light" style={{fontSize: "32px"}}>A Showcase of some of our Highest Converting Creatives</h1>
            <h3 className="subhead " style={{color: "#fff;", fontSize: "17px"}}>Made in Collaboration by our Creative Partner</h3>
        </div>
      
    </div> 
  <VideoSlide />
</div> 



</section> 
<h3 class="subhead " style={{textAlign: 'center', marginTop: "20px"}}>Frequently Asked questions</h3>
<Faq />
<h3 class="subhead " style={{textAlign: 'center', marginBottom: "10px"}}>Testimonial</h3>
<Team />
{/*<Test />*/}


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




</>
  );
};

export default New;
