"use client";
import styled from "styled-components";
export const NabBarStyle = styled.div`
  .page-wrapper {
    position: relative;
    margin: 0 auto;
    width: 100%;
    min-width: 300px;
    overflow: hidden;
  }
  .main-header {
    background: transparent;
    position: absolute;
    left: 0px;
    top: 0px;
    width: 100%;
    z-index: 999;
    transition: all 500ms ease;
  }

  .main-header:before {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    content: "";
    background-color: rgba(var(--mibooz-base-rgb), 0.1);
    z-index: -1;
  }

  .main-menu {
    position: relative;
    padding: 0 50px;
    z-index: 91;
  }

  .main-menu-wrapper {
    position: relative;
    display: block;
    display: flex;
  }

  .main-menu-wrapper__logo {
    position: relative;
    padding-top: 37px;
    padding-bottom: 37px;
    z-index: 11;
  }

  .main-menu-wrapper__main-menu {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (min-width: 1200px) {
    .main-menu-wrapper__main-menu {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 10;
    }
  }

  .main-menu-wrapper__right {
    position: relative;
    display: flex;
    padding: 34.5px 0;
    align-items: center;
    margin-left: auto;
    z-index: 11;
  }

  .main-menu-wrapper__call {
    position: relative;
    display: flex;
    align-items: center;
    margin-right: 90px;
  }

  .main-menu-wrapper__call-icon {
    font-size: 30px;
    color: var(--mibooz-primary);
    -webkit-transition: all 500ms ease;
    transition: all 500ms ease;
  }

  .main-menu-wrapper__call-icon:hover {
    color: var(--mibooz-extra);
  }

  .main-menu-wrapper__call-number {
    margin-left: 15px;
  }

  .main-menu-wrapper__call-number h5 {
    font-size: 16px;
    line-height: 27px;
  }

  .main-menu-wrapper__call-number h5 a {
    color: var(--mibooz-base);
    -webkit-transition: all 500ms ease;
    transition: all 500ms ease;
  }

  .main-menu-wrapper__call-number a:hover {
    color: var(--mibooz-primary);
  }

  .main-menu-wrapper__call-number p {
    font-size: 13px;
    margin: 0;
    line-height: 14px;
    color: #b1b0b0;
  }

  .main-menu-wrapper__search-box {
    position: relative;
    display: flex;
    align-items: center;
    padding: 8.5px 0;
  }

  .main-menu-wrapper__search-box:before {
    position: absolute;
    top: -5px;
    bottom: -4px;
    left: -50px;
    content: "";
    background-color: rgba(var(--mibooz-base-rgb), 0.1);
    width: 1px;
  }

  .main-menu-wrapper__search {
    font-size: 24px;
    color: var(--mibooz-base);
    -webkit-transition: all 500ms ease;
    transition: all 500ms ease;
  }

  .main-menu-wrapper__search:hover {
    color: var(--mibooz-primary);
  }

  .stricky-header.main-menu {
    padding: 0 50px;
    background-color: var(--mibooz-black);
  }

  .main-menu .main-menu__list,
  .main-menu .main-menu__list ul,
  .stricky-header .main-menu__list,
  .stricky-header .main-menu__list ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
    align-items: center;
    display: none;
  }

  @media (min-width: 1200px) {
    .main-menu .main-menu__list,
    .main-menu .main-menu__list ul,
    .stricky-header .main-menu__list,
    .stricky-header .main-menu__list ul {
      display: flex;
    }
  }

  .main-menu .main-menu__list > li,
  .stricky-header .main-menu__list > li {
    padding-top: 37px;
    padding-bottom: 37px;
    position: relative;
  }

  .main-menu .main-menu__list > li + li,
  .stricky-header .main-menu__list > li + li {
    margin-left: 60px;
  }

  .main-menu .main-menu__list > li > a,
  .stricky-header .main-menu__list > li > a {
    font-size: 13px;
    display: flex;
    align-items: center;
    color: var(--mibooz-base);
    position: relative;
    transition: all 500ms ease;
    font-family: var(--mibooz-font-two);
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }

  .main-menu .main-menu__list > li > a::before,
  .stricky-header .main-menu__list > li > a::before {
    content: "";
    height: 1px;
    border-radius: 0px;
    background-color: var(--mibooz-primary);
    position: absolute;
    top: 18px;
    left: -10px;
    right: -10px;
    transition: transform 500ms ease;
    transform: scale(0, 1);
    transform-origin: left center;
    z-index: 1;
  }

  .main-menu .main-menu__list > li.current > a,
  .main-menu .main-menu__list > li:hover > a,
  .stricky-header .main-menu__list > li.current > a,
  .stricky-header .main-menu__list > li:hover > a {
    color: var(--mibooz-base);
  }

  .main-menu .main-menu__list > li.current > a::before,
  .main-menu .main-menu__list > li:hover > a::before,
  .stricky-header .main-menu__list > li.current > a::before,
  .stricky-header .main-menu__list > li:hover > a::before {
    transform: scale(1, 1);
    transform-origin: right center;
  }

  .main-menu .main-menu__list > li.current > a::before {
    background-color: var(--mibooz-primary);
  }

  .main-menu .main-menu__list > li:hover > a::before {
    background-color: var(--mibooz-primary);
  }

  .main-menu .main-menu__list li ul,
  .stricky-header .main-menu__list li ul {
    position: absolute;
    top: 100%;
    left: 0;
    min-width: 220px;
    background-color: #fff;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    opacity: 0;
    visibility: hidden;
    transition: 500ms ease;
    z-index: 99;
    box-shadow: 0px 0px 65px 0px rgba(0, 0, 0, 0.1);
  }

  .main-menu .main-menu__list li:hover > ul,
  .stricky-header .main-menu__list li:hover > ul {
    opacity: 1;
    visibility: visible;
  }

  .main-menu .main-menu__list li ul li,
  .stricky-header .main-menu__list li ul li {
    flex: 1 1 100%;
    width: 100%;
    position: relative;
  }

  .main-menu .main-menu__list li ul li + li,
  .stricky-header .main-menu__list li ul li + li {
    border-top: 1px solid RGBA(var(--mibooz-black), 0.1);
  }

  .main-menu .main-menu__list li ul li a,
  .stricky-header .main-menu__list li ul li a {
    font-size: 16px;
    line-height: 30px;
    color: var(--mibooz-black);
    display: flex;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 10px;
    font-family: var(--mibooz-font-two);
    text-transform: uppercase;
    letter-spacing: 0.1em;
    padding-bottom: 10px;
    font-size: 13px;
    transition: 500ms;
  }

  .main-menu .main-menu__list li ul li:hover > a,
  .stricky-header .main-menu__list li ul li:hover > a {
    background-color: var(--mibooz-primary);
    color: #fff;
  }

  .main-menu .main-menu__list li ul li > ul,
  .stricky-header .main-menu__list li ul li > ul {
    top: 0;
    left: 100%;
  }

  .main-menu .main-menu__list li ul li > ul.right-align,
  .stricky-header .main-menu__list li ul li > ul.right-align {
    top: 0;
    left: auto;
    right: 100%;
  }

  .main-menu .main-menu__list li ul li > ul ul,
  .stricky-header .main-menu__list li ul li > ul ul {
    display: none;
  }

  .stricky-header {
    position: fixed;
    z-index: 991;
    top: 0;
    left: 0;
    background-color: #fff;
    width: 100%;
    visibility: hidden;
    transform: translateY(-120%);
    transition: transform 500ms ease, visibility 500ms ease;
    box-shadow: 0px 10px 60px 0px rgba(0, 0, 0, 0.05);
  }

  @media (max-width: 1199px) {
    .stricky-header {
      display: none !important;
    }
  }

  .stricky-header.stricky-fixed {
    transform: translateY(0);
    visibility: visible;
  }

  .stricky-header .main-menu__inner {
    box-shadow: none;
    padding-right: 0;
    max-width: 1170px;
    width: 100%;
    margin: 0 auto;
  }

  .mobile-nav__buttons {
    display: flex;
    margin-left: auto;
    margin-right: 10px;
  }

  @media (min-width: 1200px) {
    .mobile-nav__buttons {
      display: none;
    }
  }

  .mobile-nav__buttons a {
    font-size: 20px;
    color: var(--mibooz-black);
    cursor: pointer;
  }

  .mobile-nav__buttons a + a {
    margin-left: 10px;
  }

  .mobile-nav__buttons a:hover {
    color: var(--mibooz-base);
  }

  .main-menu .mobile-nav__toggler {
    font-size: 20px;
    color: var(--mibooz-primary);
    cursor: pointer;
    transition: 500ms;
  }

  .main-menu .mobile-nav__toggler:hover {
    color: var(--mibooz-base);
  }

  @media (min-width: 1200px) {
    .main-menu .mobile-nav__toggler {
      display: none;
    }
  }
  @media only screen and (min-width: 1200px) and (max-width: 1400px) {
    .main-menu-wrapper__call {
      display: none;
    }
  }

  @media only screen and (min-width: 992px) and (max-width: 1199px) {
    .main-menu-wrapper__main-menu {
      display: block;
      width: auto;
      margin-left: 50px;
    }

    .main-menu .mobile-nav__toggler {
      display: inline-block;
      padding: 37px 0;
    }

    .main-menu-two .mobile-nav__toggler:hover {
      color: var(--mibooz-black);
    }
  }

  @media only screen and (min-width: 768px) and (max-width: 991px) {
    .main-menu-wrapper__main-menu {
      display: block;
      width: auto;
      margin-left: 50px;
    }

    .main-menu .mobile-nav__toggler {
      display: inline-block;
      padding: 37px 0;
    }

    .main-menu-two .mobile-nav__toggler:hover {
      color: var(--mibooz-black);
    }
  }

  @media (max-width: 767px) {
    .main-menu-wrapper__right {
      display: none;
    }

    .main-menu-wrapper__main-menu {
      display: block;
      margin-left: auto;
    }

    .main-menu .mobile-nav__toggler {
      display: inline-block;
      padding: 37px 0;
    }

    .main-menu-two .mobile-nav__toggler:hover {
      color: var(--mibooz-black);
    }

    .main-menu {
      position: relative;
      padding: 0 30px;
      z-index: 91;
    }
  }
  .mobile-nav__wrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    opacity: ${(props) => (props.navMobile ? "1" : "0")};
    transform: translateX(-50%);
    transform: ${(props) =>
      props.navMobile ? "translateX(0%)" : "translateX(-50%)"};
    transform-origin: right center;
    transition: transform 500ms ease-in, opacity 500ms linear,
      visibility 500ms ease-in;
    z-index: 999;
    visibility: ${(props) => (props.navMobile ? "visible" : "hidden")};
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
    svg {
      color: var(--mibooz-primary);
    }
    font-size: 16px;
    transition: 500ms;
  }

  .mobile-nav__social a + a {
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

  .mobile-nav__contact li + li {
    margin-top: 15px;
  }

  .mobile-nav__contact li a {
    color: #ffffff;
    transition: 500ms;
  }

  .mobile-nav__contact li a:hover {
    color: var(--mibooz-primary);
  }

  .mobile-nav__contact li > i {
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
  .mysticky {
    position: fixed;
    top: 0;
    left: 0;
    color: red;
    background: black;
    z-index: 99999999999999999999999999;
    color: white;
    background-color: black;
    width: 100%;
    @media (max-width: 1200px) {
      display: none;
    }
  }
`;
export const StickeyNavBar = styled(NabBarStyle)`
  position: fixed;
  top: 0;
  left: 0;
  background-color: red;
`;
