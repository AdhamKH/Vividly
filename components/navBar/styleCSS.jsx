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
`;
export const StickeyNavBar = styled(NabBarStyle)`
  position: fixed;
  top: 0;
  left: 0;
  background-color: red;
`;
