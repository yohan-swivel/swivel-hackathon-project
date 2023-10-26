import GlitterButton from "../GlitterButton";
import "react-phone-input-2/lib/style.css";
import PhoneInput, { CountryData } from "react-phone-input-2";
import React, { useEffect, useRef, useState } from "react";
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

const Feild: React.FC<{
  feild: FeildType;
  setPhoneInput: React.Dispatch<React.SetStateAction<string>>;
  phoneInput: string;
}> = (props) => {
  const [countyCode, setCountryCode] = useState<string>("");
  const [validatePhoneNumber, setValidatePhoneNumber] =
    useState<boolean>(false);
  const [phoneNumberOnFocus, setPhoneNumberOnFocus] = useState<boolean>(false);

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
            placeholder={props.feild.placeholder}
            type={props.feild.type}
            name={props.feild.feildName}
            required={props.feild.required}
          />
        );
      case "number":
        return (
          <input
            placeholder={props.feild.placeholder}
            type={props.feild.type}
            name={props.feild.feildName}
            required={props.feild.required}
          />
        );
      case "text":
        return (
          <input
            placeholder={props.feild.placeholder}
            type={props.feild.type}
            name={props.feild.feildName}
            required={props.feild.required}
          />
        );
      case "text-area":
        return (
          <textarea
            placeholder={props.feild.placeholder}
            name={props.feild.feildName}
            required={props.feild.required}
            rows={5}
          />
        );
      case "phone":
        return (
          <PhoneInput
            placeholder={props.feild.placeholder}
            inputStyle={{
              width: "95%",
              height: 50,
              backgroundColor: "#191919",
              border: "none",
              // color: "rgba(255, 255, 255, 0.5)",
              marginLeft: 35 + "px !important",
            }}
            buttonStyle={{
              backgroundColor: "#191919",
              border: "none",
            }}
            dropdownStyle={{
              backgroundColor: "#191919",
              color: "rgba(255, 255, 255, 0.5)",
            }}
            inputProps={{
              id: props.feild.feildName,
              name: props.feild.feildName,
              required: props.feild.required,
              pattern: ".{6,}",
              onInvalid: () => {
                const feildInput: any = document.getElementById(
                  props.feild.feildName
                );
                feildInput.setCustomValidity("Please fill out this feild.");
              },
              onInput: () => {
                const feildInput: any = document.getElementById(
                  props.feild.feildName
                );
                feildInput.setCustomValidity("");
              },
            }}
            country={countyCode.toLowerCase()}
            onChange={(
              value: string,
              data: CountryData,
              event: React.ChangeEvent<HTMLInputElement>,
              formattedValue: string
            ) => {
              props.setPhoneInput(formattedValue);
              // const valueWithoutNumber = value.slice(data.dialCode.length);
              // setValidatePhoneNumber(valueWithoutNumber);
            }}
            value={props.phoneInput}
          />
        );
    }
  };

  return (
    <div className="form_field">
      <p>
        {props.feild.label}
        {props.feild.required ? <span> *</span> : <></>}
      </p>
      {renderFeildForType({ ...props.feild })}
    </div>
  );
};

const FormBuilder: React.FC<FormBuilderProps> = (props) => {
  const form: any = useRef();
  const submitToken = process.env.NEXT_PUBLIC_STRAPI_FORM_SUBMISSION_TOKEN;
  const [phoneInput, setPhoneInput] = useState<string>("");

  const handleFormSubmit: any = async (event: any) => {
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
    if (res.ok) {
      event.target.reset();
      setPhoneInput("");
      toast.success("Message received! We'll be in touch soon.");
    } else {
      toast.error("Error inserting inquiry");
    }
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
        <form ref={form} onSubmit={handleFormSubmit} className="">
          <div className="form_grid">
            {props.feilds &&
              props.feilds.map((feild: FeildType, index: number) => (
                <Feild
                  feild={{ ...feild }}
                  key={index}
                  phoneInput={phoneInput}
                  setPhoneInput={setPhoneInput}
                />
              ))}
          </div>
          <div className="mx-auto w-1/2">
            <GlitterButton
              buttonText={props.submitButtonLabel}
              type="submit"
              style={{
                width: "50%",
                margin: "auto",
              }}
              fontSize={15}
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default FormBuilder;
