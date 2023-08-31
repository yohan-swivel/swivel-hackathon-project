import _ from "lodash";

interface HeaderTextProps {
  headerText: string;
  headerDescription?: string;
  descriptionPadding?: string;
}

const HeaderText: React.FC<HeaderTextProps> = (props) => {
  return (
    <>
      <b className="relative text-17xl">{props.headerText}</b>
      {_.isEmpty(props.headerDescription) ? (
        <></>
      ) : (
        <div className={`relative text-lg inline-block text-center ${props.descriptionPadding}`}>
          {props.headerDescription}
        </div>
      )}
    </>
  );
};

export default HeaderText;
