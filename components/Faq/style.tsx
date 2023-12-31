import { styled } from "styled-components";

export const FaqStyle = styled.div`
  .faqs {
    width: 100%;
    max-width: 768px;
    margin: 0 auto;
    padding: 15px;
    .title {
      font-size: 26px;
      text-transform: uppercase;
      line-height: 36px;
      margin-bottom: 24px;
    }
  }

  .faqs .faq {
    margin: 15px;
    padding: 15px;
    background: #fff;
    border-radius: 10px;
    /* box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1); */
    border: 1px solid var(--mibooz-bdr-color);
  }

  .faqs .faq .faq-question {
    position: relative;
    font-size: 20px;
    padding-right: 80px;
    transition: all 0.8s cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  .faqs .faq .faq-question::after {
    /* content: "+"; */
    position: absolute;
    top: 50%;
    right: 0px;
    transform: translateY(-50%);
    width: 30px;
    height: 30px;
    transition: all 0.4s ease;
  }

  .faqs .faq .faq-answer {
    opacity: 0;
    max-height: 0;
    overflow: hidden;
    transition: all 0.4s ease;
  }

  .faqs .faq.open .faq-question {
    /* margin-bottom: 15px; */
  }

  .faqs .faq.open .faq-question::after {
    /* content: "-"; */
  }

  .faqs .faq.open .faq-answer {
    max-height: 1000px;
    opacity: 1;
  }
  .q_btn {
    display: flex;
    align-items: center;
    justify-content: space-between;
    button {
      cursor: pointer;
      background: transparent;
      svg {
        color: var(--mibooz-primary);
      }
    }
  }
`;
