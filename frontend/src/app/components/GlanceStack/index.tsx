import GlanceStackItem, { GlanceStackItemProps } from "../GlanceStackItem";

export interface GlanceStackProps {
  id: number;
  glanceStackHeading: string;
  glanceStackItems: Array<GlanceStackItemProps>;
}

const GlanceStack: React.FC<GlanceStackProps> = (props) => {
  return (
    <>
      <div className=" flex flex-col py-2.5 px-0 box-border items-start justify-center gap-[48px]">
        <div className="self-stretch flex flex-row items-center justify-center">
          <b className="relative">{props.glanceStackHeading}</b>
        </div>
        <div className="self-stretch grid grid-cols-2 px-10 items-center gap-[30px] ">
          {props.glanceStackItems &&
            props.glanceStackItems.map(
              (stackItem: GlanceStackItemProps, index: number) => (
                <GlanceStackItem key={index} {...stackItem} />
               
              )
            )}
        </div>
      </div>
      {/* <div className=" w-[100%]">
        <div className="custom-glow float-right  w-[300px] h-[300px] opacity-30" />
      </div> */}
    </>
  );
};

export default GlanceStack;
