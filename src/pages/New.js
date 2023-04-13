

import * as FaIcons from "react-icons/fa"; //Now i get access to all the icons
import * as AiIcons from "react-icons/ai";
import icons from "./Icons/1.png"
import icons2 from "./Icons/2.png"
import icons3 from "./Icons/3.png"
import { IconContext } from "react-icons";
import { Fragment, React, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';
import imagess from "./images/sus5.avif.avif"
import AOS from 'aos';
import 'aos/dist/aos.css';
import logo from "./images/logo.png"
import wood from "./images/portfolio/gallery/g-woodcraft.jpg"
import wood1 from "./images/portfolio/woodcraft.jpg"
import bee from "./images/portfolio/gallery/g-beetle.jpg"
import bee1 from "./images/portfolio/the-beetle.jpg"
import shu from "./images/portfolio/gallery/g-shutterbug.jpg"
import shu1 from "./images/portfolio/lady-shutterbug.jpg"
import shu2 from "./images/portfolio/lady-shutterbug@2x.jpg"
import cl1 from "./images/clients/apple.png"
import cl2 from "./images/clients/atom.png"
import cl3 from "./images/clients/blackberry.png"
import cl4 from "./images/clients/dropbox.png"
import cl5 from "./images/clients/envato.png"
import cl6 from "./images/clients/firefox.png"
import cl7 from "./images/clients/joomla.png"
import cl8 from "./images/clients/magento.png"
import { SidebarData } from './SidebarData';
import Work from "./Work";
import Back from "./Back";
import Team from "./Team";
import Test from "./Test";


const New = () => {
   
    useEffect(() => {
        AOS.init();
      }, [])
  return (
   
<>



<section id="home" class="s-home target-section" data-parallax="scroll"  data-natural-width='3000' data-natural-height='2000' data-position-y='center'>
<div class="overlay"><Back /></div>
<div class="shadow-overlay"></div>
<div class="home-content">

<div class="row home-content__main">


<h1 data-aos="zoom-in">
Pioneering Green Technology in the Digital Marketing Space
</h1>

<h3 data-aos="fade-up">Lets create LightWave</h3>

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
                At Lightwave, we are not just another digital marketing agency. We are a digital marketing powerhouse for the brands of tomorrow, driven by a deep understanding of the power of strategic decision-making and authentic human connections. 
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
        Our data-driven insights and full-funnel approach guarantee that every marketing pound spent produces measurable outcomes, including heightened brand awareness, enhanced conversions, and increased revenue. With the CAF SYSTEM, we help businesses unlock their full potential and attain their goals
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

</div> 

<div class="row works-content">
    <div class="col-full masonry-wrap">
        <div class="masonry">

            <div class="masonry__brick" data-aos="fade-up">
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

            <div class="masonry__brick" data-aos="fade-up">
                        <div class="item-folio">
                                
                            <div class="item-folio__thumb">
                                <a href={wood} class="thumb-link" title="Woodcraft" data-size="1050x700">
                                    <img src={wood1}
                                         srcset="images/portfolio/woodcraft@2x.jpg " alt="" />
                                </a>
                            </div>
    
                            <div class="item-folio__text">
                                <h3 class="item-folio__title">
                                    Woodcraft
                                </h3>
                                <p class="item-folio__cat">
                                    Web Design
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

                    <div class="masonry__brick" data-aos="fade-up">
                        <div class="item-folio">
                                
                            <div class="item-folio__thumb">
                                <a href={bee} class="thumb-link" title="The Beetle Car" data-size="1050x700">
                                    <img src={bee1}
                                         srcset=" images/portfolio/the-beetle@2x.jpg " alt="" />
                                </a>
                            </div>
    
                            <div class="item-folio__text">
                                <h3 class="item-folio__title">
                                    The Beetle
                                </h3>
                                <p class="item-folio__cat">
                                    Web Development
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
    </div> 
</div> 

</section> 
<section id="clients" class="s-clients">
<h3 class="subhead" style={{textAlign: "center"}}>Our Team</h3>
<Team />
<Test />

<div class="row clients-testimonials" data-aos="fade-up">
      <h3 class="subhead">Our Testimomials</h3>
    <div class="col-full">
        <div class="testimonials">
      
            <div class="testimonials__slide">

                <p>"The content you never knew you wanted but knew you always needed.</p>

 
                <div class="testimonials__info">
                    <span class="testimonials__name">Energy Bytes</span> 
                    
                </div>

            </div>

            <div class="testimonials__slide">
                
                <p>"What they produced was way above what we asked for."</p>

               
                <div class="testimonials__info">
                    <span class="testimonials__name">Its Milk co</span> 
                    
                </div>

            </div>


        </div>
        
    </div> 
</div> 

</section> 
<section id="contact" class="s-contact">

<div class="overlay"></div>
<div class="contact__line"></div>

<div class="row section-header" data-aos="fade-up">
    <div class="col-full">
        <h3 class="subhead">Contact Us</h3>
        <h1 class="display-2 display-2--light">Reach out for a new project or just say hello</h1>
    </div>
</div>

<div class="row contact-content" data-aos="fade-up">
    
    <div class="contact-primary">

        <h3 class="h6">Send Us A Message</h3>

        <form name="contactForm" id="contactForm" method="post" action="" novalidate="novalidate">
            <fieldset>

            <div class="form-field">
                <input name="contactName" type="text" id="contactName" placeholder="Your Name" value="" minlength="2" required="" aria-required="true" class="full-width" />
            </div>
            <div class="form-field">
                <input name="contactEmail" type="email" id="contactEmail" placeholder="Your Email" value="" required="" aria-required="true" class="full-width" />
            </div>
            <div class="form-field">
                <input name="contactSubject" type="text" id="contactSubject" placeholder="Subject" value="" class="full-width" />
            </div>
            <div class="form-field">
                <textarea name="contactMessage" id="contactMessage" placeholder="Your Message" rows="10" cols="50" required="" aria-required="true" class="full-width"></textarea>
            </div>
            <div class="form-field">
                <button class="full-width btn--primary">Submit</button>
                <div class="submit-loader">
                    <div class="text-loader">Sending...</div>
                    <div class="s-loader">
                        <div class="bounce1"></div>
                        <div class="bounce2"></div>
                        <div class="bounce3"></div>
                    </div>
                </div>
            </div>

            </fieldset>
        </form>

       
        <div class="message-warning">
            Something went wrong. Please try again.
        </div> 
    
      
        <div class="message-success">
            Your message was sent, thank you!<br />
        </div>

    </div> 

    <div class="contact-secondary">
        <div class="contact-info">

            <h3 class="h6 hide-on-fullwidth">Contact Info</h3>

            <div class="cinfo">
                <h5>Where to Find Us</h5>
                <p>
                    1600 Amphitheatre Parkway<br />
                    Mountain View, CA<br />
                    94043 US
                </p>
            </div>

            <div class="cinfo">
                <h5>Email Us At</h5>
                <p>
                    contact@glintsite.com<br />
                    info@glintsite.com
                </p>
            </div>

            <div class="cinfo">
                <h5>Call Us At</h5>
                <p>
                    Phone: (+63) 555 1212<br />
                    Mobile: (+63) 555 0100<br />
                    Fax: (+63) 555 0101
                </p>
            </div>

            <ul class="contact-social">
                <li>
                    <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                </li>
                <li>
                    <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                </li>
                <li>
                    <a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                </li>
                <li>
                    <a href="#"><i class="fa fa-behance" aria-hidden="true"></i></a>
                </li>
                <li>
                    <a href="#"><i class="fa fa-dribbble" aria-hidden="true"></i></a>
                </li>
            </ul> 

        </div> 
    </div> 

</div> 

</section> 
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

    <div aria-hidden="true" class="pswp" role="dialog" tabindex="-1">

        <div class="pswp__bg"></div>
        <div class="pswp__scroll-wrap">

            <div class="pswp__container">
                <div class="pswp__item"></div>
                <div class="pswp__item"></div>
                <div class="pswp__item"></div>
            </div>

            <div class="pswp__ui pswp__ui--hidden">
                <div class="pswp__top-bar">
                    <div class="pswp__counter"></div><button class="pswp__button pswp__button--close" title="Close (Esc)"></button> <button class="pswp__button pswp__button--share" title=
                    "Share"></button> <button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button> <button class="pswp__button pswp__button--zoom" title=
                    "Zoom in/out"></button>
                    <div class="pswp__preloader">
                        <div class="pswp__preloader__icn">
                            <div class="pswp__preloader__cut">
                                <div class="pswp__preloader__donut"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
                    <div class="pswp__share-tooltip"></div>
                </div><button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)"></button> <button class="pswp__button pswp__button--arrow--right" title=
                "Next (arrow right)"></button>
                <div class="pswp__caption">
                    <div class="pswp__caption__center"></div>
                </div>
            </div>

        </div>

    </div> 


</>
  );
};

export default New;
