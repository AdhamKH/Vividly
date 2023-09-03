import { styled } from "styled-components";

export const WhyVividlyStyle = styled.div`
  width: 100%;
  /* Faqs */
  .faqs {
    width: 100%;
    max-width: 768px;
    margin: 0 auto;
    /* padding: 15px; */
  }

  .faqs .faq {
    margin: 15px 0;
    padding: 15px;
    background: #fff;
    /* border-radius: 10px; */
    /* box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1); */
    padding: 1rem 1rem;
    border: 1px solid var(--mibooz-bdr-color);
  }

  .faqs .faq .faq-question {
    position: relative;
    font-size: 20px;
    padding-right: 80px;
    transition: all 0.4s ease;
  }

  .faqs .faq .faq-question::after {
    /* content: "+"; */
    position: absolute;
    top: 50%;
    right: 0px;
    transform: translateY(-50%);
    width: 30px;
    height: 30px;
    transition: all 0.2s ease;
  }

  .faqs .faq .faq-answer {
    opacity: 0;
    max-height: 0;
    overflow: hidden;
    transition: all 0.2s ease;
  }

  .faqs .faq.open .faq-question {
    /* margin-bottom: 15px; */
  }

  /* .faqs .faq.open .faq-question::after {
    content: "-";
  } */

  .faqs .faq.open .faq-answer {
    max-height: 1000px;
    opacity: 1;
  }
  .q_btn {
    display: flex;
  }
`;
