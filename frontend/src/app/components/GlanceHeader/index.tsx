interface GlanceHeaderProps {
  headerText: string;
  headerDescription: string;
}

const GlanceHeader: React.FC = () => {
  return (
    <>
      <b className="relative">What is SwivelHack?</b>
      <div className="relative text-lg inline-block w-[1067px] text-center">
        SwivelHack2023 is a journey of innovation. As Swivel’s first hackathon,
        it will unite creative minds, foster collaboration, and turn brilliant
        ideas into impactful solutions. Tackle real-world challenges, embrace
        cutting-edge tech, and ignite change in the world of technology. Join us
        and shape the future and redefine possibilities at SwivelHack 2023. 
      </div>
    </>
  );
};

export default GlanceHeader;
