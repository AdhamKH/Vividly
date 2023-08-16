"use client";
import { styled } from "styled-components";

export const SingleServiceStyle = styled.div`
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
  .service-details {
    position: relative;
    display: block;
    padding: 120px 0 120px;
  }

  .service-details__sidebar {
    position: relative;
    display: block;
  }

  .service-details__sidebar-service {
    position: relative;
    display: block;
    background-color: var(--mibooz-extra);
    padding: 48px 30px 29px;
  }

  .service-details__sidebar-title {
    font-size: 20px;
    padding-left: 20px;
    margin-bottom: 3px;
    text-transform: uppercase;
  }

  .service-details__sidebar-service-list {
    margin: 0;
  }

  .service-details__sidebar-service-list li + li {
    margin-top: 7px;
  }

  .service-details__sidebar-service-list li a {
    color: var(--mibooz-gray);
    font-size: 16px;
    font-weight: 400;
    position: relative;
    -webkit-transition: all 500ms ease;
    transition: all 500ms ease;
    display: block;
    background: none;
    padding: 8.5px 20px;
  }

  .service-details__sidebar-service-list li.current a,
  .service-details__sidebar-service-list li a:hover {
    background-color: #ffffff;
    box-shadow: 0px 10px 60px 0px rgba(0, 0, 0, 0.05);
    color: var(--mibooz-black);
  }

  .service-details__sidebar-service-list li a span {
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%) scale(0);
    -webkit-transition: all 500ms ease;
    transition: all 500ms ease;
    color: var(--mibooz-primary);
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
  }

  .service-details__sidebar-service-list li a span.icon-right-arrow-angle {
    font-weight: bold;
  }

  .service-details__sidebar-service-list li.current a span,
  .service-details__sidebar-service-list li a:hover span {
    transform: translateY(-50%) scale(1);
  }

  .service-details__sidebar-service-list li.current:first-child {
    margin-top: 20px;
  }

  .service-details__need-help {
    position: relative;
    display: block;
    padding: 50px 50px 39px;
    margin-top: 30px;
    text-align: center;
    z-index: 1;
    background-color: var(--mibooz-primary);
  }

  .service-details__need-help-bg {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-color: var(--mibooz-primary);
    opacity: 0.1;
    z-index: -1;
  }

  .service-details__need-help-icon {
    height: 85px;
    width: 85px;
    background-color: var(--mibooz-black);
    color: var(--mibooz-base);
    font-size: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    margin: 0 auto 21px;
    transition: all 500ms ease;
  }

  .service-details__need-help-icon:hover {
    background-color: var(--mibooz-base);
    color: var(--mibooz-primary);
  }

  .service-details__need-help-title {
    font-size: 34px;
    color: var(--mibooz-base);
    line-height: 46px;
    text-transform: uppercase;
  }

  .service-details__need-help-contact {
    position: relative;
    display: block;
    margin-top: 34px;
  }

  .service-details__need-help-contact p {
    font-size: 16px;
    color: var(--mibooz-base);
    margin: 0;
    line-height: 18px;
  }

  .service-details__need-help-contact a {
    font-size: 24px;
    color: var(--mibooz-base);
  }

  .service-details__right {
    position: relative;
    display: block;
  }

  .service-details__img {
    position: relative;
    display: block;
    background-color: var(--mibooz-black);
  }

  .service-details__img img {
    width: 100%;
    mix-blend-mode: luminosity;
  }

  .service-details__content {
    position: relative;
    display: block;
    margin-top: 22px;
  }

  .service-details__title {
    font-size: 30px;
    text-transform: uppercase;
    line-height: 40px;
    margin-bottom: 20px;
  }

  .service-details__text {
    font-size: 16px;
    margin: 0;
    line-height: 34px;
  }

  .service-details__points {
    position: relative;
    display: block;
    overflow: hidden;
    counter-reset: count;
    margin-top: 50px;
    list-style: none outside none !important ;
    display: flex !important;
    justify-content: space-between;
  }

  .service-details__points li {
    position: relative;
    background-color: var(--mibooz-extra);
    float: left;
    /* padding-top: 26px;
    padding-bottom: 26px;
    padding-left: 72px;
    padding-right: 87px; */
    padding: 20px 72px;
  }

  .service-details__points li + li {
    margin-left: 30px;
  }

  .service-details__points li h4 {
    position: relative;
    font-size: 18px;
    /* text-transform: uppercase; */
    line-height: 28px;
    width: 100%;
  }

  .service-details__points li h4:before {
    position: absolute;
    top: 15px;
    left: -12px;
    height: 1px;
    width: 6px;
    content: "";
    background-color: var(--mibooz-primary);
  }

  .service-details__points-count {
    height: 15px;
    width: 15px;
    position: absolute;
    top: 50%;
    left: 40px;
    line-height: 30px;
    transform: translateY(-50%);
  }

  .service-details__points-count:before {
    position: absolute;
    height: 15px;
    width: 15px;
    font-size: 18px;
    line-height: 15px;
    font-weight: 400;
    counter-increment: count;
    content: "0" counter(count);
    transition: all 200ms linear;
    transition-delay: 0.1s;
    font-family: var(--mibooz-font-two);
    color: var(--mibooz-primary);
  }

  .service-details__benefits {
    position: relative;
    display: block;
    margin-top: 60px;
  }

  .service-details__benefits-content {
    position: relative;
    display: block;
    margin-top: -7px;
  }

  .service-details__benefits-title {
    font-size: 26px;
    text-transform: uppercase;
    line-height: 36px;
    margin-bottom: 24px;
  }

  .service-details__benefits-text {
    font-size: 16px;
    margin: 0;
  }

  .service-details__benefits-list {
    position: relative;
    display: block;
    margin-top: 22px;
  }

  .service-details__benefits-list li {
    position: relative;
    display: flex;
    align-items: center;
  }

  .service-details__benefits-list li .icon {
    display: flex;
    align-items: center;
  }

  .service-details__benefits-list li .icon span {
    font-size: 16px;
    color: var(--mibooz-primary);
  }

  .service-details__benefits-list li .text {
    margin-left: 12px;
  }

  .service-details__benefits-list li .text p {
    font-size: 16px;
    color: var(--mibooz-black);
    margin: 0;
  }

  .service-details__benefits-img {
    position: relative;
    display: block;
    background-color: var(--mibooz-black);
  }

  .service-details__benefits-img img {
    width: 100%;
    mix-blend-mode: luminosity;
  }

  .service-details__faq {
    margin-top: 60px;
  }

  .service-details__faq .faq-one-accrodion .accrodion {
    border: 1px solid var(--mibooz-bdr-color);
  }

  .service-details__faq .faq-one-accrodion .accrodion:before {
    top: -1px;
    left: -1px;
    bottom: -1px;
  }
`;
