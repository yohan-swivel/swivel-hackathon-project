interface DateCardProps {
  label: string
  icon: any 
  date: string
}

const DateCard: React.FC<DateCardProps> = (props) => {
  return (
    <div className="box_style">
      <div className="row">
        <img
          className="relative w-[22px] h-[22px] overflow-hidden shrink-0"
          alt=""
          src={props.icon}
        />
        <div className="sm_txt">{props.label}</div>
      </div>
      <div className="line" />
      <div className="normal_txt">{props.date}</div>
    </div>
  );
};

export default DateCard;
