import React from "react";
import DisplayLottie from "./DisplayLottie";
import splash from "@/assets/lottie/splashAnimation";

const Splashscreen = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[100vh]">
      <div className="h-[50vh]">
        <DisplayLottie animationData={splash} />
      </div>
      <div className="text-4xl">
        <span className="text-[#868e96]">&lt;</span>
        <span className="font-bold font-agustina p-2.5 pt-2  text-[#551a8B]">
          Paris Andana
        </span>
        <span className="text-[#868e96]">/&gt;</span>
      </div>
    </div>
  );
};

export default Splashscreen;
