"use client";
import React, { use } from "react";
import mainSliderPadge from "../../assets/images/shapes/services-one-shape.png";
import { Grid } from "@mui/material";
import Image from "next/image";
import { ServicesStyle } from "./ServicesStyle";
import Link from "next/link";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import DataFetching from "../Common/dataFetching";
import dataFetching from "../Common/dataFetching";
// import getAllservices from "@/lib/getAllservices";
const fetchingData = async () => {
  try {
    const res = await fetch(
      "https://api.adgrouptech.com/api/v1/services/company/10"
    );
    return res.json();
  } catch (e) {
    return e;
  }
};
const dataPromis = fetchingData();
const OurServices = () => {
  const data = use(dataPromis);
  let allServices = data?.data;
  let newAllService = allServices.map((service) => ({
    id: service.id.toString(),
    title: service.title.toString(),
  }));
  console.log("newAllService", newAllService);
  console.log("allServices", allServices);
  return (
    <ServicesStyle id="services">
      {/* <ParallaxProvider> */}
      <section className="services-one">
        {" "}
        <div className="services-one-shape">
          {/* <Image
              src={mainSliderPadge}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            /> */}
        </div>
        <div className="container">
          <div className="services-one__top">
            {/* <div className="row"> */}
            <Grid container columns={12}>
              <Grid item xs={12} md={6}>
                {" "}
                {/* <div className="col-xl-7 col-lg-6"> */}
                <div className="services-one__top-left">
                  <div className="section-title text-left">
                    <span className="section-title__tagline">Our Services</span>
                    <h2 className="section-title__title">
                      We Shape the <br />
                      Perfect solution
                    </h2>
                  </div>
                  {/* </div> */}
                </div>
              </Grid>
              <Grid item xs={12} md={6}>
                {/* <div className="col-xl-5 col-lg-6"> */}
                <div className="services-one__top-right">
                  <p className="services-one__top-text">
                    We are committed to providing our customers with not service
                    while offering our emod tempor incididunt ut labore
                    employees the best training.
                  </p>
                  {/* </div> */}
                </div>{" "}
              </Grid>
            </Grid>

            {/* </div> */}
          </div>
          <div className="services-one__bottom">
            <Grid
              container
              columns={12}
              spacing={4}
              justifyItems="stretch"
              justifySelf="stretch"
            >
              {newAllService?.map((service, index) => {
                return (
                  <Grid item xs={12} md={6} lg={4}>
                    <div
                      className="col-xl-4 col-lg-4 wow fadeInUp"
                      // data-wow-delay="100ms"
                    >
                      {/* <!--Services One Single--> */}
                      <div className="services-one__single">
                        <h3 className="services-one__title">
                          <Link href={`/service/${service?.id}`}>
                            {service?.title}
                          </Link>
                        </h3>
                        <div className="services-one__icon">
                          <span className="icon-online-shopping"></span>
                        </div>
                        <div className="services-one__count"></div>
                      </div>
                    </div>
                  </Grid>
                );
              })}{" "}
            </Grid>
          </div>
        </div>
      </section>
      {/* </ParallaxProvider> */}
    </ServicesStyle>
  );
};

export default OurServices;
