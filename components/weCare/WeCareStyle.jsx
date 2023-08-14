"use Client";
import { styled } from "styled-components";

export const WeCareStyle = styled.section`
  .we-care {
    position: relative;
    display: block;
  }

  .we-care__inner {
    position: relative;
    display: flex;
    align-items: center;
    padding: 60px 0 60px;
    border-bottom: 1px solid var(--mibooz-bdr-color);
  }

  .we-care__img {
    position: relative;
    display: block;
    background-color: var(--mibooz-black);
    z-index: 1;
  }

  .we-care__img:before {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    content: "";
    width: 10px;
    background-color: var(--mibooz-primary);
    z-index: 1;
  }

  .we-care__img img {
    mix-blend-mode: luminosity;
  }

  .we-care__content {
    margin-left: 50px;
  }

  .we-care__title {
    font-size: 26px;
    text-transform: uppercase;
    line-height: 36px;
    margin-bottom: 3px;
  }

  .we-care__text {
    margin: 0;
    font-size: 16px;
  }
`;
