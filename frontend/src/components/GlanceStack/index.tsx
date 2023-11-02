import GlanceStackItem, { GlanceStackItemProps } from "../GlanceStackItem";

export interface GlanceStackProps {
  id: number;
  glanceStackHeading: string;
  glanceStackItems: Array<GlanceStackItemProps>;
}

const GlanceStack: React.FC<GlanceStackProps> = (props) => {
  return (
    <div>
      <h3 className="section_title">{props.glanceStackHeading}</h3>
      <div className="grid_container_2">
        {props.glanceStackItems &&
          props.glanceStackItems.map(
            (stackItem: GlanceStackItemProps, index: number) => (
              <GlanceStackItem key={index} {...stackItem} />
            )
          )}
      </div>
    </div>
  );
};

export default GlanceStack;
