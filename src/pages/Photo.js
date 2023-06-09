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
import "./boot.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Photo = () => {
 
   
  return (
    <div>
 



  <div class="page-banner-wrap bg-cover">
  <div class="container">
      <div class="row">
          <div class="col-12 col-lg-12">
              <div class="page-heading text-white">
                  <h1>LightWave Amplifies your brand's voice through sustainable digital marketing </h1>
                  <h1><a className="button breadcrumb-item" href="">Book a call</a></h1>
              </div>
           
          </div>
      </div>
  </div>
</div>










  <section id='services' className="s-services" style={{margin: "auto", textAlign: "center"}}>
  <div className="row section-header has-bottom-sep" style={{margin: "auto", textAlign: "center"}}>
      <div className="col-full"style={{margin: "auto", textAlign: "center"}}>
         
          <h1 className="display-2" style={{margin: "auto", textAlign: "center", fontSize: "30px"}}>Our Ethos</h1>
          <p style={{margin: "auto", textAlign: "center", fontSize: "18px"}}>Sustainability + digital innovation are both key drivers of growth for the brands of the future, we noticed 
          how hard it is to grow your sustainable brand with so many companies claiming to 
          have eco-friendly credentials. This is why Lightwave creative agency was born
              </p>
              
      </div>
  </div> 
  <div className="row section-header has-bottom-sep"  style={{margin: "auto", textAlign: "center"}}>
      <div className="col-full" style={{margin: "auto", textAlign: "center"}}>
         
          <h1 className="display-2" style={{margin: "auto", textAlign: "center", fontSize: "30px"}}>Our Focus</h1>
          <p style={{margin: "auto", textAlign: "center", fontSize: "18px"}}>At Lightwave Creative Agency, we focus on combining creativity and concise customer research to make 
          sure we bring in customers who desire and love your brand through the most innovative and engaging digital marketing strategies.
              </p>
              
      </div>
  </div> 
  <div className="row section-header has-bottom-sep" style={{margin: "auto", textAlign: "center"}}>
      <div className="col-full" style={{margin: "auto", textAlign: "center"}}>
         
          <h1 className="display-2"style={{margin: "auto", textAlign: "center", fontSize: "30px"}}>Our Mission and Vision </h1>
      </div>
  </div> 
  
  <div className="row services-list block-1-2 block-tab-full" >
  
      <div className="col-block service-item" >
          <div className="service-icon">
     
          <FontAwesomeIcon icon="fa-sharp fa-regular " />
          </div>
          <div className="service-text">
             
              <p style={{fontSize: '18px', textAlign: "justify", letterSpacing: "0px" }}>
              <GoPrimitiveDot />To Become a carbon-neutral company by 2024. 
              </p>
              <p style={{fontSize: '18px', textAlign: "justify", letterSpacing: "0px"}}>
              <GoPrimitiveDot />Scale thousands of sustainable SMEs to multiple 6-7 figures in revenue. 
              </p>
              <p style={{fontSize: '18px',  textAlign: "justify", letterSpacing: "0px"}}>
              <GoPrimitiveDot />Support and aid the growth and actions of climate-related charities.
              </p>
              <p style={{fontSize: '18px',  textAlign: "justify", letterSpacing: "0px"}}>
              <GoPrimitiveDot />Support and aid the growth and actions of climate-related charities.
              </p>
          
          </div>
          
      </div>
  
    
  
      <div className="col-block service-item" >
   
      <div className="item-folio">
              
          <div className="item-folio__thumb">
              <a href={shu} className="thumb-link" title="Shutterbug" data-size="950x600">
                  <img src={shu}
                       srcset={shu}  alt="" />
              </a>
          </div>
  
  
  
      </div>
  
      </div>
  
   
  
    
  </div> 
  
  <div className="row section-header has-bottom-sep" style={{margin: "auto", textAlign: "center"}}>
      <div className="col-full" style={{margin: "auto", textAlign: "center"}}>
         
          <h1 className="display-2"style={{margin: "auto", textAlign: "center", fontSize: "30px"}}>Why brands trust us </h1>
      </div>
  </div> 
  
  <div className="row services-list block-1-2 block-tab-full" >
  <div className="col-block service-item" >
   
  <div className="item-folio">
          
      <div className="item-folio__thumb">
          <a href={shu} className="thumb-link" title="Shutterbug" data-size="950x600">
              <img src={shu}
                   srcset={shu}  alt="" />
          </a>
      </div>
  
  
  
  </div>
  
  </div>
      <div className="col-block service-item" >
          <div className="service-icon">
     
          <FontAwesomeIcon icon="fa-sharp fa-regular " />
          </div>
          <div className="service-text" style={{marginTop: "40px"}}>
         
          <p style={{fontSize: '18px', textAlign: "justify", letterSpacing: "0px" }}>
          <GoPrimitiveDot />We are results-driven.
          </p>
          <p style={{fontSize: '18px',  textAlign: "justify", letterSpacing: "0px"}}>
          <GoPrimitiveDot />We understand your goals and We maintain a positive customer reputation.
          </p>
          <p style={{fontSize: '18px',  textAlign: "justify", letterSpacing: "0px"}}>
          <GoPrimitiveDot />We are focused on value, not cash
          </p>
          <p style={{fontSize: '18px',  textAlign: "justify", letterSpacing: "0px"}}>
          <GoPrimitiveDot />We value our relationships with our clients. 
          </p>
          <p style={{fontSize: '18px',  textAlign: "justify", letterSpacing: "0px"}}>
          <GoPrimitiveDot />We take a holistic look at your business.
          </p>
      
      </div>
      
  
          
      </div>
  
    
  
    
  
   
  
    
  </div> 
  
  
  </section> 

    </div>
  );
};

export default Photo;