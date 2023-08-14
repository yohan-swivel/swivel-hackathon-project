import TeamGridItem from "../TeamGridItem";

interface TeamGridProps {
  teamName: string;
  teamMembers: any;
}

const TeamGrid: React.FC = () => {
  return (
    <>
      <div className="relative text-13xl">Board of Directors</div>
      <div className="self-stretch flex flex-row items-center justify-center">
        <div className="flex-1 flex flex-row items-center justify-center gap-[32px]">
          <TeamGridItem
            imageSrc="/rftl-534x287jpg@2x.png"
            memberName="Shanil Dissanayake"
            memberDesignation="CEO / Co-Founder"
          />
          <TeamGridItem
            imageSrc="/rftl-534x287jpg1@2x.png"
            memberName="Dmitry Loukine"
            memberDesignation="CGO / Co-Founder"
          />
        </div>
      </div>
      <div className="relative text-13xl">SwivelHack Committee 2023</div>
      <div className="self-stretch flex flex-row items-center justify-center gap-[32px]">
        <TeamGridItem
          imageSrc="/rftl-534x287jpg2@2x.png"
          memberName="Romani Rupasinghe"
          memberDesignation="Vice President - Engineering"
        />
        <TeamGridItem
          imageSrc="/rftl-534x287jpg3@2x.png"
          memberName="Natlie Jackson"
          memberDesignation="Committee Member"
        />
        <TeamGridItem
          imageSrc="/rftl-534x287jpg4@2x.png"
          memberName="Sanduni Mendis"
          memberDesignation="Committee Member"
        />
      </div>
    </>
  );
};

export default TeamGrid;
