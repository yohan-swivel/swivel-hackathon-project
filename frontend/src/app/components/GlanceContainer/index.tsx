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
        className="flex flex-col p-2.5 box-border items-center justify-center gap-[48px] md:px-16"
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
