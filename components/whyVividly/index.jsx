import React from "react";
import { WhyVividlyStyle } from "./style";
import FAQ from "../Faq";
import { service_20_why } from "../dynamicArrays/services";

const WhyVividly = () => {
  const [faqs, setFaqs] = React.useState(service_20_why);
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
    <WhyVividlyStyle>
      <div className="faqs">
        {/* <h3 className="service-details__benefits-title">Why This Service</h3> */}
        {faqs.map((faq, index) => (
          <FAQ faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
        ))}
      </div>
    </WhyVividlyStyle>
  );
};

export default WhyVividly;
