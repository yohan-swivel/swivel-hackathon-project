interface VenueCardProps {
  headerText: string;
  locationText: string;
  headerIconPath: string;
}

const VenueCard: React.FC = () => {
  return (
    <div className="flex-1 bg-glass-bg h-[142px] overflow-hidden flex flex-col py-[3px] px-8 box-border items-center justify-center gap-[16px] text-center text-lg text-white font-para-medium">
      <div className="flex flex-row items-center justify-center gap-[6px]">
        <img
          className="relative w-[22px] h-[22px] overflow-hidden shrink-0"
          alt=""
          src="/ionlocationoutline.svg"
        />
        <div className="relative">At</div>
      </div>
      <div className="self-stretch relative box-border h-px border-t-[1px] border-solid border-gray-200" />
      <div className="flex flex-row items-center justify-center text-5xl">
        <div className="relative">{`Elegance & Colombo 05 Offices`}</div>
      </div>
    </div>
  );
};

export default VenueCard;
