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
    <>
      <section
        className=" flex flex-col items-center justify-center gap-[48px]"
        data-scroll-to={data.dataScrollTo}
      >
        <HeaderText
          headerText={data.headerText}
          headerDescription={data.headerDescription}
        />
        <div className="self-stretch grid grid-cols-3 px-12 items-start justify-start gap-[32px] text-left text-5xl text-white font-para-medium">
          {data.themeItems &&
            data.themeItems.map((themeItem: ThemeItemProps, index: number) => (
              <ThemeItem {...themeItem} key={index} />
            ))}
        </div>
      </section>
    </>
  );
};

export default ThemeContainer;
