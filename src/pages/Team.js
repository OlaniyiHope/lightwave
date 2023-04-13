import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img1 from "./images/book.avif.png"
import img2 from "./images/sus.avif.png"
import img3 from "./images/work.avif.png"
import "./team.css"
const Team = () => {

    return (
        <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
      >
        <div>
          <img src={img1} />
          <div className="myCarousel">
            <h3>David Oriazowan </h3>
            <h4>Project Manager</h4>
            <p>
              It's freeing to be able to catch up on customized news and not be
              distracted by a social media element on the same site
            </p>
          </div>
        </div>

        <div>
          <img src={img2} />
          <div className="myCarousel">
            <h3>Will Forbes</h3>
            <h4>Managing Director</h4>
            <p>
              The simple and intuitive design makes it easy for me use. I highly
              recommend Fetch to my peers.
            </p>
          </div>
        </div>

        <div>
          <img src={img3} />
          <div className="myCarousel">
            <h3>Nathan Marriot</h3>
            <h4>Creative Director</h4>
            <p>
              I enjoy catching up with Fetch on my laptop, or on my phone when
              I'm on the go!
            </p>
          </div>
        </div>
      </Carousel>
    );
  }
export default Team;