import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type Property1Component6Type = {
  /** Style props */
  property1Component6Position?: CSSProperties["position"];
};

const Property1Component6: NextPage<Property1Component6Type> = ({
  property1Component6Position,
}) => {
  const property1Component6Style: CSSProperties = useMemo(() => {
    return {
      position: property1Component6Position,
    };
  }, [property1Component6Position]);

  return (
    <div
      className="relative w-[649px] flex flex-col items-start justify-center gap-[16px] text-left text-lg text-white font-para-medium"
      style={property1Component6Style}
    >
      <b className="relative">
        <span>{`Name `}</span>
        <span className="text-red">*</span>
      </b>
      <div className="self-stretch bg-glass-bg h-[55px] flex flex-row py-2.5 px-4 box-border items-center justify-start text-base text-gray-200">
        <div className="relative font-semibold">Enter your name</div>
      </div>
    </div>
  );
};

export default Property1Component6;
