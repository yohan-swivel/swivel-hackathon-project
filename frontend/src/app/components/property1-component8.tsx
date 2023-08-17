import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type Property1Component8Type = {
  /** Style props */
  property1Component8Position?: CSSProperties["position"];
};

const Property1Component8: NextPage<Property1Component8Type> = ({
  property1Component8Position,
}) => {
  const property1Component8Style: CSSProperties = useMemo(() => {
    return {
      position: property1Component8Position,
    };
  }, [property1Component8Position]);

  return (
    <div
      className="relative w-[649px] flex flex-col items-start justify-center gap-[16px] text-left text-lg text-white font-para-medium"
      style={property1Component8Style}
    >
      <b className="relative">Subject</b>
      <div className="self-stretch bg-glass-bg h-[55px] flex flex-row py-2.5 px-4 box-border items-center justify-start text-base text-gray-200">
        <div className="relative font-semibold">Enter your subject</div>
      </div>
    </div>
  );
};

export default Property1Component8;
