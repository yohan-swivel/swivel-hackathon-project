"use client";
import GlanceStack, { GlanceStackProps } from "../GlanceStack";
import HeaderText from "../HeaderText";

interface GlanceContainerProps {
  id: 1;
  __component: string;
  headerText: string;
  headerDescription: string;
  glanceStack: Array<GlanceStackProps>;
  dataScrollTo: string;
}

const GlanceContainer: React.FC<{ data: GlanceContainerProps }> = ({
  data,
}) => {
  return (
    <>
      <section
        className="absolute top-[1063px] w-[100%] flex flex-col p-2.5 box-border items-center justify-center gap-[48px]"
        data-scroll-to={data.dataScrollTo}
      >
        <HeaderText
          headerDescription={data.headerDescription}
          headerText={data.headerText}
        />
      </section>
      {data.glanceStack &&
        data.glanceStack.map(
          (glanceStackItem: GlanceStackProps, index: number) => (
            <GlanceStack key={index} {...glanceStackItem} />
          )
        )}
    </>
  );
};

export default GlanceContainer;
