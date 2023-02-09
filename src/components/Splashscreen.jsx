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
        <span className="font-bold font-agustina p-2.5 pt-2 text-transparent bg-clip-text bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-amber-200 via-violet-600 to-sky-900">
          Paris Andana
        </span>
        <span className="text-[#868e96]">/&gt;</span>
      </div>
    </div>
  );
};

export default Splashscreen;
