// "use client";
import React from "react";
// import { jarallax } from "jarallax";
// import "jarallax/dist/jarallax.css";
import Image from "next/image";
import backgroundImg from "../../assets/images/backgrounds/design-studio-bg.jpg";
const DesignStudio = () => {
  return (
    <div>
      <section class="design-studio">
        <div class="design-studio-bg-box">
          {/* <div
            class="design-studio-bg jarallax"
            data-jarallax
            data-speed="0.2"
            data-imgPosition="50% 0%"
            style={backgroundImg}
          ></div> */}
          <Image
            className="design-studio-bg jarallax"
            src={backgroundImg}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />{" "}
        </div>
        <div class="container">
          <div class="col-lg-12">
            <div class="design-studio__inner">
              <h2 class="design-studio__title">
                Design <span>Studio</span> that gets <br />
                excited about
              </h2>
              <div class="design-studio__video-link">
                <a
                  href="https://www.youtube.com/watch?v=Get7rqXYrbQ"
                  class="video-popup"
                >
                  <div class="design-studio__video-icon">
                    <span class="icon-play-button"></span>
                    <i class="ripple"></i>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DesignStudio;
