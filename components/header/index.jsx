"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Navbar from "../navBar";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";
import mainSlider1 from "../../assets/images/mainSlider/Augmented Reality Innovation.webp";
import mainSlider2 from "../../assets/images/mainSlider/Brand Identity and Strategy.webp";
import mainSlider3 from "../../assets/images/mainSlider/Digital Marketing and Engagement.webp";
import mainSliderPadge from "../../assets/images/resources/main-slider-badge.png";
import Image from "next/image";
import { Grid } from "@mui/material";
import { HeaderStyle } from "./HeaderStyle";
import Tilt from "../Common/Tilt";
import { MyChevronLeftIcon, MyChevronRightIcon } from "../Common/icons";

const Header = () => {
  return (
    <HeaderStyle>
      <Grid container columns={12}>
        <Grid item xs={12}>
          {" "}
          <Navbar />
        </Grid>
        <Grid item xs={12}>
          {" "}
          <div>
            <section className="main-slider">
              <Swiper
                className="swiper-container thm-swiper__slider"
                slidesPerView={1}
                loop={true}
                effect={"fade"}
                pagination={{
                  el: "#main-slider-pagination",
                  // type: bullets,
                  clickable: true,
                }}
                navigation={{
                  nextEl: "#main-slider__swiper-button-next",
                  prevEl: " #main-slider__swiper-button-prev",
                }}
                autoplay={{
                  delay: 5000,
                }}
                modules={[EffectFade, Navigation, Pagination, Autoplay]}
              >
                {/* <div className="swiper-wrapper"> */}
                <SwiperSlide>
                  {" "}
                  {/* <div className="swiper-slide"> */}
                  <div className="image-layer">
                    <Image
                      src={mainSlider1}
                      layout="fill"
                      objectFit="cover"
                      objectPosition="center"
                    />
                  </div>
                  {/* image-layer */}
                  <div className="main-slider__social">
                    <a href="#">facebook</a> <a href="#">youtube</a>
                    <a href="#">twitter</a>
                    <a href="#">instagram</a>
                  </div>
                  <div className="container">
                    {/* <div className="row"> */}
                    {/* <div className="col-lg-12"> */}
                    <Grid item container columns={12}>
                      <Grid item xs={12}>
                        {" "}
                        <div className="main-slider__content">
                          <div className="main-slider__title-box-1">
                            <h2 style={{ visibility: "hidden" }}>
                              Creative <br />
                              Talent <br />
                              Here
                            </h2>
                            <div className="main-slider__title-box-2">
                              <h2>
                                Creative <br />
                                Talent <br />
                                Here
                              </h2>
                            </div>
                          </div>
                          <a href="" className="thm-btn">
                            Discover More
                          </a>
                          <div className="main-slider-badge">
                            <Tilt>
                              {" "}
                              <Image
                                src={mainSliderPadge}
                                alt=""
                                width="180"
                                height="180"
                              />
                            </Tilt>
                          </div>
                        </div>
                      </Grid>
                    </Grid>
                    {/* </div> */}
                    {/* </div> */}
                  </div>
                  {/* </div> */}
                </SwiperSlide>
                <SwiperSlide>
                  {/* <div className="swiper-slide"> */}
                  <div
                    className="image-layer"
                    // style={{
                    //   backgroundImage: `url(${mainSlider2})`,
                    //   backgroundRepeat: "no-repeat",
                    //   backgroundSize: "cover",
                    // }}
                  >
                    <Image
                      src={mainSlider2}
                      layout="fill"
                      objectFit="cover"
                      objectPosition="center"
                    />
                  </div>
                  {/* image-layer  */}
                  <div className="main-slider__social">
                    <a href="#">facebook</a> <a href="#">youtube</a>
                    <a href="#">twitter</a>
                    <a href="#">instagram</a>
                  </div>
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="main-slider__content">
                          <div className="main-slider__title-box-1">
                            <h2>
                              Creative <br />
                              Talent <br />
                              Here
                            </h2>
                            <div className="main-slider__title-box-2">
                              <h2>
                                Creative <br />
                                Talent <br />
                                Here
                              </h2>
                            </div>
                          </div>
                          <a href="about.html" className="thm-btn">
                            Discover More
                          </a>
                          <div className="main-slider-badge">
                            <Tilt>
                              <Image
                                src={mainSliderPadge}
                                alt=""
                                width="180"
                                height="180"
                              />
                            </Tilt>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* </div> */}
                </SwiperSlide>
                <SwiperSlide>
                  {/* <div className="swiper-slide"> */}
                  <div
                    className="image-layer"
                    // style={{
                    //   backgroundImage:
                    //     "url(assets/images/backgrounds/main-slider-1-3.jpg)",
                    // }}
                  >
                    <Image
                      src={mainSlider3}
                      layout="fill"
                      objectFit="cover"
                      objectPosition="center"
                    />
                  </div>
                  {/* image-layer */}
                  <div className="main-slider__social">
                    <a href="#">facebook</a> <a href="#">youtube</a>
                    <a href="#">twitter</a>
                    <a href="#">instagram</a>
                  </div>
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="main-slider__content">
                          <div className="main-slider__title-box-1">
                            <h2>
                              Creative <br />
                              Talent <br />
                              Here
                            </h2>
                            <div className="main-slider__title-box-2">
                              <h2>
                                Creative <br />
                                Talent <br />
                                Here
                              </h2>
                            </div>
                          </div>
                          <a href="about.html" className="thm-btn">
                            Discover More
                          </a>
                          <div className="main-slider-badge">
                            <Tilt>
                              {" "}
                              <Image
                                src={mainSliderPadge}
                                alt=""
                                width="180"
                                height="180"
                              />
                            </Tilt>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* </div> */}
                </SwiperSlide>
                {/* </div> */}
              </Swiper>
              <div className="slider-bottom-box clearfix">
                <div
                  className="swiper-pagination"
                  id="main-slider-pagination"
                ></div>
                <div className="main-slider__nav">
                  <div
                    className="swiper-button-prev"
                    id="main-slider__swiper-button-next"
                  >
                    <span className="icon-arrow-left">
                      <MyChevronLeftIcon />
                    </span>
                  </div>
                  <div
                    className="swiper-button-next"
                    id="main-slider__swiper-button-prev"
                  >
                    <span className="icon-arrow-right">
                      <MyChevronRightIcon />
                    </span>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </Grid>
      </Grid>
    </HeaderStyle>
  );
};

export default Header;
