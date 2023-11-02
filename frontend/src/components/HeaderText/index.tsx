import _ from "lodash";

interface HeaderTextProps {
  headerText: string;
  headerDescription?: string;
  descriptionPadding?: string;
}

const HeaderText: React.FC<HeaderTextProps> = (props) => {
  return (
    <>
      <h3 className="section_title">{props.headerText}</h3>
      {_.isEmpty(props.headerDescription) ? (
        <></>
      ) : (
        <p className="normal_txt ">{props.headerDescription}</p>
      )}
    </>
  );
};

export default HeaderText;
