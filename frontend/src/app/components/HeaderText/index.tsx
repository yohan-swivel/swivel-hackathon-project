import _ from "lodash";

interface HeaderTextProps {
  headerText: string;
  headerDescription?: string;
}

const HeaderText: React.FC<HeaderTextProps> = (props) => {
  return (
    <>
      <b className="relative text-17xl">{props.headerText}</b>
      {_.isEmpty(props.headerDescription) ? (
        <></>
      ) : (
        <div className="relative text-lg inline-block text-center">
          {props.headerDescription}
        </div>
      )}
    </>
  );
};

export default HeaderText;
