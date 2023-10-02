import React from "react";
import FAQ from "../Faq";
import { Grid } from "@mui/material";
import { FaqsStyle } from "./style";
import testimonialTwo from "../../assets/images/shapes/testimonial-two-shape.png";
import Image from "next/image";
import whyImg1 from "../../assets/images/FAQs/compressed/Large Background Photo.webp";
import whyImg2 from "../../assets/images/FAQs/compressed/Small Background Photo.webp";
import { Slide } from "react-awesome-reveal";

const Faqs = () => {
  let why = [
    {
      question: "Strategic Excellence",
      answer:
        "Our team doesn't just execute; we strategize. Our meticulous planning ensures your efforts are aligned with your business goals for maximum impact.",
      open: true,
    },
    {
      question: "Tailored Approach",
      answer:
        "We don't believe in one-size-fits-all. Every solution is custom crafted to fit your unique needs, ensuring a precise fit for your brand.",
      open: false,
    },
    {
      question: "Data-Backed Decisions",
      answer:
        "Our strategies are rooted in data insights, translating into well-informed decisions that lead to measurable results",
      open: false,
    },
    {
      question: "Creative Brilliance",
      answer:
        "Our blend of creativity and innovation generates standout solutions that resonate with modern audiences.",
      open: false,
    },
    {
      question: "Collaborative Partnership",
      answer:
        "We're not just service providers; we're partners invested in your success, working together to achieve your vision",
      open: false,
    },
    {
      question: "Industry Expertise",
      answer:
        "With a diverse team of specialists, we bring a wealth of industry knowledge to the table, ensuring your strategies are informed and effective.",
      open: false,
    },
    {
      question: "Proven Track Record",
      answer:
        "Our past successes are a testament to our capabilities. We've consistently delivered tangible results that make a difference",
      open: false,
    },
    {
      question: "Customer-Centric Focus",
      answer:
        "Your satisfaction is our priority. We listen, adapt, and evolve our strategies based on your feedback and evolving needs.",
      open: false,
    },
  ];
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
  return (
    <FaqsStyle id="faqs">
      {/* <div
        class="testimonial-two-shape wow slideInRight"
        data-wow-delay="100ms"
        data-wow-duration="2500ms"
      >
        <Image src={testimonialTwo} alt="" />
      </div> */}
      <div className="container">
        <Grid container columns={12}>
          <Grid item lg={6}>
            {" "}
            <div class="col-xl-6">
              <div class="why-choose-one__right">
                <div class="section-title text-left">
                  <span class="section-title__tagline">
                    {" "}
                    Frequently asked questions
                  </span>
                  <h2 class="section-title__title">
                    We do more then ever platform
                  </h2>
                </div>
                <p class="why-choose-one__right-text">
                  There are many variations of passages of lorem ipsum
                  available, but the majority have suffered in some form, by
                  injected free text not humour.
                </p>
                <div class="why-choose-one__content">
                  <div class="why-choose-one__content-img">
                    <Image src={whyImg2} alt="" />
                  </div>
                  <div class="why-choose-one__content-list">
                    <ul class="list-unstyled why-choose-one__points">
                      <li>
                        <div class="icon">
                          <span class="icon-check"></span>
                        </div>
                        <div class="text">
                          <p>Nsectetur cing elit</p>
                        </div>
                      </li>
                      <li>
                        <div class="icon">
                          <span class="icon-check"></span>
                        </div>
                        <div class="text">
                          <p>Suspe ndisse suscip sagittis leo</p>
                        </div>
                      </li>
                      <li>
                        <div class="icon">
                          <span class="icon-check"></span>
                        </div>
                        <div class="text">
                          <p>Entum estib dignissim posuere</p>
                        </div>
                      </li>
                      <li>
                        <div class="icon">
                          <span class="icon-check"></span>
                        </div>
                        <div class="text">
                          <p>If you are going to use a pass</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* <h3 className="section-title__tagline">
                  {" "}
                  Frequently asked questions
                </h3> */}
                <div className="faqs">
                  {faqs.map((faq, index) => (
                    <FAQ
                      faq={faq}
                      index={index}
                      key={index}
                      toggleFAQ={toggleFAQ}
                    />
                  ))}
                </div>
              </div>
            </div>
          </Grid>
          <Grid item lg={6}>
            {" "}
            <Slide direction="right">
              <div
                class="col-xl-6 wow slideInLeft"
                data-wow-delay="100ms"
                data-wow-duration="2500ms"
              >
                <div class="why-choose-one__left">
                  <div class="why-choose-one__img">
                    <Image src={whyImg1} alt="" />
                  </div>
                  <div class="why-choose-one-box-1"></div>
                  <div class="why-choose-one-box-2"></div>
                  <div class="why-choose-one-box-3"></div>
                </div>
              </div>
            </Slide>
          </Grid>
        </Grid>
      </div>
    </FaqsStyle>
  );
};

export default Faqs;
