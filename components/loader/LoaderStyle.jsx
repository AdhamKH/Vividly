"use client";
import { styled } from "styled-components";
import { rotateme } from "../../style/animations";
export const LoaderStyle = styled.div`
  width: 100%;
  min-height: 100dvh;
  background-color: black;
  position: absolute;
  max-width: 100%;
  top: 0%;
  left: 0;
  z-index: 999999;
  .preloader {
    position: fixed;
    background-color: var(--mibooz-black);
    background-position: center center;
    background-repeat: no-repeat;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9991;
    display: -webkit-box;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    text-align: center;
    max-width: 100%;
    height: 100%;
    img {
      -webkit-animation-fill-mode: both;
      animation-fill-mode: both;
      -webkit-animation-name: ${rotateme};
      animation-name: ${rotateme};
      -webkit-animation-duration: 1000ms;
      animation-duration: 1000ms;
      background-color: var(--mibooz-black);
      mix-blend-mode: luminosity;
      -webkit-animation-iteration-count: infinite;
      animation-iteration-count: infinite;
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
  }
`;
