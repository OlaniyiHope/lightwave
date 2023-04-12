
import { React, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import imagess from "./sustain.jpeg"
import wood from "./images/portfolio/gallery/g-woodcraft.jpg"
import wood1 from "./images/portfolio/woodcraft.jpg"
import bee from "./images/portfolio/gallery/g-beetle.jpg"
import bee1 from "./images/portfolio/the-beetle.jpg"
import shu from "./images/portfolio/gallery/g-shutterbug.jpg"
import shu1 from "./images/portfolio/lady-shutterbug.jpg"
import shu2 from "./images/portfolio/lady-shutterbug@2x.jpg"
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
            <p>
            <i class="icon-megaphone"></i>Support and aid the growth and actions of climate-related charities.
            </p>
            <p>
            <i class="icon-megaphone"></i>Support and aid the growth and actions of climate-related charities.
            </p>
            <p>
            <i class="icon-megaphone"></i>Support and aid the growth and actions of climate-related charities.
            </p>
            <p>
            <i class="icon-megaphone"></i>Support and aid the growth and actions of climate-related charities.
            </p>
        </div>
    </div>

  

    <div class="col-block service-item" data-aos="fade-up">
 
    <div class="item-folio">
            
        <div class="item-folio__thumb">
            <a href={shu} class="thumb-link" title="Shutterbug" data-size="950x600">
                <img src={shu1}
                     srcset={shu2}  alt="" />
            </a>
        </div>

        <div class="item-folio__text">
            <h3 class="item-folio__title">
                Shutterbug
            </h3>
            <p class="item-folio__cat">
                Branding
            </p>
        </div>

        <a href="https://www.behance.net/" class="item-folio__project-link" title="Project link">
            <i class="icon-link"></i>
        </a>

        <div class="item-folio__caption">
            <p>Vero molestiae sed aut natus excepturi. Et tempora numquam. Temporibus iusto quo.Unde dolorem corrupti neque nisi.</p>
        </div>

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
