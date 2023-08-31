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
            className="self-stretch border-none bg-glass-bg h-[55px] flex flex-row py-2.5 px-4 box-border items-center justify-start text-base text-gray-200"
            placeholder={props.placeholder}
            type={props.type}
            name={props.feildName}
            required={props.required}
          />
        );
      case "number":
        return (
          <input
            className="self-stretch border-none bg-glass-bg h-[55px] flex flex-row py-2.5 px-4 box-border items-center justify-start text-base text-gray-200"
            placeholder={props.placeholder}
            type={props.type}
            name={props.feildName}
            required={props.required}
          />
        );
      case "text":
        return (
          <input
            className="self-stretch border-none bg-glass-bg h-[55px] flex flex-row py-2.5 px-4 box-border items-center justify-start text-base text-gray-200"
            placeholder={props.placeholder}
            type={props.type}
            name={props.feildName}
            required={props.required}
          />
        );
      case "text-area":
        return (
          <textarea
            className=" border-none bg-glass-bg h-[110px] w-full box-border  text-base text-gray-200"
            placeholder={props.placeholder}
            name={props.feildName}
            required={props.required}
          />
        );
      case "phone":
        return (
          <PhoneInput
            placeholder={props.placeholder}
            containerStyle={{ height: 55, border: "none" }}
            inputStyle={{
              width: "100%",
              height: 55,
              backgroundColor: "rgba(255, 255, 255, 0.03)",
              border: "none",
              color: "rgba(255, 255, 255, 0.5)",
            }}
            buttonStyle={{
              backgroundColor: "rgba(255, 255, 255, 0.03)",
              border: "none",
            }}
            dropdownStyle={{
              backgroundColor: "rgba(255, 255, 255, 0.03)",
              color: "rgba(255, 255, 255, 0.5)",
              width: 250,
            }}
            inputProps={{ name: props.feildName, required: props.required }}
            country={countyCode.toLowerCase()}
          />
        );
    }
  };

  return (
    <>
      <div className="mt-6  w-[649px] flex flex-col items-start justify-center gap-[16px] text-left text-lg text-white font-para-medium">
        <b className="relative">
          <span>{props.label}</span>
          {props.required ? <span className="text-red"> *</span> : <></>}
        </b>
        {renderFeildForType({ ...props })}
      </div>
    </>
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
      <div className="flex flex-col items-start justify-start gap-[32px]">
        <div className="flex flex-row items-center justify-center [@media(min-width:1079px)]:justify-start w-full">
          <b className="relative tracking-[0.03em]">{props.subHeaderText}</b>
        </div>
        <form ref={form} onSubmit={handleFormSubmit}>
          <div className="grid grid-cols-1 [@media(min-width:1079px)]:grid-cols-2 gap-4 ">
            {props.feilds &&
              props.feilds.map((feild: FeildType, index: number) => (
                <Feild {...feild} key={index} />
              ))}
          </div>
          <GlitterButton
            buttonText={props.submitButtonLabel}
            iconUrl="/materialsymbolsarrowrightaltrounded1.svg"
            style={{
              width: "100%",
              height: "60%",
              marginTop: 50,
            }}
            type="submit"
          />
        </form>
      </div>
    </>
  );
};

export default FormBuilder;
