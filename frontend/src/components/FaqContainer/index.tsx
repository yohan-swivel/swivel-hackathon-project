"use client";
import React, { useState } from "react";
import HeaderText from "../HeaderText";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";

interface FAQType {
  id: number;
  question: string;
  answer: string;
}

interface FaqContainerProps {
  id: number;
  __component: string;
  headerText: string;
  dataScrollTo: string;
  faqs: Array<FAQType>;
}

const FAQItem: React.FC<FAQType> = (props) => {
  const [activeAccordElement, setActiveAccordElement] =
    useState<boolean>(false);
  return (
    <div className="faq-container">
      <div className="faq_item">
        <p>{props.question}</p>
        <div
          className="faq_item_icon"
          onClick={() =>
            activeAccordElement
              ? setActiveAccordElement(false)
              : setActiveAccordElement(true)
          }
        >
          {activeAccordElement ? (
            <AiOutlineMinusCircle />
          ) : (
            <AiOutlinePlusCircle />
          )}
        </div>
      </div>
      <div
        className={
          activeAccordElement === true ? "faq_item_show" : "faq_item_hide"
        }
      >
        <p className="faq_item_description">{props.answer}</p>
      </div>
    </div>
  );
};

const FaqContainer: React.FC<{ data: FaqContainerProps }> = ({ data }) => {
  return (
    <div className="container_inner">
      <div className="section" id={data.dataScrollTo}>
        <HeaderText headerText={data.headerText} />
        <div className="faq_row">
          {data.faqs &&
            data.faqs.map((faq: FAQType, index: number) => (
              <FAQItem key={index} {...faq} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default FaqContainer;
