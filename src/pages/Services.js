import { React, useEffect } from 'react';


import imagess from "./images/sus2.jpeg"
import wood from "./images/portfolio/gallery/g-woodcraft.jpg"
import wood1 from "./images/portfolio/woodcraft.jpg"
import bee from "./images/portfolio/gallery/g-beetle.jpg"
import bee1 from "./images/portfolio/the-beetle.jpg"
import shu from "./images/portfolio/gallery/g-shutterbug.jpg"
import shu1 from "./images/portfolio/lady-shutterbug.jpg"
import shu2 from "./images/portfolio/lady-shutterbug@2x.jpg"
import AOS from 'aos';
import VideoCarousel from "./VideoCarousel"
import 'aos/dist/aos.css';
import "./Services.css"
import yo from "./carbon.jpeg"
import { PostBlog } from './PostBlog';
import BlogPic1 from "./seo.png";
import BlogPic2 from "./earth.jpg";
import BlogPic3 from "./social.png";
// import BlogPic4 from "../../../assets/bloco_image_4.svg";
import Benefits from "./Benefits"
import { Banner2 } from './Banner2';
import { Skills } from './Skills';
import { Banner } from './Banner';
import Features from './Features/Features';

const Services = () => {
    useEffect(() => {
        AOS.init();
      }, [])

  return (
   <>

   <div>
   <section id="home" class="s-home target-section" data-parallax="scroll" data-image-src={imagess} data-natural-width='3000' data-natural-height='2000' data-position-y='center'>
<div class="overlay"></div>
<div class="shadow-overlay"></div>
<div class="home-content">

<div class="row home-content__main">


<h1 data-aos="zoom-in">
See why top brands use Lightwave 
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
   
<div className="a">
<div className="a-left">
 
  <div className="a-card">
    <img
      src={yo}
      alt=""
      className="a-img"
    />
  </div>
</div>
<div className="a-right">
  <h1 className="a-title">carbon neutral web design</h1>
 
  <p className="a-desc">
  It is a long established fact that a reader will be distracted by the
  readable content.
  Our eco-friendly website design goes beyond aesthetics; it focuses on creating a digital experience that's not only visually stunning but also energy-efficient and low-impact on the environment. By optimizing code, reducing server requests, and implementing energy-saving design elements, we ensure that your website runs smoothly while minimising its carbon footprint.

As part of our commitment to sustainability, we also prioritize the use of renewable energy sources for web hosting, and we continuously explore innovative solutions to further reduce the environmental impact of your website
  </p>

</div>
</div>
<Features />


<Benefits />
{/*<Banner2 />*/}

<section id='works' class="s-works" style={{marginTop: '30px'}}>

<div class="intro-wrap">
        
    <div class="row section-header has-bottom-sep light-sep" data-aos="fade-up">
        <div class="col-full">
            
            <h1 class="display-2 display-2--light">A Showcase of some of our Highest Converting Creatives</h1>
            <h3 class="subhead ">Made in Collaboration by our Creative Partner</h3>
        </div>
      
    </div> 
    <VideoCarousel />
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
</>
  );
};

export default Services;