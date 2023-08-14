import type { NextPage } from "next";
import Property1Component6 from "./property1-component6";
import Property1Component7 from "./property1-component7";
import Property1Component8 from "./property1-component8";
import Property1Component12 from "./property1-component12";
import Property1Component16 from "./property1-component16";
import Property1Default from "./property1-default";
import EmailFormContainer from "./email-form-container";

const ContactUsContainer: NextPage = () => {
  return (
    <div
      className="absolute top-[5837px] w-[100%] flex flex-col items-center justify-start gap-[80px] text-center text-17xl text-white font-para-medium"
      data-scroll-to="contactUsContainer"
    >
      <b className="relative">Interested? Let's talk!</b>
      <div className="flex flex-col items-start justify-start gap-[32px]">
        <div className="flex flex-row items-center justify-center">
          <b className="relative tracking-[0.03em]">Send us a message</b>
        </div>
        <div className="flex flex-row items-start justify-start gap-[32px]">
          <Property1Component6 property1Component6Position="unset" />
          <Property1Component7 property1Component7Position="unset" />
        </div>
        <div className="flex flex-row items-start justify-start gap-[32px]">
          <Property1Component8 property1Component8Position="unset" />
          <Property1Component12
            sriLanka1="/srilanka-11@2x.png"
            iconamoonarrowUp2Duotone="/iconamoonarrowup2duotone1.svg"
            property1Component12Position="unset"
          />
        </div>
        <Property1Component16 property1Component16Position="unset" />
        <Property1Default
          property1DefaultPosition="unset"
          property1DefaultWidth="unset"
          property1DefaultAlignSelf="stretch"
        />
      </div>
      <div className="flex flex-col pt-16 px-0 pb-2.5 items-start justify-start text-5xl">
        <div className="bg-glass-bg w-[1330px] flex flex-col p-8 box-border items-start justify-start gap-[64px]">
          <div className="flex flex-row items-start justify-start gap-[106px]">
            <EmailFormContainer
              contactInfoText="/icoutlineemail.svg"
              contactButtonText="Email Us"
              contactInfo="hello@swivelgroup.com.au"
            />
            <EmailFormContainer
              contactInfoText="/icoutlinephoneenabled.svg"
              contactButtonText="Call Us"
              contactInfo="+61 1300 880 813"
            />
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
            <div className="flex flex-row items-center justify-start gap-[10px]">
              <img
                className="relative w-[33px] h-[33px] overflow-hidden shrink-0"
                alt=""
                src="/mdilocation.svg"
              />
              <div className="relative tracking-[0.1em] font-semibold">
                Visit Us
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[16px] text-left text-3xl">
              <div className="self-stretch flex flex-row items-start justify-start gap-[32px]">
                <div className="flex-1 relative tracking-[0.18em] font-semibold">
                  Australia
                </div>
                <div className="flex-1 relative tracking-[0.18em] font-semibold">
                  Sri Lanka
                </div>
                <div className="flex-1 relative tracking-[0.18em] font-semibold">
                  Sri Lanka
                </div>
                <div className="relative tracking-[0.18em] font-semibold inline-block w-[211px] shrink-0">
                  Vietnam
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-[32px] text-base">
                <div className="flex-1 flex flex-col pt-0 pb-2.5 pr-2.5 pl-0 items-start justify-start">
                  <div className="relative leading-[30px] font-medium">
                    <p className="m-0">Swivel Group Pty Ltd</p>
                    <p className="m-0">10-20 Gwynne Street,</p>
                    <p className="m-0">Cremorne, VIC 3121, Australia.</p>
                  </div>
                </div>
                <div className="flex-1 flex flex-col pt-0 pb-2.5 pr-2.5 pl-0 items-start justify-start">
                  <div className="relative leading-[30px] font-medium">
                    <p className="m-0">Swivel Group Pty Ltd</p>
                    <p className="m-0">229/1 Kirula Rd,Colombo 05,</p>
                    <p className="m-0">Sri Lanka.</p>
                  </div>
                </div>
                <div className="flex-1 flex flex-col pt-0 pb-2.5 pr-2.5 pl-0 items-start justify-start">
                  <div className="relative leading-[30px] font-medium inline-block w-[254px]">
                    <p className="m-0">SwivelTech</p>
                    <p className="m-0">31 Queen’s Rd, Colombo 03,</p>
                    <p className="m-0">Sri Lanka.</p>
                  </div>
                </div>
                <div className="w-[211px] flex flex-col pt-0 pb-2.5 pr-2.5 pl-0 box-border items-start justify-start">
                  <div className="relative leading-[30px] font-medium">
                    <p className="m-0">Swivel Group Pty Ltd</p>
                    <p className="m-0">Ho Chi Minh City,</p>
                    <p className="m-0">Vietnam.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsContainer;
