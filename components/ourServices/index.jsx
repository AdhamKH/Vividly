import React from "react";
import mainSliderPadge from "../../assets/images/shapes/services-one-shape.png";
import { Grid } from "@mui/material";
import Image from "next/image";
import { ServicesStyle } from "./ServicesStyle";

const OurServices = () => {
  return (
    <ServicesStyle>
      <section className="services-one">
        <div
          className="services-one-shape"
          style={{
            backgroundImage: `url{${mainSliderPadge}}`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: "100%",
          }}
        >
          <Image
            src={mainSliderPadge}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
        <div className="container">
          <div className="services-one__top">
            {/* <div className="row"> */}
            <Grid container columns={12}>
              <Grid item xs={12} md={6}>
                {" "}
                {/* <div className="col-xl-7 col-lg-6"> */}
                <div className="services-one__top-left">
                  <div className="section-title text-left">
                    <span className="section-title__tagline">Our Services</span>
                    <h2 className="section-title__title">
                      We Shape the <br />
                      Perfect solution
                    </h2>
                  </div>
                  {/* </div> */}
                </div>
              </Grid>
              <Grid item xs={12} md={6}>
                {/* <div className="col-xl-5 col-lg-6"> */}
                <div className="services-one__top-right">
                  <p className="services-one__top-text">
                    We are committed to providing our customers with not service
                    while offering our emod tempor incididunt ut labore
                    employees the best training.
                  </p>
                  {/* </div> */}
                </div>{" "}
              </Grid>
            </Grid>

            {/* </div> */}
          </div>
          <div className="services-one__bottom">
            {/* <div className="row"> */}
            <Grid container columns={12} spacing={4}>
              <Grid item xs={12} md={6} lg={4}>
                {" "}
                <div
                  className="col-xl-4 col-lg-4 wow fadeInUp"
                  data-wow-delay="100ms"
                >
                  {/* <!--Services One Single--> */}
                  <div className="services-one__single">
                    <h3 className="services-one__title">
                      <a href="mobile-application.html">
                        mobile <br />
                        applications
                      </a>
                    </h3>
                    <div className="services-one__icon">
                      <span className="icon-online-shopping"></span>
                    </div>
                    <div className="services-one__count"></div>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                {" "}
                <div
                  className="col-xl-4 col-lg-4 wow fadeInUp"
                  data-wow-delay="200ms"
                >
                  {/* <!--Services One Single--> */}
                  <div className="services-one__single">
                    <h3 className="services-one__title">
                      <a href="digital-marketing.html">
                        digital <br />
                        marketings
                      </a>
                    </h3>
                    <div className="services-one__icon">
                      <span className="icon-growth"></span>
                    </div>
                    <div className="services-one__count"></div>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                {" "}
                <div
                  className="col-xl-4 col-lg-4 wow fadeInUp"
                  data-wow-delay="300ms"
                >
                  {/* <!--Services One Single--> */}
                  <div className="services-one__single">
                    <h3 className="services-one__title">
                      <a href="graphic-designing.html">
                        Graphic <br />
                        Designings
                      </a>
                    </h3>
                    <div className="services-one__icon">
                      <span className="icon-webpage"></span>
                    </div>
                    <div className="services-one__count"></div>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                {" "}
                <div
                  className="col-xl-4 col-lg-4 wow fadeInUp"
                  data-wow-delay="400ms"
                >
                  {/* <!--Services One Single--> */}
                  <div className="services-one__single">
                    <h3 className="services-one__title">
                      <a href="website-development.html">
                        Website <br />
                        developments
                      </a>
                    </h3>
                    <div className="services-one__icon">
                      <span className="icon-front-end"></span>
                    </div>
                    <div className="services-one__count"></div>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                {" "}
                <div
                  className="col-xl-4 col-lg-4 wow fadeInUp"
                  data-wow-delay="500ms"
                >
                  {/* <!--Services One Single--> */}
                  <div className="services-one__single">
                    <h3 className="services-one__title">
                      <a href="social-marketing.html">
                        Social <br />
                        marketings
                      </a>
                    </h3>
                    <div className="services-one__icon">
                      <span className="icon-bullhorn"></span>
                    </div>
                    <div className="services-one__count"></div>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <div
                  className="col-xl-4 col-lg-4 wow fadeInUp"
                  data-wow-delay="600ms"
                >
                  {/* <!--Services One Single--> */}
                  <div className="services-one__view-all">
                    <div className="services-one__view-all-title-box">
                      <h3 className="services-one__view-all-title">
                        <a href="services.html">
                          View our <br />
                          all services
                        </a>
                      </h3>
                    </div>
                    <div className="services-one__view-all-arrow">
                      <a href="services.html">
                        <span className="icon-arrow-right"></span>
                      </a>
                    </div>
                  </div>
                </div>
              </Grid>
            </Grid>

            {/* </div> */}
          </div>
        </div>
      </section>
    </ServicesStyle>
  );
};

export default OurServices;
