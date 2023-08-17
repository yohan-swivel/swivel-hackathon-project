import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type Property1Frame31Type = {
  group?: string;
  group1?: string;

  /** Style props */
  property1Frame31Position?: CSSProperties["position"];
  groupIconWidth?: CSSProperties["width"];
  groupIconWidth1?: CSSProperties["width"];
  groupIconHeight?: CSSProperties["height"];
};

const Property1Frame31: NextPage<Property1Frame31Type> = ({
  group,
  group1,
  property1Frame31Position,
  groupIconWidth,
  groupIconWidth1,
  groupIconHeight,
}) => {
  const property1Frame31Style: CSSProperties = useMemo(() => {
    return {
      position: property1Frame31Position,
    };
  }, [property1Frame31Position]);

  const groupIconStyle: CSSProperties = useMemo(() => {
    return {
      width: groupIconWidth,
    };
  }, [groupIconWidth]);

  const groupIcon1Style: CSSProperties = useMemo(() => {
    return {
      width: groupIconWidth1,
      height: groupIconHeight,
    };
  }, [groupIconWidth1, groupIconHeight]);

  return (
    <div
      className="relative flex flex-row items-center justify-start gap-[10px]"
      style={property1Frame31Style}
    >
      <img
        className="relative w-20 h-20"
        alt=""
        src={group}
        style={groupIconStyle}
      />
      <img
        className="relative w-[116.31px] h-[39.31px]"
        alt=""
        src={group1}
        style={groupIcon1Style}
      />
    </div>
  );
};

export default Property1Frame31;
