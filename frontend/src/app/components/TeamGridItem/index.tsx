interface TeamGridItemProps {
  imageSrc: string;
  memberName: string;
  memberDesignation: string;
}

const TeamGridItem: React.FC<TeamGridItemProps> = (props) => {
  return (
    <>
      <div className="bg-glass-bg w-[316px] h-[387px] flex flex-col p-8 box-border items-center justify-center gap-[32px] text-lg text-white font-para-medium">
        <img
          className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src={props.imageSrc}
        />
        <div className="self-stretch flex flex-row items-end justify-between">
          <div className="flex flex-col items-center justify-center gap-[8px]">
            <b className="relative">{props.memberName}</b>
            <div className="relative text-mini">{props.memberDesignation}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamGridItem;
