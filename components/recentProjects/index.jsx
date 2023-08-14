import React from "react";
import { RecentStyle } from "./RecentStyle";
import { Grid } from "@mui/material";
import img from "../../assets/images/resources/project-one-img-1.jpg";
import img2 from "../../assets/images/resources/project-one-img-2.jpg";
import img3 from "../../assets/images/resources/project-one-img-3.jpg";
import img4 from "../../assets/images/resources/project-one-img-4.jpg";
import img5 from "../../assets/images/resources/project-one-img-5.jpg";
import img6 from "../../assets/images/resources/project-one-img-6.jpg";
import Image from "next/image";
const RecentProjects = () => {
  return (
    <RecentStyle>
      <section className="project-one">
        <div className="container">
          <div className="section-title text-center">
            <span className="section-title__tagline">recent projects</span>
            <h2 className="section-title__title">work showcase</h2>
          </div>
          <Grid
            container
            columns={12}
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={12}>
              <ul className="project-filter style1 post-filter has-dynamic-filters-counter list-unstyled">
                <li data-filter=".filter-item" className="active">
                  <span className="filter-text">All</span>
                </li>
                <li data-filter=".bra">
                  <span className="filter-text">Branding</span>
                </li>
                <li data-filter=".photo">
                  <span className="filter-text">Photography</span>
                </li>
                <li data-filter=".web">
                  <span className="filter-text">Web Design</span>
                </li>
                <li data-filter=".app">
                  <span className="filter-text last-pd-none">Apps</span>
                </li>
              </ul>
            </Grid>
          </Grid>
          <div className="filter-layout masonary-layout">
            <Grid container columns={12} spacing={5}>
              <Grid item lg={4} md={6}>
                <div className="filter-item bra photo web">
                  <div className="project-one__single">
                    <div className="project-one__img">
                      <Image src={img} alt="" />
                      <div className="project-one__hover">
                        <p className="project-one__tagline">Graphic</p>
                        <h3 className="project-one__title">
                          <a href="project-details.html">Fimlor Experience</a>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </Grid>
              <Grid item lg={4} md={6}>
                {" "}
                <div className="filter-item bra app web">
                  {/* <!--Portfolio One Single--> */}
                  <div className="project-one__single">
                    <div className="project-one__img">
                      <Image src={img2} alt="" />

                      <div className="project-one__hover">
                        <p className="project-one__tagline">Graphic</p>
                        <h3 className="project-one__title">
                          <a href="project-details.html">Fimlor Experience</a>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </Grid>
              <Grid item lg={4} md={6}>
                {" "}
                <div className="filter-item bra web">
                  {/* <!--Portfolio One Single--> */}
                  <div className="project-one__single">
                    <div className="project-one__img">
                      <Image src={img3} alt="" />

                      <div className="project-one__hover">
                        <p className="project-one__tagline">Graphic</p>
                        <h3 className="project-one__title">
                          <a href="project-details.html">Fimlor Experience</a>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </Grid>
              <Grid item lg={4} md={6}>
                {" "}
                <div className="filter-item bra photo web">
                  {/* <!--Portfolio One Single--> */}
                  <div className="project-one__single">
                    <div className="project-one__img">
                      <Image src={img4} alt="" />

                      <div className="project-one__hover">
                        <p className="project-one__tagline">Graphic</p>
                        <h3 className="project-one__title">
                          <a href="project-details.html">Fimlor Experience</a>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </Grid>
              <Grid item lg={4} md={6}>
                {" "}
                <div className="filter-item bra web">
                  {/* <!--Portfolio One Single--> */}
                  <div className="project-one__single">
                    <div className="project-one__img">
                      <Image src={img5} alt="" />

                      <div className="project-one__hover">
                        <p className="project-one__tagline">Graphic</p>
                        <h3 className="project-one__title">
                          <a href="project-details.html">Fimlor Experience</a>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </Grid>
              <Grid item lg={4} md={6}>
                {" "}
                <div className="filter-item app photo">
                  {/* <!--Portfolio One Single--> */}
                  <div className="project-one__single">
                    <div className="project-one__img">
                      <Image src={img6} alt="" />

                      <div className="project-one__hover">
                        <p className="project-one__tagline">Graphic</p>
                        <h3 className="project-one__title">
                          <a href="project-details.html">Fimlor Experience</a>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
      </section>
    </RecentStyle>
  );
};

export default RecentProjects;
