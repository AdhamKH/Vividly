"use client";
import Navbar from "@/components/navBar";
import React, { Suspense, use } from "react";
import pageBackground from "../../assets/images/backgrounds/page-header-bg.jpg";
import helpBackground from "../../assets/images/backgrounds/service-details-need-help-bg.jpg";
import serviceDetails from "../../assets/images/resources/service-details-img-2.jpg";
import serviceDetailsBenefits from "../../assets/images/SERVICES/SEO/compressed/Benefits.webp";
import brandDetailsBenefits from "../../assets/images/SERVICES/Brand Strategy and Development/compressed/Benefits.webp";
import Image from "next/image";
import Footer from "@/components/footer";
import { Grid } from "@mui/material";
import FAQ from "@/components/Faq";
import {
  MyAiFillCheckCircle,
  MyCgArrowLongRight,
} from "@/components/Common/icons";
import {
  service_20_benefits,
  service_20_why,
  service_21_benefits,
  service_21_why,
  service_22_benefits,
  service_22_why,
  service_23_benefits,
  service_23_why,
  service_24_benefits,
  service_24_why,
  service_25_benefits,
  service_25_why,
  service_26_benefits,
  service_26_why,
  service_27_benefits,
  service_27_why,
  service_28_benefits,
  service_28_why,
} from "@/components/dynamicArrays/services";
import Link from "next/link";
import { SingleServiceStyle } from "./singleServiceStyle";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import useSWR from "swr";
import digitalMarketingImage from "../../assets/images/SERVICES/DIGITAL MARKETING/compressed/Benefits Photo for Digital Marketing.webp";
import creativeDetailsBenefits from "../../assets/images/SERVICES/Creative Design and Content Creation/compressed/Benefits.webp";
import webDetailsBenefits from "../../assets/images/SERVICES/Web Development and Optimization/compressed/Benifits.webp";
import arBenefits from "../../assets/images/SERVICES/AR Lenses for Instagram and Snapchat/compressed/Benefits Photo.webp";
import {
  background_id_20,
  background_id_21,
  background_id_22,
  background_id_23,
  background_id_24,
  background_id_25,
} from "./base64Images";
function makeQueryClient() {
  const fetchMap = new Map();
  return function queryClient(name, query) {
    if (!fetchMap.has(name)) {
      fetchMap.set(name, query());
    }
    return fetchMap.get(name);
  };
}

const queryClient = makeQueryClient();

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function UserPage() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  let background_img_base64;

  console.log("searchParams", searchParams);
  console.log("useSearchParams", useSearchParams);
  console.log("pathname", pathname);
  console.log("id", id);

  // const singleService = use(
  //   queryClient("singleService", () =>
  //     fetch(`https://api.adgrouptech.com/api/v1/services/${id}`, {
  //       cache: "no-store",
  //     }).then((res) => res.json())
  //   )
  // );
  const { data: singleService, error } = useSWR(
    `https://api.adgrouptech.com/api/v1/services/${id}`,
    fetcher
  );
  // const { data: singleService, error } = useSWR(
  //   `https://api.adgrouptech.com/api/v1/services/${id}`,
  //   fetcher
  // );

  const allServices = use(
    queryClient("allServices", () =>
      fetch(`https://api.adgrouptech.com/api/v1/services/company/10`).then(
        (res) => res.json()
      )
    )
  );
  let why = [];
  let benefits = [];
  switch (id) {
    case "20":
      why = service_20_why;
      benefits = service_20_benefits;
      background_img_base64 = background_id_20;
      break;
    case "21":
      why = service_21_why;
      benefits = service_21_benefits;
      background_img_base64 = background_id_21;
    case "22":
      why = service_22_why;
      benefits = service_22_benefits;
      background_img_base64 = background_id_22;
    case "23":
      why = service_23_why;
      benefits = service_23_benefits;
      background_img_base64 = background_id_23;
    case "24":
      why = service_24_why;
      benefits = service_24_benefits;
      background_img_base64 = background_id_24;
    case "25":
      why = service_25_why;
      benefits = service_25_benefits;
      background_img_base64 = background_id_25;
    case "26":
      why = service_26_why;
      benefits = service_26_benefits;
      background_img_base64 = background_id_25;
    case "27":
      why = service_27_why;
      benefits = service_27_benefits;
      background_img_base64 = background_id_25;
    case "28":
      why = service_28_why;
      benefits = service_28_benefits;
      background_img_base64 = background_id_25;

    default:
      break;
  }
  const [faqs, setFaqs] = React.useState(why);
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
  benefits.map((e) => {
    console.log("E", e.split(":")[0]);
  });

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
              src={singleService?.data?.background_path}
              alt={singleService?.data?.title}
              // placeholder="blur"
              blurDataURL={background_img_base64}
            />
          </div>

          <div className="container">
            <div className="page-header__inner">
              <ul className="thm-breadcrumb list-unstyled">
                {/* {allServices.data.length > 0 ? (
                  <>
                    {" "}
                    {allServices.data.map((service) => {
                      return (
                        <li>
                          <Link href={`single-service/${service?.id}`}>
                            {service?.title}
                          </Link>
                        </li>
                      );
                    })}
                  </>
                ) : (
                  <></>
                )} */}
              </ul>
              <h2>{singleService?.data?.title}</h2>
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
                        {allServices?.data?.map((service) => {
                          return (
                            <li className={service?.id == id ? "current" : ""}>
                              <Link
                                href={{
                                  pathname: "/service",
                                  query: { id: `${service?.id}` },
                                }}
                              >
                                <p> {service?.title} </p>
                                <span>
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
                        {/* <p>Call us Anytime</p> */}
                        <Link href="/contact-us">Contact us</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </Grid>
              <Grid item lg={8} xs={12}>
                <div className="col-xl-8 col-lg-7">
                  <div className="service-details__right">
                    <div className="service-details__img">
                      <Image
                        src={singleService?.data?.thumbnail_path}
                        alt={`${singleService?.data?.title} image`}
                        width="473"
                        height="473"
                      />
                    </div>
                    <div className="service-details__content">
                      <h3 className="service-details__title">
                        {singleService?.data?.title}
                      </h3>
                      <p className="service-details__text">
                        {singleService?.data?.description}
                      </p>
                    </div>
                    <ul className="quality_fast">
                      <li>
                        <h4>
                          <span>01-</span>high quality project
                        </h4>
                        <div className="service-details__points-count"></div>
                      </li>
                      <li>
                        <h4>
                          <span>02-</span>Fast & relaible service
                        </h4>
                        <div className="service-details__points-count"></div>
                      </li>
                    </ul>
                    <div className="service-details__benefits">
                      {/* <div className="row"> */}

                      {/* </div> */}
                    </div>
                    <div className="service-details__benefits">
                      {/* <div className="row"> */}
                      <Grid container columns={12} spacing={2}>
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
                                        <span className="">
                                          {" "}
                                          <MyAiFillCheckCircle />
                                        </span>
                                      </div>
                                      <div className="text">
                                        <span
                                          style={{
                                            fontWeight: "700",
                                            fontSize: "1.2rem",
                                          }}
                                        >
                                          {e.split(":")[0]} :
                                        </span>{" "}
                                        <span
                                          style={{
                                            fontSize: "1.0rem",
                                          }}
                                        >
                                          {e.split(":")[1]}
                                        </span>
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
                              {id === "21" ? (
                                <>
                                  <Image src={digitalMarketingImage} alt="" />
                                </>
                              ) : (
                                <> </>
                              )}
                              {id === "22" ? (
                                <>
                                  <Image src={serviceDetailsBenefits} alt="" />
                                </>
                              ) : (
                                <> </>
                              )}
                              {id === "20" ? (
                                <>
                                  <Image src={brandDetailsBenefits} alt="" />
                                </>
                              ) : (
                                <> </>
                              )}
                              {id === "23" ? (
                                <>
                                  <Image src={creativeDetailsBenefits} alt="" />
                                </>
                              ) : (
                                <> </>
                              )}
                              {id === "25" ? (
                                <>
                                  <Image src={webDetailsBenefits} alt="" />
                                </>
                              ) : (
                                <> </>
                              )}
                              {id === "24" ? (
                                <>
                                  <Image src={arBenefits} alt="" />
                                </>
                              ) : (
                                <> </>
                              )}
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
                        <h3 className="service-details__benefits-title">
                          Why {singleService?.data?.title}
                        </h3>
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
}
