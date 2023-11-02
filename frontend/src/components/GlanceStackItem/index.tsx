export interface GlanceStackItemProps {
  id: number;
  sectionTitle: string;
  sectionDescription: string;
}

const GlanceStackItem: React.FC<GlanceStackItemProps> = (props) => {
  return (
    <div className="box_benefit">
      <h4>{props.sectionTitle}</h4>
      <p>{props.sectionDescription}</p>
    </div>
  );
};

export default GlanceStackItem;
