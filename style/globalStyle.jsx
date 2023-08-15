"use client";
import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
*, &:after, &:before {
    box-sizing: border-box;
}
html {
  scroll-behavior: smooth !important;
}
div{
    display: block;
}
:root {
    --mibooz-font: 'Rubik', sans-serif;
    --mibooz-font-two: 'Federo', sans-serif;
    --mibooz-sayinistic-font: 'the_sayinisticitalic';
    --mibooz-gray: #707070;
    --mibooz-gray-rgb: 112, 112, 112;
    --mibooz-primary: #dd0429;
    --mibooz-primary-rgb: 221, 4, 41;
    --mibooz-black: #17161a;
    --mibooz-black-rgb: 23, 22, 26;
    --mibooz-base: #ffffff;
    --mibooz-base-rgb: 255, 255, 255;
    --mibooz-extra: #f6f6f6;
    --mibooz-extra-rgb: 246, 246, 246;
    --mibooz-bdr-color: #e3e3e3;
    --mibooz-bdr-color-rgb: 227, 227, 227;
}
.sticky-nav{
    position: fixed !important;
    top: 0 !important;
    left: 0 !important;
    background-color: red !important;
}

.row {
    --bs-gutter-x: 30px;
}

.gutter-y-30 {
    --bs-gutter-y: 30px;
}

body {
    font-family: var(--mibooz-font);
    color: var(--mibooz-gray);
    font-size: 18px;
    line-height: 36px;
    font-weight: 400;
    overflow-x:hidden;  

}

body.locked {
    overflow: hidden;
}

a {
    color: var(--mibooz-gray);
}

a,
a:hover,
a:focus,
a:visited {
    text-decoration: none;
}

::placeholder {
    color: inherit;
    opacity: 1;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    color: var(--mibooz-black);
    margin: 0;
    font-family: var(--mibooz-font-two);
    font-weight: 400;
}

dl,
ol,
ul {
    margin-top: 0;
    margin-bottom: 0;
}

::placeholder {
    color: inherit;
    opacity: 1;
}


.page-wrapper {
    position: relative;
    margin: 0 auto;
    width: 100%;
    min-width: 300px;
    overflow: hidden;
}

.container {
    padding-left: 15px;
    padding-right: 15px;
    margin: auto;
    /* overflow-y: hidden !important; */
}


@media (min-width: 1200px) {
    .container {
        max-width: 1200px;
    }
}

::placeholder {
    color: inherit;
    opacity: 1;
}

.section-separator {
    border-color: var(--thm-border);
    border-width: 1px;
    margin-top: 0;
    margin-bottom: 0;
}

#particles-js {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background-position: 50% 50%;
    opacity: 0.40;
    z-index: -1;
}

.thm-btn {
    position: relative;
    display: inline-block;
    vertical-align: middle;
    -webkit-appearance: none;
    outline: none !important;
    background-color: transparent;
    color: var(--mibooz-base);
    font-size: 14px;
    font-weight: 400;
    text-transform: uppercase;
    padding: 14px 58px 14px;
    transition: all 0.3s linear;
    overflow: hidden;
    border: 2px solid var(--mibooz-primary);
    z-index: 1;
    font-family: var(--mibooz-font-two);
    text-shadow: 0 0 0.25px currentColor;
}

.thm-btn:after {
    position: absolute;
    content: "";
    top: 0px;
    left: 0px;
    width: 0px;
    height: 0px;
    background-color: var(--mibooz-primary);
    transition-timing-function: ease-in-out;
    transition-duration: .5s;
    transition-property: all;
    opacity: 0;
    z-index: -1;
}

.thm-btn:hover:after {
    opacity: 1;
    width: 100%;
    top: 0px;
    left: 0px;
    height: 100%;
}

.thm-btn:hover {
    color: var(--mibooz-base);
}



.section-title {
    margin-top: -6px;
    margin-bottom: 46px;
}

.section-title__tagline {
    position: relative;
    display: block;
    color: var(--mibooz-primary);
    font-size: 14px;
    line-height: 24px;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-bottom: 6px;
}

.section-title__title {
    margin: 0;
    font-size: 50px;
    line-height: 60px;
    text-transform: uppercase;
}

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
}

.preloader__image {
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation-name: rotateme;
    animation-name: rotateme;
    -webkit-animation-duration: 1000ms;
    animation-duration: 1000ms;
    background-color: var(--mibooz-black);
    mix-blend-mode: luminosity;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1);
}

/* scroll to top */
.scroll-to-top {
    display: inline-block;
    width: 45px;
    height: 45px;
    background: var(--mibooz-primary);
    position: fixed;
    bottom: 40px;
    right: 40px;
    z-index: 99;
    text-align: center;
    -webkit-transition: all 0.4s ease;
    transition: all 0.4s ease;
    display: none;
    border-radius: 50%;
    transition: all 0.4s ease;
}

.scroll-to-top i {
    color: #ffffff;
    font-size: 18px;
    line-height: 45px;
}

.scroll-to-top:hover {
    background-color: var(--mibooz-black);
}

.scroll-to-top:hover i {
    color: #fff;
}

/*--------------------------------------------------------------
>>> TABLE OF CONTENTS:
----------------------------------------------------------------
# Utility
# Cards
# Common
# Form
# Navigations
# Animations
# Mobile Nav
# Search Popup
# Page Header
# Google Map
# Client Carousel
--------------------------------------------------------------*/

/*--------------------------------------------------------------
# Common
--------------------------------------------------------------*/
:root {
    --mibooz-font: 'Rubik', sans-serif;
    --mibooz-font-two: 'Federo', sans-serif;
    --mibooz-sayinistic-font: 'the_sayinisticitalic';
    --mibooz-gray: #707070;
    --mibooz-gray-rgb: 112, 112, 112;
    --mibooz-primary: #dd0429;
    --mibooz-primary-rgb: 221, 4, 41;
    --mibooz-black: #17161a;
    --mibooz-black-rgb: 23, 22, 26;
    --mibooz-base: #ffffff;
    --mibooz-base-rgb: 255, 255, 255;
    --mibooz-extra: #f6f6f6;
    --mibooz-extra-rgb: 246, 246, 246;
    --mibooz-bdr-color: #e3e3e3;
    --mibooz-bdr-color-rgb: 227, 227, 227;
}

.row {
    --bs-gutter-x: 30px;
}

.gutter-y-30 {
    --bs-gutter-y: 30px;
}

body {
    font-family: var(--mibooz-font);
    color: var(--mibooz-gray);
    font-size: 18px;
    line-height: 36px;
    font-weight: 400;
}

body.locked {
    overflow: hidden;
}

a {
    color: var(--mibooz-gray);
}

a,
a:hover,
a:focus,
a:visited {
    text-decoration: none;
}

::placeholder {
    color: inherit;
    opacity: 1;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    color: var(--mibooz-black);
    margin: 0;
    font-family: var(--mibooz-font-two);
    font-weight: 400;
}

dl,
ol,
ul {
    margin-top: 0;
    margin-bottom: 0;
}

::placeholder {
    color: inherit;
    opacity: 1;
}


.page-wrapper {
    position: relative;
    margin: 0 auto;
    width: 100%;
    min-width: 300px;
    overflow: hidden;
}

.container {
    padding-left: 15px;
    padding-right: 15px;
}

@media (min-width: 1200px) {
    .container {
        max-width: 1200px;
    }
}

::placeholder {
    color: inherit;
    opacity: 1;
}

.section-separator {
    border-color: var(--thm-border);
    border-width: 1px;
    margin-top: 0;
    margin-bottom: 0;
}

#particles-js {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background-position: 50% 50%;
    opacity: 0.40;
    z-index: -1;
}

.thm-btn {
    position: relative;
    display: inline-block;
    vertical-align: middle;
    -webkit-appearance: none;
    outline: none !important;
    background-color: transparent;
    color: var(--mibooz-base);
    font-size: 14px;
    font-weight: 400;
    text-transform: uppercase;
    padding: 14px 58px 14px;
    transition: all 0.3s linear;
    overflow: hidden;
    border: 2px solid var(--mibooz-primary);
    z-index: 1;
    font-family: var(--mibooz-font-two);
    text-shadow: 0 0 0.25px currentColor;
}

.thm-btn:after {
    position: absolute;
    content: "";
    top: 0px;
    left: 0px;
    width: 0px;
    height: 0px;
    background-color: var(--mibooz-primary);
    transition-timing-function: ease-in-out;
    transition-duration: .5s;
    transition-property: all;
    opacity: 0;
    z-index: -1;
}

.thm-btn:hover:after {
    opacity: 1;
    width: 100%;
    top: 0px;
    left: 0px;
    height: 100%;
}

.thm-btn:hover {
    color: var(--mibooz-base);
}



.section-title {
    margin-top: -6px;
    margin-bottom: 46px;
}

.section-title__tagline {
    position: relative;
    display: block;
    color: var(--mibooz-primary);
    font-size: 14px;
    line-height: 24px;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-bottom: 6px;
}

.section-title__title {
    margin: 0;
    font-size: 50px;
    line-height: 60px;
    text-transform: uppercase;
}

.bootstrap-select .btn-light:not(:disabled):not(.disabled).active,
.bootstrap-select .btn-light:not(:disabled):not(.disabled):active,
.bootstrap-select .show>.btn-light.dropdown-toggle {
    box-shadow: none !important;
    outline: none !important;
}

.bootstrap-select>.dropdown-toggle {
    box-shadow: none !important;
}

.bootstrap-select .dropdown-toggle:focus,
.bootstrap-select>select.mobile-device:focus+.dropdown-toggle {
    outline: none !important;
}

.bootstrap-select .dropdown-menu {
    border: 0;
    padding-top: 0;
    padding-bottom: 0;
    margin-top: 0;
    z-index: 991;
    border-radius: 0;
}

.bootstrap-select .dropdown-menu>li+li>a {
    border-top: 1px solid rgba(255, 255, 255, 0.2);
}

.bootstrap-select .dropdown-menu>li.selected>a {
    background: var(--mibooz-primary);
    color: #fff;
}

.bootstrap-select .dropdown-menu>li>a {
    font-size: 16px;
    font-weight: 500;
    padding: 4px 20px;
    color: #ffffff;
    background: var(--mibooz-black);
    -webkit-transition: all 0.4s ease;
    transition: all 0.4s ease;
}

.bootstrap-select .dropdown-menu>li>a:hover {
    background: var(--mibooz-primary);
    color: #fff;
    cursor: pointer;
}


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
}

.preloader__image {
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation-name: rotateme;
    animation-name: rotateme;
    -webkit-animation-duration: 1000ms;
    animation-duration: 1000ms;
    background-color: var(--mibooz-black);
    mix-blend-mode: luminosity;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1);
}

/* scroll to top */
.scroll-to-top {
    display: inline-block;
    width: 45px;
    height: 45px;
    background: var(--mibooz-primary);
    position: fixed;
    bottom: 40px;
    right: 40px;
    z-index: 99;
    text-align: center;
    -webkit-transition: all 0.4s ease;
    transition: all 0.4s ease;
    display: none;
    border-radius: 50%;
    transition: all 0.4s ease;
}

.scroll-to-top i {
    color: #ffffff;
    font-size: 18px;
    line-height: 45px;
}

.scroll-to-top:hover {
    background-color: var(--mibooz-black);
}

.scroll-to-top:hover i {
    color: #fff;
}

/*--------------------------------------------------------------
# Navigations One
--------------------------------------------------------------*/

/*--------------------------------------------------------------
# Navigations Two
--------------------------------------------------------------*/
/*--------------------------------------------------------------
#     Zoom Fade Css
--------------------------------------------------------------*/
.zoom-fade {
    animation-name: zoom-fade;
    animation-duration: 5s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;

    -webkit-animation-name: zoom-fade;
    -webkit-animation-duration: 5s;
    -webkit-animation-iteration-count: infinite;
    -webkit-animation-timing-function: linear;

    -moz-animation-name: zoom-fade;
    -moz-animation-duration: 5s;
    -moz-animation-iteration-count: infinite;
    -moz-animation-timing-function: linear;

    -ms-animation-name: zoom-fade;
    -ms-animation-duration: 5s;
    -ms-animation-iteration-count: infinite;
    -ms-animation-timing-function: linear;

    -o-animation-name: zoom-fade;
    -o-animation-duration: 5s;
    -o-animation-iteration-count: infinite;
    -o-animation-timing-function: linear;
}

@-webkit-keyframes zoom-fade {
    0% {
        -webkit-transform: scale(0.9);
        transform: scale(0.9);
    }

    50% {
        -webkit-transform: scale(1);
        transform: scale(1);
    }

    100% {
        -webkit-transform: scale(0.9);
        transform: scale(0.9);
    }
}

@keyframes zoom-fade {
    0% {
        -webkit-transform: scale(0.9);
        transform: scale(0.9);
    }

    50% {
        -webkit-transform: scale(1);
        transform: scale(1);
    }

    100% {
        -webkit-transform: scale(0.9);
        transform: scale(0.9);
    }
}



@-moz-keyframes service_hexagon_2 {
    0% {
        -moz-transform: rotateY(0deg);
        transform: rotateY(0deg)
    }

    100% {
        -moz-transform: rotateY(360deg);
        transform: rotateY(360deg)
    }
}

@-o-keyframes service_hexagon_2 {
    0% {
        -o-transform: rotateY(0deg);
        transform: rotateY(0deg)
    }

    100% {
        -o-transform: rotateY(360deg);
        transform: rotateY(360deg)
    }
}

@keyframes service_hexagon_2 {
    0% {
        -webkit-transform: rotateY(0deg);
        -moz-transform: rotateY(0deg);
        -o-transform: rotateY(0deg);
        transform: rotateY(0deg)
    }

    100% {
        -webkit-transform: rotateY(360deg);
        -moz-transform: rotateY(360deg);
        -o-transform: rotateY(360deg);
        transform: rotateY(360deg)
    }
}

/*--------------------------------------------------------------
# Mobile Nav
--------------------------------------------------------------*/
.mobile-nav__wrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    opacity: 0;
    transform: translateX(-50%);
    transform-origin: right center;
    transition: transform 500ms ease-in, opacity 500ms linear, visibility 500ms ease-in;
    z-index: 999;
    visibility: hidden;
}

.mobile-nav__wrapper .container {
    padding-left: 0;
    padding-right: 0;
}

.mobile-nav__wrapper.expanded {
    opacity: 1;
    transform: translateX(0%);
    visibility: visible;
}

.mobile-nav__overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #000000;
    opacity: 0.5;
    cursor: pointer;
}

.mobile-nav__content {
    width: 300px;
    background-color: var(--mibooz-black);
    z-index: 10;
    position: relative;
    height: 100%;
    overflow-y: auto;
    padding-top: 30px;
    padding-bottom: 30px;
    padding-left: 15px;
    padding-right: 15px;
}

.mobile-nav__content .thm-btn {
    padding: 8px 0;
    width: 100%;
    text-align: center;
}

.mobile-nav__content .logo-box {
    margin-bottom: 40px;
    display: flex;
}

.mobile-nav__close {
    position: absolute;
    top: 20px;
    right: 15px;
    font-size: 18px;
    color: var(--thm-text-dark);
    cursor: pointer;
}

.mobile-nav__content .main-menu__list,
.mobile-nav__content .main-menu__list ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
}

.mobile-nav__content .main-menu__list ul {
    display: none;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.mobile-nav__content .main-menu__list li:not(:last-child) {
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.mobile-nav__content .main-menu__list li a {
    display: flex;
    justify-content: space-between;
    line-height: 30px;
    color: #ffffff;
    font-size: 14px;
    font-family: var(--mibooz-font);
    font-weight: 500;
    height: 46px;
    align-items: center;
    transition: 500ms;
}

.mobile-nav__content .main-menu__list li a.expanded {
    color: var(--thm-secondary);
}

.mobile-nav__content .main-menu__list li a button {
    width: 30px;
    height: 30px;
    background-color: var(--mibooz-primary);
    border: none;
    outline: none;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    transform: rotate(-90deg);
    transition: transform 500ms ease;
}

.mobile-nav__content .main-menu__list li a button.expanded {
    transform: rotate(0deg);
    background-color: #fff;
    color: var(--mibooz-black);
}

.mobile-nav__content .main-menu__list li.cart-btn span {
    position: relative;
    top: auto;
    right: auto;
    transform: translate(0, 0);
}

.mobile-nav__content .main-menu__list li.cart-btn i {
    font-size: 16px;
}

.mobile-nav__top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;
}

.mobile-nav__top .main-menu__login a {
    color: var(--thm-text-dark);
}

.mobile-nav__container {
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.mobile-nav__social {
    display: flex;
    align-items: center;
}

.mobile-nav__social a {
    font-size: 16px;
    color: var(--mibooz-primary);
    transition: 500ms;
}

.mobile-nav__social a+a {
    margin-left: 30px;
}

.mobile-nav__social a:hover {
    color: #ffffff;
}

.mobile-nav__contact {
    margin-bottom: 0;
    margin-top: 20px;
    margin-bottom: 20px;
}

.mobile-nav__contact li {
    color: var(--thm-text-dark);
    font-size: 14px;
    font-weight: 500;
    position: relative;
    display: flex;
    align-items: center;
}

.mobile-nav__contact li+li {
    margin-top: 15px;
}

.mobile-nav__contact li a {
    color: #ffffff;
    transition: 500ms;
}

.mobile-nav__contact li a:hover {
    color: var(--mibooz-primary);
}

.mobile-nav__contact li>i {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: var(--mibooz-primary);
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 11px;
    margin-right: 10px;
    color: #fff;
}

.mobile-nav__container .main-logo,
.mobile-nav__container .topbar__buttons,
.mobile-nav__container .main-menu__language,
.mobile-nav__container .main-menu__login {
    display: none;
}

/*--------------------------------------------------------------
# Search Popup
--------------------------------------------------------------*/
.search-popup {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 9999;
    padding-left: 20px;
    padding-right: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateY(-110%);
    transition: transform 500ms ease, opacity 500ms ease;
}

.search-popup.active {
    transform: translateY(0%);
}

.search-popup__overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--mibooz-black);
    opacity: 0.75;
    cursor: pointer;
}

.search-popup__content {
    width: 100%;
    max-width: 560px;
}

.search-popup__content form {
    display: flex;
    flex-wrap: wrap;
    position: relative;
    background-color: #fff;
    border-radius: 0px;
    overflow: hidden;
}

.search-popup__content form input[type="search"],
.search-popup__content form input[type="text"] {
    width: 100%;
    background-color: #fff;
    font-size: 16px;
    border: none;
    outline: none;
    height: 66px;
    padding-left: 30px;
}

.search-popup__content .thm-btn {
    padding: 0;
    width: 68px;
    height: 68px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    position: absolute;
    top: 0;
    right: -1px;
    border-radius: 0;
    background-color: var(--mibooz-primary);
    border: 0;
}

.search-popup__content .thm-btn:hover {
    background-color: var(--mibooz-black);
}

.search-popup__content .thm-btn i {
    margin: 0;
}

/*--------------------------------------------------------------
# Main Slider
--------------------------------------------------------------*/

/*--------------------------------------------------------------
# Main slider Two
--------------------------------------------------------------*/
.main-slider-two {
    position: relative;
    display: block;
    overflow: hidden;
}

.main-slider-two__wrapper,
.main-slider-two .swiper-slide {
    position: relative;
    background-color: var(--mibooz-extra);
}

.main-slider-two .image-layer {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    opacity: 0.60;
    z-index: -1;
}

.main-slider-two-box-1 {
    position: absolute;
    top: 160px;
    left: -2px;
    border-style: solid;
    border-width: 2px;
    border-color: #dedede;
    background-color: rgba(255, 255, 255, 0);
    width: 63px;
    height: 96px;
}

.main-slider-two-box-2 {
    position: absolute;
    top: 230px;
    left: 30px;
    border-style: solid;
    border-width: 2px;
    border-color: #dedede;
    background-color: rgba(255, 255, 255, 0);
    width: 103px;
    height: 26px;
}

.main-slider-two-box-2:before {
    position: absolute;
    bottom: -2px;
    right: -2px;
    content: "";
    height: 7px;
    width: 7px;
    background-color: var(--mibooz-primary);
    animation: boxRotate 8s linear infinite;
    transform-origin: right;
}

.main-slider-two-box-3 {
    position: absolute;
    bottom: 248px;
    left: -2px;
    border-style: solid;
    border-width: 2px;
    border-color: #dedede;
    background-color: rgba(255, 255, 255, 0);
    width: 42px;
    height: 286px;
}

.main-slider-two-box-3:before {
    position: absolute;
    bottom: -2px;
    right: -2px;
    content: "";
    height: 15px;
    width: 15px;
    background-color: var(--mibooz-black);
    animation: boxRotate 8s linear infinite;
    transform-origin: right;
}

.main-slider-two-box-4 {
    position: absolute;
    bottom: -4px;
    right: 385px;
    border-style: solid;
    border-width: 2px;
    border-color: #dedede;
    background-color: rgba(255, 255, 255, 0);
    width: 543px;
    height: 295px;
    z-index: -1;
}

.main-slider-two-box-4:before {
    position: absolute;
    top: -2px;
    left: -2px;
    content: "";
    height: 25px;
    width: 25px;
    content: "";
    background-color: var(--mibooz-primary);
}

.main-slider-two-box-5 {
    position: absolute;
    right: -3px;
    bottom: -3px;
    border-style: solid;
    border-width: 2px;
    border-color: #dedede;
    background-color: rgba(255, 255, 255, 0);
    width: 218px;
    height: 133px;
}

.main-slider-two-box-6 {
    position: absolute;
    right: 169px;
    bottom: 108px;
    border-style: solid;
    border-width: 2px;
    border-color: #dedede;
    background-color: rgba(255, 255, 255, 0);
    width: 223px;
    height: 86px;
}

.main-slider-two-box-7 {
    position: absolute;
    top: 134px;
    right: -2px;
    border-style: solid;
    border-width: 2px;
    border-color: #dedede;
    background-color: rgba(255, 255, 255, 0);
    width: 178px;
    height: 536px;
}

.main-slider-two-box-7:before {
    position: absolute;
    bottom: -2px;
    left: -2px;
    content: "";
    height: 46px;
    width: 46px;
    content: "";
    background-color: var(--mibooz-black);
    animation: boxRotate 8s linear infinite;
    transform-origin: left;
}

.main-slider-two-box-8 {
    position: absolute;
    top: 190px;
    right: 175px;
    border-style: solid;
    border-width: 2px;
    border-color: #dedede;
    background-color: rgba(255, 255, 255, 0);
    width: 103px;
    height: 216px;
    border-right: 0;
}

.main-slider-two-box-9 {
    position: absolute;
    top: 260px;
    left: 767px;
    height: 96px;
    width: 96px;
    background-color: var(--mibooz-primary);
}

.main-slider-two-box-10 {
    position: absolute;
    bottom: 70px;
    left: 925px;
    border-style: solid;
    border-width: 2px;
    border-color: #ffffff;
    background-color: rgba(255, 255, 255, 0);
    width: 12px;
    height: 13px;
    border-radius: 50%;
}

.main-slider-two .container {
    position: relative;
    padding-top: 290px;
    padding-bottom: 170px;
    z-index: 30;
}

.main-slider-two__content {
    position: relative;
    display: block;
    margin-left: -103px;
}

.main-slider-two__content h2 {
    font-size: 100px;
    line-height: 100px;
    text-transform: uppercase;
    margin-bottom: 45px;
}

.main-slider-two__btn-video {
    position: relative;
    display: flex;
    align-items: center;
    transition: color 500ms ease, background 500ms ease;
}

.main-slider-two__btn .thm-btn {
    color: var(--mibooz-black);
}

.main-slider-two__btn .thm-btn:hover {
    color: var(--mibooz-base);
}

.main-slider-two__video {
    position: relative;
    display: flex;
    align-items: center;
    margin-left: 30px;
}

.main-slider-two__video-link a {
    height: 68px;
    width: 68px;
    border-radius: 50%;
    background-color: #ffffff;
    box-shadow: 0px 0px 60px 0px rgba(0, 0, 0, .05);
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    color: var(--mibooz-black);
    transition: all 500ms ease;
}

.main-slider-two__video-link a:hover {
    color: var(--mibooz-base);
    background-color: var(--mibooz-primary);
}

.main-slider-two__video-content {
    margin-left: 20px;
}

.main-slider-two__video-content h5 {
    font-size: 16px;
    color: var(--mibooz-gray);
    text-transform: uppercase;
    line-height: 22px;
}

.main-slider-two__img {
    position: absolute;
    top: -187px;
    right: -674px;
    bottom: 0;
    z-index: 1;
}


.main-slider-two__name-box {
    position: absolute;
    bottom: -60px;
    right: 479px;
}

.main-slider-two__name {
    font-size: 80px;
    font-family: var(--mibooz-sayinistic-font);
}

.main-slider-two__badge {
    position: absolute;
    top: 15px;
    right: -178px;
    z-index: 2;
    animation: sunMove 10s linear infinite;
}

.main-slider-two .main-slider__social a {
    color: var(--mibooz-black);
}

/*--------------------------------------------------------------
# Main Slider Three
--------------------------------------------------------------*/
.main-slider-three {
    position: relative;
    display: block;
}

.main-slider-three .swiper-slide {
    position: relative;
    background-color: var(--mibooz-black);
}

.main-slider-three .image-layer {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    opacity: 0.60;
    z-index: -1;
}

.main-slider-three-map {
    position: absolute;
    top: 242px;
    left: 0;
    height: 487px;
    width: 1008px;
    background-position: top center;
    opacity: 0.08;
    z-index: -1;
}

.main-slider-three__img-1 {
    position: absolute;
    top: 290px;
    right: 100px;
    background-color: var(--mibooz-black);
    opacity: 0;
    transform: translateX(100%);
    transition: transform 2000ms ease 2000ms,
        opacity 2000ms ease 2000ms,
        color 500ms ease,
        background 500ms ease;
    z-index: 2;
}

.main-slider-three__img-1 img {
    mix-blend-mode: luminosity;
}

.main-slider-three__img-2 {
    position: absolute;
    top: 190px;
    right: 0px;
    background-color: var(--mibooz-black);
    opacity: 0;
    visibility: hidden;
    transform: translateX(150%);
    transition: transform 1500ms ease 0ms, opacity 1500ms ease 0ms;
    z-index: 1;
}

.main-slider-three__img-2 img {
    mix-blend-mode: luminosity;
}

.main-slider-three .swiper-slide-active .main-slider-three__img-1,
.main-slider-three .swiper-slide-active .main-slider-three__img-2 {
    visibility: visible;
    opacity: 1;
    transform: translateY(0) translateX(0);
}

.main-slider-three .swiper-slide-active .main-slider-three__img-1 {
    transition-delay: 1000ms;
}

.main-slider-three .container {
    position: relative;
    padding-top: 278px;
    padding-bottom: 245px;
    z-index: 30;
}

.main-slider-three__content {
    position: relative;
    display: block;
}

.main-slider-three__content h2 {
    font-size: 79px;
    color: var(--mibooz-base);
    text-transform: uppercase;
    line-height: 79px;
    opacity: 0;
    visibility: hidden;
    transform: translateY(-120px);
    transition-delay: 1000ms;
    transition: transform 2000ms ease, opacity 2000ms ease;
}

.main-slider-three__content p {
    margin: 0;
    color: var(--mibooz-base);
    opacity: .5;
    padding-top: 26px;
    padding-bottom: 43px;
    opacity: 0;
    transform: translateY(100px);
    transition-delay: 2500ms;
    transition: transform 2000ms ease, opacity 2000ms ease, color 500ms ease, background 500ms ease;
}

.main-slider-three .swiper-slide-active .main-slider-three__content p {
    opacity: .5;
    visibility: visible;
    transform: translateY(0) translateX(0);
}

.main-slider-three__btn-box {
    position: relative;
    display: inline-block;
    opacity: 0;
    transform: translateY(100px);
    transition-delay: 2500ms;
    transition: transform 2000ms ease,
        opacity 2000ms ease,
        color 500ms ease,
        background 500ms ease;
}

.main-slider-three__arrow {
    position: absolute;
    top: -26px;
    right: -90px;
    -webkit-animation-name: btnIconMove;
    animation-name: btnIconMove;
    -webkit-animation-duration: 2s;
    animation-duration: 2s;
    -webkit-animation-timing-function: linear;
    animation-timing-function: linear;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
}

.main-slider-three .swiper-slide-active .main-slider-three__content h2,
.main-slider-three .swiper-slide-active .main-slider-three__btn-box {
    visibility: visible;
    opacity: 1;
    transform: translateY(0) translateX(0);
}

/*--------------------------------------------------------------
# Services One
--------------------------------------------------------------*/


/*--------------------------------------------------------------
# Welcome One
--------------------------------------------------------------*/


/*--------------------------------------------------------------
# Brand One
--------------------------------------------------------------*/

/*--------------------------------------------------------------
# Design Studio
--------------------------------------------------------------*/

/*--------------------------------------------------------------
# Counter One
--------------------------------------------------------------*/

/*--------------------------------------------------------------
# We Care
--------------------------------------------------------------*/

/*--------------------------------------------------------------
# portfolio-one
--------------------------------------------------------------*/

/*--------------------------------------------------------------
# Why Choose One
--------------------------------------------------------------*/

/*--------------------------------------------------------------
# Testimonial One
--------------------------------------------------------------*/
.testimonial-one {
    position: relative;
    display: block;
    padding: 95px 0 97px;
    z-index: 1;
}

.testimonial-one__map {
    position: absolute;
    top: 79px;
    left: 50%;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    height: 486px;
    width: 1005px;
    transform: translateX(-50%);
    opacity: 0.08;
    z-index: -1;
}

.testimonial-one__carousel {
    position: relative;
    display: block;
}

.testimonial-one__carousel.owl-carousel .owl-stage-outer {
    overflow: visible;
    padding: 0 0 0;
}

.testimonial-one__carousel .owl-stage-outer .owl-item {
    opacity: 0;
    transition: all 500ms linear;
    transition-delay: 0.1s;
}

.testimonial-one__carousel .owl-stage-outer .owl-item.active {
    opacity: 1;
    transition: all 200ms linear;
}

.testimonial-one__single {
    position: relative;
    display: block;
}

.testimonial-one__content {
    position: relative;
    display: block;
    border: 1px solid #e1e1e1;
    background-color: #ffffff;
    box-shadow: 0px 10px 60px 0px rgba(0, 0, 0, .05);
    padding: 48px 59px 76px;
    transition: all 500ms ease;
}

.testimonial-one__single:hover .testimonial-one__content {
    box-shadow: 0px 10px 60px 0px rgba(0, 0, 0, 0.07);
}

.testimonial-one__content:before {
    position: absolute;
    top: -1px;
    left: -1px;
    right: -1px;
    content: "";
    height: 3px;
    background-color: var(--mibooz-primary);
    transition: transform 500ms ease;
    transform: scale(0, 1);
    transform-origin: left center;
}

.testimonial-one__single:hover .testimonial-one__content:before {
    transform: scale(1, 1);
    transform-origin: right center;
}

.testimonial-one__text {
    margin: 0;
    line-height: 38px;
}

.testimonial-one__client-info {
    position: relative;
    display: block;
    margin-top: -47px;
    margin-left: 60px;
}

.testimonial-one__client__img {
    position: relative;
    display: inline-block;
    margin-bottom: 14px;
    border-radius: 50%;
    width: 90px;
    background-color: var(--mibooz-black);
}

.testimonial-one__client__img img {
    mix-blend-mode: luminosity;
    width: 90px !important;
    border-radius: 50%;
}

.testimonial-one__name {
    font-size: 18px;
    text-transform: uppercase;
    line-height: 24px;
}

.testimonial-one__title {
    font-size: 12px;
    color: var(--mibooz-primary);
    font-family: var(--mibooz-font-two);
    text-transform: uppercase;
    letter-spacing: 0.1em;
    line-height: 22px;
}

/*--------------------------------------------------------------
# CTA One
--------------------------------------------------------------*/
.cta-one {
    position: relative;
    display: block;
    z-index: 2;
}

.cta-one__inner {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--mibooz-primary);
    padding: 92px 100px;
}

.cta-one__box-1 {
    position: absolute;
    top: -106px;
    left: -106px;
    height: 106px;
    width: 106px;
    background-color: var(--mibooz-extra);

    animation: boxRotate 4s linear infinite;
    transform-origin: left;
}

.cta-one__box-2 {
    position: absolute;
    top: 0;
    left: -212px;
    height: 106px;
    width: 106px;
    background-color: var(--mibooz-black);

    animation: boxRotate 4s linear infinite;
    transform-origin: right;
}

.cta-one__left {
    position: relative;
    display: flex;
    align-items: center;
}

.cta-one__icon {
    display: flex;
    align-items: center;
}

.cta-one__icon span {
    position: relative;
    display: inline-block;
    font-size: 65px;
    color: var(--mibooz-base);
    transition: all 200ms linear;
    transition-delay: 0.1s;
}

.cta-one__inner:hover .cta-one__icon span {
    transform: scale(1.2);
}

.cta-one__title-box {
    margin-left: 30px;
}

.cta-one__title {
    font-size: 36px;
    text-transform: uppercase;
    line-height: 43px;
    color: var(--mibooz-base);
}

.cta-one__right {
    position: relative;
    display: block;
}

.cta-one__btn {
    border: 2px solid var(--mibooz-base);
}

.cta-one__btn:after {
    background-color: var(--mibooz-base);
}

.cta-one__btn:hover {
    color: var(--mibooz-black);
}

/*--------------------------------------------------------------
# Best Agency
--------------------------------------------------------------*/
.best-agency {
    position: relative;
    display: block;
    background-color: var(--mibooz-extra);
    padding: 180px 0 138px;
    margin-top: -60px;
    z-index: 1;
}

.best-agency-shape {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    z-index: -1;
    opacity: .60;
}

.best-agency__left {
    position: relative;
    display: block;
    margin-right: 50px;
}

.best-agency__left .section-title {
    margin-bottom: 36px;
}

.best-agency__points {
    position: relative;
    display: flex;
    align-items: center;
}

.best-agency__points li {
    position: relative;
    display: flex;
    align-items: center;
    background-color: #ffffff;
    box-shadow: 0px 10px 60px 0px rgba(0, 0, 0, .07);
    padding-top: 12px;
    padding-bottom: 12px;
    padding-left: 30px;
    padding-right: 45px;
}

.best-agency__points li+li {
    margin-left: 20px;
}

.best-agency__points li .icon span {
    font-size: 16px;
    color: var(--mibooz-primary);
}

.best-agency__points li .text {
    margin-left: 10px;
}

.best-agency__points li .text p {
    font-size: 16px;
    color: var(--mibooz-black);
    margin: 0;
}

.best-agency__experience {
    position: relative;
    display: flex;
    border-top: 1px solid var(--mibooz-bdr-color);
    margin-top: 40px;
    padding-top: 29px;
}

.best-agency__experience-icon {
    display: flex;
    align-items: center;
}

.best-agency__experience-icon span {
    position: relative;
    display: inline-block;
    font-size: 64px;
    color: var(--mibooz-primary);
    transform: scale(1);
    transition: transform 200ms linear;
}

.best-agency__experience:hover .best-agency__experience-icon span {
    transform: scale(.9);
}

.best-agency__experience-text-box {
    margin-left: 20px;
}

.best-agency__experience-text {
    margin: 0;
    line-height: 34px;
}

.best-agency__experience-text span {
    font-family: var(--mibooz-font-two);
    color: var(--mibooz-black);
}

.best-agency__right {
    position: relative;
    display: block;
}

.faq-one-accrodion .accrodion {
    position: relative;
    display: block;
    -webkit-transition: all 500ms ease;
    transition: all 500ms ease;
    border-radius: 0;
    background-color: #ffffff;
    box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, .05);
}

.faq-one-accrodion .accrodion:before {
    position: absolute;
    top: 0px;
    left: 0px;
    bottom: 0px;
    width: 2px;
    content: "";
    background-color: var(--mibooz-primary);
    transform: scaleY(0);
    -webkit-transition: all 500ms ease;
    transition: all 500ms ease;
    z-index: 1;
}

.faq-one-accrodion .accrodion.active:before {
    transform: scaleY(1);
}

.faq-one-accrodion .accrodion-title {
    position: relative;
    display: block;
    cursor: pointer;
    padding: 24px 40px 25px;
    padding-right: 27px;
    transition: all 200ms linear;
    transition-delay: 0.1s;
}

.faq-one-accrodion .accrodion-title h4 {
    margin: 0;
    font-size: 16px;
    line-height: 26px;
    color: var(--mibooz-black);
    position: relative;
    text-transform: uppercase;
    -webkit-transition: all 500ms ease;
    transition: all 500ms ease;
}

.faq-one-accrodion .accrodion+.accrodion {
    margin-top: 20px;
}

.faq-one-accrodion .accrodion.active .accrodion-title {
    background-color: var(--mibooz-base);
}

.faq-one-accrodion .accrodion.active .accrodion-title h4 {
    color: var(--mibooz-black);
}

.faq-one-accrodion .accrodion-title h4::before {
    content: "\e912";
    font-family: 'icomoon' !important;
    font-size: 12px;
    color: var(--mibooz-primary);
    position: absolute;
    top: 50%;
    right: 0;
    height: 35px;
    width: 35px;
    border-radius: 50%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    -webkit-transition: all 500ms ease;
    transition: all 500ms ease;
}

.faq-one-accrodion .accrodion.active .accrodion-title h4::before {
    content: "\e913";
    color: var(--mibooz-black);

    height: 35px;
    width: 35px;
    border-radius: 50%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
}

.faq-one-accrodion .accrodion-content {
    position: relative;
    padding: 0px 40px 29px;
    margin-top: -13px;
}

.faq-one-accrodion .accrodion.active .accrodion-content {
    background-color: var(--mibooz-base);
}

.faq-one-accrodion .accrodion-content p {
    font-size: 16px;
    margin: 0;
    line-height: 32px;
}

/*--------------------------------------------------------------
# Blog One
--------------------------------------------------------------*/
.blog-one {
    position: relative;
    display: block;
    padding: 120px 0 90px;
}

.blog-one__single {
    position: relative;
    display: block;
    margin-bottom: 30px;
}

.blog-one__img {
    position: relative;
    display: block;
    background-color: var(--mibooz-black);
    overflow: hidden;
}

.blog-one__img img {
    width: 100%;
    mix-blend-mode: luminosity;
    transition: all 500ms ease;
    transform: scale(1);
}

.blog-one__single:hover .blog-one__img img {
    transform: scale(1.05);
}

.blog-one__img>a {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(var(--mibooz-black-rgb), 0.3);
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    color: var(--mibooz-base);
    transition: opacity 500ms ease, visibility 500ms ease, transform 500ms ease;
    visibility: hidden;
    opacity: 0;
    transform: translateY(-30%);
}

.blog-one__img>a>span {
    position: relative;
}

.blog-one__img>a>span::before {
    content: '';
    width: 20px;
    height: 2px;
    background-color: var(--mibooz-base);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: all 500ms ease;
}

.blog-one__img>a>span::after {
    content: '';
    transition: all 500ms ease;
    width: 2px;
    height: 20px;
    background-color: var(--mibooz-base);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.blog-one__img>a:hover>span::before,
.blog-one__img>a:hover>span::after {
    background-color: var(--mibooz-primary);
}

.blog-one__single:hover .blog-one__img>a {
    visibility: visible;
    transform: translateY(0%);
    opacity: 1;
}

.blog-one__date {
    position: absolute;
    top: 20px;
    left: 20px;
    background-color: var(--mibooz-primary);
    padding: 7px 20px 6px;
}

.blog-one__date p {
    font-size: 10px;
    font-weight: 500;
    color: var(--mibooz-base);
    margin: 0;
    text-transform: uppercase;
    line-height: 20px;
}

.blog-content {
    position: relative;
    display: block;
    background-color: #ffffff;
    margin-left: 20px;
    margin-right: 20px;
    padding: 49px 40px 36px;
    margin-top: -30px;
    box-shadow: 0px 10px 60px 0px rgba(0, 0, 0, .05);
    transition: all 500ms ease;
}

.blog-one__single:hover .blog-content {
    box-shadow: 0px 10px 60px 0px rgba(0, 0, 0, .07);
}

.blog-one__meta {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
}

.blog-one__meta li+li {
    margin-left: 6px;
}

.blog-one__meta li span {
    font-size: 14px;
}

.blog-one__meta li a {
    font-size: 14px;
    color: var(--mibooz-gray);
    transition: all 500ms ease;
}

.blog-one__meta li a:hover {
    color: var(--mibooz-primary);
}

.blog-one__meta li a i {
    font-size: 15px;
    color: var(--mibooz-primary);
}

.blog-one__title {
    font-size: 24px;
    text-transform: uppercase;
    line-height: 30px;
    margin-top: 3px;
    margin-bottom: 8px;
}

.blog-one__title>a {
    color: var(--mibooz-black);
    transition: all 500ms ease;
}

.blog-one__single:hover .blog-one__title>a {
    color: var(--mibooz-primary);
}

.blog-one__read-btn>a {
    position: relative;
    display: inline-block;
    font-size: 13px;
    color: var(--mibooz-gray);
    text-transform: uppercase;
    letter-spacing: 0.1em;
    transition: all 500ms ease;
}

.blog-one__single:hover .blog-one__read-btn>a {
    color: var(--mibooz-black);
}

.blog-one__read-btn>a:before {
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

.blog-one__single:hover .blog-one__read-btn>a:before {
    transform: scale(1, 1);
    transform-origin: right center;
}

/*--------------------------------------------------------------
# Google Map
--------------------------------------------------------------*/
.google-map {
    position: relative;
    display: block;
}

.google-map__one {
    position: relative;
    display: block;
    border: none;
    height: 495px;
    width: 100%;
}

/*--------------------------------------------------------------
## Error Page
--------------------------------------------------------------*/
.error-page {
    position: relative;
    display: block;
    padding: 72px 0 120px;
}

.error-page__inner {
    position: relative;
    display: block;
    text-align: center;
}

.error-page__title {
    position: relative;
    display: inline-block;
    font-size: 350px;
    line-height: 350px;
}

.error-page__title:before {
    position: absolute;
    top: 174px;
    left: -40px;
    right: -40px;
    content: "";
    height: 2px;
    background-color: var(--mibooz-primary);
}

.error-page__tagline {
    font-size: 40px;
    line-height: 49px;
    margin-bottom: 19px;
    text-transform: uppercase;
    margin-top: -10px;
}

.error-page__text {
    font-size: 20px;
    font-weight: 400;
    margin: 0;
}

.error-page__form {
    position: relative;
    display: block;
    margin: 54px auto 20px;
}

.error-page__form-input {
    position: relative;
    display: block;
    max-width: 550px;
    width: 100%;
    margin: 0 auto;
}

.error-page__form input[type="search"] {
    height: 68px;
    width: 100%;
    border: none;
    outline: none;
    background-color: var(--mibooz-extra);
    font-size: 16px;
    color: var(--mibooz-gray);
    font-weight: 400;
    padding-left: 50px;
    padding-right: 75px;
    border-radius: 0;
}

.error-page__form button[type="submit"] {
    background-color: transparent;
    color: var(--mibooz-black);
    font-size: 22px;
    position: absolute;
    top: 0;
    right: 0px;
    bottom: 0;
    width: 70px;
    outline: none;
    border: none;
    display: flex;
    align-items: center;
}

.error-page__btn {
    color: var(--mibooz-black);
}
.animated-container{
    justify-content: center;
}
`;
