import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type Property1Component7Type = {
  /** Style props */
  property1Component7Position?: CSSProperties["position"];
};

const Property1Component7: NextPage<Property1Component7Type> = ({
  property1Component7Position,
}) => {
  const property1Component7Style: CSSProperties = useMemo(() => {
    return {
      position: property1Component7Position,
    };
  }, [property1Component7Position]);

  return (
    <div
      className="relative w-[649px] flex flex-col items-start justify-center gap-[16px] text-left text-lg text-white font-para-medium"
      style={property1Component7Style}
    >
      <b className="relative">
        <span>{`Email `}</span>
        <span className="text-red">*</span>
      </b>
      <div className="self-stretch bg-glass-bg h-[55px] flex flex-row py-2.5 px-4 box-border items-center justify-start text-base text-gray-200">
        <div className="relative font-semibold">Enter your email</div>
      </div>
    </div>
  );
};

export default Property1Component7;
