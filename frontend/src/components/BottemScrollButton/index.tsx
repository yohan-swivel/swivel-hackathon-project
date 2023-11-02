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
        className={`relative w-[33px] h-[57px] overflow-hidden shrink-0 ${styles.vertMove}`}
      />
    </div>
  );
};

export default BottemScrollButton;
