import React, { useRef, useState } from "react";
import { motion as m, useScroll } from "framer-motion";
import { calculateVariants, layoutAnimationSettings, LayoutState, PortfolioMode } from "../utils/layout";

function Loading({ layoutState }: { layoutState: LayoutState }) {
  const [currentlyViewing, setCurrentlyViewing] = layoutState;
  return (
    <m.div
      className="absolute bg-black w-screen h-screen z-20 shadow-2xl"
      animate={currentlyViewing === PortfolioMode.Loading ? "active" : "inactive"}
      variants={calculateVariants(currentlyViewing, PortfolioMode.Loading)}
      {...layoutAnimationSettings}
    ></m.div>
  );
}
export default Loading;
