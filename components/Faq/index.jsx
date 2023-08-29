import React from "react";
import { FaqStyle } from "./style";
import { MyAiOutlinePlus, MyBiMinus } from "../Common/icons";

const FAQ = ({ faq, index, toggleFAQ }) => {
  return (
    <FaqStyle>
      <div className={"faq " + (faq.open ? "open" : "")} key={index}>
        <div className="q_btn">
          {" "}
          <div className="faq-question">
            {faq.question}
            {faq.open ? <> :</> : <> ...</>}
          </div>
          {faq.open ? (
            <button onClick={() => toggleFAQ(index)}>
              <MyBiMinus />
            </button>
          ) : (
            <button onClick={() => toggleFAQ(index)}>
              {" "}
              <MyAiOutlinePlus></MyAiOutlinePlus>
            </button>
          )}
        </div>
        <div className="faq-answer">{faq.answer}</div>
      </div>
    </FaqStyle>
  );
};

export default FAQ;
