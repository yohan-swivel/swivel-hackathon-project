import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type Property1DefaultType = {
  itemCode?: string;

  /** Style props */
  property1DefaultPosition?: CSSProperties["position"];
};

const Property1Default: NextPage<Property1DefaultType> = ({
  itemCode,
  property1DefaultPosition,
}) => {
  const property1Default1Style: CSSProperties = useMemo(() => {
    return {
      position: property1DefaultPosition,
    };
  }, [property1DefaultPosition]);

  return (
    <div
      className="relative flex flex-row py-2.5 px-4 items-start justify-start gap-[10px] text-left text-base text-white font-para-medium"
      style={property1Default1Style}
    >
      <b className="relative">Interested? Let's talk!</b>
      <img
        className="relative w-6 h-6 overflow-hidden shrink-0"
        alt=""
        src={itemCode}
      />
    </div>
  );
};

export default Property1Default;
