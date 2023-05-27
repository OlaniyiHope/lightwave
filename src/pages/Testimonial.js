
import { React, useEffect } from 'react';
import wood from "./images/portfolio/gallery/g-woodcraft.jpg"
import wood1 from "./images/portfolio/woodcraft.jpg"
import bee from "./images/portfolio/gallery/g-beetle.jpg"
import bee1 from "./images/portfolio/the-beetle.jpg"
import shu from "./images/portfolio/gallery/g-shutterbug.jpg"
import shu1 from "./images/portfolio/lady-shutterbug.jpg"
import shu2 from "./images/portfolio/lady-shutterbug@2x.jpg"
import AOS from 'aos';
import "./mainblog.css"
import "./boot.css"
import 'aos/dist/aos.css';
import Team from './Team';


const Testimonial = () => {
    useEffect(() => {
        AOS.init();
      }, [])

  return (
   
<div>
<div class="page-banner-wrap4 bg-cover4">
<div class="container">
    <div class="row">
        <div class="col-12 col-lg-12">
            <div class="page-heading4 text-white">
                <h1 style={{color: "white",}}>Coming soon</h1>
                <h1><a className="button4 breadcrumb-item4" href="/book">Book a call</a></h1>
            </div>
         
        </div>
    </div>
</div>
</div>




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

export default Testimonial;
