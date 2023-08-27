"use client";
import React, { useEffect, useState } from "react";
import { NabBarStyle, StickeyNavBar } from "./styleCSS";
import Image from "next/image";
import phoneIcon from "../../assets/images/icon/phone-icon.png";
import logo from "../../assets/images/vividly logo-01-06.svg";
import Link from "next/link";
import { MyAiOutlineMenu, MyCloseIcon } from "../Common/icons";
const Navbar = () => {
  const [stickyClass, setStickyClass] = useState("");
  const [navMobile, setNavMobile] = React.useState(false);
  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);
    return () => window.removeEventListener("scroll", stickNavbar);
  }, []);
  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      // window height changed for the demo
      windowHeight > 150 ? setStickyClass("sticky-nav") : setStickyClass("");
    }
  };
  return (
    <NabBarStyle navMobile={navMobile}>
      {stickyClass ? (
        <>
          {" "}
          <div className="mysticky">
            <div class="stricked-menu main-menu">
              <div class="sticky-header__content">
                <nav className="main-menu clearfix">
                  <div className="main-menu-wrapper">
                    <div className="main-menu-wrapper__logo">
                      <Link href="/">
                        <Image src={logo} alt="logo" width="200" />
                      </Link>
                    </div>
                    <div className="main-menu-wrapper__main-menu">
                      <a href="#" className="mobile-nav__toggler">
                        <i
                          className="fa fa-bars"
                          onClick={() => {
                            setNavMobile(!navMobile);
                          }}
                        >
                          <MyAiOutlineMenu />
                        </i>
                      </a>
                      <ul className="main-menu__list">
                        <li className="dropdown">
                          <Link href="/">Home</Link>
                          {/* <ul>
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
                          </ul> */}
                        </li>
                        <li className="dropdown">
                          <a href="#">About</a>
                          {/* <ul>
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
                          </ul> */}
                        </li>
                        <li className="dropdown">
                          <Link href="#services" scroll={false}>
                            Services
                          </Link>
                          {/* <ul>
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
              </ul> */}
                        </li>
                        <li className="dropdown">
                          <Link href="#projects">Projects</Link>
                          {/* <ul>
                            <li>
                              <a href="project.html">Projects</a>
                            </li>
                            <li>
                              <a href="project-details.html">Project Details</a>
                            </li>
                          </ul> */}
                        </li>
                        {/* <li className="dropdown">
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
                        </li> */}
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
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          {" "}
          <header className="main-header clearfix">
            <nav className="main-menu clearfix">
              <div className="main-menu-wrapper">
                <div className="main-menu-wrapper__logo">
                  <Link href="/">
                    <Image src={logo} alt="logo" width="200" />
                  </Link>
                </div>
                <div className="main-menu-wrapper__main-menu">
                  <a href="#" className="mobile-nav__toggler">
                    <i
                      className="fa fa-bars"
                      onClick={() => {
                        setNavMobile(!navMobile);
                      }}
                    >
                      <MyAiOutlineMenu />
                    </i>
                  </a>
                  <ul className="main-menu__list">
                    <li className="dropdown">
                      <Link href="/">Home</Link>

                      {/* <ul>
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
                      </ul> */}
                    </li>
                    <li className="dropdown">
                      <a href="#">About</a>
                      {/* <ul>
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
                      </ul> */}
                    </li>
                    <li className="dropdown">
                      <Link href="#services" scroll={false}>
                        Services
                      </Link>
                      {/* <ul>
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
              </ul> */}
                    </li>
                    <li className="dropdown">
                      <Link href="#projects">Projects</Link>
                      {/* <ul>
                        <li>
                          <a href="project.html">Projects</a>
                        </li>
                        <li>
                          <a href="project-details.html">Project Details</a>
                        </li>
                      </ul> */}
                    </li>
                    {/* <li className="dropdown">
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
                    </li> */}
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
          <div class="mobile-nav__wrapper">
            <div class="mobile-nav__overlay mobile-nav__toggler"></div>
            {/* <!-- /.mobile-nav__overlay --> */}
            <div class="mobile-nav__content">
              <span class="mobile-nav__close mobile-nav__toggler">
                <i
                  class="fa fa-times"
                  onClick={() => {
                    setNavMobile(!navMobile);
                  }}
                >
                  <MyCloseIcon />
                </i>
              </span>
              <div class="logo-box">
                <a href="index.html" aria-label="logo image">
                  <Image src={logo} alt="logo" width="155"></Image>
                </a>
              </div>
              {/* <!-- /.logo-box --> */}
              <div class="mobile-nav__container">
                <ul class="main-menu__list">
                  <li class="dropdown current">
                    <a href="index.html" class="">
                      Home
                    </a>
                  </li>
                  <li class="dropdown">
                    <a href="#">Pages</a>
                  </li>
                  <li class="dropdown">
                    <a href="services.html">Services</a>
                  </li>
                  <li class="dropdown">
                    <a href="#">Projects</a>
                  </li>

                  <li>
                    <a href="contact.html">Contact</a>
                  </li>
                </ul>
              </div>{" "}
              {/* <!-- /.mobile-nav__container --> */}
              <ul class="mobile-nav__contact list-unstyled">
                <li>
                  <i class="fa fa-envelope"></i>
                  <a href="mailto:needhelp@packageName__.com">
                    needhelp@mibooz.com
                  </a>
                </li>
                <li>
                  <i class="fa fa-phone-alt"></i>
                  <a href="tel:666-888-0000">666 888 0000</a>
                </li>
              </ul>
              {/* <!-- /.mobile-nav__contact --> */}
              <div class="mobile-nav__top">
                <div class="mobile-nav__social">
                  <a href="#" class="fab fa-twitter"></a>
                  <a href="#" class="fab fa-facebook-square"></a>
                  <a href="#" class="fab fa-pinterest-p"></a>
                  <a href="#" class="fab fa-instagram"></a>
                </div>
                {/* <!-- /.mobile-nav__social --> */}
              </div>
              {/* <!-- /.mobile-nav__top --> */}
            </div>
            {/* <!-- /.mobile-nav__content --> */}
          </div>
        </>
      )}
    </NabBarStyle>
  );
};

export default Navbar;
