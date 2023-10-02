import styled from "styled-components";

export const AllServicesStyle = styled.section`
  ul {
    list-style: none;
  }
  .page-header {
    position: relative;
    display: block;
    padding: 260px 0 158px;
    background-color: #17161a;
    z-index: 1;
  }

  .page-header-bg {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-color: var(--mibooz-black);
    background-blend-mode: luminosity;
    opacity: 0.2;
    z-index: -1;
    img {
      background-attachment: fixed;
    }
  }

  .page-header__inner {
    position: relative;
    display: block;
    text-align: center;
    z-index: 2;
  }

  .page-header__inner h2 {
    font-size: 50px;
    color: var(--mibooz-base);
    line-height: 60px;
    text-transform: uppercase;
    margin-top: 6px;
  }

  .thm-breadcrumb {
    position: relative;
    display: block;
  }

  .thm-breadcrumb li {
    position: relative;
    display: inline-block;
    color: var(--mibooz-base);
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    -webkit-transition: all 500ms ease;
    transition: all 500ms ease;
  }

  .thm-breadcrumb li:before {
    position: absolute;
    top: 17px;
    left: -10px;
    right: -10px;
    content: "";
    background-color: var(--mibooz-primary);
    height: 1px;
    transition: transform 500ms ease;
    transform: scale(0, 1);
    transform-origin: left center;
  }

  .thm-breadcrumb li + li {
    margin-left: 18px;
  }

  .thm-breadcrumb li a {
    color: var(--mibooz-base);
    font-size: 14px;
    letter-spacing: 0.1em;
    -webkit-transition: all 500ms ease;
    transition: all 500ms ease;
  }

  .thm-breadcrumb li:hover:before,
  .thm-breadcrumb li.active:before {
    transform: scale(1, 1);
    transform-origin: right center;
  }
  .services-three {
    position: relative;
    display: block;
    padding-top: 120px;
    z-index: 1;
  }

  .services-three:before {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 398px;
    background-color: var(--mibooz-extra);
    content: "";
    z-index: -1;
  }

  .services-three-shape {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 398px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    opacity: 0.05;
    z-index: -1;
  }

  .services-three__top {
    position: relative;
    display: block;
  }

  .services-three__single {
    position: relative;
    display: block;
    background-color: #ffffff;
    border: 1px solid transparent;
    text-align: center;
    padding: 60px 90px 45px;
    margin-bottom: 30px;
    -webkit-transition: all 500ms ease;
    transition: all 500ms ease;
    min-height: 33rem;
  }

  .services-three__single:hover {
    box-shadow: 0px 10px 60px 0px rgba(0, 0, 0, 0.05);
    border: 1px solid var(--mibooz-bdr-color);
  }

  .services-three_icon {
    position: relative;
    height: 106px;
    width: 106px;
    background-color: var(--mibooz-extra);
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
  }

  .services-three_icon:before {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    content: "";
    background-color: var(--mibooz-primary);
    transition: transform 500ms ease;
    transform: scale(1, 0);
    transform-origin: bottom center;
  }

  .services-three__single:hover .services-three_icon:before {
    transform: scale(1, 1);
    transform-origin: top center;
  }

  .services-three_icon span {
    position: relative;
    display: inline-block;
    color: var(--mibooz-primary);
    font-size: 64px;
    transition: transform 500ms ease, color 500ms ease;
    transform: scale(1);
  }

  .services-three__single:hover .services-three_icon span {
    color: var(--mibooz-base);
    transform: scale(0.9);
  }

  .services-three__title {
    font-size: 20px;
    text-transform: uppercase;
    margin-top: 27px;
    margin-bottom: 22px;
  }

  .services-three__title a {
    color: var(--mibooz-black);
    background: linear-gradient(to right, currentcolor 0%, currentcolor 100%)
      0px 46% / 0px 1px no-repeat;
    transition: all 500ms ease;
  }

  .services-three__single:hover .services-three__title a {
    background-size: 100% 1px;
    color: var(--mibooz-primary);
  }

  .services-three__text {
    font-size: 16px;
    margin: 0;
    line-height: 32px;
  }

  .services-three__btn-box {
    position: relative;
    display: inline-block;
    margin-top: 18px;
  }

  .services-three__btn {
    font-size: 13px;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    font-family: var(--mibooz-font-two);
  }

  .services-three__single:hover .services-three__btn {
    color: var(--mibooz-black);
  }

  .services-three__btn:before {
    position: absolute;
    top: 18px;
    left: -10px;
    right: -10px;
    content: "";
    height: 1px;
    background-color: var(--mibooz-primary);
    transition: transform 500ms ease;
    transform: scale(0, 1);
    transform-origin: left center;
  }

  .services-three__single:hover .services-three__btn:before {
    transform: scale(1, 1);
    transform-origin: right center;
  }

  .services-three__bottom {
    position: relative;
    display: block;
    text-align: center;
    border-bottom: 1px solid #e5e5e5;
    padding-bottom: 50px;
    padding-top: 20px;
  }

  .services-three__bottom-text {
    font-size: 16px;
    margin: 0;
  }

  .services-three__bottom-text a {
    color: var(--mibooz-black);
    position: relative;
    display: inline-block;
    margin-left: 12px;
    transition: all 500ms ease;
  }

  .services-three__bottom-text a:hover {
    color: var(--mibooz-primary);
  }

  .services-three__bottom-text a:before {
    position: absolute;
    top: 17px;
    left: -10px;
    right: -10px;
    content: "";
    background-color: var(--mibooz-primary);
    height: 1px;
  }
  .two-boxes {
    position: relative;
    display: block;
    padding: 120px 0 90px;
  }

  .two-boxes__bg {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-color: var(--mibooz-black);
    background-blend-mode: luminosity;
    opacity: 0.3;
    z-index: -1;
  }

  .two-boxes__single {
    position: relative;
    display: block;
    text-align: center;
    padding: 71px 120px 70px;
    margin-bottom: 30px;
    background-color: var(--mibooz-black);
    z-index: 1;
    overflow: hidden;
  }

  .two-boxes__tagline {
    font-size: 14px;
    color: var(--mibooz-base);
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin: 0;
    line-height: 30px;
    padding-bottom: 3px;
  }

  .two-boxes__title {
    font-size: 20px;
    color: var(--mibooz-base);
    text-transform: uppercase;
    line-height: 40px;
  }

  .two-boxes__arrow {
    position: relative;
    display: block;
    margin-top: 12px;
  }

  .two-boxes__arrow a {
    font-size: 10px;
    color: var(--mibooz-primary);
    transition: all 500ms ease;
  }

  .two-boxes__arrow a:hover {
    color: #ffffff;
  }
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
  .services-two {
    position: relative;
    display: block;
    background-color: var(--mibooz-extra);
    padding: 120px 0 400px;
    z-index: 1;
    min-height: 60vh;
  }

  .services-two-shape {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-repeat: repeat;
    background-position: center center;
    opacity: 0.05;
    z-index: -1;
  }

  .services-two__list {
    position: relative;
    display: block;
    padding: 0 0 30px;
  }

  .services-two__single {
    position: relative;
    float: left;
    width: 25%;
    text-align: center;
    padding: 0 50px 0;
    margin-bottom: 22px;
  }

  .services-two__single:before {
    position: absolute;
    top: 1px;
    left: 0;
    bottom: 8px;
    content: "";
    background-color: var(--mibooz-bdr-color);
    width: 1px;
  }

  .services-two__single:nth-child(1):before {
    display: none;
  }

  .services-two__icon span {
    font-size: 64px;
    color: var(--mibooz-primary);
    position: relative;
    display: inline-block;
    transition: transform 500ms linear;
    transform: scale(1);
  }

  .services-two__single:hover .services-two__icon span {
    color: var(--mibooz-black);
    transform: scale(0.9);
  }

  .services-two__title {
    font-size: 20px;
    text-transform: uppercase;
    line-height: 24px;
    margin-top: 18px;
    margin-bottom: 22px;
  }

  .services-two__title a {
    color: var(--mibooz-black);
    -webkit-transition: all 500ms ease;
    background: linear-gradient(to right, currentcolor 0%, currentcolor 100%)
      0px 46% / 0px 1px no-repeat;
    transition: all 500ms ease;
  }

  .services-two__single:hover .services-two__title a {
    background-size: 100% 1px;
    color: var(--mibooz-primary);
  }

  .services-two__text {
    font-size: 16px;
    margin: 0;
    line-height: 32px;
  }

  .services-two__btn-box {
    position: relative;
    display: block;
    text-align: center;
  }

  .services-two__btn {
    font-size: 14px;
    color: var(--mibooz-black);
    text-transform: uppercase;
    display: inline-block;
    background-color: var(--mibooz-base);
    padding: 13px 49px 10px;
    font-family: var(--mibooz-font-two);
    transition: all 500ms ease;
  }

  .services-two__btn:hover {
    background-color: var(--mibooz-primary);
    color: var(--mibooz-base);
  }
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    .services-two__single {
      width: 50%;
    }

    .services-two__single:nth-child(3):before {
      display: none;
    }
  }
  @media only screen and (max-width: 767px) {
    .services-two__single {
      width: 100%;
    }

    .services-two__single:nth-child(3):before {
      display: none;
    }
  }
`;
