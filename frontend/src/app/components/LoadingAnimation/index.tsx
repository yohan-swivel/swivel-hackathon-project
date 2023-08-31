"use client";
import loadingAnimation from "@/app/utils/loading-animation.json";
import LottieLoader from "react-lottie-loader";

const LoadingAnimation: React.FC = () => {
  return (
    <div className="flex h-screen">
      <LottieLoader
        animationData={loadingAnimation}
        style={{
          width: 300,
          height: 300,
        }}
        className="m-auto"
      />
    </div>
  );
};

export default LoadingAnimation;
