import { styled } from "styled-components";
import { sunMove } from "../../style/animations";
export const AboutStyle = styled.div`
  .about-page {
    position: relative;
    display: block;
    padding: 120px 0 120px;
  }

  .about-page__left {
    position: relative;
    display: block;
  }

  .about-page__images {
    position: relative;
    display: block;
    overflow: hidden;
  }

  .about-page__images li {
    position: relative;
    display: block;
    float: left;
  }

  .about-page__images li + li {
    margin-left: 10px;
  }

  .about-page__img-1 {
    background-color: var(--mibooz-black);
  }

  .about-page__img-1 img {
    mix-blend-mode: luminosity;
  }

  .about-page__img-2 {
    background-color: var(--mibooz-black);
  }

  .about-page__img-2 img {
    mix-blend-mode: luminosity;
  }

  .about-page__badge {
    position: absolute;
    top: 22px;
    left: -78px;
    animation: ${sunMove} 10s linear infinite;
  }

  .about-page__right {
    position: relative;
    display: block;
    margin-left: 70px;
  }

  .about-page__right .section-title {
    margin-bottom: 27px;
    margin-right: -20px;
  }

  .about-page__right-text-1 {
    margin: 0;
    line-height: 32px;
  }

  .about-page__right-text-2 {
    font-size: 20px;
    color: var(--mibooz-primary);
    text-transform: uppercase;
    letter-spacing: 0.1em;
    line-height: 30px;
    margin-top: 31px;
    margin-bottom: 41px;
  }

  .abut-page__btn {
    color: var(--mibooz-black);
  }
  /* Team */
  .team-one {
    position: relative;
    display: block;
    padding: 90px 0;
  }

  .team-one .row {
    --bs-gutter-x: 6px;
  }

  .team-one__single {
    position: relative;
    display: block;
    margin-bottom: 30px;
    z-index: 1;
  }

  .team-one__img {
    position: relative;
    display: block;
    overflow: hidden;
    background-color: var(--mibooz-black);
    z-index: 1;
  }

  .team-one__img:before {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    content: "";
    background-color: var(--mibooz-primary);
    transition: transform 500ms ease;
    transform: scale(1, 0);
    transform-origin: bottom center;
    z-index: 1;
  }

  .team-one__single:hover .team-one__img:before {
    transform: scale(1, 1);
    transform-origin: top center;
  }

  .team-one__img img {
    width: 100%;
    mix-blend-mode: luminosity;
  }

  .team-one__details {
    position: absolute;
    top: 31px;
    left: 40px;
    transform: translateX(-126%);
    transition: transform 500ms ease;
    z-index: 2;
  }

  .team-one__single:hover .team-one__details {
    transform: translateX(0%);
  }

  .team-one__title {
    font-size: 13px;
    color: #ffbdc8;
    text-transform: uppercase;
    margin: 0;
    line-height: 28px;
    letter-spacing: 0.1em;
  }

  .team-one__name {
    font-size: 22px;
    text-transform: uppercase;
    color: var(--mibooz-base);
  }

  .team-one__social {
    display: -webkit-box;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    position: absolute;
    right: 40px;
    bottom: 40px;
    transform: translateX(135%);
    transition: transform 500ms ease;
    z-index: 2;
  }

  .team-one__single:hover .team-one__social {
    transform: translateX(0%);
  }

  .team-one__social a {
    display: -webkit-box;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    text-align: center;
    color: #ffbdc8;
    font-size: 20px;
    -webkit-transition: all 500ms ease;
    transition: all 500ms ease;
  }

  .team-one__social a:hover {
    color: var(--mibooz-base);
  }

  .team-one__social a + a {
    margin-left: 30px;
  }
`;
