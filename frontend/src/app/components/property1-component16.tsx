import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type Property1Component16Type = {
  /** Style props */
  property1Component16Position?: CSSProperties["position"];
};

const Property1Component16: NextPage<Property1Component16Type> = ({
  property1Component16Position,
}) => {
  const property1Component16Style: CSSProperties = useMemo(() => {
    return {
      position: property1Component16Position,
    };
  }, [property1Component16Position]);

  return (
    <div
      className="relative flex flex-col items-start justify-center gap-[16px] text-left text-lg text-white font-para-medium"
      style={property1Component16Style}
    >
      <b className="relative">
        <span>{`Message `}</span>
        <span className="text-red">*</span>
      </b>
      <div className="bg-glass-bg w-[1330px] h-[110px] flex flex-row py-2.5 pr-0 pl-4 box-border items-start justify-start text-base text-gray-200">
        <div className="flex flex-row py-2.5 px-0 items-start justify-start">
          <div className="relative font-semibold inline-block w-[215px] shrink-0">
            Enter your address
          </div>
        </div>
      </div>
    </div>
  );
};

export default Property1Component16;
