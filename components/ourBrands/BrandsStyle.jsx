"use client";
import { styled } from "styled-components";

export const BrandStyle = styled.section`
  .brand-one {
    position: relative;
    display: block;
    padding: 93px 0 99px;
    border-top: 1px solid var(--mibooz-bdr-color);
  }

  .brand-one .swiper-slide {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
  }

  .brand-one .swiper-slide img {
    -webkit-transition: 500ms;
    transition: 500ms;
    opacity: 0.3;
    max-width: 100%;
  }

  .brand-one .swiper-slide img:hover {
    opacity: 1;
  }
`;
