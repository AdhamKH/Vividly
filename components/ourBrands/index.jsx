"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import imageOne from "../../assets/images/brand/brand-1-1.png";
import imageTwo from "../../assets/images/brand/brand-1-2.png";
import imageThree from "../../assets/images/brand/brand-1-3.png";
import imageFour from "../../assets/images/brand/brand-1-4.png";
import imageFive from "../../assets/images/brand/brand-1-5.png";
import { BrandStyle } from "./BrandsStyle";
const OurBrands = () => {
  return (
    <BrandStyle>
      <section class="brand-one">
        <div class="container">
          <Swiper
            className="swiper-container thm-swiper__slider"
            spaceBetween={100}
            slidesPerView={5}
            autoplay={{
              delay: 5000,
            }}
            modules={[Autoplay]}
          >
            <SwiperSlide>
              {" "}
              <div class="swiper-slide">
                <Image src={imageOne} alt="" width="100" height="100" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="swiper-slide">
                <Image src={imageTwo} alt="" width="100" height="100" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="swiper-slide">
                <Image src={imageThree} alt="" width="100" height="100" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="swiper-slide">
                <Image src={imageFour} alt="" width="100" height="100" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="swiper-slide">
                <Image src={imageFive} alt="" width="100" height="100" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="swiper-slide">
                <Image src={imageOne} alt="" width="100" height="100" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="swiper-slide">
                <Image src={imageTwo} alt="" width="100" height="100" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="swiper-slide">
                <Image src={imageThree} alt="" width="100" height="100" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="swiper-slide">
                <Image src={imageFour} alt="" width="100" height="100" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="swiper-slide">
                <Image src={imageFive} alt="" width="100" height="100" />
              </div>
            </SwiperSlide>
          </Swiper>{" "}
        </div>
      </section>
    </BrandStyle>
  );
};

export default OurBrands;
