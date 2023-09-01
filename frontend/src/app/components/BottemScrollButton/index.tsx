import { MouseEventHandler } from "react";
import styles from "./bottemscrollbutton.module.css";

const BottemScrollButton: React.FC<{
  onClick: MouseEventHandler<HTMLDivElement>;
}> = (props) => {
  return (
    <div className="down_arrow" onClick={props.onClick}>
      <img
        alt="down_arrow"
        src="/6124b2f58640ceb5e18f1099-scrolldownsmallsvg1.svg"
      />
    </div>
  );
};

export default BottemScrollButton;
