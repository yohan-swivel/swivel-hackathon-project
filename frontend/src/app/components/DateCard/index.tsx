const DateCard: React.FC<{ date: string }> = (props) => {
  return (
    <div className="box_style">
      <div className="row">
        <img
          className="relative w-[22px] h-[22px] overflow-hidden shrink-0"
          alt=""
          src="/icoutlinedaterange.svg"
        />
        <div className="sm_txt">Held</div>
      </div>
      <div className="line"/>
      <div className="normal_txt">{props.date}</div>
    </div>
  );
};

export default DateCard;
