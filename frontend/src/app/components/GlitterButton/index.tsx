import { CSSProperties, MouseEventHandler } from "react";
import _ from "lodash";

interface GlitterButtonProps {
  type: "submit" | "button" | "link";
  iconUrl?: string;
  buttonText: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  style?: CSSProperties;
  className?: string;
  href?: string;
}

const GlitterButton: React.FC<GlitterButtonProps> = (props) => {
  return (
    <>
      {props.type === "link" ? (
        <a href={props.href} style={{ textDecoration: "none", zIndex: 10 }}>
          <button
            className="gradientButton"
            onClick={props.onClick}
            style={{
              fontFamily: "Montserrat",
              fontSize: 15,
              fontWeight: "bold",
              ...props.style,
            }}
            type="button"
          >
            <b>{props.buttonText}</b>
            {!_.isEmpty(props.iconUrl) && (
              <img alt="arrow right" src={props.iconUrl} />
            )}
          </button>
        </a>
      ) : (
        <button
          className="gradientButton"
          onClick={props.onClick}
          style={props.style}
          type={props.type}
        >
          <b>{props.buttonText}</b>
          {!_.isEmpty(props.iconUrl) && (
            <img alt="arrow right" src={props.iconUrl} />
          )}
        </button>
      )}
    </>
  );
};

export default GlitterButton;
