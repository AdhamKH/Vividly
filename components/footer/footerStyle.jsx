import { styled } from "styled-components";

export const FooterStyle = styled.section`
  .site-footer {
    position: relative;
    display: block;
    background-color: #17161a;
    z-index: 1;
  }

  .site-footer__top {
    position: relative;
    display: block;
    border-bottom: 1px solid rgba(var(--mibooz-base-rgb), 0.1);
    padding: 44px 0 38px;
    z-index: 1;
  }

  .site-footer__top-shape {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    opacity: 0.15;
    z-index: -1;
  }

  .site-footer__top-inner {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .site-footer__top-left {
    position: relative;
    display: block;
  }

  .site-footer__top-left-title {
    font-size: 24px;
    color: var(--mibooz-base);
    text-transform: uppercase;
    line-height: 34px;
  }

  .site-footer__top-left-phone {
    font-size: 24px;
    color: var(--mibooz-primary);
    font-family: var(--mibooz-font-two);
    -webkit-transition: all 500ms ease;
    transition: all 500ms ease;
  }

  .site-footer__top-left-phone:hover {
    color: var(--mibooz-base);
  }

  .site-footer__top-right {
    position: relative;
    display: block;
  }

  .site-footer__top-right-social {
    display: -webkit-box;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
  }

  .site-footer__top-right-social a {
    display: -webkit-box;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    text-align: center;
    color: var(--mibooz-base);
    font-size: 20px;
    -webkit-transition: all 500ms ease;
    transition: all 500ms ease;
  }

  .site-footer__top-right-social a:hover {
    color: var(--mibooz-primary);
  }

  .site-footer__top-right-social a + a {
    margin-left: 25px;
  }

  .site-footer__middle {
    position: relative;
    display: block;
    padding-top: 93px;
    padding-bottom: 100px;
  }

  .site-footer__middle-inner {
    position: relative;
    display: block;
  }

  .footer-widget__contact {
    position: relative;
    display: block;
  }

  .footer-widget__title {
    font-size: 18px;
    color: var(--mibooz-base);
    text-transform: uppercase;
    line-height: 28px;
    margin-bottom: 31px;
  }

  .footer-widget__contact-text {
    font-size: 15px;
    color: #807e86;
    line-height: 34px;
    margin: 0;
  }

  .footer-widget__contact-email-phone {
    font-size: 15px;
    font-family: var(--mibooz-font);
    line-height: 33px;
  }

  .footer-widget__contact-email {
    color: var(--mibooz-base);
    display: block;
    -webkit-transition: all 500ms ease;
    transition: all 500ms ease;
  }

  .footer-widget__contact-email:hover {
    color: var(--mibooz-primary);
  }

  .footer-widget__contact-phone {
    color: var(--mibooz-base);
    -webkit-transition: all 500ms ease;
    transition: all 500ms ease;
  }

  .footer-widget__contact-phone:hover {
    color: var(--mibooz-primary);
  }

  .footer-widget__links {
    position: relative;
    display: block;
  }

  .footer-widget__links-list {
    position: relative;
    display: block;
    float: left;
  }

  .footer-widget__links-list li {
    position: relative;
    display: block;
    line-height: 33px;
  }

  .footer-widget__links-list li a {
    position: relative;
    display: inline-block;
    font-size: 15px;
    color: #807e85;
    -webkit-transition: all 500ms ease;
    transition: all 500ms ease;
  }

  .footer-widget__links-list li a:hover {
    color: var(--mibooz-base);
  }

  .footer-widget__links-list li a:before {
    position: absolute;
    top: 16px;
    left: -10px;
    right: -10px;
    content: "";
    background-color: var(--mibooz-primary);
    height: 1px;
    transition: transform 500ms ease;
    transform: scale(0, 1);
    transform-origin: left center;
  }

  .footer-widget__links-list li a:hover:before {
    transform: scale(1, 1);
    transform-origin: right center;
  }

  .footer-widget__links-list-two {
    margin-left: 95px;
  }

  .footer-widget__newsletter {
    position: relative;
    display: block;
    background-color: #100f12;
    margin-left: 50px;
    padding: 43px 50px 41px;
    margin-top: 7px;
  }

  .footer-widget__newsletter .footer-widget__title {
    margin-bottom: 0;
  }

  .footer-widget__newsletter-form {
    position: relative;
    display: block;
  }

  .footer-widget__newsletter-input-box {
    position: relative;
    display: block;
  }

  .footer-widget__newsletter-input-box:before {
    position: absolute;
    bottom: 8px;
    left: 0;
    right: 0;
    content: "";
    height: 2px;
    background-color: rgba(var(--mibooz-base-rgb), 0.2);
    border-radius: 0;
  }

  .footer-widget__newsletter-input-box input:-webkit-autofill,
  .footer-widget__newsletter-input-box input:-webkit-autofill:hover,
  .footer-widget__newsletter-input-box input:-webkit-autofill:focus,
  .footer-widget__newsletter-input-box textarea:-webkit-autofill,
  .footer-widget__newsletter-input-box textarea:-webkit-autofill:hover,
  .footer-widget__newsletter-input-box textarea:-webkit-autofill:focus,
  .footer-widget__newsletter-input-box select:-webkit-autofill,
  .footer-widget__newsletter-input-box select:-webkit-autofill:hover,
  .footer-widget__newsletter-input-box select:-webkit-autofill:focus {
    border: 0px solid var(--mibooz-black);
    -webkit-text-fill-color: #807e85;
    -webkit-box-shadow: 0 0 0px 1000px var(--mibooz-black) inset;
    box-shadow: 0 0 0px 1000px var(--mibooz-black) inset;
    transition: background-color 5000s ease-in-out 0s;
  }

  .footer-widget__newsletter-input-box input[type="email"] {
    font-size: 14px;
    color: #807e85;
    font-weight: 400;
    height: 70px;
    width: 100%;
    background: transparent;
    border: none;
    border-radius: 0;
    padding-right: 60px;
    outline: none;
    box-shadow: none !important;
  }

  .footer-widget__newsletter-btn {
    position: absolute;
    top: 50%;
    right: 0;
    height: 70px;
    width: 60px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    border-radius: 50%;
    background: transparent;
    border: 0;
    transform: translateY(-50%);
    transition: all 500ms ease;
    padding: 0;
  }

  .footer-widget__newsletter-btn i {
    font-size: 16px;
    color: var(--mibooz-primary);
  }

  .footer-widget__newsletter-bottom {
    display: flex;
    align-items: center;
    margin-top: 5px;
  }

  .footer-widget__newsletter-bottom-icon {
    height: 18px;
    width: 18px;
    border: 1px solid #3c3b3d;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .footer-widget__newsletter-bottom-icon i {
    font-size: 8px;
    color: #807e85;
  }

  .footer-widget__newsletter-bottom-text {
    margin-left: 10px;
  }

  .footer-widget__newsletter-bottom-text p {
    font-size: 14px;
    color: #807e85;
    margin: 0;
  }

  .site-footer__bottom {
    position: relative;
    display: block;
    background-color: #100f12;
    padding: 30px 0;
  }

  .site-footer__bottom-inner {
    position: relative;
    display: block;
    text-align: center;
  }

  .site-footer__bottom-text {
    font-size: 15px;
    color: #807e85;
    margin: 0;
  }

  .site-footer__bottom-text a {
    color: #807e85;
    -webkit-transition: all 500ms ease;
    transition: all 500ms ease;
  }

  .site-footer__bottom-text a:hover {
    color: var(--mibooz-base);
  }
`;
