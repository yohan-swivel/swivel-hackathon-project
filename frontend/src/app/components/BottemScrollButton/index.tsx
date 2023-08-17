import { MouseEventHandler } from "react";
import styles from "./bottemscrollbutton.module.css";

const BottemScrollButton: React.FC<{
  onClick: MouseEventHandler<HTMLDivElement>;
}> = (props) => {
  return (
    <div
      className="relative h-[165px] flex flex-row py-[21.5px] px-[251.8984375px] box-border items-start justify-center"
      onClick={props.onClick}
    >
      <img
        className={`relative w-[33px] h-[57px] overflow-hidden shrink-0 ${styles.vertMove}`}
        alt=""
        src="/6124b2f58640ceb5e18f1099-scrolldownsmallsvg1.svg"
      />
    </div>
  );
};

export default BottemScrollButton;
