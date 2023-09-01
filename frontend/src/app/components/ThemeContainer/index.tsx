"use client";
import HeaderText from "../HeaderText";
import ThemeItem, { ThemeItemProps } from "../ThemeItem";

interface ThemeContainerProps {
  id: number;
  __component: string;
  headerText: string;
  headerDescription: string;
  themeItems: Array<ThemeItemProps>;
  dataScrollTo: string;
}

const ThemeContainer: React.FC<{ data: ThemeContainerProps }> = ({ data }) => {
  return (
    <div className="container_inner">
      <section className="section" data-scroll-to={data.dataScrollTo}>
        <HeaderText
          headerText={data.headerText}
          headerDescription={data.headerDescription}
        />
        <div className="themes_grid">
          {data.themeItems &&
            data.themeItems.map((themeItem: ThemeItemProps, index: number) => (
              <ThemeItem {...themeItem} key={index} />
            ))}
        </div>
      </section>
    </div>
  );
};

export default ThemeContainer;
