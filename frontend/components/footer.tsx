import type { NextPage } from "next";

const Footer: NextPage = () => {
  return (
    <div className="absolute bottom-[47px] w-[100%] flex flex-col items-center justify-start text-left text-base text-whitesmoke font-para-medium">
      <div className="box-border px-10 w-[100%] flex flex-row pt-0 px-0 pb-10 items-center justify-between border-b-[1px] border-solid border-dimgray">
        <img
          className="relative w-[121px] h-[66.4px] object-cover"
          alt=""
          src="/sh-logo-white150-1@2x.png"
        />
        <div className="flex flex-row items-start justify-start gap-[32px]">
          <div className="flex flex-row p-2.5 items-start justify-start text-white">
            <div className="relative">Home</div>
          </div>
          <div className="flex flex-row p-2.5 items-start justify-start">
            <div className="relative">Team</div>
          </div>
          <div className="flex flex-row p-2.5 items-start justify-start">
            <div className="relative">Themes</div>
          </div>
          <div className="flex flex-row p-2.5 items-start justify-start">
            <div className="relative">FAQ</div>
          </div>
          <div className="flex flex-row p-2.5 items-start justify-start">
            <div className="relative">Inquiries</div>
          </div>
          <div className="flex flex-row p-2.5 items-start justify-start">
            <div className="relative">Contact Us</div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-[24px]">
          <img
            className="relative w-8 h-8 overflow-hidden shrink-0"
            alt=""
            src="/mdilinkedin.svg"
          />
          <img
            className="relative w-8 h-8 overflow-hidden shrink-0"
            alt=""
            src="/phinstagramlogofill.svg"
          />
          <img
            className="relative w-8 h-8 overflow-hidden shrink-0"
            alt=""
            src="/icbaselinefacebook.svg"
          />
        </div>
      </div>
      <div className="flex flex-col p-2.5 items-center justify-center gap-[10px]">
        <div className="relative font-medium">
          © 2023 Swivel Group All Rights Reserved
        </div>
        <div className="relative font-medium">
          Privacy Policy . Cookie Policy
        </div>
      </div>
    </div>
  );
};

export default Footer;
