import { bounce, boxRotate, slideInLeft } from "@/style/animations";
import { styled } from "styled-components";

export const CustomerFeedBackStyle = styled.div`
  .slideInLeft {
    -webkit-animation-name: slideInLeft;
    animation-name: ${slideInLeft};
  }
  .testimonial-two {
    position: relative;
    display: block;
    /* padding: 0 0 240px; */
    padding-top: 1rem;
    padding-bottom: 0.5rem;
  }

  .testimonial-two-shape {
    position: absolute;
    top: -154px;
    right: 0;
    z-index: -1;
  }

  .testimonial-two-shape img {
    opacity: 0.1;
    -webkit-transform-origin: center bottom;
    transform-origin: center bottom;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation-name: ${bounce};
    animation-name: ${bounce};
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
    -webkit-animation-duration: 5s;
    animation-duration: 5s;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
  }

  .testimonial-two__left {
    position: relative;
    display: block;
    /* margin-left: -242px; */
    z-index: 1;
  }

  .testimonial-two__left:before {
    position: absolute;
    top: -120px;
    left: -1000000px;
    right: 170px;
    bottom: -120px;
    background-color: var(--mibooz-extra);
    content: "";
    z-index: -1;
  }

  .testimonial-two__img {
    position: relative;
    display: block;
    background-color: var(--mibooz-black);
    z-index: 1;
  }

  .testimonial-two__img:before {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    content: "";
    background-color: rgba(var(--mibooz-black-rgb), 0.3);
    z-index: 1;
  }

  .testimonial-two__img img {
    width: 100%;
    mix-blend-mode: luminosity;
  }

  .testimonial-two__content {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    z-index: 5;
  }

  .testimonial-two__title {
    font-size: 50px;
    color: var(--mibooz-base);
    text-transform: uppercase;
    line-height: 60px;
  }

  .testimonial-two__title span {
    position: relative;
    display: block;
  }

  .testimonial-two__title span:before {
    position: absolute;
    top: 27px;
    left: -20px;
    right: -20px;
    height: 2px;
    background-color: var(--mibooz-primary);
    content: "";
  }

  .testimonial-two__box-1 {
    position: absolute;
    bottom: 0;
    right: 0;
    height: 73px;
    width: 73px;
    background-color: var(--mibooz-extra);
    z-index: 1;

    animation: ${boxRotate} 8s linear infinite;
    transform-origin: right;
  }

  .testimonial-two__box-2 {
    position: absolute;
    bottom: -73px;
    right: -73px;
    height: 73px;
    width: 73px;
    background-color: var(--mibooz-primary);
    z-index: 1;

    animation: ${boxRotate} 8s linear infinite;
    transform-origin: left;
  }

  .testimonial-two__right {
    position: relative;
    display: block;
    margin-left: 90px;
  }

  .testimonial-two__right .section-title {
    margin-bottom: 34px;
  }

  .testimonial-two__carousel {
    position: relative;
    display: block;
  }

  .testimonial-two__single {
    position: relative;
    display: block;
  }

  .testimonial-two__text {
    font-size: 24px;
    margin: 0;
    font-weight: 300;
    line-height: 42px;
  }

  .testimonial-two__client-info {
    position: relative;
    display: flex;
    align-items: center;
    margin-top: 52px;
  }

  .testimonial-two__client-img {
    position: relative;
    display: inline-block;
    border-radius: 50%;
  }

  .testimonial-two__client-img img {
    mix-blend-mode: luminosity;
    width: 90px !important;
    border-radius: 50%;
  }

  .testimonial-two__client-details {
    margin-left: 20px;
  }

  .testimonial-two__client-name {
    font-size: 18px;
    text-transform: uppercase;
    line-height: 24px;
    margin-bottom: 5px;
  }

  .testimonial-two__client-title {
    font-size: 12px;
    color: var(--mibooz-primary);
    font-family: var(--mibooz-font-two);
    text-transform: uppercase;
    letter-spacing: 0.1em;
    line-height: 22px;
    margin: 0;
  }

  .testimonial-two__carousel.owl-theme .owl-nav {
    position: absolute;
    bottom: 25px;
    right: 0;
  }

  .testimonial-two__carousel.owl-theme .owl-nav .owl-next,
  .testimonial-two__carousel.owl-theme .owl-nav .owl-prev {
    background: transparent;
    color: var(--mibooz-black);
    font-size: 10px;
    transition: all 500ms ease;
  }

  .testimonial-two__carousel.owl-theme .owl-nav .owl-next:hover,
  .testimonial-two__carousel.owl-theme .owl-nav .owl-prev:hover {
    color: var(--mibooz-primary);
  }
  .main-slider__nav {
    /* position: relative; */
    position: absolute;
    bottom: 2rem;
    float: right;
    width: 150px;
    z-index: 100;
    display: flex;
    align-items: flex-start;
    right: 0;
  }

  .main-slider__nav .swiper-button-next,
  .main-slider__nav .swiper-button-prev {
    position: relative;
    top: auto;
    left: auto;
    right: auto;
    bottom: auto;
    z-index: 100;
    margin: 0;
    font-size: 10px;
    color: var(--mibooz-base);
    transition: color 500ms ease;
    svg {
      color: black;
    }
  }

  .main-slider__nav .swiper-button-next {
    margin-left: 10px;
  }

  .main-slider__nav .swiper-button-next:hover,
  .main-slider__nav .swiper-button-prev:hover {
    color: var(--mibooz-primary);
  }

  .main-slider__nav .swiper-button-prev {
    margin-right: 10px;
  }

  .main-slider__nav .swiper-button-next::after,
  .main-slider__nav .swiper-button-prev::after {
    display: none;
  }
  @media (max-width: 720px) {
    .main-slider__nav {
      display: none;
    }
  }
`;
