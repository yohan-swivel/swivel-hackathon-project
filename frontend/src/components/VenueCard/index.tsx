const VenueCard: React.FC<{ venue: string }> = (props) => {
  return (
    <div className="box_style">
      <div className="row">
        <img alt="location" src="/ionlocationoutline.svg" />
        <div className="sm_txt">Location</div>
      </div>
      <div className="line" />
      <div className="normal_txt">{props.venue}</div>
    </div>
  );
};

export default VenueCard;
