import type { NextPage } from "next";
import { useCallback } from "react";
import Property1Default from "./property1-default1";

const Header: NextPage = () => {
  const onFrameContainer150Click = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='heroContentContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onFrameContainer151Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='whatContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onFrameContainer152Click = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='ourTeamContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onFrameContainer153Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='themesContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onFrameContainer154Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='fAQsContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onFrameContainer155Click = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='contactUsContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className="absolute top-[0px] right-[0px] [background:linear-gradient(90deg,_#15141a,_#111516_12.36%,_#111819_23.28%,_#11191b_34.69%,_#13161b_52.4%,_#15151b_68.54%,_#131213)] w-[100%] h-[101px] flex flex-row py-0 px-16 box-border items-center justify-between text-left text-base text-whitesmoke font-para-medium">
      <div className="w-[247px] overflow-hidden shrink-0 flex flex-col items-start justify-start">
        <img
          className="relative w-[121px] h-[66px] object-cover"
          alt=""
          src="/sh-logo-coloured150-1@2x.png"
        />
      </div>
      <div className="flex flex-row items-start justify-start gap-[32px]">
        <div
          className="flex flex-row p-2.5 items-start justify-start cursor-pointer hover:text-blue-600"
          onClick={onFrameContainer150Click}
        >
          Home
        </div>
        <div
          className="flex flex-row p-2.5 items-start justify-start cursor-pointer"
          onClick={onFrameContainer151Click}
        >
          <div className="relative">About Us</div>
        </div>
        <div
          className="flex flex-row p-2.5 items-start justify-start cursor-pointer"
          onClick={onFrameContainer152Click}
        >
          <div className="relative">Team</div>
        </div>
        <div
          className="flex flex-row p-2.5 items-start justify-start cursor-pointer"
          onClick={onFrameContainer153Click}
        >
          <div className="relative">Themes</div>
        </div>
        <div
          className="flex flex-row p-2.5 items-start justify-start cursor-pointer"
          onClick={onFrameContainer154Click}
        >
          <div className="relative">FAQs</div>
        </div>
        <div
          className="flex flex-row p-2.5 items-start justify-start cursor-pointer"
          onClick={onFrameContainer155Click}
        >
          <div className="relative">Let’s Talk</div>
        </div>
      </div>
      <Property1Default
        itemCode="/materialsymbolsarrowrightaltrounded2.svg"
        property1DefaultPosition="unset"
      />
    </div>
  );
};

export default Header;
