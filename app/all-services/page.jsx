"use client";
import Navbar from "@/components/navBar";
import Image from "next/image";
import React, { use } from "react";
import background from "../../assets/images/backgrounds/page-header-bg.jpg";
import backgroundTwo from "../../assets/images/shapes/services-three-shape.png";
import backgroundThree from "../../assets/images/backgrounds/two-boxes-bg-1.jpg";
import shapeOne from "../../assets/images/shapes/services-one-shape.png";
import backgroundF from "../../assets/images/backgrounds/design-studio-bg.jpg";
import Footer from "@/components/footer";
import { Grid } from "@mui/material";
import { AllServicesStyle } from "./style";
import "../../components/ourServices/mibooz-icons/style.css";
import Link from "next/link";
const fetchingData = async () => {
  try {
    const res = await fetch(
      "https://api.adgrouptech.com/api/v1/services/company/10"
    );
    return res.json();
  } catch (e) {
    return e;
  }
};
const dataPromis = fetchingData();
const page = () => {
  const data = use(dataPromis);
  let allServices = data?.data;
  let newAllService = allServices?.map((service) => ({
    id: service.id.toString(),
    title: service.title.toString(),
  }));
  console.log("check this", newAllService?.slice(6));
  return (
    <AllServicesStyle>
      <div className="page-wrapper">
        <Navbar></Navbar>

        <section className="page-header">
          <div className="page-header-bg">
            <Image
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              src={background}
              alt="service"
            />
          </div>
          <div className="container">
            <div class="page-header__inner">
              <ul class="thm-breadcrumb list-unstyled">
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li>Services</li>
              </ul>
              <h2>Services</h2>
            </div>
          </div>
        </section>

        <section class="services-three">
          {/* <div
            class="services-three-shape"
            style="background-image: url(assets/images/shapes/services-three-shape.png)"
          ></div> */}
          <Image
            className="services-three-shape"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            src={backgroundTwo}
            alt="service"
          />
          <div className="container">
            <div className="section-title text-center">
              <span className="section-title__tagline">
                check our services list
              </span>
              <h2 className="section-title__title">what we’re offering</h2>
            </div>
            <div className="services-three__top">
              <Grid container columns={12}>
                {newAllService?.slice(6)?.map((service, index) => {
                  return (
                    <Grid item xs={12} md={6} lg={4}>
                      {" "}
                      <Link
                        href={{
                          pathname: "/service",
                          query: { id: `${service?.id}` },
                        }}
                      >
                        <div
                          className="col-xl-4 col-lg-4 wow fadeInUp"
                          data-wow-delay="200ms"
                        >
                          <div className="services-three__single">
                            <div className="services-three_icon">
                              <span className="icon-online-shopping"></span>
                            </div>
                            <h3 className="services-three__title">
                              {/* <a href="mobile-application.html"> */}
                              {service?.title}
                              {/* </a> */}
                            </h3>
                            <p className="services-three__text">
                              Lorem ipsum is noted are many variations of have
                              in pass majy.
                            </p>
                            <div className="services-three__btn-box">
                              {/* <a
                                href="mobile-application.html"
                                className="services-three__btn"
                              > */}
                              Read More
                              {/* </a> */}
                            </div>
                          </div>
                        </div>
                      </Link>
                    </Grid>
                  );
                })}
                {/* <Grid item xs={12} md={6} lg={4}>
                  {" "}
                  <div
                    className="col-xl-4 col-lg-4 wow fadeInUp"
                    data-wow-delay="200ms"
                  >
                    <div className="services-three__single">
                      <div className="services-three_icon">
                        <span className="icon-online-shopping"></span>
                      </div>
                      <h3 className="services-three__title">
                        <a href="mobile-application.html">
                          mobile <br />
                          application
                        </a>
                      </h3>
                      <p className="services-three__text">
                        Lorem ipsum is noted are many variations of have in pass
                        majy.
                      </p>
                      <div className="services-three__btn-box">
                        <a
                          href="mobile-application.html"
                          className="services-three__btn"
                        >
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                  {" "}
                  <div
                    className="col-xl-4 col-lg-4 wow fadeInUp"
                    data-wow-delay="400ms"
                  >
                    <div className="services-three__single">
                      <div className="services-three_icon">
                        <span className="icon-growth"></span>
                      </div>
                      <h3 className="services-three__title">
                        <a href="digital-marketing.html">
                          digital <br />
                          marketing
                        </a>
                      </h3>
                      <p className="services-three__text">
                        Lorem ipsum is noted are many variations of have in pass
                        majy.
                      </p>
                      <div className="services-three__btn-box">
                        <a
                          href="digital-marketing.html"
                          className="services-three__btn"
                        >
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                  <div
                    className="col-xl-4 col-lg-4 wow fadeInUp"
                    data-wow-delay="600ms"
                  >
                    <div className="services-three__single">
                      <div className="services-three_icon">
                        <span className="icon-front-end"></span>
                      </div>
                      <h3 className="services-three__title">
                        <a href="website-development.html">
                          Website <br />
                          development
                        </a>
                      </h3>
                      <p className="services-three__text">
                        Lorem ipsum is noted are many variations of have in pass
                        majy.
                      </p>
                      <div className="services-three__btn-box">
                        <a
                          href="website-development.html"
                          className="services-three__btn"
                        >
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                </Grid> */}
              </Grid>
            </div>
            <div className="services-three__bottom">
              <p className="services-three__bottom-text">
                Mibooz services built specifically for your business.{" "}
                <a href="about.html">Find Your Solution</a>
              </p>
            </div>
          </div>
        </section>

        {/* <section className="two-boxes">
          <div className="container">
            <Grid container spacing={4}>
              <Grid item md={6} xs={12}>
                {" "}
                <div
                  className="col-xl-6 col-lg-6 wow slideInLeft"
                  data-wow-delay="100ms"
                  data-wow-duration="2500ms"
                >
                  <div className="two-boxes__single">
                    <Image
                      className="two-boxes__bg"
                      layout="fill"
                      objectFit="cover"
                      objectPosition="center"
                      src={backgroundThree}
                      alt="service"
                    />
                    <p className="two-boxes__tagline">extra features</p>
                    <h4 className="two-boxes__title">
                      Lorem Ipsum available, but the majority is have suffered.
                    </h4>
                    <div className="two-boxes__arrow">
                      <a href="#">
                        <span className="icon-arrow-right"></span>
                      </a>
                    </div>
                  </div>
                </div>
              </Grid>
              <Grid item md={6} xs={12}>
                {" "}
                <div
                  className="col-xl-6 col-lg-6 wow slideInRight"
                  data-wow-delay="100ms"
                  data-wow-duration="2500ms"
                >
                  <div className="two-boxes__single">
                    <Image
                      className="two-boxes__bg"
                      layout="fill"
                      objectFit="cover"
                      objectPosition="center"
                      src={backgroundThree}
                      alt="service"
                    />
                    <p className="two-boxes__tagline">extra features</p>
                    <h4 className="two-boxes__title">
                      Lorem Ipsum available, but the majority is have suffered.
                    </h4>
                    <div className="two-boxes__arrow">
                      <a href="#">
                        <span className="icon-arrow-right"></span>
                      </a>
                    </div>
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
        </section> */}

        <section className="services-one">
          <Image
            className="services-one-shape"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            src={shapeOne}
            alt="service"
          />
          <div className="container">
            <div className="services-one__top">
              <Grid container spacing={5}>
                <Grid item xs={12} lg={6} md={7}>
                  {" "}
                  <div className="col-xl-7 col-lg-6">
                    <div className="services-one__top-left">
                      <div className="section-title text-left">
                        <span className="section-title__tagline">
                          Our Services
                        </span>
                        <h2 className="section-title__title">
                          We Shape the <br /> Perfect solution
                        </h2>
                      </div>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12} lg={6} md={5}>
                  {" "}
                  <div className="col-xl-5 col-lg-6">
                    <div className="services-one__top-right">
                      <p className="services-one__top-text">
                        We are committed to providing our customers with not
                        service while offering our emod tempor incididunt ut
                        labore employees the best training.
                      </p>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </div>
            <div className="services-one__bottom">
              <Grid container columns={12} spacing={4}>
                <Grid item xs={12} md={4}>
                  {" "}
                  <div
                    className="col-xl-4 col-lg-4 wow fadeInUp"
                    data-wow-delay="100ms"
                  >
                    <div className="services-one__single">
                      <h3 className="services-one__title">
                        {/* <a href="mobile-application.html"> */}
                        mobile <br />
                        applications
                        {/* </a> */}
                      </h3>
                      <div className="services-one__icon">
                        <span className="icon-online-shopping"></span>
                      </div>
                      <div className="services-one__count"></div>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12} md={4}>
                  <div
                    className="col-xl-4 col-lg-4 wow fadeInUp"
                    data-wow-delay="200ms"
                  >
                    <div className="services-one__single">
                      <h3 className="services-one__title">
                        {/* <a href="digital-marketing.html"> */}
                        digital <br />
                        marketings
                        {/* </a> */}
                      </h3>
                      <div className="services-one__icon">
                        <span className="icon-growth"></span>
                      </div>
                      <div className="services-one__count"></div>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12} md={4}>
                  {" "}
                  <div
                    className="col-xl-4 col-lg-4 wow fadeInUp"
                    data-wow-delay="300ms"
                  >
                    <div className="services-one__single">
                      <h3 className="services-one__title">
                        {/* <a href="graphic-designing.html"> */}
                        Graphic <br />
                        Designings
                        {/* </a> */}
                      </h3>
                      <div className="services-one__icon">
                        <span className="icon-webpage"></span>
                      </div>
                      <div className="services-one__count"></div>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12} md={4}>
                  {" "}
                  <div
                    className="col-xl-4 col-lg-4 wow fadeInUp"
                    data-wow-delay="400ms"
                  >
                    <div className="services-one__single">
                      <h3 className="services-one__title">
                        {/* <a href="website-development.html"> */}
                        Website <br />
                        developments
                        {/* </a> */}
                      </h3>
                      <div className="services-one__icon">
                        <span className="icon-front-end"></span>
                      </div>
                      <div className="services-one__count"></div>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12} md={4}>
                  {" "}
                  <div
                    className="col-xl-4 col-lg-4 wow fadeInUp"
                    data-wow-delay="500ms"
                  >
                    <div className="services-one__single">
                      <h3 className="services-one__title">
                        {/* <a href="social-marketing.html"> */}
                        Social <br />
                        marketings
                        {/* </a> */}
                      </h3>
                      <div className="services-one__icon">
                        <span className="icon-bullhorn"></span>
                      </div>
                      <div className="services-one__count"></div>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12} md={4}>
                  <div
                    className="col-xl-4 col-lg-4 wow fadeInUp"
                    data-wow-delay="600ms"
                  >
                    <div className="services-one__view-all">
                      <div className="services-one__view-all-title-box">
                        <h3 className="services-one__view-all-title">
                          {/* <a href="services.html"> */}
                          View our <br /> all services
                          {/* </a> */}
                        </h3>
                      </div>
                      <div className="services-one__view-all-arrow">
                        <Link href="all-services">
                          <span className="icon-arrow-right"></span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </div>
          </div>
        </section>

        <section class="services-two services-page-services-two">
          <div class="container">
            <div class="section-title text-center">
              <span class="section-title__tagline">
                check our services list
              </span>
              <h2 class="section-title__title">what we’re offering</h2>
            </div>
            <ul class="list-unstyled clearfix services-two__list">
              <li
                class="services-two__single wow fadeInUp"
                data-wow-delay="200ms"
              >
                <div class="services-two__icon">
                  <span class="icon-online-shopping"></span>
                </div>
                <h3 class="services-two__title">
                  <a href="mobile-application.html">
                    mobile <br /> application
                  </a>
                </h3>
                <p class="services-two__text">
                  Lorem ipsum is noted are many variations of have in pass majy.
                </p>
              </li>
              <li
                class="services-two__single wow fadeInUp"
                data-wow-delay="400ms"
              >
                <div class="services-two__icon">
                  <span class="icon-growth"></span>
                </div>
                <h3 class="services-two__title">
                  <a href="digital-marketing.html">
                    digital <br /> marketing
                  </a>
                </h3>
                <p class="services-two__text">
                  Lorem ipsum is noted are many variations of have in pass majy.
                </p>
              </li>
              <li
                class="services-two__single wow fadeInUp"
                data-wow-delay="600ms"
              >
                <div class="services-two__icon">
                  <span class="icon-webpage"></span>
                </div>
                <h3 class="services-two__title">
                  <a href="graphic-designing.html">
                    Graphic <br /> Designing
                  </a>
                </h3>
                <p class="services-two__text">
                  Lorem ipsum is noted are many variations of have in pass majy.
                </p>
              </li>
              <li
                class="services-two__single wow fadeInUp"
                data-wow-delay="800ms"
              >
                <div class="services-two__icon">
                  <span class="icon-front-end"></span>
                </div>
                <h3 class="services-two__title">
                  <a href="website-development.html">
                    Website <br /> development
                  </a>
                </h3>
                <p class="services-two__text">
                  Lorem ipsum is noted are many variations of have in pass majy.
                </p>
              </li>
            </ul>
          </div>
        </section>
      </div>
      <Footer />
    </AllServicesStyle>
  );
};

export default page;
