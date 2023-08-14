import type { NextPage } from "next";

const ThemeContainer: NextPage = () => {
  return (
    <div className="self-stretch flex flex-row items-start justify-start gap-[32px] text-left text-5xl text-white font-para-medium">
      <div className="self-stretch flex-1 bg-glass-bg flex flex-col p-8 items-start justify-start gap-[32px]">
        <div className="overflow-hidden flex flex-col pt-px px-0 pb-0 items-start justify-center">
          <img
            className="relative w-[67px] h-[55.45px]"
            alt=""
            src="/vector10.svg"
          />
        </div>
        <b className="self-stretch relative inline-block h-[58px] shrink-0">
          <p className="m-0">{`Innovations in `}</p>
          <p className="m-0">e-Learning</p>
        </b>
        <div className="self-stretch relative text-base leading-[26px] font-medium">
          Craft revolutionary POCs (Proof of Concept) that reshape e-learning
          encounters. This encompasses forging interactive, tailored learning
          hubs, AI-driven tutoring or mentoring frameworks, and immersive
          gamified educational applications. 
        </div>
      </div>
      <div className="self-stretch flex-1 bg-glass-bg flex flex-col p-8 items-start justify-start gap-[32px]">
        <img
          className="relative w-[67px] h-[67px] overflow-hidden shrink-0"
          alt=""
          src="/materialsymbolsecooutline.svg"
        />
        <b className="self-stretch relative">
          Sustainable Technology Solutions
        </b>
        <div className="self-stretch relative text-base leading-[26px] font-medium">
          Create POCs that champion sustainability and tackle ecological
          hurdles. These spans designing energy-frugal apps, waste management
          innovations, intelligent transit systems, and tools to gauge and
          curtail carbon footprints.
        </div>
      </div>
      <div className="self-stretch flex-1 bg-glass-bg flex flex-col p-8 items-start justify-start gap-[32px]">
        <img
          className="relative w-[67px] h-[67px] overflow-hidden shrink-0 hidden"
          alt=""
          src="/mdisearchweb.svg"
        />
        <img
          className="relative w-[67px] h-[67px] overflow-hidden shrink-0 hidden"
          alt=""
          src="/frame.svg"
        />
        <img
          className="relative w-[67px] h-[67px] overflow-hidden shrink-0 hidden"
          alt=""
          src="/marketinganalysismarketingresearchsvgrepocom-1.svg"
        />
        <img
          className="relative w-[67px] h-[67px] overflow-hidden shrink-0"
          alt=""
          src="/analyticsvgrepocom-1.svg"
        />
        <b className="self-stretch relative">
          Next-Gen SEO and Digital Marketing
        </b>
        <div className="self-stretch relative text-base leading-[26px] font-medium">
          Delve into the dynamic field of SEO and digital marketing. Task them
          with creating POCs that harness AI, data analytics, and automation to
          enhance search engine optimization, elevate digital advertising
          tactics, and propel precise customer engagement and conversion
          strategies. 
        </div>
      </div>
    </div>
  );
};

export default ThemeContainer;
