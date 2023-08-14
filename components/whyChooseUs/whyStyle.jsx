import { styled } from "styled-components";
import { boxRotate } from "../../style/animations";
export const WhyStyle = styled.section`
  .why-choose-one {
    position: relative;
    display: block;
    padding: 120px 0 120px;
  }

  .why-choose-one__left {
    position: relative;
    display: block;
    margin-left: -374px;
  }

  .why-choose-one__left:before {
    position: absolute;
    top: -120px;
    left: -10000000px;
    right: 300px;
    bottom: -120px;
    content: "";
    background-color: var(--mibooz-extra);
  }

  .why-choose-one-box-1 {
    position: absolute;
    bottom: 112px;
    right: 112px;
    height: 112px;
    width: 112px;
    background-color: var(--mibooz-base);
    animation: ${boxRotate} 8s linear infinite;
    transform-origin: right;
  }

  .why-choose-one-box-2 {
    position: absolute;
    bottom: 0;

    right: 0;

    height: 112px;
    width: 112px;
    background-color: var(--mibooz-primary);
    animation: ${boxRotate} 8s linear infinite;
    transform-origin: left;
  }

  .why-choose-one-box-3 {
    position: absolute;
    bottom: -112px;
    right: 112px;
    height: 112px;
    width: 112px;
    background-color: var(--mibooz-black);
    animation: ${boxRotate} 8s linear infinite;
    transform-origin: right;
  }

  .why-choose-one__img {
    position: relative;
    display: block;
    background-color: var(--mibooz-black);
  }

  .why-choose-one__img img {
    width: 100%;
    mix-blend-mode: luminosity;
  }

  .why-choose-one__right {
    position: relative;
    display: block;
    margin-left: 70px;
  }

  .why-choose-one__right .section-title {
    margin-bottom: 25px;
  }

  .why-choose-one__right-text {
    margin: 0;
  }

  .why-choose-one__content {
    position: relative;
    display: flex;
    align-items: center;
    border-top: 1px solid var(--mibooz-bdr-color);
    margin-top: 42px;
    padding-top: 46px;
  }

  .why-choose-one__content-img {
    position: relative;
    display: block;
    background-color: var(--mibooz-black);
  }

  .why-choose-one__content-img img {
    mix-blend-mode: luminosity;
  }

  .why-choose-one__content-list {
    margin-left: 28px;
  }

  .why-choose-one__points {
    position: relative;
    display: block;
  }

  .why-choose-one__points li {
    display: flex;
    align-items: center;
  }

  .why-choose-one__points li + li {
    margin-top: 2px;
  }

  .why-choose-one__points li .icon span {
    font-size: 16px;
    color: var(--mibooz-primary);
  }

  .why-choose-one__points li .text {
    margin-left: 10px;
  }

  .why-choose-one__points li .text p {
    font-size: 16px;
    margin: 0;
    color: var(--mibooz-black);
  }

  .why-choose-one__progress {
    position: relative;
    display: block;
    width: 100%;
    margin-top: 44px;
  }

  .why-choose-one__progress-single {
    position: relative;
    display: block;
  }

  .why-choose-one__progress-title {
    font-size: 18px;
    line-height: 28px;
    color: var(--mibooz-black);
    margin-bottom: 12px;
    text-transform: uppercase;
  }

  .why-choose-one__progress .bar {
    position: relative;
    width: 100%;
    height: 7px;
    background-color: var(--mibooz-extra);
    border-radius: 0px;
    margin-bottom: 25px;
  }

  .why-choose-one__progress .bar-inner {
    position: relative;
    display: block;
    width: 0px;
    height: 7px;
    border-radius: 0px;
    background: var(--mibooz-primary);
    -webkit-transition: all 1500ms ease;
    -ms-transition: all 1500ms ease;
    -o-transition: all 1500ms ease;
    -moz-transition: all 1500ms ease;
    transition: all 1500ms ease;
  }

  .why-choose-one__progress .count-text {
    position: absolute;
    right: -41px;
    bottom: 19px;
    color: var(--mibooz-base);
    line-height: 24px;
    font-size: 10px;
    text-align: center;
    font-weight: 500;
    opacity: 0;
    background-color: var(--mibooz-black);
    padding-left: 10px;
    padding-right: 10px;
    -webkit-transition: all 500ms ease;
    -ms-transition: all 500ms ease;
    -o-transition: all 500ms ease;
    -moz-transition: all 500ms ease;
    transition: all 500ms ease;
  }

  .why-choose-one__progress .count-text:before {
    position: absolute;
    bottom: -6px;
    left: 0;
    border: 3px solid var(--mibooz-black);
    content: "";
    border-right: 4px solid;
    border-bottom: 3px solid;
  }

  .why-choose-one__progress .bar-inner.counted .count-text {
    opacity: 1;
  }

  .why-choose-one__progress .bar.marb-0 {
    margin-bottom: 0;
  }
`;
