const MainShadowLayer: React.FC = () => {
  return (
    <>
      <img
        className="absolute top-[0px] left-[0px] w-[100%] h-[1069px] opacity-[0.7]"
        alt=""
        src="/shadow-1.svg"
      />
      <img
        className="mx-auto right-[0px] left-[0px] w-[100%] h-[1213px] opacity-[0.7]"
        alt=""
        src="/shadow-2.svg"
      />
      <img
        className="mx-auto right-[0px] left-[0px] w-[] h-[851px] opacity-[0.5]"
        alt=""
        src="/shadow-3.svg"
      />
      <img
        className="absolute top-[961px] mx-auto right-[0px] left-[0px] w-[606px] h-[1297px]"
        alt=""
        src="/shadow-right.svg"
      />
      <img
        className="mx-auto right-[0px] left-[0px] w-[609px] h-[1297px]"
        alt=""
        src="/shadow-left.svg"
      />
    </>
  );
};

export default MainShadowLayer;
