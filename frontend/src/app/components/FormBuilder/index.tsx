import GlitterButton from "../GlitterButton";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import React, { FormEvent, useEffect, useRef, useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { getStrapiURL } from "@/app/utils/api-helpers";

interface FeildType {
  id?: number;
  feildName: string;
  placeholder: string;
  required: boolean;
  type: "text" | "number" | "email" | "text-area" | "phone";
  position: "Horizontal" | "Vertical";
  label: string;
}

export interface FormBuilderProps {
  id: number;
  submitRoute: string;
  submitButtonLabel: string;
  subHeaderText: string;
  feilds: Array<FeildType>;
}

const Feild: React.FC<FeildType> = (props) => {
  const [countyCode, setCountryCode] = useState<string>("");

  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then((res) => res.json())
      .then((response) => {
        setCountryCode(response.country_code);
      })
      .catch((data) => {});
  }, []);

  const renderFeildForType = (feild: FeildType) => {
    switch (feild.type) {
      case "email":
        return (
          <input
            placeholder={props.placeholder}
            type={props.type}
            name={props.feildName}
            required={props.required}
          />
        );
      case "number":
        return (
          <input
            placeholder={props.placeholder}
            type={props.type}
            name={props.feildName}
            required={props.required}
          />
        );
      case "text":
        return (
          <input
            placeholder={props.placeholder}
            type={props.type}
            name={props.feildName}
            required={props.required}
          />
        );
      case "text-area":
        return (
          <textarea
            placeholder={props.placeholder}
            name={props.feildName}
            required={props.required}
            rows={5}
          />
        );
      case "phone":
        return (
          <PhoneInput
            placeholder={props.placeholder}
            inputStyle={{
              width: "100%",
              height: 50,
              backgroundColor: "rgba(255, 255, 255, 0.03)",
              border: "none",
              color: "rgba(255, 255, 255, 0.5)",
              marginLeft: 0 + "px !important",
            }}
            buttonStyle={{
              backgroundColor: "rgba(255, 255, 255, 0.03)",
              border: "none",
            }}
            dropdownStyle={{
              backgroundColor: "rgba(255, 255, 255, 0.03)",
              color: "rgba(255, 255, 255, 0.5)",
            }}
            inputProps={{ name: props.feildName, required: props.required }}
            country={countyCode.toLowerCase()}
          />
        );
    }
  };

  return (
    <div className="form_field">
      <p>
        {props.label}
        {props.required ? <span> *</span> : <></>}
      </p>
      {renderFeildForType({ ...props })}
    </div>
  );
};

const FormBuilder: React.FC<FormBuilderProps> = (props) => {
  const form: any = useRef();
  const submitToken = process.env.NEXT_PUBLIC_STRAPI_FORM_SUBMISSION_TOKEN;

  const handleFormSubmit: any = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formRef = form.current;
    let inquiryData: any = {};

    props.feilds &&
      props.feilds.map((feild: FeildType) => {
        inquiryData = {
          ...inquiryData,
          [feild.feildName]: formRef[feild.feildName].value,
        };
      });

    const res = await fetch(getStrapiURL() + `/api/${props.submitRoute}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${submitToken}`,
      },
      body: JSON.stringify({ data: inquiryData }),
    });
    const errorPromise = await res.json();
    if (errorPromise.error && errorPromise.error.details) {
      errorPromise.error.details.errors.map((errorData: any) => {
        const errorMessage = errorData.message.replace(
          new RegExp("\\b" + "This" + "\\b", "gi"),
          ""
        );
        toast.error(errorData.path[0] + errorMessage);
      });
    }
    res.ok
      ? toast.success("Message received! We'll be in touch soon.")
      : toast.error("Error inserting inquiry");
  };

  return (
    <>
      <Toaster
        toastOptions={{
          style: {
            fontSize: 16,
          },
        }}
      />
      <div className="">
        <h5 className="contact_subtitle">{props.subHeaderText}</h5>
        <form ref={form} onSubmit={handleFormSubmit} >
          <div className="form_grid">
            {props.feilds &&
              props.feilds.map((feild: FeildType, index: number) => (
                <Feild {...feild} key={index} />
              ))}
          </div>
          <GlitterButton
            buttonText={props.submitButtonLabel}
            style={{
              width: "100%",
            }}
            type="submit"
          />
        </form>
      </div>
    </>
  );
};

export default FormBuilder;
