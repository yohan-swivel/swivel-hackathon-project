import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type Property1Component12Type = {
  sriLanka1?: string;
  iconamoonarrowUp2Duotone?: string;

  /** Style props */
  property1Component12Position?: CSSProperties["position"];
};

const Property1Component12: NextPage<Property1Component12Type> = ({
  sriLanka1,
  iconamoonarrowUp2Duotone,
  property1Component12Position,
}) => {
  const property1Component12Style: CSSProperties = useMemo(() => {
    return {
      position: property1Component12Position,
    };
  }, [property1Component12Position]);

  return (
    <div
      className="relative w-[649px] flex flex-col items-start justify-center gap-[16px] text-left text-lg text-white font-para-medium"
      style={property1Component12Style}
    >
      <b className="relative">
        <span>{`Phone Number `}</span>
        <span className="text-red">*</span>
      </b>
      <div className="self-stretch bg-glass-bg h-[55px] flex flex-row py-2.5 px-4 box-border items-center justify-start gap-[10px] text-base text-gray-200">
        <div className="flex flex-row py-2.5 pr-4 pl-2.5 items-center justify-start gap-[10px] border-r-[2px] border-solid border-gray-100">
          <img
            className="relative w-[23px] h-[26px] object-cover"
            alt=""
            src={sriLanka1}
          />
          <div className="relative font-semibold">+94</div>
          <img
            className="relative w-6 h-6 overflow-hidden shrink-0"
            alt=""
            src={iconamoonarrowUp2Duotone}
          />
        </div>
        <div className="flex flex-row p-2.5 items-start justify-start">
          <div className="relative font-semibold">Enter your phone number</div>
        </div>
      </div>
    </div>
  );
};

export default Property1Component12;
