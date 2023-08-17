import GlanceStack from "../GlanceStack";
import HeaderText from "../HeaderText";

interface GlanceContainerProps {}

const GlanceContainer: React.FC = () => {
  return (
    <>
      <section
        className="absolute top-[1063px] w-[100%] flex flex-col p-2.5 box-border items-center justify-center gap-[48px]"
        data-scroll-to="whatContainer"
      >
        <HeaderText
          headerDescription="SwivelHack2023 is a journey of innovation. As Swivel’s first hackathon,
        it will unite creative minds, foster collaboration, and turn brilliant
        ideas into impactful solutions. Tackle real-world challenges, embrace
        cutting-edge tech, and ignite change in the world of technology. Join us
        and shape the future and redefine possibilities at SwivelHack 2023. "
          headerText="What is SwivelHack?"
        />
      </section>
      <GlanceStack />
    </>
  );
};

export default GlanceContainer;
