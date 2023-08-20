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
.text-center{
    text-align: center;
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
# All responsive
--------------------------------------------------------------*/
/* Medium screen  */
@media only screen and (min-width: 992px) and (max-width: 1199px) {
    .services-one__top-left .section-title__title {
        font-size: 47px;
        line-height: 57px;
    }

    .welcome-one__left {
        max-width: 600px;
        margin: 0 auto;
    }

    .welcome-one__right {
        max-width: 600px;
        margin: 180px auto 0;
    }

    .counter-one__box-one,
    .counter-one__box-two {
        display: none;
    }

    .why-choose-one__left {
        max-width: 600px;
        margin: 0 auto;
    }

    .why-choose-one__right {
        max-width: 600px;
        margin: 180px auto 0;
    }

    .why-choose-one {
        padding: 120px 0 0px;
    }

    .cta-one__inner {
        padding: 92px 30px;
    }

    .cta-one__box-1,
    .cta-one__box-2 {
        display: none;
    }

    .best-agency__left {
        margin-right: 0;
    }

    .best-agency__points li {
        padding-left: 20px;
        padding-right: 20px;
    }

    .best-agency__experience-text {
        font-size: 17px;
    }

    .blog-content {
        padding: 49px 20px 36px;
    }

    .footer-widget__links-list-two {
        margin-left: 50px;
    }

    .footer-widget__newsletter {
        margin-left: 0;
        padding: 43px 14px 41px;
    }

    .welcome-two__left {
        max-width: 600px;
        margin: 0 auto;
    }

    .welcome-two__right {
        max-width: 600px;
        margin: 166px auto 0;
    }

    .company-numbers__title {
        font-size: 45px;
        line-height: 57px;
    }

    .company-numbers__title span:before {
        top: 28px;
    }

    .services-two__single {
        padding: 0 0px 0;
    }

    .two-boxes__single {
        padding: 71px 50px 70px;
    }

    .project-two__top {
        text-align: center;
    }

    .project-two__left .section-title {
        margin-bottom: 32px;
    }

    .testimonial-two__left {
        max-width: 600px;
        margin: 0 auto;
    }

    .testimonial-two__right {
        max-width: 600px;
        margin: 180px auto 0;
    }

    .testimonial-two {
        padding: 240px 0 120px;
    }

    .cta-two__box-1,
    .cta-two__box-2 {
        display: none;
    }

    .services-three__single {
        padding: 60px 48px 45px;
    }

    .welcome-three__left {
        max-width: 600px;
        margin: 0 auto;
    }

    .welcome-three__right {
        max-width: 600px;
        margin: 60px auto 0;
    }

    .every-stage__left {
        max-width: 600px;
        margin: 0 auto;
    }

    .every-stage__right {
        max-width: 600px;
        margin: 38px auto 0;
    }

    .we-build__left {
        max-width: 600px;
        margin: 0 auto;
    }

    .we-build__right {
        max-width: 600px;
        margin: 180px auto 0;
    }

    .we-build__box-1,
    .we-build__box-2 {
        display: none;
    }

    .we-build {
        padding: 0 0 112px;
    }

    .about-page__left {
        max-width: 600px;
        margin: 0 auto 50px;
    }

    .about-page__right {
        max-width: 600px;
        margin: 0 auto;
    }

    .about-page-testimonial-two .testimonial-two__left {
        max-width: 600px;
        margin: 0 auto;
    }

    .about-page-testimonial-two .testimonial-two__right {
        max-width: 600px;
        margin: 180px auto 0;
    }

    .service-details__points li+li {
        margin-left: 0;
        margin-top: 30px;
    }

    .service-details__benefits-img {
        margin-top: 50px;
    }

    .similar-work .project-one__hover {
        padding: 31px 25px 29px;
    }

    .similar-work .project-one__tagline:before {
        left: -40px;
    }

    .blog-details__pagenation li+li {
        margin-left: 0;
        margin-top: 30px;
    }

    .location__text {
        font-size: 15px;
    }










}

















/* Tablet Layout: 768px. */
@media only screen and (min-width: 768px) and (max-width: 991px) {
    .services-one__top-right {
        margin-top: 0;
        margin-bottom: 48px;
    }

    .services-one__top-left .section-title {
        margin-bottom: 36px;
    }

    .welcome-one__left {
        max-width: 600px;
        margin: 0 auto;
    }

    .welcome-one__right {
        max-width: 600px;
        margin: 180px auto 0;
    }

    .welcome-one-shape {
        z-index: -1;
    }

    .design-studio__title br {
        display: none;
    }

    .design-studio__title {
        font-size: 65px;
    }

    .counter-one__single {
        flex: 0 0 50%;
        max-width: 50%;
        margin-bottom: 24px;
    }

    .counter-one__single:nth-child(3) {
        margin-bottom: 0;
    }

    .counter-one__single:nth-child(4) {
        margin-bottom: 0;
    }

    .counter-one__single:nth-child(3):before {
        display: none;
    }

    .counter-one__box-one,
    .counter-one__box-two {
        display: none;
    }

    .why-choose-one__left {
        max-width: 600px;
        margin: 0 auto;
    }

    .why-choose-one__right {
        max-width: 600px;
        margin: 180px auto 0;
    }

    .why-choose-one {
        padding: 120px 0 0px;
    }

    .cta-one__inner {
        padding: 92px 50px;
        flex-direction: column;
        text-align: center;
    }

    .cta-one__right {
        margin-top: 25px;
    }

    .cta-one__box-1,
    .cta-one__box-2 {
        display: none;
    }

    .best-agency__left {
        margin-right: 0;
        margin-bottom: 60px;
    }

    .footer-widget__newsletter {
        margin-left: 0;
    }

    .footer-widget__links {
        margin-top: 31px;
        margin-bottom: 31px;
    }

    .feature-one__single {
        width: 50%;
        margin-bottom: 20px;
    }

    .feature-one__single:nth-child(3) {
        margin-bottom: 0;
    }

    .feature-one__single:nth-child(3):before {
        display: none;
    }

    .feature-one__single:nth-child(4) {
        margin-bottom: 0;
    }

    .welcome-two__left {
        max-width: 600px;
        margin: 0 auto;
    }

    .welcome-two__right {
        max-width: 600px;
        margin: 166px auto 0;
    }

    .welcome-two .section-title__title br {
        display: none;
    }

    .welcome-two__big-text {
        display: none;
    }

    .company-numbers__right {
        position: relative;
        margin-left: 0;
        margin-top: 43px;
    }

    .company-numbers__inner {
        padding: 120px 0 120px;
    }

    .services-two__single {
        width: 50%;
    }

    .services-two__single:nth-child(3):before {
        display: none;
    }

    .project-two__top {
        text-align: center;
    }

    .project-two__left .section-title {
        margin-bottom: 32px;
    }

    .project-two__work .project-one__hover {
        padding: 31px 25px 29px;
    }

    .project-two__work .project-one__title {
        font-size: 17px;
        line-height: 27px;
    }

    .project-two__work .project-one__tagline:before {
        left: -35px;
    }

    .how-it-works__process-single {
        width: 50%;
        margin-bottom: 21px;
    }

    .how-it-works__process-single:nth-child(3) {
        margin-bottom: 0;
    }

    .how-it-works__process-single:nth-child(4) {
        margin-bottom: 0;
    }

    .how-it-works__process:before {
        display: none;
    }

    .testimonial-two__left {
        max-width: 600px;
        margin: 0 auto;
    }

    .testimonial-two__right {
        max-width: 600px;
        margin: 180px auto 0;
    }

    .testimonial-two {
        padding: 240px 0 120px;
    }

    .cta-two__box-1,
    .cta-two__box-2 {
        display: none;
    }

    .cta-two__inner {
        flex-direction: column;
        text-align: center;
    }

    .cta-two__right {
        margin-top: 25px;
    }

    .welcome-three__left {
        max-width: 600px;
        margin: 0 auto;
    }

    .welcome-three__right {
        max-width: 600px;
        margin: 60px auto 0;
    }

    .every-stage__left {
        max-width: 600px;
        margin: 0 auto;
    }

    .every-stage__right {
        max-width: 600px;
        margin: 38px auto 0;
    }

    .project-one__hover {
        padding: 31px 45px 29px;
    }

    .we-build__left {
        max-width: 600px;
        margin: 0 auto;
    }

    .we-build__right {
        max-width: 600px;
        margin: 180px auto 0;
    }

    .we-build__box-1,
    .we-build__box-2 {
        display: none;
    }

    .we-build {
        padding: 0 0 112px;
    }

    .we-can__title br {
        display: none;
    }

    .about-page__left {
        max-width: 600px;
        margin: 0 auto 50px;
    }

    .about-page__right {
        max-width: 600px;
        margin: 0 auto;
    }

    .about-page-testimonial-two .testimonial-two__left {
        max-width: 600px;
        margin: 0 auto;
    }

    .about-page-testimonial-two .testimonial-two__right {
        max-width: 600px;
        margin: 180px auto 0;
    }

    .service-details__sidebar {
        margin-bottom: 60px;
    }

    .service-details__points li+li {
        margin-left: 0;
        margin-top: 30px;
    }

    .service-details__benefits-img {
        margin-top: 50px;
    }

    .project-details__content-left {
        margin-bottom: 50px;
    }

    .blog-details__pagenation li+li {
        margin-left: 0;
        margin-top: 30px;
    }






















}






/* Mobile Layout: 320px. */
@media only screen and (max-width: 767px) {
    .section-title__title {
        font-size: 30px;
        line-height: 40px;
    }

    .services-one__top-right {
        margin-top: 0;
        margin-bottom: 48px;
    }

    .services-one__top-left .section-title {
        margin-bottom: 36px;
    }

    .welcome-one-shape {
        z-index: -1;
    }

    .welcome-one__left {
        margin-right: 0;
    }

    .welcome-one__left:before {
        display: none;
    }

    .welcome-one__experience {
        display: none;
    }

    .welcome-one__right {
        margin-top: 60px;
    }

    .welcome-one__bottom-right {
        margin-left: 0;
        margin-top: 30px;
    }

    .welcome-one__img-box:before {
        display: none;
    }

    .design-studio__title br {
        display: none;
    }

    .design-studio__title {
        font-size: 28px;
        line-height: 43px;
    }

    .counter-one__single {
        flex: 0 0 100%;
        max-width: 100%;
        margin-bottom: 24px;
    }

    .counter-one__single:before {
        display: none;
    }

    .counter-one__single:nth-child(4) {
        margin-bottom: 0;
    }

    .we-care__inner {
        flex-direction: column;
        padding: 60px 0 47px;
    }

    .we-care__content {
        margin-left: 0;
        text-align: center;
        margin-top: 20px;
    }

    .counter-one__box-one,
    .counter-one__box-two {
        display: none;
    }

    .project-one__hover {
        padding: 31px 25px 29px;
    }

    .project-one__tagline:before {
        left: -35px;
    }

    .why-choose-one__left {
        margin-left: 0;
    }

    .why-choose-one__left:before {
        display: none;
    }

    .why-choose-one-box-1,
    .why-choose-one-box-2,
    .why-choose-one-box-3 {
        display: none;
    }

    .why-choose-one__right {
        margin-left: 0;
        margin-top: 60px;
    }

    .why-choose-one__content {
        flex-direction: column;
        align-items: inherit;
    }

    .why-choose-one__content-list {
        margin-left: 0;
        margin-top: 25px;
    }

    .why-choose-one {
        padding: 0 0 0;
    }

    .testimonial-one__content {
        padding: 48px 25px 76px;
    }

    .cta-one__inner {
        padding: 92px 20px;
        flex-direction: column;
        text-align: center;
    }

    .cta-one__right {
        margin-top: 25px;
    }

    .cta-one__left {
        flex-direction: column;
    }

    .cta-one__title-box {
        margin-left: 0;
        margin-top: 33px;
    }

    .cta-one__title br {
        display: none;
    }

    .cta-one__box-1,
    .cta-one__box-2 {
        display: none;
    }

    .best-agency__left {
        margin-right: 0;
        margin-bottom: 60px;
    }

    .best-agency__points {
        flex-direction: column;
        align-items: inherit;
    }

    .best-agency__points li+li {
        margin-left: 0;
        margin-top: 20px;
    }

    .faq-one-accrodion .accrodion-title h4::before {
        right: -15px;
    }

    .blog-content {
        padding: 49px 20px 36px;
    }

    .blog-one .section-title__title {
        font-size: 29px;
    }

    .footer-widget__newsletter {
        margin-left: 0;
    }

    .footer-widget__links {
        margin-top: 31px;
        margin-bottom: 31px;
    }

    .footer-widget__links-list-two {
        margin-left: 50px;
    }

    .footer-widget__newsletter {
        margin-left: 0;
        padding: 43px 14px 41px;
    }

    .site-footer__top-inner {
        flex-direction: column;
        text-align: center;
    }

    .site-footer__top-right-social {
        margin-top: 20px;
    }

    .feature-one__single {
        width: 100%;
        margin-bottom: 30px;
        float: none;
    }

    .feature-one__single:before {
        display: none;
    }

    .feature-one__single:nth-child(4) {
        margin-bottom: 0;
    }

    .welcome-two .section-title__title br {
        display: none;
    }

    .welcome-two__big-text {
        display: none;
    }

    .welcome-two__left {
        margin-right: 0;
    }

    .welcome-two__small-img {
        display: none;
    }

    .welcome-two__right {
        margin-left: 0;
        margin-top: 50px;
    }

    .company-numbers__right {
        position: relative;
        margin-left: 0;
        margin-top: 43px;
    }

    .company-numbers__inner {
        padding: 120px 0 120px;
    }

    .company-numbers__title {
        font-size: 40px;
        line-height: 53px;
    }

    .company-numbers__title span:before {
        top: 28px;
    }

    .company-numbers__counter li {
        float: none;
    }

    .company-numbers__counter li+li {
        margin-left: 0;
        margin-top: 10px;
    }

    .services-two__single {
        width: 100%;
    }

    .services-two__single:before {
        display: none;
    }

    .two-boxes__single {
        padding: 71px 20px 70px;
    }

    .project-two__top {
        text-align: center;
    }

    .project-two__left .section-title {
        margin-bottom: 32px;
    }

    .project-two__work .project-one__hover {
        padding: 31px 25px 29px;
    }

    .project-two__work .project-one__title {
        font-size: 17px;
        line-height: 27px;
    }

    .project-two__work .project-one__tagline:before {
        left: -35px;
    }

    .project-two__work-inner {
        max-width: inherit;
        padding: 0 30px;
    }

    .how-it-works__process-single {
        width: 100%;
        margin-bottom: 21px;
    }

    .how-it-works__process-single:nth-child(4) {
        margin-bottom: 0;
    }

    .how-it-works__process:before {
        display: none;
    }

    .testimonial-two__left {
        margin-left: 0;
    }

    .testimonial-two__left:before {
        display: none;
    }

    .testimonial-two__box-1,
    .testimonial-two__box-2 {
        display: none;
    }

    .testimonial-two__title {
        font-size: 40px;
        line-height: 50px;
    }

    .testimonial-two__title span:before {
        top: 22px;
    }

    .testimonial-two__right {
        margin-left: 0;
        margin-top: 60px;
    }

    .testimonial-two__carousel.owl-theme .owl-nav {
        display: none;
    }

    .testimonial-two {
        padding: 120px 0 120px;
    }

    .cta-two__box-1,
    .cta-two__box-2 {
        display: none;
    }

    .cta-two__inner {
        flex-direction: column;
        text-align: center;
    }

    .cta-two__left {
        align-items: center;
        flex-direction: column;
    }

    .cta-two__title-box {
        margin-left: 0;
        margin-top: 20px;
        margin-bottom: 20px;
    }

    .cta-two__title br {
        display: none;
    }

    .services-three__single {
        padding: 60px 48px 45px;
    }

    .welcome-three__right {
        margin-left: 0;
        margin-top: 60px;
    }

    .welcome-three__small-img {
        display: none;
    }

    .welcome-three__features-box {
        align-items: inherit;
        flex-direction: column;
    }

    .welcome-three__features-box li+li {
        margin-left: 0;
        margin-top: 30px;
    }

    .every-stage__left {
        margin-right: 0;
    }

    .every-stage__tab-box .tab-buttons {
        margin-bottom: 40px;
        text-align: center;
        margin-top: 41px;
    }

    .every-stage__tab-box .tab-buttons .tab-btn {
        display: block;
    }

    .every-stage__tab-box .tab-buttons .tab-btn+.tab-btn {
        margin-left: 0;
        margin-top: 20px;
    }

    .tab-content__bottom {
        flex-direction: column;
    }

    .tab-content__points-box {
        margin-left: 0;
        margin-top: 20px;
    }

    .we-build__box-1,
    .we-build__box-2 {
        display: none;
    }

    .we-build {
        padding: 0 0 112px;
    }

    .we-build__left {
        margin-right: 0;
        margin-left: 0;
    }

    .we-build__left:before {
        display: none;
    }

    .we-build__founded {
        display: none;
    }

    .we-build__right {
        margin-left: 0;
        margin-top: 60px;
    }

    .we-can__title br {
        display: none;
    }

    .we-can__title {
        font-size: 33px;
    }

    .about-page__badge {
        display: none;
    }

    .about-page__images li+li {
        margin-left: 0;
        margin-top: 10px;
    }

    .about-page__right {
        margin-left: 0;
        margin-top: 50px;
    }

    .about-page-testimonial-two .testimonial-two__left {
        margin-left: 0;
        margin-right: 0;
    }

    .about-page-testimonial-two .testimonial-two__right {
        margin-left: 0;
        margin-right: 0;
        margin-top: 60px;
    }

    .about-page__right .section-title {
        margin-right: 0;
    }

    .testimonial-two-shape {
        display: none;
    }

    .error-page__title {
        font-size: 150px;
        line-height: 150px;
    }

    .error-page__title:before {
        top: 75px;
        left: -20px;
        right: -20px;
    }

    .error-page__tagline {
        font-size: 27px;
        line-height: 37px;
        margin-top: 0;
    }

    .service-details__points li+li {
        margin-left: 0;
        margin-top: 30px;
    }

    .service-details__benefits-img {
        margin-top: 50px;
    }

    .service-details__points li {
        padding-left: 60px;
        padding-right: 25px;
    }

    .service-details__points li h4 {
        font-size: 17px;
    }

    .service-details__points-count {
        left: 20px;
    }

    .service-details__need-help {
        padding: 50px 30px 39px;
    }

    .service-details__sidebar {
        margin-bottom: 60px;
    }

    .project-details__content-left {
        margin-bottom: 50px;
    }

    .blog-sidebar__bottom-box {
        padding: 50px 20px 50px;
    }

    .blog-sidebar__delivering-services {
        padding: 60px 20px 50px;
    }

    .sidebar__post {
        padding: 48px 20px 30px;
    }

    .sidebar__category {
        padding: 47px 20px 36px;
    }

    .sidebar__tags {
        padding: 47px 15px 50px;
    }

    .sidebar__comments {
        padding: 47px 20px 43px;
    }

    .blog-details__bottom {
        flex-direction: column;
    }

    .blog-details__tags a {
        padding: 3px 15px;
    }

    .blog-details__social-list {
        margin-top: 20px;
    }

    .blog-details__pagenation li+li {
        margin-left: 0px;
        margin-top: 30px;
    }

    .blog-details__pagenation li {
        font-size: 20px;
        padding-left: 30px;
        padding-right: 30px;
        text-align: center;
    }

    .comment-one__single {
        flex-direction: column;
    }

    .comment-one__content {
        margin-left: 0;
        margin-top: 25px;
    }

    .comment-one__btn {
        position: relative;
        top: 20px;
    }









}
`;
