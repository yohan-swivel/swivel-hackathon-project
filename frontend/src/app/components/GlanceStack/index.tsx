import GlanceStackItem, { GlanceStackItemProps } from "../GlanceStackItem";

export interface GlanceStackProps {
  id: number;
  glanceStackHeading: string;
  glanceStackItems: Array<GlanceStackItemProps>;
}

const GlanceStack: React.FC<GlanceStackProps> = (props) => {
  return (
    <>
      <div className="absolute top-[1321px]  w-[100%] flex flex-col py-2.5 px-0 box-border items-start justify-center gap-[48px]">
        <div className="self-stretch flex flex-row items-center justify-center">
          <b className="relative">{props.glanceStackHeading}</b>
        </div>
        <div className="self-stretch flex flex-col items-start justify-center gap-[20px] px-20">
          <div className="self-stretch flex flex-row items-center w-[100%]  gap-[30px] ">
            {props.glanceStackItems &&
              props.glanceStackItems.map(
                (stackItem: GlanceStackItemProps, index: number) => (
                  <GlanceStackItem key={index} {...stackItem} />
                )
              )}
          </div>
        </div>
      </div>
    </>
  );
};

export default GlanceStack;