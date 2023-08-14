import type { NextPage } from "next";
import Footer from "../components/footer";
import ThemeContainer from "../components/theme-container";
import Theme2Container from "../components/theme2-container";
import Property1Frame31 from "../components/property1-frame31";
import Property1Variant18 from "../components/property1-variant18";
import ContactUsContainer from "../components/contact-us-container";
import Header from "../components/header";
import HeroContainer from "../components/HeroContainer";
import InitiateContainer from "../components/InitiateContainer";
import GlanceContainer from "../components/GlanceContainer";
import TeamContainer from "../components/TeamContainer";

const HomeMacBookPro161: NextPage = () => {
  return (
    <div className="relative bg-bg-dark w-full h-[7447px] overflow-hidden text-center text-17xl text-white font-para-medium">
      <img
        className="absolute top-[0px] left-[0px] w-[100%] h-[1069px] opacity-[0.7]"
        alt=""
        src="/main-vector-2.svg"
      />
      <img
        className="absolute top-[3746px] mx-auto right-[0px] left-[0px] w-[100%] h-[1213px] opacity-[0.7]"
        alt=""
        src="/main-vector-4.svg"
      />
      <img
        className="absolute top-[6596px] mx-auto right-[0px] left-[0px] w-[] h-[851px] opacity-[0.5]"
        alt=""
        src="/main-vector-5.svg"
      />
      <img
        className="absolute top-[961px] mx-auto right-[0px] left-[0px] w-[606px] h-[1297px]"
        alt=""
        src="/vector--right.svg"
      />
      <img
        className="absolute top-[2189px] mx-auto right-[0px] left-[0px] w-[609px] h-[1297px]"
        alt=""
        src="/vector--left.svg"
      />
      <div className="absolute top-[683px] w-[100%]  flex flex-row items-center justify-between">
        <img
          className="relative px-10 w-[86.46px] h-[75.55px] opacity-[0.4]"
          alt=""
          src="/group-2.svg"
        />
        <img
          className="relative px-10 w-[97.06px] h-[93.78px] opacity-[0.4]"
          alt=""
          src="/group-1.svg"
        />
        {/* have to make the alignments */}
        <img
          className="absolute h-[1.43%] px-10 w-[4.98%] top-[29.99%] right-[20.51%] bottom-[68.58%] left-[11.52%] max-w-full overflow-hidden max-h-full opacity-[0.4]"
          alt=""
          src="/group-4.svg"
        />
        <img
          className="absolute h-[1.12%] px-10 w-[5.56%] top-[30.15%] right-[11.52%] bottom-[68.74%] left-[82.93%] max-w-full overflow-hidden max-h-full opacity-[0.4]"
          alt=""
          src="/group-6.svg"
        />
      </div>
      <Header />
      <HeroContainer />
      <InitiateContainer />
      <GlanceContainer />
      <TeamContainer />
     
      <div className="absolute top-[4443px] w-[100%] flex flex-col p-2.5 items-center justify-center gap-[48px]">
        <b className="relative">Partners and Sponsors</b>
        <div className="flex flex-row items-center justify-center gap-[32px]">
          <Property1Frame31
            group="/group7.svg"
            group1="/group8.svg"
            property1Frame31Position="unset"
            groupIconWidth="47.01px"
            groupIconWidth1="171.41px"
            groupIconHeight="20.34px"
          />
          <Property1Frame31
            group="/group9.svg"
            group1="/layer-121.svg"
            property1Frame31Position="unset"
            groupIconWidth="47px"
            groupIconWidth1="222.74px"
            groupIconHeight="20.91px"
          />
          <Property1Frame31
            group="/group10.svg"
            group1="/group11.svg"
            property1Frame31Position="unset"
            groupIconWidth="47px"
            groupIconWidth1="203.33px"
            groupIconHeight="20.34px"
          />
          <Property1Frame31
            group="/group12.svg"
            group1="/group13.svg"
            property1Frame31Position="unset"
            groupIconWidth="80px"
            groupIconWidth1="116.31px"
            groupIconHeight="39.31px"
          />
        </div>
      </div>
      <div
        className="absolute top-[4715px] px-20 w-[100%] flex flex-col py-2.5 box-border items-center justify-center gap-[48px]"
        data-scroll-to="fAQsContainer"
      >
        <b className="relative">Frequently Asked Questions (FAQs)</b>
        <div className="self-stretch flex flex-col items-center justify-center gap-[16px]">
          <Property1Variant18
            canIStartWorkingOnMyProje="What is a hackathon?"
            icons8plus="/icons8plus10.svg"
            vector="/vector11.svg"
            property1Variant18Position="unset"
            property1Variant18Width="unset"
            property1Variant18AlignSelf="stretch"
          />
          <Property1Variant18
            canIStartWorkingOnMyProje="Who can participate in SwivelHack 2023?"
            icons8plus="/icons8plus10.svg"
            vector="/vector11.svg"
            property1Variant18Position="unset"
            property1Variant18Width="unset"
            property1Variant18AlignSelf="stretch"
          />
          <Property1Variant18
            canIStartWorkingOnMyProje="When and where is the hackathon taking place?"
            icons8plus="/icons8plus10.svg"
            vector="/vector11.svg"
            property1Variant18Position="unset"
            property1Variant18Width="unset"
            property1Variant18AlignSelf="stretch"
          />
          <Property1Variant18
            canIStartWorkingOnMyProje="How long will SwivelHack 2023 last?"
            icons8plus="/icons8plus10.svg"
            vector="/vector11.svg"
            property1Variant18Position="unset"
            property1Variant18Width="unset"
            property1Variant18AlignSelf="stretch"
          />
          <Property1Variant18
            canIStartWorkingOnMyProje="What are the prizes for SwivelHack 2023?"
            icons8plus="/icons8plus10.svg"
            vector="/vector11.svg"
            property1Variant18Position="unset"
            property1Variant18Width="unset"
            property1Variant18AlignSelf="stretch"
          />
          <Property1Variant18
            canIStartWorkingOnMyProje="How can I register for the hackathon?"
            icons8plus="/icons8plus10.svg"
            vector="/vector11.svg"
            property1Variant18Position="unset"
            property1Variant18Width="unset"
            property1Variant18AlignSelf="stretch"
          />
          <Property1Variant18
            canIStartWorkingOnMyProje="Is there a registration fee to participate?"
            icons8plus="/icons8plus10.svg"
            vector="/vector11.svg"
            property1Variant18Position="unset"
            property1Variant18Width="unset"
            property1Variant18AlignSelf="stretch"
          />
          <Property1Variant18
            canIStartWorkingOnMyProje="What are the eligibility criteria to participate?"
            icons8plus="/icons8plus10.svg"
            vector="/vector11.svg"
            property1Variant18Position="unset"
            property1Variant18Width="unset"
            property1Variant18AlignSelf="stretch"
          />
          <Property1Variant18
            canIStartWorkingOnMyProje="Can I participate as an individual, or do I need to form a team?"
            icons8plus="/icons8plus10.svg"
            vector="/vector11.svg"
            property1Variant18Position="unset"
            property1Variant18Width="unset"
            property1Variant18AlignSelf="stretch"
          />
          <Property1Variant18
            canIStartWorkingOnMyProje="Do I need to be an expert to participate?"
            icons8plus="/icons8plus10.svg"
            vector="/vector11.svg"
            property1Variant18Position="unset"
            property1Variant18Width="unset"
            property1Variant18AlignSelf="stretch"
          />
          <Property1Variant18
            canIStartWorkingOnMyProje="What should I bring to the hackathon?"
            icons8plus="/icons8plus10.svg"
            vector="/vector11.svg"
            property1Variant18Position="unset"
            property1Variant18Width="unset"
            property1Variant18AlignSelf="stretch"
          />
          <Property1Variant18
            canIStartWorkingOnMyProje="What programming languages or technologies are allowed?"
            icons8plus="/icons8plus10.svg"
            vector="/vector11.svg"
            property1Variant18Position="unset"
            property1Variant18Width="unset"
            property1Variant18AlignSelf="stretch"
          />
          <Property1Variant18
            canIStartWorkingOnMyProje="Can I start working on my project before the hackathon begins?"
            icons8plus="/icons8plus10.svg"
            vector="/vector11.svg"
            property1Variant18Position="unset"
            property1Variant18Width="unset"
            property1Variant18AlignSelf="stretch"
          />
        </div>
      </div>
      <ContactUsContainer />
      {/* have to make the alignments */}

      <img
        className="absolute h-[2.09%] px-10 w-[5.08%] top-[42.08%] right-[83.48%] bottom-[55.83%] left-[11.44%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/group-7.svg"
      />
      <img
        className="absolute h-[0.98%] px-10 w-[5.5%] top-[43%] right-[11.52%] bottom-[56.02%] left-[82.99%] max-w-full overflow-hidden max-h-full opacity-[0.4]"
        alt=""
        src="/group-8.svg"
      />
      <Footer />
    </div>
  );
};

export default HomeMacBookPro161;
