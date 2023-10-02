"use client";
import { styled } from "styled-components";

export const BlogStyled = styled.div`
  .blog-page {
    padding: 120px 0 120px;
  }

  .page-header {
    position: relative;
    display: block;
    padding: 260px 0 158px;
    background-color: var(--mibooz-black);
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

  .blog-one__img > a {
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

  .blog-one__img > a > span {
    position: relative;
  }

  .blog-one__img > a > span::before {
    content: "";
    width: 20px;
    height: 2px;
    background-color: var(--mibooz-base);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: all 500ms ease;
  }

  .blog-one__img > a > span::after {
    content: "";
    transition: all 500ms ease;
    width: 2px;
    height: 20px;
    background-color: var(--mibooz-base);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .blog-one__img > a:hover > span::before,
  .blog-one__img > a:hover > span::after {
    background-color: var(--mibooz-primary);
  }

  .blog-one__single:hover .blog-one__img > a {
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
    box-shadow: 0px 10px 60px 0px rgba(0, 0, 0, 0.05);
    transition: all 500ms ease;
  }

  .blog-one__single:hover .blog-content {
    box-shadow: 0px 10px 60px 0px rgba(0, 0, 0, 0.07);
  }
  ul {
    list-style: none;
  }
  .blog-one__meta {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
  }

  .blog-one__meta li + li {
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

  .blog-one__title > a {
    color: var(--mibooz-black);
    transition: all 500ms ease;
  }

  .blog-one__single:hover .blog-one__title > a {
    color: var(--mibooz-primary);
  }

  .blog-one__read-btn > a {
    position: relative;
    display: inline-block;
    font-size: 13px;
    color: var(--mibooz-gray);
    text-transform: uppercase;
    letter-spacing: 0.1em;
    transition: all 500ms ease;
  }

  .blog-one__single:hover .blog-one__read-btn > a {
    color: var(--mibooz-black);
  }

  .blog-one__read-btn > a:before {
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

  .blog-one__single:hover .blog-one__read-btn > a:before {
    transform: scale(1, 1);
    transform-origin: right center;
  }
  .blog-sidebar__load-more {
    margin-top: 30px;
  }

  .blog-sidebar__load-more-btn {
    color: var(--mibooz-black);
  }

  .blog-sidebar__left .blog-sidebar__load-more {
    margin-top: 30px;
  }
`;
