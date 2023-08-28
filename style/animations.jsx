"use client";
import { keyframes } from "styled-components";
export const sunMove = keyframes`
  0%,
  100% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }

  25%,
  75% {
    -webkit-transform: rotate(22.5deg);
    transform: rotate(22.5deg);
  }

  50% {
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;
export const slideInLeft = keyframes`
   0% {
        -webkit-transform: translate3d(-100%, 0, 0);
        transform: translate3d(-100%, 0, 0);
        visibility: visible;
    }

    100% {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
    }
`;
export const slideInRight = keyframes`
  0% {
      -webkit-transform: translate3d(-100%, 0, 0);
      transform: translate3d(-100%, 0, 0);
      visibility: visible;
  }

  100% {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
  }
`;

export const rotateme = keyframes`  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }`;

export const boxRotate = keyframes` 0%,
100% {
  transform: rotateY(0deg);
  visibility: visible;
}

25%,
75% {
  visibility: hidden;
  transform: rotateY(-90deg);
}

50% {
  transform: rotateY(-180deg);
  visibility: visible;
}`;

export const bounce = keyframes` 0%,

  0%,
  20%,
  53%,
  80%,
  100% {
      -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
      animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
      -webkit-animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
      animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
      -webkit-transform: translate3d(0, -30px, 0);
      transform: translate3d(0, -30px, 0);
  }

  70% {
      -webkit-animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
      animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
      -webkit-transform: translate3d(0, -15px, 0);
      transform: translate3d(0, -15px, 0);
  }

  90% {
      -webkit-transform: translate3d(0, -4px, 0);
      transform: translate3d(0, -4px, 0);
  }`;
