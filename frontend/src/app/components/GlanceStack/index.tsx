import GlanceStackItem from "../GlanceStackItem";

interface GlanceStackProps {
  heading: string;
  glanceItems: any;
}

const GlanceStack: React.FC = () => {
  return (
    <>
      <div className="absolute top-[1321px]  w-[100%] flex flex-col py-2.5 px-0 box-border items-start justify-center gap-[48px]">
        <div className="self-stretch flex flex-row items-center justify-center">
          <b className="relative">Benefits and Opportunities</b>
        </div>
        <div className="self-stretch flex flex-col items-start justify-center gap-[20px] px-20">
          <div className="self-stretch flex flex-row items-center justify-start gap-[20px] ">
            <GlanceStackItem
              sectionTitle="Level Up Your Skills "
              eventDescription="SwivelHack presents an exceptional chance to elevate your skills. Engage with fellow tech enthusiasts, share insights, and glean wisdom from seasoned IT mentors. Amplify your problem-solving abilities within a collaborative tech ecosystem that empowers growth."
            />
            <GlanceStackItem
              sectionTitle="Summon Your Squad"
              eventDescription="Form teams with fellow participants, or join an existing team, to work collaboratively on exciting projects. Experience the power of teamwork, exchange knowledge, and create something remarkable together. "
            />
          </div>
          <div className="self-stretch flex flex-row items-center justify-start gap-[20px]">
            <GlanceStackItem
              sectionTitle="Jump Over Hurdles"
              eventDescription="Challenge your capabilities by tackling authentic real-world issues. SwivelHack delivers a variety of problem statements, enabling you to demonstrate your creativity, critical reasoning, and forward-thinking solutions. "
            />
            <GlanceStackItem
              sectionTitle="Collaborate with Leaders in Innovation"
              eventDescription="SwivelHack offers an exclusive opportunity to engage with accomplished professionals and industry experts. Dive into impactful discussions, seek guidance, and glean invaluable insights into the realm of hackathons from those who have charted their course to success. "
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default GlanceStack;
