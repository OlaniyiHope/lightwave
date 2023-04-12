
import { React, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import imagess from "./sustain.jpeg"
import AOS from 'aos';
import 'aos/dist/aos.css';
const About = () => {
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
LightWave Amplifies your brand's voice and create a sustainable brand for you
</h1>



<div class="home-content__buttons">
   
   
  
    <a href="#about" class="smoothscroll btn btn--stroke">
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
            <li>
                <a href="#0"><i class="fa fa-behance" aria-hidden="true"></i><span>Behance</span></a>
            </li>
            <li>
                <a href="#0"><i class="fa fa-dribbble" aria-hidden="true"></i><span>Dribbble</span></a>
            </li>
        </ul>  

      
</section>
<section id='services' class="s-services">

<div class="row section-header has-bottom-sep" data-aos="fade-up">
    <div class="col-full">
       
        <h1 class="display-2">Our Mission and Vision </h1>
    </div>
</div> 

<div class="row services-list block-1-2 block-tab-full">

    <div class="col-block service-item" data-aos="fade-up">
        <div class="service-icon">
   
        <FontAwesomeIcon icon="fa-sharp fa-regular fa-gear" />
        </div>
        <div class="service-text">
           
            <p>To Become a carbon-neutral company by 2024. 
            </p>
            <p>Scale thousands of sustainable SMEs to multiple 6-7 figures in revenue. 
            </p>
            <p>
            <i class="icon-megaphone"></i>Support and aid the growth and actions of climate-related charities.
            </p>
        </div>
    </div>

  

   

 

  
</div> 
<div class="row section-header has-bottom-sep" data-aos="fade-up">
    <div class="col-full">
       
        <h1 class="display-2">Why brands trust us</h1>
    </div>
    <div class="col-block service-item" data-aos="fade-up">
    <div class="service-icon">

    <FontAwesomeIcon icon="fa-sharp fa-regular fa-gear" />
    </div>
    <div class="service-text">
       
        <p>We are results-driven.
        </p>
    </div>
</div>

<div class="col-block service-item" data-aos="fade-up">
        <div class="service-icon">
            <i class="icon-group"></i>
        </div>
        <div class="service-text">
          
            <p>We understand your goals and We maintain a positive customer reputation.
            </p>
        </div>
    </div>

    <div class="col-block service-item" data-aos="fade-up">
        <div class="service-icon">
            <i class="icon-megaphone"></i>
        </div>  
        <div class="service-text">
          
            <p>We are focused on value, not cash
            </p>
        </div>
    </div>
    <div class="col-block service-item" data-aos="fade-up">
        <div class="service-icon">
            <i class="icon-megaphone"></i>
        </div>  
        <div class="service-text">
          
            <p>We value our relationships with our clients. 
            </p>
        </div>
    </div>
    <div class="col-block service-item" data-aos="fade-up">
        <div class="service-icon">
            <i class="icon-megaphone"></i>
        </div>  
        <div class="service-text">
          
            <p>We take a holistic look at your business.
            </p>
        </div>
    </div>



</div> 
</section> 

</div>
  );
};

export default About;
