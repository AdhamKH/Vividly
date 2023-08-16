"use client";
import Navbar from "@/components/navBar";
import React from "react";
import pageBackground from "../../assets/images/backgrounds/page-header-bg.jpg";
import helpBackground from "../../assets/images/backgrounds/service-details-need-help-bg.jpg";
import serviceDetails from "../../assets/images/resources/service-details-img-2.jpg";
import serviceDetailsBenefits from "../../assets/images/resources/service-details__benefits-img.jpg";
import Image from "next/image";
import Footer from "@/components/footer";
import { Grid } from "@mui/material";
import NavBarSecond from "@/components/navBarTwo";
import { SingleServiceStyle } from "./singleServiceStyle";
const SingleService = () => {
  return (
    <SingleServiceStyle>
      <div className="page-wrapper">
        <Navbar></Navbar>

        {/* <!--Page Header Start--> */}
        <section className="page-header">
          <div className="page-header-bg">
            <Image
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              src={pageBackground}
            />
          </div>

          <div className="container">
            <div className="page-header__inner">
              <ul className="thm-breadcrumb list-unstyled">
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li>
                  <a href="services.html">Services</a>
                </li>
                <li>Service Details</li>
              </ul>
              <h2>Digital Marketing</h2>
            </div>
          </div>
        </section>
        {/* <!--Page Header End--> */}

        {/* <!--Services Details Start--> */}
        <section className="service-details">
          <div className="container">
            <Grid container columns={12} spacing={4}>
              <Grid item lg={4} xs={12}>
                {" "}
                <div className="col-xl-4 col-lg-5">
                  <div className="service-details__sidebar">
                    <div className="service-details__sidebar-service">
                      <h4 className="service-details__sidebar-title">
                        Categories
                      </h4>
                      <ul className="service-details__sidebar-service-list list-unstyled">
                        <li>
                          <a href="mobile-application.html">
                            Mobile Application{" "}
                            <span className="icon-arrow-right"></span>
                          </a>
                        </li>
                        <li>
                          <a href="digital-marketing.html">
                            Digital Marketing{" "}
                            <span className="icon-arrow-right"></span>
                          </a>
                        </li>
                        <li>
                          <a href="graphic-designing.html">
                            Graphic Designing{" "}
                            <span className="icon-arrow-right"></span>
                          </a>
                        </li>
                        <li>
                          <a href="website-development.html">
                            Website Development{" "}
                            <span className="icon-arrow-right"></span>
                          </a>
                        </li>
                        <li>
                          <a href="social-marketing.html">
                            Social Marketing{" "}
                            <span className="icon-arrow-right"></span>
                          </a>
                        </li>
                        <li>
                          <a href="content-writing.html">
                            Content Writting{" "}
                            <span className="icon-arrow-right"></span>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="service-details__need-help">
                      <div className="service-details__need-help-bg">
                        <Image src={helpBackground}></Image>
                      </div>
                      <div className="service-details__need-help-icon">
                        <span className="icon-phone-call"></span>
                      </div>
                      <h2 className="service-details__need-help-title">
                        Best Quality <br /> services
                      </h2>
                      <div className="service-details__need-help-contact">
                        <p>Call us Anytime</p>
                        <a href="tel:926668880000">+ 92 666 888 0000</a>
                      </div>
                    </div>
                  </div>
                </div>
              </Grid>
              <Grid item lg={8} xs={12}>
                <div className="col-xl-8 col-lg-7">
                  <div className="service-details__right">
                    <div className="service-details__img">
                      <Image src={serviceDetails} alt="" />
                    </div>
                    <div className="service-details__content">
                      <h3 className="service-details__title">
                        Digital Marketing
                      </h3>
                      <p className="service-details__text">
                        Lorem ipsum is simply free text used by copytyping
                        refreshing. Neque porro est qui dolorem ipsum quia quaed
                        inventore veritatis et quasi architecto beatae vitae
                        dicta sunt explicabo. Aelltes port lacus quis enim var
                        sed efficitur turpis gilla sed sit amet finibus eros.
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the ndustry
                        standard dummy text ever since the 1500s, when an
                        unknown printer took a galley of type and scrambled it
                        to make a type specimen book. It has survived not only
                        five centuries. Lorem Ipsum is simply dummy text of the
                        new design printng and type setting Ipsum Take a look at
                        our round up of the best shows coming soon to your telly
                        box has been the is industrys. Lorem Ipsum is simply
                        dummy text of the printing and typesetting industry.
                        Lorem Ipsum has industr standard dummy text ever since
                        the 1500s, when an unknown printer took a galley of type
                        and scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and
                        more recently with desktop publishing software like
                        Aldus PageMaker including versions of.
                      </p>
                    </div>
                    <ul className="service-details__points">
                      <li>
                        <h4>high quality project</h4>
                        <div className="service-details__points-count"></div>
                      </li>
                      <li>
                        <h4>Fast & relaible service</h4>
                        <div className="service-details__points-count"></div>
                      </li>
                    </ul>
                    <div className="service-details__benefits">
                      {/* <div className="row"> */}
                      <Grid container columns={12}>
                        <Grid item xs={12} md={6}>
                          <div className="col-xl-6">
                            <div className="service-details__benefits-content">
                              <h3 className="service-details__benefits-title">
                                Our Benefits
                              </h3>
                              <p className="service-details__benefits-text">
                                Duis aute irure dolor in simply free text exist
                                on reprehende voluptate velit esse cillum.
                              </p>
                              <ul className="list-unstyled service-details__benefits-list">
                                <li>
                                  <div className="icon">
                                    <span className="icon-check"></span>
                                  </div>
                                  <div className="text">
                                    <p>Nsectetur cing elit</p>
                                  </div>
                                </li>
                                <li>
                                  <div className="icon">
                                    <span className="icon-check"></span>
                                  </div>
                                  <div className="text">
                                    <p>Suspe ndisse suscip sagittis leo</p>
                                  </div>
                                </li>
                                <li>
                                  <div className="icon">
                                    <span className="icon-check"></span>
                                  </div>
                                  <div className="text">
                                    <p>Entum estib dignissim posuere</p>
                                  </div>
                                </li>
                                <li>
                                  <div className="icon">
                                    <span className="icon-check"></span>
                                  </div>
                                  <div className="text">
                                    <p>If you are going to use a pass</p>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </Grid>
                        <Grid item xs={12} md={6}>
                          <div className="col-xl-6">
                            <div className="service-details__benefits-img">
                              <Image src={serviceDetailsBenefits} alt="" />
                            </div>
                          </div>
                        </Grid>
                      </Grid>

                      {/* </div> */}
                    </div>
                    <div className="service-details__faq">
                      <div
                        className="accrodion-grp"
                        data-grp-name="faq-one-accrodion"
                      >
                        <div className="accrodion active">
                          <div className="accrodion-title">
                            <h4>We Help to Create Visual Strategies</h4>
                          </div>
                          <div className="accrodion-content">
                            <div className="inner">
                              <p>
                                There are many variations of passages the
                                majority have suffered alteration in some fo
                                injected humour, simply free text available in
                                the market of loram ipsum where it is not or
                                randomised words believable.
                              </p>
                            </div>
                            {/* <!-- /.inner --> */}
                          </div>
                        </div>
                        <div className="accrodion">
                          <div className="accrodion-title">
                            <h4>Motion Graphics & Animations</h4>
                          </div>
                          <div className="accrodion-content">
                            <div className="inner">
                              <p>
                                There are many variations of passages the
                                majority have suffered alteration in some fo
                                injected humour, simply free text available in
                                the market of loram ipsum where it is not or
                                randomised words believable.
                              </p>
                            </div>
                            {/* <!-- /.inner --> */}
                          </div>
                        </div>
                        <div className="accrodion last-chiled">
                          <div className="accrodion-title">
                            <h4>We Help to Achieve Mutual Goals</h4>
                          </div>
                          <div className="accrodion-content">
                            <div className="inner">
                              <p>
                                There are many variations of passages the
                                majority have suffered alteration in some fo
                                injected humour, simply free text available in
                                the market of loram ipsum where it is not or
                                randomised words believable.
                              </p>
                            </div>
                            {/* <!-- /.inner --> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Grid>
            </Grid>
            {/* <div className="row"> */}

            {/* </div> */}
          </div>
        </section>
        {/* <!--Services Details End--> */}

        {/* <!--Site Footer Start--> */}
        <Grid container columns={12}>
          <Grid item xs={12}>
            {" "}
            <Footer></Footer>
          </Grid>
        </Grid>
        {/* <!--Site Footer End--> */}
      </div>
    </SingleServiceStyle>
  );
};

export default SingleService;
