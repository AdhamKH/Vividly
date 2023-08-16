"use client";
import React from "react";
import { SingleProjectStyle } from "./style";
import Navbar from "@/components/navBar";
import Footer from "@/components/footer";
import Image from "next/image";
import { Grid } from "@mui/material";
import image1 from "../../assets/images/resources/project-details-img.jpg";
import pageBackground from "../../assets/images/backgrounds/page-header-bg.jpg";

const SingleProject = () => {
  return (
    <SingleProjectStyle>
      <div className="page-wrapper">
        <Navbar></Navbar>
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
                  <a href="services.html">Products</a>
                </li>
                <li>Service Details</li>
              </ul>
              <h2>PROJECT DETAILS</h2>
            </div>
          </div>
        </section>
        <section class="project-details">
          <div class="container">
            {/* <div class="row"> */}
            <Grid container columns={12}>
              <Grid item xs={12}>
                {" "}
                <div class="col-xl-12">
                  <div class="project-details__img">
                    <Image src={image1}></Image>
                  </div>
                </div>
              </Grid>
            </Grid>

            {/* </div> */}
            <div class="project-details__content">
              {/* <div class="row"> */}
              <Grid container columns={12} spacing={4}>
                <Grid item xl={8} lg={7}>
                  {" "}
                  <div class="col-xl-8 col-lg-7">
                    <div class="project-details__content-left">
                      <h3 class="project-details__content-title">
                        Filmor Experience
                      </h3>
                      <p class="project-details__content-text-1">
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum is
                        that it has a more-or-less normal distribution of
                        letters, as opposed to using 'Content here, content
                        here', making it look like readable English. Many
                        desktop publishing packages and web page editors now use
                        Lorem Ipsum as their default model text, and a search
                        for 'lorem ipsum' will uncover many web sites still in
                        their infancy.
                      </p>
                      <p class="project-details__content-text-2">
                        Tincidunt elit magnis nulla facilisis sagittis sapien
                        nunc Many desktop publishing packages and web page
                        editors amet ultrices dolores sit ipsum velit purus
                        aliquet massa fringilla leo orci. Sapien nunc amet
                        ultrices.
                      </p>
                      <ul class="list-unstyled project-details__points">
                        <li>
                          <div class="icon">
                            <span class="icon-check"></span>
                          </div>
                          <div class="text">
                            <p>Take a look at our round up of the best shows</p>
                          </div>
                        </li>
                        <li>
                          <div class="icon">
                            <span class="icon-check"></span>
                          </div>
                          <div class="text">
                            <p>It has survived not only five centuries</p>
                          </div>
                        </li>
                        <li>
                          <div class="icon">
                            <span class="icon-check"></span>
                          </div>
                          <div class="text">
                            <p>
                              Lorem Ipsum has been the ndustry standard dummy
                              text
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Grid>
                <Grid item xl={4} lg={5}>
                  {" "}
                  <div class="col-xl-4 col-lg-5">
                    <div class="project-details__content-right">
                      <div class="project-details__details-box">
                        <div class="project-details__details-info">
                          <div class="project-details__details-info-single">
                            <h5 class="project-details__details-info-client">
                              Clients:
                            </h5>
                            <p class="project-details__details-info-name">
                              Jessica Brown
                            </p>
                          </div>
                          <div class="project-details__details-info-single">
                            <h5 class="project-details__details-info-client">
                              Category:
                            </h5>
                            <p class="project-details__details-info-name">
                              Web & Application Design
                            </p>
                          </div>
                          <div class="project-details__details-info-single">
                            <h5 class="project-details__details-info-client">
                              Date:
                            </h5>
                            <p class="project-details__details-info-name">
                              20 August, 2021
                            </p>
                          </div>
                        </div>
                        <div class="project-details__details-social-list">
                          <a href="#">
                            <i class="fab fa-twitter"></i>
                          </a>
                          <a href="#">
                            <i class="fab fa-facebook"></i>
                          </a>
                          <a href="#">
                            <i class="fab fa-pinterest-p"></i>
                          </a>
                          <a href="#">
                            <i class="fab fa-instagram"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </Grid>
              </Grid>
              {/* </div> */}
            </div>
            {/* <div class="row"> */}
            <Grid container columns={12}>
              <Grid item xs={12}>
                {" "}
                <div class="col-xl-12">
                  <div class="project-details__pagination-box">
                    <ul class="project-details__pagination list-unstyled">
                      <li class="next">
                        <a href="#" aria-label="Previous">
                          <i class="icon-arrow-left"></i>Previous
                        </a>
                      </li>
                      <li class="count">
                        <a href="#"></a>
                      </li>
                      <li class="count">
                        <a href="#"></a>
                      </li>
                      <li class="count">
                        <a href="#"></a>
                      </li>
                      <li class="count">
                        <a href="#"></a>
                      </li>
                      <li class="previous">
                        <a href="#" aria-label="Next">
                          Next<i class="icon-arrow-right"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </Grid>
            </Grid>
            {/* </div> */}
          </div>
        </section>
        <Footer></Footer>
      </div>
    </SingleProjectStyle>
  );
};

export default SingleProject;
