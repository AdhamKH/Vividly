import Image from "next/image";
import React from "react";
import welcomeOneShape from "../../assets/images/shapes/welcom-one-shape.png";
import welcomeOnePerson from "../../assets/images/resources/welcome-one-person-img.jpg";
import welcomeOneImg from "../../assets/images/resources/welcome-one-img-1.jpg";
import { Grid } from "@mui/material";
import { IntroductionStyle } from "./IntroductionsStyle";
const OurIntroductions = () => {
  return (
    <IntroductionStyle>
      <section class="welcome-one">
        <div
          class="welcome-one-shape wow slideInLeft"
          data-wow-delay="100ms"
          data-wow-duration="2500ms"
        >
          <Image src={welcomeOneShape} alt="" />
        </div>
        <div class="container">
          <Grid container columns={12}>
            <Grid item lg={6}>
              {" "}
              <div
                class="col-xl-6 wow slideInLeft"
                data-wow-delay="100ms"
                data-wow-duration="2500ms"
              >
                <div class="welcome-one__left">
                  <div class="welcome-one__img-box">
                    <div class="welcome-one__img">
                      <Image src={welcomeOneImg} alt="" />
                    </div>
                    <div class="welcome-one__experience">
                      <div class="welcome-one__experience-icon">
                        <span class="icon-conversation"></span>
                      </div>
                      <div class="welcome-one__experience-content">
                        <h3 class="welcome-one__experience-title">
                          <span>40</span> Years of
                          <br />
                          Working Experience
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item lg={6}>
              {" "}
              {/* <div class="col-xl-6"> */}
              <div class="welcome-one__right">
                <div class="section-title text-left">
                  <span class="section-title__tagline">Our introductions</span>
                  <h2 class="section-title__title">
                    A leading web & software company
                  </h2>
                </div>
                <p class="welcome-one__right-text">
                  There are many variations of passages of lorem ipsum
                  available, but the majority have suffered in some form, by
                  injected humour.
                </p>
                <div class="welcome-one__bottom">
                  {/* <div class="row"> */}
                  <Grid container columns={12}>
                    <Grid item md={6} xs={12}>
                      {" "}
                      <div class="col-xl-6 col-lg-6 col-md-6">
                        <div class="welcome-one__bottom-left">
                          <h4 class="welcome-one__bottom-title">
                            providing innovative <br />
                            Website solutions <br />
                            for future.
                          </h4>
                          <ul class="list-unstyled welcome-one__points">
                            <li>
                              <div class="icon">
                                <span class="icon-tick"></span>
                              </div>
                              <div class="text">
                                <p>Nsectetur cing elit</p>
                              </div>
                            </li>
                            <li>
                              <div class="icon">
                                <span class="icon-tick"></span>
                              </div>
                              <div class="text">
                                <p>Suspe ndisse suscipit sagittis leo</p>
                              </div>
                            </li>
                            <li>
                              <div class="icon">
                                <span class="icon-tick"></span>
                              </div>
                              <div class="text">
                                <p>Entum estib dignissim posuere</p>
                              </div>
                            </li>
                            <li>
                              <div class="icon">
                                <span class="icon-tick"></span>
                              </div>
                              <div class="text">
                                <p>If you are going to use a pass</p>
                              </div>
                            </li>
                          </ul>
                          <div class="welcome-one__person">
                            <div class="welcome-one__person-img">
                              <Image src={welcomeOnePerson} alt="" />
                            </div>
                            <div class="welcome-one__person-sign">
                              <h3>J. Albert</h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Grid>
                    <Grid item md={6} xs={12}>
                      {" "}
                      <div class="col-xl-6 col-lg-6 col-md-6">
                        <div class="welcome-one__bottom-right">
                          <div class="welcome-one__bottom-right-content">
                            <div class="welcome-one__bottom-right-icon">
                              <span class="icon-help"></span>
                            </div>
                            <h4 class="welcome-one__bottom-right-title">
                              How Can mibooz Help Your business to grow
                            </h4>
                            <a
                              href="about.html"
                              class="thm-btn welcome-one__btn"
                            >
                              read more
                            </a>
                          </div>
                        </div>
                      </div>
                    </Grid>
                  </Grid>
                  {/* </div> */}
                </div>
              </div>
              {/* </div> */}
            </Grid>
          </Grid>
        </div>
      </section>
    </IntroductionStyle>
  );
};

export default OurIntroductions;
