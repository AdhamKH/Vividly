"use client";
import { styled } from "styled-components";

export const ServicesStyle = styled.section`
  /* background-color: red; */
  .services-one {
    position: relative;
    display: block;
    background-color: var(--mibooz-primary);
    z-index: 1;
  }

  .services-one-shape {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-repeat: repeat;
    background-position: center;
    opacity: 0.07;
    z-index: -1;
  }

  .services-one__top {
    position: relative;
    display: block;
    padding: 120px 0 0;
  }

  .services-one__top-left {
    position: relative;
    display: block;
  }

  .services-one__top-left .section-title__tagline {
    color: #ffbdc8;
  }

  .services-one__top-left .section-title__title {
    color: var(--mibooz-base);
  }

  .services-one__top-right {
    position: relative;
    display: block;
    margin-top: 13px;
  }

  .services-one__top-text {
    color: #ffbdc8;
    margin: 0;
  }

  .services-one__bottom {
    position: relative;
    display: block;
    padding: 0 0 90px;
    counter-reset: count;
  }

  .services-one__single {
    position: relative;
    display: block;
    margin-bottom: 30px;
    background-color: var(--mibooz-base);
    padding: 82px 40px 34px;
    overflow: hidden;
    z-index: 1;
  }

  .services-one__single:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 15px;
    width: 15px;
    background-color: var(--mibooz-black);
    z-index: -1;
    -webkit-transition: 0.5s;
    -o-transition: 0.5s;
    transition: 0.5s;
    -webkit-transform: perspective(400px) rotateX(90deg) scale(0);
    -ms-transform: perspective(400px) rotateX(90deg) scale(0);
    transform: perspective(400px) rotateX(90deg) scale(0);
    -webkit-transform-origin: left top;
    -ms-transform-origin: left top;
    transform-origin: left top;
  }

  .services-one__single:hover:before {
    opacity: 1;
    -webkit-transform: perspective(400px) rotateX(0deg) scale(1);
    -ms-transform: perspective(400px) rotateX(0deg) scale(1);
    transform: perspective(400px) rotateX(0deg) scale(1);
  }

  .services-one__title {
    font-size: 20px;
    text-transform: uppercase;
    line-height: 25px;
  }

  .services-one__title a {
    color: var(--mibooz-black);
    transition: all 500ms linear;
    background: linear-gradient(to right, currentcolor 0%, currentcolor 100%)
      0px 46% / 0px 1px no-repeat;
  }

  .services-one__title a:hover {
    color: var(--mibooz-primary);
    background-size: 100% 1px;
  }

  .services-one__icon {
    position: absolute;
    top: 40px;
    right: 40px;
    font-size: 65px;
    color: var(--mibooz-primary);
    transform: scale(1);
    transition: transform 500ms ease;
  }

  .services-one__single:hover .services-one__icon {
    transform: scale(0.85);
  }

  .services-one__count {
    height: 30px;
    width: 30px;
    position: absolute;
    top: 35px;
    left: 39px;
    line-height: 30px;
  }

  .services-one__count:before {
    position: absolute;
    height: 30px;
    width: 30px;
    font-size: 30px;
    line-height: 30px;
    font-weight: 400;
    counter-increment: count;
    content: "0" counter(count);
    transition: all 200ms linear;
    transition-delay: 0.1s;
    font-family: var(--mibooz-font-two);
    color: rgba(var(--mibooz-black-rgb), 0.1);
  }

  .services-one__view-all {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 58px 60px 58px;
    background-color: var(--mibooz-black);
  }

  .services-one__view-all-title {
    font-size: 20px;
    text-transform: uppercase;
    line-height: 25px;
  }

  .services-one__view-all-title a {
    color: var(--mibooz-base);
    transition: all 500ms ease;
    background: linear-gradient(to right, currentcolor 0%, currentcolor 100%)
      0px 46% / 0px 1px no-repeat;
  }

  .services-one__view-all-title a:hover {
    background-size: 100% 1px;
    color: var(--mibooz-primary);
  }

  .services-one__view-all-arrow a {
    font-size: 10px;
    color: var(--mibooz-base);
    transition: all 500ms ease;
  }

  .services-one__view-all-arrow a:hover {
    color: var(--mibooz-primary);
  }
`;
