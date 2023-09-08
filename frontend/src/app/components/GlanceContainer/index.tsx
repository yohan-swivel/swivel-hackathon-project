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
    <div className="container_inner" id={data.dataScrollTo}>
      <section className="section">
        <HeaderText
          headerDescription={data.headerDescription}
          headerText={data.headerText}
        />
      </section>
      {data.glanceStack &&
        data.glanceStack.map(
          (glanceStackItem: GlanceStackProps, index: number) => (
            <section className="section" key={index}>
              <GlanceStack key={index} {...glanceStackItem} />
            </section>
          )
        )}
    </div>
  );
};

export default GlanceContainer;
