interface VenueCardProps {
  label: string
  icon: any
  venue: string
}

const VenueCard: React.FC<VenueCardProps> = (props) => {
  return (
    <div className="box_style">
      <div className="row">
        <img alt="location" src={props.icon} />
        <div className="sm_txt">{props.label}</div>
      </div>
      <div className="line" />
      <div className="normal_txt">{props.venue}</div>
    </div>
  );
};

export default VenueCard;
