"use client";
import { styled } from "styled-components";

export const IntroductionStyle = styled.section`
  .welcome-one {
    position: relative;
    display: block;
    padding: 120px 0 120px;
    z-index: 1;
  }

  .welcome-one-shape {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 2;
  }

  .welcome-one-shape img {
    -webkit-transform-origin: center bottom;
    transform-origin: center bottom;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation-name: bounce;
    animation-name: bounce;
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
    -webkit-animation-duration: 5s;
    animation-duration: 5s;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
  }

  .welcome-one__left {
    position: relative;
    display: block;
    margin-right: 70px;
    z-index: 1;
  }

  .welcome-one__left:before {
    position: absolute;
    top: -120px;
    bottom: -120px;
    left: -10000000px;
    right: 230px;
    content: "";
    background-color: var(--mibooz-extra);
    z-index: -1;
  }

  .welcome-one__img-box {
    position: relative;
    display: block;
  }

  .welcome-one__img-box:before {
    position: absolute;
    bottom: 0;
    left: -40px;
    height: 224px;
    width: 20px;
    content: "";
    background-color: var(--mibooz-primary);
  }

  .welcome-one__img {
    position: relative;
    display: block;
    overflow: hidden;
    background: var(--mibooz-black);
    z-index: 1;
  }

  .welcome-one__img:after {
    position: absolute;
    top: 0;
    left: -100%;
    display: block;
    content: "";
    width: 50%;
    height: 100%;
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.3) 100%
    );
    transform: skewX(-25deg);
    z-index: 1;
  }

  .welcome-one__img-box:hover .welcome-one__img:after {
    -webkit-animation: shine 1.5s;
    animation: shine 1.5s;
  }

  .welcome-one__img img {
    width: 100%;
    transition: all 900ms ease;
    mix-blend-mode: luminosity;
  }

  .welcome-one__experience {
    position: absolute;
    top: 74px;
    left: -94px;
    background-color: #ffffff;
    box-shadow: 0px 10px 60px 0px rgba(161, 156, 156, 0.1);
    padding: 29px 40px 28px;
    display: flex;
    align-items: center;
    z-index: 2;
  }

  .welcome-one__experience-icon {
    position: relative;
    display: flex;
    align-items: center;
  }

  .welcome-one__experience-icon span {
    font-size: 65px;
    color: var(--mibooz-primary);
    position: relative;
    display: inline-block;
    transition: transform 500ms linear, color 500ms ease;
    transform: scale(1);
  }

  .welcome-one__img-box:hover .welcome-one__experience-icon span {
    transform: scale(0.9);
    color: var(--mibooz-black);
  }

  .welcome-one__experience-content {
    margin-left: 30px;
  }

  .welcome-one__experience-title {
    font-size: 16px;
    color: var(--mibooz-gray);
    font-family: var(--mibooz-font);
    line-height: 24px;
  }

  .welcome-one__experience-title span {
    font-size: 20px;
    color: var(--mibooz-black);
    font-family: var(--mibooz-font-two);
  }

  .welcome-one__right {
    position: relative;
    display: block;
  }

  .welcome-one__right .section-title {
    margin-bottom: 26px;
  }

  .welcome-one__right-text {
    margin: 0;
    padding-bottom: 32px;
  }

  .welcome-one__bottom {
    position: relative;
    display: block;
  }

  .welcome-one__bottom-left {
    position: relative;
    display: block;
    margin-right: -35px;
  }

  .welcome-one__bottom-title {
    font-size: 20px;
    color: var(--mibooz-primary);
    text-transform: uppercase;
    line-height: 30px;
    letter-spacing: 0.1em;
  }

  .welcome-one__points {
    position: relative;
    display: block;
    margin-top: 30px;
    margin-bottom: 39px;
  }

  .welcome-one__points li {
    position: relative;
    display: flex;
  }

  .welcome-one__points li + li {
    margin-top: 4px;
  }

  .welcome-one__points li .icon span {
    font-size: 16px;
    color: var(--mibooz-primary);
  }

  .welcome-one__points li .text {
    margin-left: 10px;
  }

  .welcome-one__points li .text p {
    margin: 0;
  }

  .welcome-one__person {
    position: relative;
    display: flex;
    align-items: center;
  }

  .welcome-one__person-img {
    position: relative;
    display: flex;
    align-items: center;
    border-radius: 50%;
    background-color: var(--mibooz-black);
  }

  .welcome-one__person-img:before {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: -10px;
    content: "";
    border-radius: 50%;
    background-color: var(--mibooz-extra);
    z-index: -1;
  }

  .welcome-one__person-img img {
    height: 75px;
    width: 75px;
    border-radius: 50%;
    mix-blend-mode: luminosity;
  }

  .welcome-one__person-sign {
    margin-left: 20px;
  }

  .welcome-one__person-sign h3 {
    font-size: 60px;
    font-family: var(--mibooz-sayinistic-font);
  }

  .welcome-one__bottom-right {
    position: relative;
    display: block;
    margin-left: 42px;
    margin-top: 2px;
  }

  .welcome-one__bottom-right-content {
    position: relative;
    display: block;
    background-color: var(--mibooz-extra);
    padding: 40px 39px 40px;
  }

  .welcome-one__bottom-right-icon span {
    font-size: 66px;
    color: var(--mibooz-primary);
    position: relative;
    display: inline-block;
    transform: scale(1);
    transition: color 500ms ease, transform 500ms ease;
  }

  .welcome-one__bottom-right-content:hover
    .welcome-one__bottom-right-icon
    span {
    transform: scale(0.85);
    color: var(--mibooz-black);
  }

  .welcome-one__bottom-right-title {
    font-size: 20px;
    line-height: 30px;
    text-transform: uppercase;
    margin-top: 16px;
    margin-bottom: 49px;
  }

  .welcome-one__btn {
    padding: 4px 37px 4px;
    color: var(--mibooz-black);
    font-size: 12px;
  }
`;
