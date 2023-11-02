"use client";
import loadingAnimation from "@/utils/loading-animation.json";
import LottieLoader from "react-lottie-loader";

const LoadingAnimation: React.FC = () => {
  return (
    <div className="load_center">
      <LottieLoader
        animationData={loadingAnimation}
        style={{
          width: 200,
          height: 200,
        }}
        className="m-auto"
      />
    </div>
  );
};

export default LoadingAnimation;
