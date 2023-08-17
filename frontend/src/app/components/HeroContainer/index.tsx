"use client";
import BottemScrollButton from "../BottemScrollButton";
import GlitterButton from "../GlitterButton";

interface HeroContainerProps {}

const HeroContainer: React.FC = () => {
  return (
    <>
      <div className="custom-glow left-0 right-0 absolute mx-auto w-[600px] h-[600px] opacity-25"></div>

      <img
        className="absolute top-[140px] mx-auto	right-[0px] left-[0px] w-[530px] h-[574px] object-cover"
        alt=""
        src="/brain-design-1@2x.png"
      />

      <section
        className="absolute top-[276px] left-[0px] right-[0px] mx-auto flex flex-col items-center justify-start gap-[64px]"
        data-scroll-to="heroContentContainer"
      >
        <div className="flex flex-col items-center justify-start">
          <div className="flex flex-col items-center justify-center gap-[32px] text-center text-45xl text-white font-para-medium">
            <div className="flex flex-col items-center justify-center">
              <div className="relative w-[386px] h-[74px]">
                <b className="absolute h-[156%] w-[105.18%] top-[0%] left-[-2.59%] inline-block">
                  SwivelHack
                </b>
              </div>
              <b className="relative tracking-[0.11em]">2023</b>
            </div>
            <div className="relative text-xl leading-[26px] font-semibold">
              Driving Innovation, Beyond Imagination
            </div>
            <GlitterButton
              buttonText="Intrested Lets Talk"
              iconUrl="/materialsymbolsarrowrightaltrounded1.svg"
              onClick={() => {}}
              style={{ width: "100%", height: "100%", position: "unset" }}
              type="button"
            />
          </div>
        </div>
        <BottemScrollButton onClick={() => {}} />
      </section>
    </>
  );
};

export default HeroContainer;
