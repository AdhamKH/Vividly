"use client";
import { styled } from "styled-components";

export const ContactUsStyle = styled.div`
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
  }

  .page-header__inner {
    position: relative;
    display: block;
    text-align: center;
    z-index: 2;
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
  .comment-one__title,
  .comment-form__title {
    margin: 0;
    color: var(--mibooz-black);
    font-size: 30px;
    text-transform: uppercase;
    margin-bottom: 51px;
  }

  .comment-one__single {
    display: -webkit-box;
    display: flex;
    border-bottom: 1px solid var(--mibooz-bdr-color);
    padding-bottom: 60px;
    margin-bottom: 58px;
  }

  .comment-one__content {
    position: relative;
    margin-left: 45px;
  }

  .comment-one__content h3 {
    margin: 0;
    font-size: 20px;
    color: var(--mibooz-black);
    margin-bottom: 24px;
    text-transform: uppercase;
  }

  .comment-one__content p {
    font-size: 16px;
    line-height: 32px;
    margin: 0;
  }

  .comment-one__btn {
    font-size: 12px;
    color: var(--mibooz-black);
    padding: 0px 28px;
    position: absolute;
    top: 0;
    right: 0;
  }

  .comment-one__image {
    position: relative;
    display: block;
  }

  .comment-one__image img {
    border-radius: 50%;
    mix-blend-mode: luminosity;
  }

  .comment-form .comment-form__title {
    margin-top: -4px;
    margin-bottom: 36px;
  }

  .comment-one__form .row {
    --bs-gutter-x: 20px;
  }

  .comment-form__input-box {
    position: relative;
    display: block;
  }

  .comment-form__input-box input[type="text"],
  .comment-form__input-box input[type="email"] {
    height: 68px;
    width: 100%;
    border: none;
    background-color: var(--mibooz-extra);
    padding-left: 30px;
    padding-right: 30px;
    margin-bottom: 20px;
    border-radius: 0;
    outline: none;
    font-size: 16px;
    color: var(--mibooz-gray);
    display: block;
  }

  .comment-form__input-box textarea {
    font-size: 16px;
    color: var(--mibooz-gray);
    height: 170px;
    width: 100%;
    background-color: var(--mibooz-extra);
    padding: 16px 30px 30px;
    border: none;
    border-radius: 0px;
    outline: none;
    margin-bottom: 10px;
    border-radius: 0;
  }

  .comment-form__btn {
    color: var(--mibooz-black);
  }

  /*Services Page Design Studio*/
  .services-page-design-studio {
    padding-bottom: 135px;
  }

  /*Services Page Services Two*/
  .services-page-services-two {
    padding-bottom: 60px;
    background-color: var(--mibooz-base);
  }
  .location {
    position: relative;
    display: block;
    padding: 120px 0 0;
    background-color: var(--mibooz-extra);
    z-index: 1;
  }

  .location-shape {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    opacity: 0.6;
    z-index: -1;
  }

  .location__single {
    position: relative;
    display: block;
    background-color: #ffffff;
    box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, 0.05);
    padding: 44px 50px 42px;
    margin-bottom: 30px;
    min-height: 15rem;
  }

  .location__title {
    font-size: 20px;
    text-transform: uppercase;
    line-height: 30px;
    margin-bottom: 30px;
  }

  .location__text {
    font-size: 16px;
    margin: 0;
    line-height: 30px;
  }

  .location__phone-email {
    font-size: 16px;
    font-family: var(--mibooz-font);
    line-height: 29px;
  }

  .location__phone {
    color: var(--mibooz-gray);
    display: block;
    -webkit-transition: all 500ms ease;
    transition: all 500ms ease;
  }

  .location__phone:hover {
    color: var(--mibooz-primary);
  }

  .location__email {
    color: var(--mibooz-gray);
    -webkit-transition: all 500ms ease;
    transition: all 500ms ease;
  }

  .location__email:hover {
    color: var(--mibooz-primary);
  }

  .location__social {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    margin-top: 9px;
  }

  .location__social a {
    display: -webkit-box;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    text-align: center;
    color: var(--mibooz-black);
    font-size: 15px;
    -webkit-transition: all 500ms ease;
    transition: all 500ms ease;
  }

  .location__social a + a {
    margin-left: 20px;
  }

  .location__social a:hover {
    color: var(--mibooz-primary);
  }

  .location__single-last {
    padding-bottom: 50px;
  }

  .location__bottom {
    position: relative;
    display: block;
    text-align: center;
    border-top: 1px solid var(--mibooz-bdr-color);
    padding-top: 54px;
    padding-bottom: 52px;
    margin-top: 30px;
  }

  .location-bottom__text {
    font-size: 16px;
    margin: 0;
    line-height: 26px;
  }

  .location-bottom__text a {
    position: relative;
    display: inline-block;
    margin-left: 13px;
    color: var(--mibooz-black);
    -webkit-transition: all 500ms ease;
    transition: all 500ms ease;
  }

  .location-bottom__text a:hover {
    color: var(--mibooz-primary);
  }

  .location-bottom__text a:before {
    position: absolute;
    top: 12px;
    left: -10px;
    right: -10px;
    height: 1px;
    content: "";
    background-color: var(--mibooz-primary);
  }

  /*--------------------------------------------------------------
# Contact Page
--------------------------------------------------------------*/
  .contact-page {
    position: relative;
    display: block;
    padding: 120px 0 120px;
  }

  .contact-page .container {
    max-width: 768px;
    width: 100%;
  }

  .contact-page__form .comment-form__btn {
    margin: 0 auto;
    display: block;
  }
`;
