"use client";
import { styled } from "styled-components";
import { boxRotate } from "../../style/animations";
export const CounterStyle = styled.section`
  /* overflow-y: hidden; */
  .counter-one {
    position: relative;
    display: block;
    margin-top: -120px;
    z-index: 1;
  }

  .counter-one__inner {
    position: relative;
    display: block;
    max-width: 1410px;
    width: 100%;
    margin: 0 auto;
    padding: 100px 0 94px;
    background-color: var(--mibooz-extra);
    z-index: 1;
  }

  .counter-one__box-one {
    position: absolute;
    bottom: -106px;
    right: -106px;
    height: 106px;
    width: 106px;
    background-color: var(--mibooz-primary);
    animation: ${boxRotate} 8s linear infinite;
    transform-origin: left;
  }

  .counter-one__box-two {
    position: absolute;
    bottom: -212px;
    right: 0;
    height: 106px;
    perspective: 106px;
    width: 106px;
    background-color: var(--mibooz-extra);
    animation: ${boxRotate} 8s linear infinite;
    transform-origin: right;
  }

  .counter-one-pattern {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    opacity: 0.05;
    z-index: -1;
  }

  .counter-one__list {
    position: relative;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }

  .counter-one__single {
    position: relative;
    flex: 0 0 25%;
    max-width: 25%;
    width: 100%;
    text-align: center;
  }

  .counter-one__single:before {
    position: absolute;
    top: 0;
    bottom: 10px;
    left: 0;
    content: "";
    width: 1px;
    background-color: var(--mibooz-bdr-color);
  }

  .counter-one__single:first-child:before {
    display: none;
  }

  .counter-one__icon {
    height: 106px;
    width: 106px;
    background-color: #ffffff;
    box-shadow: 0px 10px 60px 0px rgba(0, 0, 0, 0.05);
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 15px;
  }

  .counter-one__icon span {
    color: var(--mibooz-primary);
    font-size: 65px;
    position: relative;
    display: inline-block;
    transition: transform 500ms linear, color 500ms ease;
    transform: scale(1);
  }

  .counter-one__single:hover .counter-one__icon span {
    transform: scale(0.9);
    color: var(--mibooz-black);
  }

  .counter-one__single h3 {
    font-size: 50px;
    font-family: var(--mibooz-font-two) !important;
    line-height: 60px !important;
  }

  .counter-one__text {
    margin: 0;
    line-height: 32px;
  }

  .counter-one__single .odometer-formatting-mark {
    display: none;
  }
  ul {
    list-style: none;
  }
`;
