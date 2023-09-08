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
    <div className="container_inner">
      <div className="section" id={data.dataScrollTo}>
        <HeaderText headerText={data.mainHeaderText} />
        <FormBuilder
          {...data.contactUsForm}
          subHeaderText={data.subHeaderText}
        />
        <ContactUsCard {...data.contactUsCard} />
      </div>
    </div>
  );
};

export default ContactUsContainer;
