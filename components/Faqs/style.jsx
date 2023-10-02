import { bounce, boxRotate, slideInLeft } from "@/style/animations";
import { styled } from "styled-components";
import { WhyStyle } from "../whyChooseUs/whyStyle";

export const FaqsStyle = styled.div`
  position: relative;
  padding: 120px 0 120px;
  width: 100%;
  .slideInLeft {
    -webkit-animation-name: slideInLeft;
    animation-name: ${slideInLeft};
  }
  .testimonial-two-shape {
    position: absolute;
    top: -0px;
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

  &:before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: var(--mibooz-gray);
    opacity: 0.2;
  }
  .faqs {
    width: 100%;
    max-width: 768px;
    margin: 0 auto;
    /* padding: 15px; */
    transition: all 1s height;
  }

  .faqs .faq {
    margin: 15px 0;
    padding: 15px;
    background: #fff;
    /* border-radius: 10px; */
    /* box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1); */
    padding: 1rem 1rem;
    border: 1px solid var(--mibooz-bdr-color);
    transition: all 1s height;
  }

  .faqs .faq .faq-question {
    position: relative;
    font-size: 20px;
    padding-right: 80px;
    transition: all 1.4s ease;
    transition: all 1s height;
  }

  .faqs .faq .faq-question::after {
    /* content: "+"; */
    position: absolute;
    top: 50%;
    right: 0px;
    transform: translateY(-50%);
    width: 30px;
    height: 30px;
    transition: all 1s ease-in-out;
  }

  .faqs .faq .faq-answer {
    opacity: 0;
    max-height: 0;
    overflow: hidden;
    transition: all 0.2s ease;
  }

  .faqs .faq.open .faq-question {
    /* margin-bottom: 15px; */
  }

  /* .faqs .faq.open .faq-question::after {
    content: "-";
  } */

  .faqs .faq.open .faq-answer {
    max-height: 1000px;
    opacity: 1;
    transition: all 1s ease-in-out;
  }
  .q_btn {
    display: flex;
  }
  .section-title__tagline {
    position: relative;
    display: block;
    color: var(--mibooz-primary);
    font-size: 1.5rem;
    line-height: 24px;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-bottom: 6px;
    /* text-align: center; */
  }

  .section-title__title {
    margin: 0;
    font-size: 50px;
    line-height: 60px;
    text-transform: uppercase;
  }

  .why-choose-one__left {
    position: relative;
    display: block;
    margin-right: -200px;
  }

  .why-choose-one__left:before {
    position: absolute;
    top: -120px;
    right: -10000000px;
    left: 500px;
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
    /* mix-blend-mode: luminosity; */
  }
  .why-choose-one__right {
    position: relative;
    display: block;
    margin-right: 80px;
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
    /* background-color: var(--mibooz-black); */
  }
  .why-choose-one__content-img img {
    /* mix-blend-mode: luminosity; */
  }
  .why-choose-one__content-list {
    margin-left: 28px;
  }
  .why-choose-one__points {
    position: relative;
    display: block;
  }
  ul {
    list-style: none;
  }
`;
