import React from "react";
import { BlogStyled } from "./style";
import Navbar from "@/components/navBar";
import pageBackground from "../../assets/images/backgrounds/page-header-bg.jpg";
import Image from "next/image";
import { Grid } from "@mui/material";
import blogImage from "../../assets/images/blog/blog-page-img-1.jpg";
const Blog = () => {
  return (
    <BlogStyled>
      <div class="page-wrapper">
        <Navbar></Navbar>
        <section className="page-header">
          <div className="page-header-bg">
            <Image
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              src={blogImage}
              // alt={singleService?.data?.title}
            />
          </div>

          <div class="container">
            <div class="page-header__inner">
              <ul class="thm-breadcrumb list-unstyled">
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li>Blog</li>
              </ul>
              <h2>blog posts</h2>
            </div>
          </div>
        </section>
        <section class="blog-page">
          <div class="container">
            {/* <div class="row"> */}
            <Grid container columns={12} spacing={2.5}>
              <Grid item xs={12} md={4}>
                {" "}
                <div
                  class="col-xl-4 col-lg-4 wow fadeInUp"
                  data-wow-delay="200ms"
                >
                  {/* <!--Blog One Single--> */}
                  <div class="blog-one__single">
                    <div class="blog-one__img">
                      <Image src={blogImage} alt="" />
                      <a href="blog-details.html">
                        <span class="blog-one__plus"></span>
                      </a>
                      <div class="blog-one__date">
                        <p>26 aug</p>
                      </div>
                    </div>
                    <div class="blog-content">
                      <ul class="list-unstyled blog-one__meta">
                        <li>
                          <a href="blog-details.html">
                            <i class="far fa-user-circle"></i> By admin
                          </a>
                        </li>
                        <li>
                          <span>/</span>
                        </li>
                        <li>
                          <a href="blog-details.html">
                            <i class="far fa-comments"></i> 2 Comments
                          </a>
                        </li>
                      </ul>
                      <h3 class="blog-one__title">
                        <a href="blog-details.html">
                          How much does a website cost to build
                        </a>
                      </h3>
                      <div class="blog-one__read-btn">
                        <a href="blog-details.html">Read More</a>
                      </div>
                    </div>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} md={4}>
                {" "}
                <div
                  class="col-xl-4 col-lg-4 wow fadeInUp"
                  data-wow-delay="400ms"
                >
                  {/* <!--Blog One Single--> */}
                  <div class="blog-one__single">
                    <div class="blog-one__img">
                      <Image src={blogImage} alt="" />
                      <a href="blog-details.html">
                        <span class="blog-one__plus"></span>
                      </a>
                      <div class="blog-one__date">
                        <p>26 aug</p>
                      </div>
                    </div>
                    <div class="blog-content">
                      <ul class="list-unstyled blog-one__meta">
                        <li>
                          <a href="blog-details.html">
                            <i class="far fa-user-circle"></i> By admin
                          </a>
                        </li>
                        <li>
                          <span>/</span>
                        </li>
                        <li>
                          <a href="blog-details.html">
                            <i class="far fa-comments"></i> 2 Comments
                          </a>
                        </li>
                      </ul>
                      <h3 class="blog-one__title">
                        <a href="blog-details.html">
                          Uniquely enable accurate supply chains
                        </a>
                      </h3>
                      <div class="blog-one__read-btn">
                        <a href="blog-details.html">Read More</a>
                      </div>
                    </div>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} md={4}>
                {" "}
                <div
                  class="col-xl-4 col-lg-4 wow fadeInUp"
                  data-wow-delay="600ms"
                >
                  {/* <!--Blog One Single--> */}
                  <div class="blog-one__single">
                    <div class="blog-one__img">
                      <Image src={blogImage} alt="" />
                      <a href="blog-details.html">
                        <span class="blog-one__plus"></span>
                      </a>
                      <div class="blog-one__date">
                        <p>26 aug</p>
                      </div>
                    </div>
                    <div class="blog-content">
                      <ul class="list-unstyled blog-one__meta">
                        <li>
                          <a href="blog-details.html">
                            <i class="far fa-user-circle"></i> By admin
                          </a>
                        </li>
                        <li>
                          <span>/</span>
                        </li>
                        <li>
                          <a href="blog-details.html">
                            <i class="far fa-comments"></i> 2 Comments
                          </a>
                        </li>
                      </ul>
                      <h3 class="blog-one__title">
                        <a href="blog-details.html">
                          task researched data enterprise process
                        </a>
                      </h3>
                      <div class="blog-one__read-btn">
                        <a href="blog-details.html">Read More</a>
                      </div>
                    </div>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} md={4}>
                {" "}
                <div
                  class="col-xl-4 col-lg-4 wow fadeInUp"
                  data-wow-delay="800ms"
                >
                  {/* <!--Blog One Single--> */}
                  <div class="blog-one__single">
                    <div class="blog-one__img">
                      <Image src={blogImage} alt="" />
                      <a href="blog-details.html">
                        <span class="blog-one__plus"></span>
                      </a>
                      <div class="blog-one__date">
                        <p>26 aug</p>
                      </div>
                    </div>
                    <div class="blog-content">
                      <ul class="list-unstyled blog-one__meta">
                        <li>
                          <a href="blog-details.html">
                            <i class="far fa-user-circle"></i> By admin
                          </a>
                        </li>
                        <li>
                          <span>/</span>
                        </li>
                        <li>
                          <a href="blog-details.html">
                            <i class="far fa-comments"></i> 2 Comments
                          </a>
                        </li>
                      </ul>
                      <h3 class="blog-one__title">
                        <a href="blog-details.html">
                          utilize enterprise experiences via 24/7 markets.
                        </a>
                      </h3>
                      <div class="blog-one__read-btn">
                        <a href="blog-details.html">Read More</a>
                      </div>
                    </div>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} md={4}>
                {" "}
                <div
                  class="col-xl-4 col-lg-4 wow fadeInUp"
                  data-wow-delay="1000ms"
                >
                  {/* <!--Blog One Single--> */}
                  <div class="blog-one__single">
                    <div class="blog-one__img">
                      <Image src={blogImage} alt="" />
                      <a href="blog-details.html">
                        <span class="blog-one__plus"></span>
                      </a>
                      <div class="blog-one__date">
                        <p>26 aug</p>
                      </div>
                    </div>
                    <div class="blog-content">
                      <ul class="list-unstyled blog-one__meta">
                        <li>
                          <a href="blog-details.html">
                            <i class="far fa-user-circle"></i> By admin
                          </a>
                        </li>
                        <li>
                          <span>/</span>
                        </li>
                        <li>
                          <a href="blog-details.html">
                            <i class="far fa-comments"></i> 2 Comments
                          </a>
                        </li>
                      </ul>
                      <h3 class="blog-one__title">
                        <a href="blog-details.html">
                          actualize front-end processes with effective
                        </a>
                      </h3>
                      <div class="blog-one__read-btn">
                        <a href="blog-details.html">Read More</a>
                      </div>
                    </div>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} md={4}>
                {" "}
                <div
                  class="col-xl-4 col-lg-4 wow fadeInUp"
                  data-wow-delay="1200ms"
                >
                  {/* <!--Blog One Single--> */}
                  <div class="blog-one__single">
                    <div class="blog-one__img">
                      <Image src={blogImage} alt="" />
                      <a href="blog-details.html">
                        <span class="blog-one__plus"></span>
                      </a>
                      <div class="blog-one__date">
                        <p>26 aug</p>
                      </div>
                    </div>
                    <div class="blog-content">
                      <ul class="list-unstyled blog-one__meta">
                        <li>
                          <a href="blog-details.html">
                            <i class="far fa-user-circle"></i> By admin
                          </a>
                        </li>
                        <li>
                          <span>/</span>
                        </li>
                        <li>
                          <a href="blog-details.html">
                            <i class="far fa-comments"></i> 2 Comments
                          </a>
                        </li>
                      </ul>
                      <h3 class="blog-one__title">
                        <a href="blog-details.html">
                          array of niche markets through robust products
                        </a>
                      </h3>
                      <div class="blog-one__read-btn">
                        <a href="blog-details.html">Read More</a>
                      </div>
                    </div>
                  </div>
                </div>
              </Grid>
            </Grid>
            {/* </div> */}
            <div class="blog-sidebar__load-more text-center">
              <a
                href="blog-details.html"
                class="thm-btn blog-sidebar__load-more-btn"
              >
                Load more posts
              </a>
            </div>
          </div>
        </section>
      </div>
    </BlogStyled>
  );
};

export default Blog;
