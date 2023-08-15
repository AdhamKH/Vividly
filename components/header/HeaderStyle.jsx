"use client";
import { styled } from "styled-components";
import { sunMove } from "../../style/animations";
export const HeaderStyle = styled.section`
  .main-slider {
    position: relative;
    display: block;
    overflow: hidden;
  }

  .main-slider .swiper-slide {
    position: relative;
    background-color: var(--mibooz-black);
    width: 100% !important;
  }

  .main-slider .image-layer {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    transform: scale(1);
    opacity: 0.15;
    background-color: var(--mibooz-black);
    background-blend-mode: luminosity;
    transition: transform 7000ms ease, opacity 1500ms ease-in;
    z-index: 1;
  }

  .main-slider .swiper-slide-active .image-layer {
    opacity: 0.2;
  }

  .main-slider-badge {
    position: absolute;
    top: 190px;
    right: 90px;
    opacity: 0;
    transform: translateX(200px);
    z-index: 2;
    animation: ${sunMove} 10s linear infinite;
    z-index: 9999;
  }

  .main-slider .swiper-slide-active .main-slider-badge {
    opacity: 1;
    transform: translate(0);
    transition: all 1000ms ease;
    transition-delay: 200ms;
  }

  .main-slider__social {
    position: absolute;
    bottom: 484px;
    left: -57px;
    z-index: 100;
    display: flex;
    align-items: center;
    transform: rotate(-90deg);
  }

  .main-slider__social a {
    position: relative;
    display: inline-block;
    color: var(--mibooz-base);
    font-size: 13px;
    font-family: var(--mibooz-font-two);
    text-transform: uppercase;
    letter-spacing: 0.1em;
    -webkit-transition: all 500ms ease;
    transition: all 500ms ease;
  }

  .main-slider__social a:before {
    position: absolute;
    top: 17px;
    left: -10px;
    right: -10px;
    content: "";
    height: 1px;
    background-color: var(--mibooz-primary);
    transition: transform 500ms ease;
    transform: scale(0, 1);
    transform-origin: left center;
  }

  .main-slider__social a:hover:before {
    transform: scale(1, 1);
    transform-origin: right center;
  }

  .main-slider__social a + a {
    margin-left: 50px;
  }

  .main-slider .container {
    position: relative;
    padding-top: 246px;
    padding-bottom: 145px;
    z-index: 30;
    margin: auto;
  }

  .main-slider__content {
    position: relative;
    display: block;
    text-align: center;
    z-index: 30;
  }

  .main-slider .main-slider__title-box-1 {
    position: relative;
    display: block;
  }

  .main-slider .main-slider__title-box-1 h2 {
    margin: 0;
    margin-bottom: 58px;
    color: #fff;
    opacity: 0;
    visibility: hidden;
    transform: translateY(120px);
    transition-delay: 1000ms;
    transition: transform 2000ms ease, opacity 2000ms ease;
    font-size: 190px;
    line-height: 150px;
    text-transform: uppercase;
    z-index: 30;
  }

  .main-slider .main-slider__title-box-2 {
    position: absolute;
    top: 0;
    left: -80px;
    right: 0;
    bottom: 0;
  }

  .main-slider .main-slider__title-box-2 h2 {
    margin: 0;
    margin-bottom: 58px;
    color: transparent;
    -webkit-text-stroke: 1px rgba(var(--mibooz-base-rgb), 0.1);
    opacity: 0;
    visibility: hidden;
    transform: translateY(120px);
    transition-delay: 1000ms;
    transition: transform 2000ms ease, opacity 2000ms ease;
    font-size: 190px;
    line-height: 150px;
    text-transform: uppercase;
    z-index: 30;
  }

  .main-slider .thm-btn {
    opacity: 0;
    transform: translateY(-100px);
    transition-delay: 2500ms;
    transition: transform 2000ms ease, opacity 2000ms ease, color 500ms ease,
      background 500ms ease;
  }

  .main-slider .swiper-slide-active .image-layer {
    transform: scale(1.15);
  }

  .main-slider .swiper-slide-active .thm-btn,
  .main-slider .swiper-slide-active .main-slider__title-box-1 h2,
  .main-slider .swiper-slide-active .main-slider__title-box-2 h2 {
    visibility: visible;
    opacity: 1;
    transform: translateY(0) translateX(0);
  }

  .slider-bottom-box {
    position: absolute;
    left: 0;
    bottom: 41px;
    right: 0;
    min-height: 50px;
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    padding: 0 15px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }

  .main-slider__nav {
    position: relative;
    float: right;
    width: 150px;
    z-index: 100;
    display: flex;
    align-items: flex-start;
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

  #main-slider-pagination {
    z-index: 10;
    width: 150px;
    text-align: left;
    position: relative;
    margin-right: auto;
    float: left;
  }

  #main-slider-pagination .swiper-pagination-bullet {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: 2px solid transparent;
    background-color: rgba(var(--mibooz-base-rgb), 0.8);
  }

  #main-slider-pagination
    .swiper-pagination-bullet
    + .swiper-pagination-bullet {
    margin-left: 5px;
  }

  #main-slider-pagination
    .swiper-pagination-bullet.swiper-pagination-bullet-active {
    border: 2px solid var(--mibooz-base);
    background-color: rgba(var(--mibooz-base-rgb), 0);
  }
`;
