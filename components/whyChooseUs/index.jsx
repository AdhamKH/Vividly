import React from "react";
import { WhyStyle } from "./whyStyle";
import { Grid } from "@mui/material";
import Image from "next/image";
import whyImg1 from "../../assets/images/resources/why-choose-one-img.jpg";
import whyImg2 from "../../assets/images/resources/why-choose-one-content-img.jpg";
const WhyChooseUS = () => {
  return (
    <WhyStyle>
      <section class="why-choose-one">
        <div class="container">
          <div class="row">
            <Grid container columns={12}>
              <Grid item lg={6}>
                {" "}
                <div
                  class="col-xl-6 wow slideInLeft"
                  data-wow-delay="100ms"
                  data-wow-duration="2500ms"
                >
                  <div class="why-choose-one__left">
                    <div class="why-choose-one__img">
                      <Image src={whyImg1} alt="" />
                    </div>
                    <div class="why-choose-one-box-1"></div>
                    <div class="why-choose-one-box-2"></div>
                    <div class="why-choose-one-box-3"></div>
                  </div>
                </div>
              </Grid>
              <Grid item lg={6}>
                {" "}
                <div class="col-xl-6">
                  <div class="why-choose-one__right">
                    <div class="section-title text-left">
                      <span class="section-title__tagline">why choose us</span>
                      <h2 class="section-title__title">
                        We do more then ever platform
                      </h2>
                    </div>
                    <p class="why-choose-one__right-text">
                      There are many variations of passages of lorem ipsum
                      available, but the majority have suffered in some form, by
                      injected free text not humour.
                    </p>
                    <div class="why-choose-one__content">
                      <div class="why-choose-one__content-img">
                        <Image src={whyImg2} alt="" />
                      </div>
                      <div class="why-choose-one__content-list">
                        <ul class="list-unstyled why-choose-one__points">
                          <li>
                            <div class="icon">
                              <span class="icon-check"></span>
                            </div>
                            <div class="text">
                              <p>Nsectetur cing elit</p>
                            </div>
                          </li>
                          <li>
                            <div class="icon">
                              <span class="icon-check"></span>
                            </div>
                            <div class="text">
                              <p>Suspe ndisse suscip sagittis leo</p>
                            </div>
                          </li>
                          <li>
                            <div class="icon">
                              <span class="icon-check"></span>
                            </div>
                            <div class="text">
                              <p>Entum estib dignissim posuere</p>
                            </div>
                          </li>
                          <li>
                            <div class="icon">
                              <span class="icon-check"></span>
                            </div>
                            <div class="text">
                              <p>If you are going to use a pass</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="why-choose-one__progress">
                      <div class="why-choose-one__progress-single">
                        <h4 class="why-choose-one__progress-title">
                          Digital marketing
                        </h4>
                        <div class="bar">
                          <div class="bar-inner count-bar" data-percent="66%">
                            <div class="count-text">66%</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
      </section>
    </WhyStyle>
  );
};

export default WhyChooseUS;
