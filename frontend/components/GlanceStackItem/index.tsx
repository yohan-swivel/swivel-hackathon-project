interface GlanceStackItemProps {
  sectionTitle: string;
  eventDescription: string;
}

const GlanceStackItem: React.FC<GlanceStackItemProps> = (props) => {
  return (
    <>
      <div className="self-stretch flex-1 bg-glass-bg flex flex-col p-8 items-start justify-start gap-[32px] text-left text-5xl text-white font-para-medium">
        <div className="self-stretch flex flex-row items-start justify-start">
          <b className="flex-1 relative">{props.sectionTitle}</b>
        </div>
        <div className="self-stretch relative text-base leading-[26px] font-medium">
          {props.eventDescription}
        </div>
      </div>
    </>
  );
};

export default GlanceStackItem;
