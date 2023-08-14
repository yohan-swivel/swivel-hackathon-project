import HeaderText from "../HeaderText";

interface ThemeContainerProps {}

const ThemeContainer: React.FC = () => {
  return (
    <>
      {" "}
      <section
        className="absolute top-[3251px]  w-[100%] flex flex-col items-center justify-center gap-[48px]"
        data-scroll-to="themesContainer"
      >
        <HeaderText headerText="SwivelHack Themes" />
        <div className="relative text-lg inline-block w-[1067px]">{`Lorem ipsum dolor sit amet consectetur. Id dui pellentesque velit tincidunt rhoncus id dictum nibh suscipit. Et pretium odio in diam odio vitae aliquam. Dictumst a vitae cursus quis odio malesuada aliquet justo. Tortor velit `}</div>
        <div className="w-[1330px] flex flex-col items-start justify-start gap-[32px]">
          {/* <ThemeContainer /> */}
          {/* <Theme2Container /> */}
        </div>
      </section>
    </>
  );
};

export default ThemeContainer;
