import { styled } from "styled-components";

export const RecentStyle = styled.div`
  .project-one {
    position: relative;
    display: block;
    padding: 120px 0 90px;
  }

  .project-one .section-title {
    margin-bottom: 13px;
    text-align: center;
  }

  .project-filter {
    position: relative;
    display: block;
    text-align: center;
    margin-bottom: 47px;
  }

  .project-filter.style1 li {
    position: relative;
    display: inline-block;
    vertical-align: middle;
    -webkit-transition: all 500ms ease;
    transition: all 500ms ease;
  }

  .project-filter.style1 li:nth-child(1) {
    padding-right: 13px;
  }

  .project-filter.style1 li .filter-text {
    position: relative;
    color: var(--mibooz-gray);
    font-size: 15px;
    font-weight: 400;
    display: block;
    cursor: pointer;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    transition: all 0.4s ease;
    z-index: 1;
  }

  .project-filter.style1 li .filter-text:before {
    position: absolute;
    top: 18px;
    left: -10px;
    right: -6px;
    content: "";
    background: var(--mibooz-primary);
    height: 1px;
    -webkit-transition: all 500ms ease;
    transition: all 500ms ease;
    transform: scale(0);
    z-index: 1;
  }

  .project-filter.style1 li .filter-text:hover:before,
  .project-filter.style1 li.active .filter-text:before {
    transform: scale(1);
  }

  .project-filter.style1 li:hover .filter-text,
  .project-filter.style1 li.active .filter-text {
    color: var(--mibooz-black);
  }

  .project-filter.style1 li .count {
    color: var(--mibooz-gray);
    font-size: 12px;
    line-height: 26px;
    font-weight: 500;
    display: inline-block;
    padding: 0 0;
    opacity: 0;
    -webkit-transition: all 0.4s ease;
    transition: all 0.4s ease;
    position: relative;
    top: -4px;
  }

  .project-filter.style1 li:hover .count,
  .project-filter.style1 li.active .count {
    color: var(--mibooz-black);
    opacity: 1;
  }

  .project-filter.style1 li + li {
    margin-left: 8px;
  }

  .project-one__single {
    position: relative;
    display: block;
    margin-bottom: 30px;
    overflow: hidden;
  }

  .project-one__img {
    position: relative;
    display: block;
    background-color: var(--mibooz-black);
    width: 100%;
  }

  .project-one__img img {
    width: 100%;
    mix-blend-mode: luminosity;
    transition: transform 500ms ease, mix-blend-mode 500ms ease;
    transform: scale(1);
  }

  .project-one__single:hover .project-one__img img {
    mix-blend-mode: normal;
    transform: scale(1.05);
  }

  .project-one__hover {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 35px;
    padding: 31px 50px 29px;
    transform: scaleY(0);
    transform-origin: center;
    transform-style: preserve-3d;
    transition: all 0.5s cubic-bezier(0.62, 0.21, 0.45, 1.52);
    z-index: 1;
  }

  .project-one__single:hover .project-one__hover {
    transform: scaleY(1);
  }

  .project-one__hover:before {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    content: "";
    background-color: rgba(var(--mibooz-black-rgb), 0.9);
    z-index: -1;
  }

  .project-one__tagline {
    position: relative;
    font-size: 12px;
    color: var(--mibooz-base);
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin: 0;
    line-height: 26px;
  }

  .project-one__tagline:before {
    position: absolute;
    top: 50%;
    left: -50px;
    content: "";
    height: 1px;
    width: 29px;
    background-color: var(--mibooz-primary);
    transform: translateY(-50%);
  }

  .project-one__title {
    font-size: 20px;
    text-transform: uppercase;
    line-height: 30px;
  }

  .project-one__title a {
    color: var(--mibooz-base);
    transition: all 500ms ease;
  }

  .project-one__title a:hover {
    color: var(--mibooz-primary);
  }
`;
