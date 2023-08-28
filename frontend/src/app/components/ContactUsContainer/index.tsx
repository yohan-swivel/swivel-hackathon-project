"use client";
import ContactUsCard, { ContactUsCardProps } from "../ContactUsCard";
import FormBuilder, { FormBuilderProps } from "../FormBuilder";
import HeaderText from "../HeaderText";

interface ContactUsContainerProps {
  id: number;
  __component: string;
  dataScrollTo: string;
  mainHeaderText: string;
  subHeaderText: string;
  contactUsForm: FormBuilderProps;
  contactUsCard: ContactUsCardProps;
}
const ContactUsContainer: React.FC<{ data: ContactUsContainerProps }> = ({
  data,
}) => {
  return (
    <>
      <div
        className="w-[100%] flex flex-col items-center justify-start gap-[80px] text-center text-17xl text-white font-para-medium"
        data-scroll-to={data.dataScrollTo}
      >
        <HeaderText headerText={data.mainHeaderText} />
        <FormBuilder
          {...data.contactUsForm}
          subHeaderText={data.subHeaderText}
        />
        <ContactUsCard {...data.contactUsCard} />
      </div>
    </>
  );
};

export default ContactUsContainer;
