/* eslint-disable @typescript-eslint/no-use-before-define */
export enum PortfolioMode {
  Loading = "Loading",
  Main = "Main",
  Details = "Detail",
  MobileMenu = "MobileMenu",
}
export type LayoutState = [PortfolioMode, (v: PortfolioMode) => void];

export const GAP_BETWEEN_MODES = "100%";

export const calculateVariants = (currentMode: PortfolioMode, mode: PortfolioMode) => {
  type Position = {
    left: string;
    top: string;
    transformOrigin?: string;
    scale?: number;
    filter?: string;
  };

  const currentPosition: Position = selectCurrentPosition();

  return {
    active: { scale: 1, filter: "blur(0px)", left: "0px", top: "0px" },
    inactive: {
      scale: 0.9,
      filter: "blur(5px)",
      ...currentPosition,
    },
  };

  function getLoadingPosition(): Position {
    if (currentMode === PortfolioMode.Main || currentMode === PortfolioMode.MobileMenu) {
      return { left: "0px", top: `-${GAP_BETWEEN_MODES}` };
    }
    if (currentMode === PortfolioMode.Details) {
      return { left: "0px", top: `-${GAP_BETWEEN_MODES}` };
    }
    return { left: "0px", top: "0px" };
  }
  function getDetailsPosition(): Position {
    if (currentMode === PortfolioMode.Main || currentMode === PortfolioMode.MobileMenu) {
      return { left: `${GAP_BETWEEN_MODES}`, top: "0px" };
    }
    if (currentMode === PortfolioMode.Loading) {
      return { left: `${GAP_BETWEEN_MODES}`, top: `${GAP_BETWEEN_MODES}` };
    }
    return { left: "0px", top: "0px" };
  }
  function getMainPosition(): Position {
    if (currentMode === PortfolioMode.Loading) {
      return { left: "0px", top: `${GAP_BETWEEN_MODES}`, transformOrigin: "center" };
    }
    if (currentMode === PortfolioMode.Details) {
      return { left: `-${GAP_BETWEEN_MODES}`, top: "0px", transformOrigin: "center" };
    }
    if (currentMode === PortfolioMode.MobileMenu) {
      return { left: `150px`, top: "-300px", transformOrigin: "top right", scale: 1, filter: "blur(0px)" };
    }
    return { left: "0px", top: "0px", transformOrigin: "center" };
  }
  function getMobileMenuPosition(): Position {
    if (currentMode === PortfolioMode.Loading) {
      return { left: "0px", top: `${GAP_BETWEEN_MODES}` };
    }
    if (currentMode === PortfolioMode.Details) {
      return { left: `-${GAP_BETWEEN_MODES}`, top: "0px" };
    }

    return { left: "0px", top: "0px" };
  }

  function selectCurrentPosition() {
    if (mode === PortfolioMode.Main) return getMainPosition();
    if (mode === PortfolioMode.MobileMenu) return getMobileMenuPosition();
    if (mode === PortfolioMode.Details) return getDetailsPosition();
    return getLoadingPosition();
  }
};

export const layoutAnimationSettings = {
  transition: { bounce: 0, duration: 0.5 },
};
