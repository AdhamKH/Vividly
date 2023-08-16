"use client";
import { styled } from "styled-components";

export const SingleProjectStyle = styled.div`
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
  .project-details {
    position: relative;
    display: block;
    padding: 120px 0 0;
  }

  .project-details__img {
    position: relative;
    display: block;
    background-color: var(--mibooz-black);
  }

  .project-details__img img {
    width: 100%;
    mix-blend-mode: luminosity;
  }

  .project-details__content {
    position: relative;
    display: block;
    margin-top: 40px;
  }

  .project-details__content-left {
    position: relative;
    display: block;
    margin-top: -7px;
  }

  .project-details__content-title {
    font-size: 30px;
    text-transform: uppercase;
    line-height: 40px;
    margin-bottom: 36px;
  }

  .project-details__content-text-1 {
    font-size: 16px;
    margin: 0;
    line-height: 34px;
  }

  .project-details__content-text-2 {
    font-size: 16px;
    margin: 0;
    line-height: 34px;
    padding-top: 33px;
    padding-bottom: 38px;
  }

  .project-details__points {
    position: relative;
    display: block;
  }

  .project-details__points li {
    position: relative;
    display: flex;
    align-items: center;
  }

  .project-details__points li + li {
    margin-top: 2px;
  }

  .project-details__points li .icon {
    display: flex;
    align-items: center;
  }

  .project-details__points li .icon span {
    font-size: 16px;
    color: var(--mibooz-primary);
  }

  .project-details__points li .text {
    margin-left: 15px;
  }

  .project-details__points li .text p {
    margin: 0;
    color: var(--mibooz-black);
  }

  .project-details__content-right {
    position: relative;
    display: block;
  }

  .project-details__details-box {
    position: relative;
    display: block;
    background-color: var(--mibooz-extra);
    padding: 53px 60px 60px;
  }

  .project-details__details-box:before {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 4px;
    content: "";
    background-color: var(--mibooz-primary);
  }

  .project-details__details-info {
    position: relative;
    display: block;
  }

  .project-details__details-info-single
    + .project-details__details-info-single {
    margin-top: 15px;
  }

  .project-details__details-info-client {
    font-size: 18px;
    text-transform: uppercase;
    line-height: 28px;
    margin-bottom: 10px;
  }

  .project-details__details-info-name {
    font-size: 16px;
    margin: 0;
    line-height: 26px;
  }

  .project-details__details-social-list {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    border-top: 1px solid var(--mibooz-bdr-color);
    padding-top: 29px;
    margin-top: 26px;
  }

  .project-details__details-social-list a {
    display: -webkit-box;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    text-align: center;
    color: var(--mibooz-black);
    font-size: 20px;
    -webkit-transition: all 500ms ease;
    transition: all 500ms ease;
  }

  .project-details__details-social-list a + a {
    margin-left: 30px;
  }

  .project-details__details-social-list a:hover {
    color: var(--mibooz-primary);
  }

  .project-details__pagination-box {
    position: relative;
    display: block;
    text-align: center;
    border-top: 1px solid var(--mibooz-bdr-color);
    border-bottom: 1px solid var(--mibooz-bdr-color);
    padding: 48px 0;
    margin-top: 113px;
  }

  .project-details__pagination li {
    display: inline-block;
  }

  .project-details__pagination li.next {
    float: left;
    position: relative;
  }

  .project-details__pagination li a {
    font-size: 18px;
    color: var(--mibooz-black);
    display: flex;
    align-items: center;
    transition: all 500ms ease;
    font-family: var(--mibooz-font-two);
    text-transform: uppercase;
  }

  .project-details__pagination li a:hover {
    color: var(--mibooz-primary);
  }

  .project-details__pagination li.next i {
    position: relative;
    display: inline-block;
    margin-right: 10px;
    font-size: 10px;
  }

  .project-details__pagination li.previous {
    position: relative;
    float: right;
  }

  .project-details__pagination li.previous i {
    margin-left: 10px;
    font-size: 10px;
  }

  /*Similar Work*/
  .similar-work {
    position: relative;
    display: block;
    padding: 120px 0 90px;
  }
`;
