import { React, useEffect } from 'react';
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
import "./boot.css"
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
import imaggess from "./images/sus5.png"
import VideoSlide from '../components/VideoSlide';
import "./mainservice.css"
const Services = () => {
    useEffect(() => {
        AOS.init();
      }, [])

  return (
   <>
 
 
   <div>
 
   <div class="page-banner-wrap2 bg-cover2">
   <div class="container">
       <div class="row">
           <div class="col-12 col-lg-12">
               <div class="page-heading2 text-white">
                   <h1 >See why top brands use Lightwave </h1>
                   <h1><a className="button2 breadcrumb-item2" href="/book">Book a call</a></h1>
               </div>
            
           </div>
       </div>
   </div>
   </div>
 
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
  <h1 className="a-title" style={{color: "black"}}>Our Services</h1>
 
  <p className="a-desc">
  At Lightwave, we believe that every brand has a unique story to tell, and we are here to help you share that story with the world. We specialize in a wide range of services, including social media management, paid advertising, content creation, web design, and user-generated content campaigns, all aimed at helping your business grow while minimizing its impact on the environment. Let us help you share your story with the world, while making a positive impact on the planet. 
  </p>

</div>
</div>
<Features />


<Benefits />
{/*<Banner2 />*/}

<section id='works' className="s-works" style={{marginTop: '30px'}}>

<div className="intro-wrap">
        
    <div className="row section-header has-bottom-sep light-sep" data-aos="fade-up">
        <div className="col-full">
            
            <h1 className="display-2 display-2--light" style={{fontSize: "30px"}}>A Showcase of some of our Highest Converting Creatives</h1>
            <h3 className="subhead " style={{color: "#fff;", fontSize: "30px"}}>Made in Collaboration by our Creative Partner</h3>
        </div>
      
    </div> 
  <VideoSlide />
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
</>
  );
};

export default Services;