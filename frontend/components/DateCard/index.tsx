interface DateCardProps {
  headerText: string;
  dateText: string;
  headerIconPath: string;
}

const DateCard: React.FC = () => {
  return (
    <div className="flex-1 bg-glass-bg h-[142px] overflow-hidden flex flex-col py-[3px] px-8 box-border items-center justify-center gap-[16px]">
      <div className="flex flex-row items-center justify-center gap-[6px]">
        <img
          className="relative w-[22px] h-[22px] overflow-hidden shrink-0"
          alt=""
          src="/icoutlinedaterange.svg"
        />
        <div className="relative">Happening</div>
      </div>
      <div className="self-stretch relative box-border h-px border-t-[1px] border-solid border-gray-200" />
      <div className="relative text-5xl">{`14th & 15th September 2023`}</div>
    </div>
  );
};

export default DateCard;
