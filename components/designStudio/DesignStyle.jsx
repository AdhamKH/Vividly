"use client";
const { styled } = require("styled-components");

export const DesignStyle = styled.section`
  .design-studio {
    position: relative;
    display: block;
    padding: 107px 0 255px;
    z-index: 1;
  }

  .design-studio-bg-box {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--mibooz-black);
    z-index: 1;
  }

  .design-studio-bg {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    z-index: 1;
    mix-blend-mode: luminosity;
    opacity: 0.3;
  }

  .design-studio__inner {
    position: relative;
    display: block;
    text-align: center;
    z-index: 2;
  }

  .design-studio__title {
    font-size: 70px;
    text-transform: uppercase;
    line-height: 83px;
    color: var(--mibooz-base);
    margin-bottom: 46px;
  }

  .design-studio__title span {
    position: relative;
    display: inline-block;
  }

  .design-studio__title span:before {
    position: absolute;
    top: 50%;
    left: -13px;
    right: -13px;
    content: "";
    background-color: var(--mibooz-primary);
    height: 2px;
    transform: translateY(-50%);
  }

  .design-studio__video-link {
    position: relative;
    display: block;
  }

  .design-studio__video-icon {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 97px;
    height: 97px;
    line-height: 97px;
    text-align: center;
    font-size: 22px;
    color: var(--mibooz-base);
    background-color: var(--mibooz-primary);
    border-radius: 50%;
    margin: 0 auto;
    transition: all 0.5s ease;
    -moz-transition: all 0.5s ease;
    -webkit-transition: all 0.5s ease;
    -ms-transition: all 0.5s ease;
    -o-transition: all 0.5s ease;
  }

  .design-studio__video-icon:hover {
    background-color: var(--mibooz-base);
    color: var(--mibooz-primary);
  }

  .design-studio__video-icon:before {
    position: absolute;
    top: -15px;
    left: -15px;
    right: -15px;
    bottom: -15px;
    content: "";
    border-radius: 50%;
    z-index: -1;
    border: 1px solid var(--mibooz-base);
    opacity: 0.1;
  }

  .design-studio__video-link .ripple,
  .design-studio__video-icon .ripple:before,
  .design-studio__video-icon .ripple:after {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 126px;
    height: 126px;
    transform: translate(-50%, -50%);
    -ms-box-shadow: 0 0 0 0 rgba(var(--mibooz-primary-rgb), 0.6);
    -o-box-shadow: 0 0 0 0 rgba(var(--mibooz-primary-rgb), 0.6);
    box-shadow: 0 0 0 0 rgba(var(--mibooz-primary-rgb), 0.6);
    -webkit-animation: ripple 3s infinite;
    animation: ripple 3s infinite;
    border-radius: 50%;
  }

  .design-studio__video-icon .ripple:before {
    -webkit-animation-delay: 0.9s;
    animation-delay: 0.9s;
    content: "";
    position: absolute;
  }

  .design-studio__video-icon .ripple:after {
    -webkit-animation-delay: 0.6s;
    animation-delay: 0.6s;
    content: "";
    position: absolute;
  }
`;
