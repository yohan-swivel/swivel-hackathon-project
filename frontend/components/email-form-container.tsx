import type { NextPage } from "next";

type EmailFormContainerType = {
  contactInfoText?: string;
  contactButtonText?: string;
  contactInfo?: string;
};

const EmailFormContainer: NextPage<EmailFormContainerType> = ({
  contactInfoText,
  contactButtonText,
  contactInfo,
}) => {
  return (
    <div className="flex flex-col items-start justify-start gap-[16px] text-center text-5xl text-white font-para-medium">
      <div className="flex flex-row items-center justify-start gap-[16px]">
        <img
          className="relative w-[34px] h-[34px] overflow-hidden shrink-0"
          alt=""
          src={contactInfoText}
        />
        <div className="relative tracking-[0.1em] font-semibold">
          {contactButtonText}
        </div>
      </div>
      <div className="relative text-lg font-medium text-left">
        {contactInfo}
      </div>
    </div>
  );
};

export default EmailFormContainer;
