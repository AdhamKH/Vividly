"use client";
import React from "react";
import { AboutStyle } from "./style";
import Image from "next/image";
import img1 from "../../assets/images/resources/about-page-img-1.jpg";
import img2 from "../../assets/images/resources/about-page-img-2.jpg";
import pageImg from "../../assets/images/resources/about-page-badge.png";
import Tilt from "../Common/Tilt";
import { Grid } from "@mui/material";
import teamImg1 from "../../assets/images/team/team-one-img-1.jpg";
import teamImg2 from "../../assets/images/team/team-one-img-2.jpg";
import teamImg3 from "../../assets/images/team/team-one-img-3.jpg";
import teamImg4 from "../../assets/images/team/team-one-img-4.jpg";
// import teamImg5 from "../../assets/images/team/team-one-img-5.jpg";
const About = () => {
  return (
    <AboutStyle>
      <section className="about-page">
        <div className="container">
          <Grid container columns={12} spacing={3}>
            <Grid item xs={12} md={6}>
              {" "}
              <div className="col-xl-6">
                <div className="about-page__left">
                  <ul className="list-unstyled about-page__images">
                    <li>
                      <div className="about-page__img-1">
                        <Image src={img1} alt="" />
                      </div>
                    </li>
                    <li>
                      <div className="about-page__img-2">
                        <Image src={img2} alt="" />
                      </div>
                    </li>
                  </ul>
                  <div className="about-page__badge">
                    <Tilt>
                      <Image data-tilt src={pageImg} alt="" />
                    </Tilt>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              {" "}
              <div className="col-xl-6">
                <div className="about-page__right">
                  <div className="section-title text-left">
                    <span className="section-title__tagline">
                      about company
                    </span>
                    <h2 className="section-title__title">
                      get to know about agency
                    </h2>
                  </div>
                  <p className="about-page__right-text-1">
                    There are many variations of pass of lorem ipsum available
                    but the majority have suffered alteration in some Injected
                    humour randomised words.
                  </p>
                  <h4 className="about-page__right-text-2">
                    providing innovative Website solutions for future.
                  </h4>
                  <a href="about.html" className="thm-btn abut-page__btn">
                    Discover More
                  </a>
                </div>
              </div>
            </Grid>
          </Grid>
          <section className="team-one">
            <div className="container">
              <div className="section-title text-center">
                <span className="section-title__tagline">people behind it</span>
                <h2 className="section-title__title">meet the team</h2>
              </div>
              {/* <div className="row"> */}
              <Grid container columns={12} spacing={1}>
                <Grid item lg={3} md={6} xs={12}>
                  {" "}
                  <div
                    className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                    data-wow-delay="200ms"
                  >
                    {/* <!--Team One Single--> */}
                    <div className="team-one__single">
                      <div className="team-one__img">
                        <Image src={teamImg1} alt="" />
                        <div className="team-one__details">
                          <p className="team-one__title">Developer</p>
                          <h4 className="team-one__name">Sarah albert</h4>
                        </div>
                        <div className="team-one__social">
                          <a href="#">
                            <i className="fab fa-twitter"></i>
                          </a>
                          <a href="#">
                            <i className="fab fa-facebook"></i>
                          </a>
                          <a href="#">
                            <i className="fab fa-instagram"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </Grid>
                <Grid item lg={3} md={6} xs={12}>
                  {" "}
                  <div
                    className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                    data-wow-delay="400ms"
                  >
                    {/* <!--Team One Single--> */}
                    <div className="team-one__single">
                      <div className="team-one__img">
                        <Image src={teamImg2} alt="" />
                        <div className="team-one__details">
                          <p className="team-one__title">Developer</p>
                          <h4 className="team-one__name">Sarah albert</h4>
                        </div>
                        <div className="team-one__social">
                          <a href="#">
                            <i className="fab fa-twitter"></i>
                          </a>
                          <a href="#">
                            <i className="fab fa-facebook"></i>
                          </a>
                          <a href="#">
                            <i className="fab fa-instagram"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </Grid>
                <Grid item lg={3} md={6} xs={12}>
                  <div
                    className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                    data-wow-delay="600ms"
                  >
                    {/* <!--Team One Single--> */}
                    <div className="team-one__single">
                      <div className="team-one__img">
                        <Image src={teamImg3} alt="" />
                        <div className="team-one__details">
                          <p className="team-one__title">Developer</p>
                          <h4 className="team-one__name">Sarah albert</h4>
                        </div>
                        <div className="team-one__social">
                          <a href="#">
                            <i className="fab fa-twitter"></i>
                          </a>
                          <a href="#">
                            <i className="fab fa-facebook"></i>
                          </a>
                          <a href="#">
                            <i className="fab fa-instagram"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </Grid>
                <Grid item lg={3} md={6} xs={12}>
                  {" "}
                  <div
                    className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                    data-wow-delay="800ms"
                  >
                    {/* <!--Team One Single--> */}
                    <div className="team-one__single">
                      <div className="team-one__img">
                        <Image src={teamImg4} alt="" />
                        <div className="team-one__details">
                          <p className="team-one__title">Developer</p>
                          <h4 className="team-one__name">Sarah albert</h4>
                        </div>
                        <div className="team-one__social">
                          <a href="#">
                            <i className="fab fa-twitter"></i>
                          </a>
                          <a href="#">
                            <i className="fab fa-facebook"></i>
                          </a>
                          <a href="#">
                            <i className="fab fa-instagram"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </Grid>
              </Grid>

              {/* </div> */}
            </div>
          </section>
        </div>
      </section>
    </AboutStyle>
  );
};

export default About;
