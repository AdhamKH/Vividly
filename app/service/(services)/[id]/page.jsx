"use client";
import Navbar from "@/components/navBar";
import React, { use } from "react";
import pageBackground from "../../../../assets/images/backgrounds/page-header-bg.jpg";
import helpBackground from "../../../../assets/images/backgrounds/service-details-need-help-bg.jpg";
import serviceDetails from "../../../../assets/images/resources/service-details-img-2.jpg";
import serviceDetailsBenefits from "../../../../assets/images/resources/service-details__benefits-img.jpg";
import Image from "next/image";
import Footer from "@/components/footer";
import { Grid } from "@mui/material";
import FAQ from "@/components/Faq";
import {
  MyAiFillCheckCircle,
  MyCgArrowLongRight,
} from "@/components/Common/icons";
import getService from "@/lib/getServiceData";
import {
  service_20_benefits,
  service_20_why,
} from "@/components/dynamicArrays/services";
import Link from "next/link";
import { SingleServiceStyle } from "../../singleServiceStyle";

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
const SingleService = ({ params }) => {
  const data = use(dataPromis);
  let allServices = data?.data;
  const [singleService, setSingleService] = React.useState({});
  const [faqs, setFaqs] = React.useState([
    {
      question: "How many programmers does it take to screw a lightbulb?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra lorem eu dolor rhoncus, at scelerisque ligula gravida. Sed porta id mi sit amet convallis. Etiam iaculis massa sit amet lacus blandit sodales. Nulla ultrices velit a diam placerat congue. Pellentesque iaculis, ipsum quis eleifend dapibus, est dui eleifend ante, quis fermentum mi ligula quis nisl. Ut et ex dui. Integer id venenatis quam.",
      open: true,
    },
    {
      question: "Who is the most awesome person?",
      answer: "You! The viewer!",
      open: false,
    },
    {
      question:
        "How many questions does it take to makes a succesful FAQ Page?",
      answer: "This many!",
      open: false,
    },
  ]);
  const toggleFAQ = (index) => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };
  React.useEffect(() => {
    let request = async () => {
      await fetch(`https://api.adgrouptech.com/api/v1/services/${params.id}`)
        .then((res) => res.json())
        .then((data) => setSingleService(data.data));
    };
    request();
  }, []);
  let benefits = [];
  let why = [];
  switch (params.id) {
    case "20":
      benefits = service_20_benefits;
      why = service_20_why;
      break;

    default:
      break;
  }
  console.log("singleService", singleService);
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
              {/* <ul className="thm-breadcrumb list-unstyled">
                {allServices?.map((service) => {
                  return (
                    <li>
                      <Link href={`single-service/${service?.id}`}>
                        {service?.title}
                      </Link>
                    </li>
                  );
                })}
              </ul> */}
              <h2>{singleService?.title}</h2>
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
                        {allServices?.map((service) => {
                          return (
                            <li>
                              <Link href={`service/${service?.id}`}>
                                <p> {service?.title} </p>
                                <span className="icon-arrow-right">
                                  <MyCgArrowLongRight />
                                </span>
                              </Link>
                            </li>
                          );
                        })}
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
                        {singleService?.title}
                      </h3>
                      <p className="service-details__text">
                        {singleService?.description}
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
                                why choose us
                              </h3>
                              {/* <p className="service-details__benefits-text">
                                Duis aute irure dolor in simply free text exist
                                on reprehende voluptate velit esse cillum.
                              </p> */}
                              <ul className="list-unstyled service-details__benefits-list">
                                {why?.map((e, index) => {
                                  return (
                                    <li key={index}>
                                      <div className="icon">
                                        <span className="icon-check">
                                          {" "}
                                          <MyAiFillCheckCircle />
                                        </span>
                                      </div>
                                      <div className="text">
                                        <p>{e}</p>
                                      </div>
                                    </li>
                                  );
                                })}
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
                    <div className="service-details__benefits">
                      {/* <div className="row"> */}
                      <Grid container columns={12}>
                        <Grid item xs={12} md={6}>
                          <div className="col-xl-6">
                            <div className="service-details__benefits-content">
                              <h3 className="service-details__benefits-title">
                                Our Benefits
                              </h3>
                              {/* <p className="service-details__benefits-text">
                                Duis aute irure dolor in simply free text exist
                                on reprehende voluptate velit esse cillum.
                              </p> */}
                              <ul className="list-unstyled service-details__benefits-list">
                                {benefits?.map((e, index) => {
                                  return (
                                    <li key={index}>
                                      <div className="icon">
                                        <span className="icon-check">
                                          {" "}
                                          <MyAiFillCheckCircle />
                                        </span>
                                      </div>
                                      <div className="text">
                                        <p>{e}</p>
                                      </div>
                                    </li>
                                  );
                                })}
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
                      {/* <div
                        className="accrodion-grp"
                        // data-grp-name="faq-one-accrodion"
                      > */}
                      <div className="faqs">
                        {faqs.map((faq, index) => (
                          <FAQ
                            faq={faq}
                            index={index}
                            key={index}
                            toggleFAQ={toggleFAQ}
                          />
                        ))}
                      </div>{" "}
                    </div>
                  </div>
                </div>
                {/* </div> */}
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
