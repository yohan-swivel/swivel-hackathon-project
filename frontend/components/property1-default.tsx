import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type Property1DefaultType = {
  /** Style props */
  property1DefaultPosition?: CSSProperties["position"];
  property1DefaultWidth?: CSSProperties["width"];
  property1DefaultAlignSelf?: CSSProperties["alignSelf"];
};

const Property1Default: NextPage<Property1DefaultType> = ({
  property1DefaultPosition,
  property1DefaultWidth,
  property1DefaultAlignSelf,
}) => {
  const property1DefaultStyle: CSSProperties = useMemo(() => {
    return {
      position: property1DefaultPosition,
      width: property1DefaultWidth,
      alignSelf: property1DefaultAlignSelf,
    };
  }, [
    property1DefaultPosition,
    property1DefaultWidth,
    property1DefaultAlignSelf,
  ]);

  return (
    <div
      className="relative w-[1330px] h-[57px] flex flex-row py-2.5 px-4 box-border items-center justify-center text-left text-xl text-white font-para-medium"
      style={property1DefaultStyle}
    >
      <b className="relative">Send</b>
    </div>
  );
};

export default Property1Default;
