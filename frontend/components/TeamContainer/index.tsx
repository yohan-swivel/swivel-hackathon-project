import HeaderText from "../HeaderText";
import TeamGrid from "../TeamGrid";

interface TeamContainerProps {}

const TeamContainer: React.FC = () => {
  return (
    <>
      <section
        className="absolute top-[1991px] w-[100%] flex flex-col items-center justify-center gap-[48px] text-center text-lg text-white font-para-medium"
        data-scroll-to="ourTeamContainer"
      >
        <HeaderText
          headerText="Meet Our Team"
          headerDescription="Swivel Group is guided and driven by the energy, innovation, and desire
                             to make a difference, that our talented and globally recognised
                             leadership team brings to the company from their diverse experiences.."
        />
        <TeamGrid />
      </section>
    </>
  );
};

export default TeamContainer;
