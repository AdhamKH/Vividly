"use client";

import React from "react";
import { FooterStyle } from "./footerStyle";
import Image from "next/image";
import background from "../../assets/images/shapes/site-footer-top-shape.png";
import { Grid } from "@mui/material";
const Footer = () => {
  return (
    <FooterStyle>
      <footer class="site-footer">
        <div class="site-footer__top">
          <div class="site-footer__top-shape">
            <Image
              src={background}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </div>
          <div class="container">
            <div class="site-footer__top-inner">
              <div class="site-footer__top-left">
                <h3 class="site-footer__top-left-title">
                  Your Perfect Business Partner Solution
                </h3>
                <a href="tel:926668880000" class="site-footer__top-left-phone">
                  + 92 666 888 0000
                </a>
              </div>
              <div class="site-footer__top-right">
                <div class="site-footer__top-right-social">
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
        </div>
        <div class="site-footer__middle">
          <div class="container">
            <div class="site-footer__middle-inner">
              {/* <div class="row"> */}
              <Grid container columns={12}>
                <Grid item xs={12} lg={4}>
                  {" "}
                  <div
                    class="col-xl-3 col-lg-4 wow fadeInUp"
                    data-wow-delay="100ms"
                  >
                    <div class="footer-widget__column footer-widget__contact">
                      <h3 class="footer-widget__title">Contact</h3>
                      <p class="footer-widget__contact-text">
                        86 Road Broklyn Street, 600 <br />
                        New York, USA
                      </p>
                      <h4 class="footer-widget__contact-email-phone">
                        <a
                          href="mailto:needhelp@company.com"
                          class="footer-widget__contact-email"
                        >
                          needhelp@company.com
                        </a>
                        <a
                          href="tel:926668880000"
                          class="footer-widget__contact-phone"
                        >
                          + 92 666 888 0000
                        </a>
                      </h4>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12} lg={4}>
                  {" "}
                  <div
                    class="col-xl-4 col-lg-4 wow fadeInUp"
                    data-wow-delay="200ms"
                  >
                    <div class="footer-widget__column footer-widget__links clearfix">
                      <h3 class="footer-widget__title">Links</h3>
                      <ul class="footer-widget__links-list list-unstyled clearfix">
                        <li>
                          <a href="services.html">Our Services</a>
                        </li>
                        <li>
                          <a href="team.html">Meet Our Team</a>
                        </li>
                        <li>
                          <a href="project.html">Our Portfolio</a>
                        </li>
                        <li>
                          <a href="contact.html">Contact</a>
                        </li>
                        <li>
                          <a href="blog.html">News</a>
                        </li>
                      </ul>
                      <ul class="footer-widget__links-list footer-widget__links-list-two list-unstyled clearfix">
                        <li>
                          <a href="faq.html">FAQs</a>
                        </li>
                        <li>
                          <a href="about.html">Terms & Conditions</a>
                        </li>
                        <li>
                          <a href="about.html">Privacy Policy</a>
                        </li>
                        <li>
                          <a href="about.html">Help</a>
                        </li>
                        <li>
                          <a href="services.html">Services</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12} lg={4}>
                  {" "}
                  {/* <div
                    class="col-xl-5 col-lg-4 wow fadeInUp"
                    data-wow-delay="300ms"
                  > */}
                  <div class="footer-widget__column footer-widget__newsletter">
                    <h3 class="footer-widget__title">Newsletter</h3>
                    <form class="footer-widget__newsletter-form">
                      <div class="footer-widget__newsletter-input-box">
                        <input
                          type="email"
                          placeholder="Email address"
                          name="email"
                        />
                        <button
                          type="submit"
                          class="footer-widget__newsletter-btn"
                        >
                          <i class="far fa-paper-plane"></i>
                        </button>
                      </div>
                    </form>
                    <div class="footer-widget__newsletter-bottom">
                      <div class="footer-widget__newsletter-bottom-icon">
                        <i class="fa fa-check"></i>
                      </div>
                      <div class="footer-widget__newsletter-bottom-text">
                        <p>I agree to all your terms and policies</p>
                      </div>
                    </div>
                  </div>
                  {/* </div> */}
                </Grid>
              </Grid>
              {/* </div> */}
            </div>
          </div>
        </div>
        <div class="site-footer__bottom">
          <div class="container">
            <Grid container columns={12}>
              <Grid item xs={12}>
                {" "}
                <div class="col-xl-12">
                  <div class="site-footer__bottom-inner">
                    <p class="site-footer__bottom-text">
                      © Copyrights, <span class="dynamic-year"></span>
                      <a href="#">Layerdrops.com</a>
                    </p>
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
      </footer>
    </FooterStyle>
  );
};

export default Footer;
