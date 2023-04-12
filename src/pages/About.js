
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

<h3 data-aos="fade-up">Lets create LightWave</h3>

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
        <h3 class="subhead">What We Do</h3>
        <h1 class="display-2">OUR UNIQUE SYSTEM THAT GUARANTEES HIGH ROI</h1>
    </div>
</div> 

<div class="row services-list block-1-2 block-tab-full">

    <div class="col-block service-item" data-aos="fade-up">
        <div class="service-icon">
   
        <FontAwesomeIcon icon="fa-sharp fa-regular fa-gear" />
        </div>
        <div class="service-text">
            <h3 class="h2">Creatives that convert</h3>
            <p>Tap into the Power of Highly Authentic User-Generated Content to Build Trust, Increase Engagement, and Drive Customer Loyalty
            </p>
        </div>
    </div>

    <div class="col-block service-item" data-aos="fade-up">
        <div class="service-icon">
            <i class="icon-group"></i>
        </div>
        <div class="service-text">
            <h3 class="h2">Audience that acts</h3>
            <p>Understand Your Target Audience Fully. Our Paid Social Specialists Drive Action with Data-Driven Strategies
            </p>
        </div>
    </div>

    <div class="col-block service-item" data-aos="fade-up">
        <div class="service-icon">
            <i class="icon-megaphone"></i>
        </div>  
        <div class="service-text">
            <h3 class="h2">Full funnel approach</h3>
            <p>SEM and website optimisation that attract, engage, and convert potential customers at every stage of the sales funnel
            </p>
        </div>
    </div>

    <div class="col-block service-item" data-aos="fade-up">
        <div class="service-icon">
            <i class="icon-earth"></i>
        </div>
        <div class="service-text">
            <h3 class="h2">Creativity</h3>
            <p>At Lightwave Creative Agency we focus on combining creativity and concise customer research to make sure we bring in customers who desire and love your brand through the most innovative and engaging digital marketing strategies. 
            </p>
        </div>
    </div>

    <div class="col-block service-item" data-aos="fade-up">
        <div class="service-icon">
            <i class="icon-cube"></i>
        </div>
        <div class="service-text">
            <h3 class="h2">Sustainability</h3>
            <p>Sustainability + digital innovation are both key drivers of growth for the brands of the future. 

We noticed how hard it is to grow your sustainable brand with so many companies claiming to have eco-friendly credentials. This is why Lightwave Creative Agency was born
            </p>
        </div>
    </div>

    <div class="col-block service-item" data-aos="fade-up">
        <div class="service-icon"><i class="icon-lego-block"></i></div>
        <div class="service-text">
            <h3 class="h2">UGC</h3>
            <p>User-generated content UGC is one of the fastest growing and most trusted forms of marketing. Why? Because consumers trust the opinions of ordinary people. With UGC you can generate genuine and authentic content that aligns with your brand. Heres some of the many reasons you should use UGC to skyrocket your brand
            </p>
        </div>
    </div>

</div> 

</section> 
</div>
  );
};

export default About;
