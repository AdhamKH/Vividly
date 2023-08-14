import React from "react";
import { NabBarStyle } from "./styleCSS";
import Image from "next/image";
import phoneIcon from "../../assets/images/icon/phone-icon.png";
const Navbar = () => {
  return (
    <NabBarStyle>
      <header className="main-header clearfix">
        <nav className="main-menu clearfix">
          <div className="main-menu-wrapper">
            <div className="main-menu-wrapper__logo">
              <a href="index.html">
                <img src="assets/images/resources/logo-1.png" alt="" />
              </a>
            </div>
            <div className="main-menu-wrapper__main-menu">
              <a href="#" className="mobile-nav__toggler">
                <i className="fa fa-bars"></i>
              </a>
              <ul className="main-menu__list">
                <li className="dropdown">
                  <a href="index.html">Home</a>
                  <ul>
                    <li>
                      <a href="index.html">Home One</a>
                    </li>
                    <li>
                      <a href="index2.html">Home Two</a>
                    </li>
                    <li>
                      <a href="index3.html">Home Three</a>
                    </li>
                    <li className="dropdown">
                      <a href="#">Header Styles</a>
                      <ul>
                        <li>
                          <a href="index.html">Header One</a>
                        </li>
                        <li>
                          <a href="index2.html">Header Two</a>
                        </li>
                        <li>
                          <a href="index3.html">Header Two</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a href="#">Pages</a>
                  <ul>
                    <li>
                      <a href="about.html">About</a>
                    </li>
                    <li>
                      <a href="team.html">Team</a>
                    </li>
                    <li>
                      <a href="faq.html">FAQs</a>
                    </li>
                    <li>
                      <a href="404.html">404 Error</a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a href="services.html">Services</a>
                  <ul>
                    <li>
                      <a href="services.html">Services</a>
                    </li>
                    <li>
                      <a href="mobile-application.html">Mobile Application</a>
                    </li>
                    <li>
                      <a href="digital-marketing.html">Digital Marketing</a>
                    </li>
                    <li>
                      <a href="graphic-designing.html">Graphic Designing</a>
                    </li>
                    <li>
                      <a href="website-development.html">Website Development</a>
                    </li>
                    <li>
                      <a href="social-marketing.html">Social Marketing</a>
                    </li>
                    <li>
                      <a href="content-writing.html">Content Writting</a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a href="#">Projects</a>
                  <ul>
                    <li>
                      <a href="project.html">Projects</a>
                    </li>
                    <li>
                      <a href="project-details.html">Project Details</a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a href="#">Blog</a>
                  <ul>
                    <li>
                      <a href="blog.html">Blog Posts</a>
                    </li>
                    <li>
                      <a href="blog-sidebar.html">Blog Sidebar</a>
                    </li>
                    <li>
                      <a href="blog-details.html">Blog Details</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="contact.html">Contact</a>
                </li>
              </ul>
            </div>
            <div className="main-menu-wrapper__right">
              <div className="main-menu-wrapper__call">
                <div className="main-menu-wrapper__call-icon">
                  <Image src={phoneIcon} alt="" />
                </div>
                <div className="main-menu-wrapper__call-number">
                  <p>Call Anytime</p>
                  <h5>
                    <a href="tel:926668880000">+ 92 666 888 0000</a>
                  </h5>
                </div>
              </div>
              <div className="main-menu-wrapper__search-box">
                <a
                  href="#"
                  className="main-menu-wrapper__search search-toggler icon-magnifying-glass"
                ></a>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <div className="stricky-header stricked-menu main-menu">
        <div className="sticky-header__content"></div>
      </div>
    </NabBarStyle>
  );
};

export default Navbar;
