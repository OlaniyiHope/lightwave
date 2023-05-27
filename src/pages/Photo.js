import "./wraps.css";
import { React, useEffect } from 'react';
import { Carousel } from "react-bootstrap";
import Vid1 from "../pages/let.mp4";
import Vid2 from "../pages/six.mp4";
import Vid3 from "../pages/news.mp4";
import { GoPrimitiveDot } from 'react-icons/go';
import ReactPlayer from "react-player";
import VideoCarousel from "./VideoCarousel";
import shu from "./images/ggg.jpg"
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from "react-alice-carousel";
import "./photo.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Photo = () => {
 
   
  return (
    <div>
    <div className="body">
  
    <header class="contain">
      <section class="tent">
        <h1>Responsive Full Background Image</h1>
        <p class="sub-title"><strong>Resize your browser window</strong> <br /> to see the background image change in size</p>
        <p><a class="button" id="load-more-content" href="#top">Load some content</a></p>
        <p>To see scrolling behavior</p>
        
     
      </section>
    </header>
  </div>

  <footer style={{backgroundColor: "#000"}}>
  
  <div className="row footer-main">
  
      <div className="col-six tab-full left footer-desc">
      <div className="footer-logo"></div>
      Lightwave is a digital marketing powerhouse on a mission to help supercharge sustainable brands and break through the noise. We 
      offer user-generated constent, paid social, SEM, sustanable website development and sustainable mobile 
      development. We are proud to be at hte forefront of driving positive change throught our creative 
      solutions, and we're excited to partner with businesses that share our vision for 
      a better, brighter future.
  </div>
  
  
      <div className="col-six tab-full right footer-subscribe">
  
          <h4>Get Notified</h4>
          <p>If you want us to help your business grow, you can subscribe to our platform and we will give you tips for enhanced business growth.</p>
          <div className="subscribe-form">
              <form id="mc-form" className="group" novalidate="true">
                  <input type="email" value="" name="EMAIL" className="email" id="mc-email" placeholder="Email Address" required="" />
                  <input type="submit" name="subscribe" value="Subscribe" />
                  <label for="mc-email" className="subscribe-message"></label>
              </form>
          </div>
  
      </div>
  
  </div> 
  
  <div className="row footer-bottom">
  
      <div className="col-twelve">
          <div className="copyright">
              <span>© Copyright LightWave</span> 
              
          </div>
  
          <div className="go-top">
              <a className="smoothscroll" title="Back to Top" href="#top"><i class="icon-arrow-up" aria-hidden="true"></i></a>
          </div>
      </div>
  
  </div>
  
  </footer>
    </div>
  );
};

export default Photo;