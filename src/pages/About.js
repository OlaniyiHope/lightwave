
import { React, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import imagess from "./show.mp4"
import wood from "./images/portfolio/gallery/g-woodcraft.jpg"
import wood1 from "./images/portfolio/woodcraft.jpg"
import bee from "./images/portfolio/gallery/g-beetle.jpg"
import bee1 from "./images/portfolio/the-beetle.jpg"
import shu from "./images/ggg.jpg"
import shu5 from "./images/true.jpg"
import shu1 from "./images/portfolio/lady-shutterbug.jpg"
import shu2 from "./images/portfolio/lady-shutterbug@2x.jpg"
import { GoPrimitiveDot } from 'react-icons/go';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Feature from './Features/Feature';
import Features from './Features/Features';
const About = () => {
  useEffect(() => {
    AOS.init();
  }, [])

  return (
   
<div>
<section id="home" class="s-home target-section" data-parallax="scroll"  data-natural-width='3000' data-natural-height='2000' data-position-y='center'>
<div class="overlay">
<video autoPlay><source  src='https://res.cloudinary.com/dftygokow/video/upload/v1683345050/show_jzlao1.mp4' autoPlay></source></video>
</div>
<div class="shadow-overlay"></div>
<div class="home-content">

<div class="row home-content__main">


<h1 data-aos="zoom-in">

</h1>



<div class="home-content__buttons">
   
   

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

<section id='services' class="s-services">
<div class="row section-header has-bottom-sep" data-aos="fade-up">
    <div class="col-full">
       
        <h1 class="display-2" style={{fontSize: "40px"}}>Marketing goals</h1>
        <p style={{fontSize: "23px"}}>whatever your marketing goals is, please write... We are proud to partner with businesses that share our vision for a better, brighter future
            </p>
            
    </div>
</div> 
<div class="row section-header has-bottom-sep" data-aos="fade-up">
    <div class="col-full">
       
        <h1 class="display-2" style={{fontSize: "40px"}}>What makes us different</h1>
        <p style={{fontSize: "23px"}}>Lightwave Creative Agency is a team of innovative marketers who specialize in creating authentic and engaging content that tells the unique story of each brand we work with. Whatever your marketing goals, Lightwave is here to help you achieve them
            </p>
            
    </div>
</div> 
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
           
            <p style={{fontSize: '23px', textAlign: "justify", letterSpacing: "-1px" }}>
            <GoPrimitiveDot />To Become a carbon-neutral company by 2024. 
            </p>
            <p style={{fontSize: '23px', textAlign: "justify", letterSpacing: "-1px"}}>
            <GoPrimitiveDot />Scale thousands of sustainable SMEs to multiple 6-7 figures in revenue. 
            </p>
            <p style={{fontSize: '23px',  textAlign: "justify", letterSpacing: "-1px"}}>
            <GoPrimitiveDot />Support and aid the growth and actions of climate-related charities.
            </p>
            <p style={{fontSize: '23px',  textAlign: "justify", letterSpacing: "-1px"}}>
            <GoPrimitiveDot />Support and aid the growth and actions of climate-related charities.
            </p>
        
        </div>
        
    </div>

  

    <div class="col-block service-item" data-aos="fade-up">
 
    <div class="item-folio">
            
        <div class="item-folio__thumb">
            <a href={shu} class="thumb-link" title="Shutterbug" data-size="950x600">
                <img src={shu}
                     srcset={shu}  alt="" />
            </a>
        </div>



    </div>

    </div>

 

  
</div> 

<div class="row section-header has-bottom-sep" data-aos="fade-up">
    <div class="col-full">
       
        <h1 class="display-2">Why brands trust us</h1>
    </div>
</div> 

<div class="row services-list block-1-2 block-tab-full">

 
  

    <div class="col-block service-item" data-aos="fade-up">
 
    <div class="item-folio">
            
        <div class="item-folio__thumb">
            <a href={shu5} class="thumb-link" title="Shutterbug" data-size="950x600">
                <img src={shu5}
                     srcset={shu5}  alt="" />
            </a>
        </div>

       

    </div>

    </div>
    <div class="col-block service-item" data-aos="fade-up">
    <div class="service-icon">

    <FontAwesomeIcon icon="fa-sharp fa-regular fa-gear" />
    </div>
    <div class="service-text">
       
        <p style={{fontSize: '23px', textAlign: "justify", letterSpacing: "-1px" }}>
        <GoPrimitiveDot />We are results-driven.
        </p>
        <p style={{fontSize: '23px',  textAlign: "justify", letterSpacing: "-1px"}}>
        <GoPrimitiveDot />We understand your goals and We maintain a positive customer reputation.
        </p>
        <p style={{fontSize: '23px',  textAlign: "justify", letterSpacing: "-1px"}}>
        <GoPrimitiveDot />We are focused on value, not cash
        </p>
        <p style={{fontSize: '23px',  textAlign: "justify", letterSpacing: "-1px"}}>
        <GoPrimitiveDot />We value our relationships with our clients. 
        </p>
        <p style={{fontSize: '23px',  textAlign: "justify", letterSpacing: "-1px"}}>
        <GoPrimitiveDot />We take a holistic look at your business.
        </p>
    
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

export default About;
