import { styled } from "styled-components";

export const BlogStyled = styled.div`
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
  .blog-page {
    padding: 120px 0 120px;
  }

  /*--------------------------------------------------------------
# Blog sidebar
--------------------------------------------------------------*/
  .blog-sidebar {
    position: relative;
    display: block;
    padding: 120px 0 120px;
  }

  .blog-sidebar__left {
    position: relative;
    display: block;
  }

  .blog-sidebar__content {
    position: relative;
    display: block;
  }

  .blog-sidebar__content-single {
    position: relative;
    display: block;
  }

  .blog-sidebar__content-single + .blog-sidebar__content-single {
    margin-top: 16px;
  }

  .blog-sidebar__content-img {
    position: relative;
    display: block;
    background-color: var(--mibooz-black);
  }

  .blog-sidebar__content-img img {
    width: 100%;
    mix-blend-mode: luminosity;
  }

  .blog-sidebar__date-box {
    position: absolute;
    top: 20px;
    left: 20px;
    background-color: var(--mibooz-primary);
    padding: 7px 20px 6px;
  }

  .blog-sidebar__date-box p {
    font-size: 10px;
    font-weight: 500;
    color: var(--mibooz-base);
    margin: 0;
    text-transform: uppercase;
    line-height: 20px;
  }

  .blog-sidebar__content-box {
    position: relative;
    display: block;
    margin-top: 19px;
  }

  .blog-sidebar__meta {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
  }

  .blog-sidebar__meta li + li {
    margin-left: 6px;
  }

  .blog-sidebar__meta li span {
    font-size: 14px;
  }

  .blog-sidebar__meta li a {
    font-size: 14px;
    color: var(--mibooz-gray);
    transition: all 500ms ease;
  }

  .blog-sidebar__meta li a i {
    font-size: 15px;
    color: var(--mibooz-primary);
  }

  .blog-sidebar__meta li a:hover {
    color: var(--mibooz-primary);
  }

  .blog-sidebar__title {
    font-size: 30px;
    text-transform: uppercase;
    line-height: 40px;
    margin-bottom: 21px;
  }

  .blog-sidebar__title a {
    color: var(--mibooz-black);
    transition: all 500ms ease;
  }

  .blog-sidebar__title a:hover {
    color: var(--mibooz-primary);
  }

  .blog-sidebar__text {
    font-size: 16px;
    line-height: 32px;
    margin: 0;
  }

  .blog-sidebar__read-more-btn {
    position: relative;
    display: block;
    margin-top: 4px;
  }

  .blog-sidebar__read-more-btn a {
    font-size: 13px;
    color: var(--mibooz-gray);
    text-transform: uppercase;
    letter-spacing: 0.1em;
    position: relative;
    display: inline-block;
    transition: all 500ms ease;
  }

  .blog-sidebar__read-more-btn a:hover {
    color: var(--mibooz-black);
  }

  .blog-sidebar__read-more-btn a:before {
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

  .blog-sidebar__read-more-btn a:hover:before {
    transform: scale(1, 1);
    transform-origin: right center;
  }

  .blog-sidebar .design-studio__video-link {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
  }

  .blog-sidebar__bottom-box {
    position: relative;
    display: block;
    background-color: var(--mibooz-extra);
    padding: 50px 60px 50px;
    margin-top: 16px;
  }

  .blog-sidebar__bottom-box-icon {
    margin-bottom: 20px;
  }

  .blog-sidebar__bottom-box-text {
    font-size: 16px;
    margin: 0;
    line-height: 34px;
  }

  .blog-sidebar__delivering-services {
    position: relative;
    display: block;
    background-color: var(--mibooz-extra);
    padding: 60px 60px 50px;
    margin-top: 30px;
    margin-bottom: 30px;
  }

  .blog-sidebar__delivering-services-icon {
    margin-bottom: 22px;
  }

  .blog-sidebar__delivering-services-title {
    font-size: 30px;
    text-transform: uppercase;
    line-height: 40px;
  }

  .blog-sidebar__delivering-services-title a {
    color: var(--mibooz-black);
    transition: all 500ms ease;
  }

  .blog-sidebar__delivering-services-title a:hover {
    color: var(--mibooz-primary);
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
