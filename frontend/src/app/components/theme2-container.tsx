import type { NextPage } from "next";

const Theme2Container: NextPage = () => {
  return (
    <div className="self-stretch flex flex-row items-start justify-start gap-[32px] text-left text-5xl text-white font-para-medium">
      <div className="self-stretch flex-1 bg-glass-bg flex flex-col p-8 items-start justify-start gap-[32px]">
        <img
          className="relative w-[67px] h-[67px] overflow-hidden shrink-0 hidden"
          alt=""
          src="/vaadinautomation.svg"
        />
        <img
          className="relative w-[67px] h-[67px] hidden"
          alt=""
          src="/workhistory.svg"
        />
        <img
          className="relative w-[67px] h-[67px] overflow-hidden shrink-0"
          alt=""
          src="/automation4psvgrepocom-1.svg"
        />
        <b className="self-stretch relative">
          <p className="m-0">{`Automation and `}</p>
          <p className="m-0">Efficiency</p>
        </b>
        <div className="self-stretch relative text-base leading-[26px] font-medium">
          Streamline operations and amplify efficiency via automation. This
          encompasses conceiving tools, bots, or workflows that mechanize
          repetitive assignments, refine resource distribution, and boost output
          across diverse sectors. (Caters to non-tech staff who prefer forming
          their own teams.)
        </div>
      </div>
      <div className="self-stretch flex-1 bg-glass-bg flex flex-col p-8 items-start justify-start gap-[32px]">
        <img
          className="relative w-[67px] h-[67px] overflow-hidden shrink-0"
          alt=""
          src="/hubotsvgrepocom-1.svg"
        />
        <img
          className="relative w-[67px] h-[67px] overflow-hidden shrink-0 hidden"
          alt=""
          src="/eosiconsaioperator.svg"
        />
        <div className="overflow-hidden hidden flex-col pt-px px-0 pb-[11px] items-start justify-start">
          <img
            className="relative w-[67px] h-[55.45px]"
            alt=""
            src="/vector10.svg"
          />
        </div>
        <b className="self-stretch relative">
          Innovative ChatGPT based Applications
        </b>
        <div className="self-stretch relative text-base leading-[26px] font-medium">
          Motivate teams to delve into the capabilities of ChatGPT and natural
          language processing. Challenge them to craft POCs employing ChatGPT
          for customer support, virtual assistants, language translation,
          content creation, or any inventive use that harnesses conversational
          AI. 
        </div>
      </div>
      {/* <div className="self-stretch flex-1 bg-glass-bg flex flex-col p-8 items-start justify-start gap-[32px]">
        <img
          className="relative w-[67px] h-[67px] overflow-hidden shrink-0"
          alt=""
          src="/epdataline.svg"
        />
        <img
          className="relative w-[67px] h-[67px] overflow-hidden shrink-0 hidden"
          alt=""
          src="/fluentpeopleteam24regular.svg"
        />
        <b className="self-stretch relative">Data Analytics and Forecasting</b>
        <div className="self-stretch relative text-base leading-[26px] font-medium">
          Present teams with the challenge of crafting POCs that utilize data
          analytics and predictive methods to steer business insights and
          choices. This encompasses devising predictive models, forging data
          visualization tools, or constructing frameworks for live data analysis
          and reporting.
        </div>
      </div> */}
    </div>
  );
};

export default Theme2Container;
