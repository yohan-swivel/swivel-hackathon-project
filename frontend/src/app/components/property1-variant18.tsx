import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type Property1Variant18Type = {
  canIStartWorkingOnMyProje?: string;
  icons8plus?: string;
  vector?: string;

  /** Style props */
  property1Variant18Position?: CSSProperties["position"];
  property1Variant18Width?: CSSProperties["width"];
  property1Variant18AlignSelf?: CSSProperties["alignSelf"];
};

const Property1Variant18: NextPage<Property1Variant18Type> = ({
  canIStartWorkingOnMyProje,
  icons8plus,
  vector,
  property1Variant18Position,
  property1Variant18Width,
  property1Variant18AlignSelf,
}) => {
  const property1Variant18Style: CSSProperties = useMemo(() => {
    return {
      position: property1Variant18Position,
      width: property1Variant18Width,
      alignSelf: property1Variant18AlignSelf,
    };
  }, [
    property1Variant18Position,
    property1Variant18Width,
    property1Variant18AlignSelf,
  ]);

  return (
    <div
      className="relative bg-glass-bg w-[1060px] h-[58px] flex flex-row p-[22px] box-border items-center justify-between text-left text-base text-white font-para-medium"
      style={property1Variant18Style}
    >
      <div className="flex flex-col items-start justify-start">
        <div className="relative leading-[26px] font-semibold">
          {canIStartWorkingOnMyProje}
        </div>
        <div className="relative text-xs leading-[26px] hidden">
          Posted 06 Days Ago
        </div>
      </div>
      <img
        className="relative w-[26px] h-[26px] overflow-hidden shrink-0"
        alt=""
        src={icons8plus}
      />
      <div className="hidden flex-row items-center justify-start gap-[64px]">
        <div className="hidden flex-row items-center justify-start gap-[35px]">
          <div className="rounded-11xl bg-glass-bg flex flex-col py-2 px-4 items-start justify-start">
            <div className="relative leading-[26px]">
              Colombo, Western Province, Srilanka
            </div>
          </div>
          <div className="rounded-11xl bg-glass-bg flex flex-col py-2 px-4 items-start justify-center">
            <div className="relative leading-[26px]">Hybrid</div>
          </div>
          <div className="rounded-11xl bg-glass-bg flex flex-col py-2 px-4 items-start justify-center">
            <div className="relative leading-[26px]">Fulltime</div>
          </div>
        </div>
        <div className="overflow-hidden flex flex-row py-1 pr-2 pl-[5px] items-start justify-start">
          <img className="relative w-3.5 h-4" alt="" src={vector} />
        </div>
      </div>
    </div>
  );
};

export default Property1Variant18;
