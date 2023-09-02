import React from "react";
import { ContactUsStyle } from "./style";
import Image from "next/image";
import headerImg from "../../assets/images/backgrounds/page-header-bg.jpg";
import locationImg from "../../assets/images/shapes/location-shape.png";
import Navbar from "@/components/navBar";
import Footer from "@/components/footer";
import { Grid } from "@mui/material";
const ContactUS = () => {
  return (
    <ContactUsStyle>
      <div className="`page-wrapper`">
        <Navbar></Navbar>
        <section class="page-header">
          {/* <div
          class="page-header-bg"
          style="background-image: url(assets/images/backgrounds/page-header-bg.jpg)"
        ></div> */}
          <Image
            class="page-header-bg"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            src={headerImg}
          ></Image>
          <div class="container">
            <div class="page-header__inner">
              <ul class="thm-breadcrumb list-unstyled">
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li>Contact</li>
              </ul>
              <h2>Contact</h2>
            </div>
          </div>
        </section>
        {/* <!--Page Header End--> */}

        {/* <!--Location Start--> */}
        <section class="location">
          {/* <div
          class="location-shape"
          style="background-image: url(assets/images/shapes/location-shape.png)"
        ></div> */}
          <Image
            class="location-shape"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            src={locationImg}
          ></Image>
          <div class="container">
            {/* <div class="row"> */}
            <Grid container columns={12} spacing={3}>
              <Grid item xs={12} md={4}>
                {" "}
                <div class="col-xl-4 col-lg-4">
                  {/* <!--Location Single--> */}
                  <div class="location__single">
                    <h3 class="location__title">about</h3>
                    <p class="location__text">
                      Lorem ipsum dolor sit amet is adipiscing elit. Ut elit
                      tellus, luctus nec mattis.
                    </p>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} md={4}>
                {" "}
                <div class="col-xl-4 col-lg-4">
                  {/* <!--Location Single--> */}
                  <div class="location__single">
                    <h3 class="location__title">address</h3>
                    <p class="location__text">
                      86 Road Broklyn Street 600. New York M68036. United States
                      of America
                    </p>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} md={4}>
                {" "}
                <div class="col-xl-4 col-lg-4">
                  {/* <!--Location Single--> */}
                  <div class="location__single location__single-last">
                    <h3 class="location__title">contact</h3>
                    <h5 class="location__phone-email">
                      <a href="tel:926668880000" class="location__phone">
                        + 92 666 888 0000
                      </a>
                      <a
                        href="mailto:needhelp@company.com"
                        class="location__email"
                      >
                        needhelp@company.com
                      </a>
                    </h5>
                    <div class="location__social">
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
              </Grid>
            </Grid>
            {/* </div> */}
            {/* <div class="row"> */}
            <div class="col-xl-12">
              <div class="location__bottom">
                <p class="location-bottom__text">
                  Mibooz services built specifically for your business.{" "}
                  <a href="about.html">Find Your Solution</a>
                </p>
              </div>
            </div>
            {/* </div> */}
          </div>
        </section>
        {/* <!--Location End--> */}

        {/* <!--contact Page Start--> */}
        <section class="contact-page">
          <div class="container">
            <div class="section-title text-center">
              <span class="section-title__tagline">contact with us</span>
              <h2 class="section-title__title">have question?</h2>
            </div>
            {/* <div class="row"> */}
            <Grid container columns={12}>
              <Grid item xs={12}>
                <div class="col-xl-12">
                  <div class="contact-page__form">
                    <form
                      action="assets/inc/sendemail.php"
                      class="comment-one__form contact-form-validated"
                      novalidate="novalidate"
                    >
                      {/* <div class="row"> */}
                      <Grid item container columns={12} spacing={0}>
                        <Grid item xs={12} md={6} sx={{ padding: "0 1rem" }}>
                          <div class="col-xl-6">
                            <div class="comment-form__input-box">
                              <input
                                type="text"
                                placeholder="Your name"
                                name="name"
                              />
                            </div>
                          </div>
                        </Grid>
                        <Grid item xs={12} md={6} sx={{ padding: "0 1rem" }}>
                          <div class="col-xl-6">
                            <div class="comment-form__input-box">
                              <input
                                type="email"
                                placeholder="Email address"
                                name="email"
                              />
                            </div>
                          </div>
                        </Grid>
                        <Grid item xs={12} md={6} sx={{ padding: "0 1rem" }}>
                          {" "}
                          <div class="col-xl-6">
                            <div class="comment-form__input-box">
                              <input
                                type="text"
                                placeholder="Phone"
                                name="phone"
                              />
                            </div>
                          </div>
                        </Grid>
                        <Grid item xs={12} md={6} sx={{ padding: "0 1rem" }}>
                          {" "}
                          <div class="col-xl-6">
                            <div class="comment-form__input-box">
                              <input
                                type="email"
                                placeholder="Subject"
                                name="subject"
                              />
                            </div>
                          </div>
                        </Grid>
                      </Grid>
                      {/* </div> */}
                      {/* <div class="row"> */}
                      <Grid item xs={12} sx={{ padding: "0 1rem" }}>
                        <div class="col-xl-12">
                          <div class="comment-form__input-box">
                            <textarea
                              name="message"
                              placeholder="Write message"
                            ></textarea>
                          </div>
                          <button
                            type="submit"
                            class="thm-btn comment-form__btn"
                          >
                            send a message
                          </button>
                        </div>
                      </Grid>

                      {/* </div> */}
                    </form>
                  </div>
                </div>{" "}
              </Grid>
            </Grid>
            {/* </div> */}
          </div>
        </section>
        <Footer></Footer>
      </div>
    </ContactUsStyle>
  );
};

export default ContactUS;
