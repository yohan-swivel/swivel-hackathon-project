"use client";
import React, { useState } from "react";
import HeaderText from "../HeaderText";

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
    <>
      <div
        className={`self-stretch w-[1060px] mx-auto  bg-glass-bg items-center justify-between text-left text-base text-white font-para-medium p-[22px] box-border duration-500 group ${
          activeAccordElement === true ? "is-active bg-glass-bg" : ""
        }`}
      >
        <div className="flex items-center">
          <div className="w-full group-[.is-active]:font-bold">
            {props.question}
          </div>
          <div
            className="text-xl rotate-90 cursor-pointer duration-500 group-[.is-active]:rotate-[270deg]"
            onClick={() =>
              activeAccordElement
                ? setActiveAccordElement(false)
                : setActiveAccordElement(true)
            }
          >
            {">"}
          </div>
        </div>
        <div
          className={`overflow-hidden duration-500 ${
            activeAccordElement === true ? "h-auto pt-4" : "h-0"
          }  group-[.is-active]:h-auto`}
        >
          {props.answer}
        </div>
      </div>
    </>
  );
};

const FaqContainer: React.FC<{ data: FaqContainerProps }> = ({ data }) => {
  return (
    <>
      <div
        className="px-20 flex flex-col py-2.5 box-border items-center justify-center gap-[20px]"
        data-scroll-to={data.dataScrollTo}
      >
        <div className="pb-10">
          
          <HeaderText headerText={data.headerText} />
        </div>
        {data.faqs &&
          data.faqs.map((faq: FAQType, index: number) => (
            <FAQItem key={index} {...faq} />
          ))}
      </div>
    </>
  );
};

export default FaqContainer;
