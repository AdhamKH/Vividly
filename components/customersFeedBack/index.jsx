import React from "react";
import { CustomerFeedBackStyle } from "./style";
import Image from "next/image";
import testimonialTwo from "../../assets/images/shapes/testimonial-two-shape.png";
import testimonialTwoImage from "../../assets/images/testimonial/testimonial-two-img.jpg";
import { Grid } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { MyChevronLeftIcon, MyChevronRightIcon } from "../Common/icons";
const CustomerFeedBack = () => {
  return (
    <CustomerFeedBackStyle>
      <section class="testimonial-two about-page-testimonial-two">
        <div
          class="testimonial-two-shape wow slideInRight"
          data-wow-delay="100ms"
          data-wow-duration="2500ms"
        >
          <Image src={testimonialTwo} alt="" />
        </div>
        <div class="container">
          {/* <div class="row"> */}
          <Grid container columns={12}>
            <Grid xs={12} md={6}>
              {" "}
              <div
                class="testimonial-two__left wow slideInLeft"
                data-wow-delay="100ms"
                data-wow-duration="2500ms"
              >
                <div class="testimonial-two__img">
                  <Image src={testimonialTwoImage} alt="" />
                  <div class="testimonial-two__content">
                    <h3 class="testimonial-two__title">
                      #Happy <span>Customers</span>
                    </h3>
                  </div>
                  <div class="testimonial-two__box-1"></div>
                  <div class="testimonial-two__box-2"></div>
                </div>
              </div>
            </Grid>
            <Grid xs={12} md={6}>
              {" "}
              <div class="testimonial-two__right">
                <div class="section-title text-left">
                  <span class="section-title__tagline">
                    our customer feedbacks
                  </span>
                  <h2 class="section-title__title">What they’re saying</h2>
                </div>
                <div class="testimonial-two__carousel owl-theme owl-carousel">
                  <Swiper
                    className="swiper-container thm-swiper__slider"
                    slidesPerView={1}
                    loop={true}
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
                    modules={[Navigation, Pagination, Autoplay]}
                  >
                    <SwiperSlide>
                      {" "}
                      <div class="testimonial-two__single">
                        <p class="testimonial-two__text">
                          This is due to their excellent service, competitive
                          pricing and customer support. It’s throughly refresing
                          to get such a personal touch. Duis aute lorem ipsum is
                          simply free text irure dolor in reprehen.
                        </p>
                        <div class="testimonial-two__client-info">
                          <div class="testimonial-two__client-img">
                            <Image
                              src={testimonialTwoImage}
                              alt=""
                              width="100"
                              height="100"
                            />
                          </div>
                          <div class="testimonial-two__client-details">
                            <h4 class="testimonial-two__client-name">
                              kevin martin
                            </h4>
                            <p class="testimonial-two__client-title">
                              Customer
                            </p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      {" "}
                      <div class="testimonial-two__single">
                        <p class="testimonial-two__text">
                          This is due to their excellent service, competitive
                          pricing and customer support. It’s throughly refresing
                          to get such a personal touch. Duis aute lorem ipsum is
                          simply free text irure dolor in reprehen.
                        </p>
                        <div class="testimonial-two__client-info">
                          <div class="testimonial-two__client-img">
                            <Image
                              src={testimonialTwoImage}
                              alt=""
                              width="100"
                              height="100"
                            />
                          </div>
                          <div class="testimonial-two__client-details">
                            <h4 class="testimonial-two__client-name">
                              kevin martin
                            </h4>
                            <p class="testimonial-two__client-title">
                              Customer
                            </p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      {" "}
                      <div class="testimonial-two__single">
                        <p class="testimonial-two__text">
                          This is due to their excellent service, competitive
                          pricing and customer support. It’s throughly refresing
                          to get such a personal touch. Duis aute lorem ipsum is
                          simply free text irure dolor in reprehen.
                        </p>
                        <div class="testimonial-two__client-info">
                          <div class="testimonial-two__client-img">
                            <Image
                              src={testimonialTwoImage}
                              alt=""
                              width="100"
                              height="100"
                            />
                          </div>
                          <div class="testimonial-two__client-details">
                            <h4 class="testimonial-two__client-name">
                              kevin martin
                            </h4>
                            <p class="testimonial-two__client-title">
                              Customer
                            </p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
                <div className="main-slider__nav">
                  <div
                    className="swiper-button-prev"
                    id="main-slider__swiper-button-prev"
                  >
                    <span className="icon-arrow-left">
                      <MyChevronLeftIcon />
                    </span>
                  </div>
                  <div
                    className="swiper-button-next"
                    id="main-slider__swiper-button-next"
                  >
                    <span className="icon-arrow-right">
                      <MyChevronRightIcon />
                    </span>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>

          {/* </div> */}
        </div>
      </section>
    </CustomerFeedBackStyle>
  );
};

export default CustomerFeedBack;
