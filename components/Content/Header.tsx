/* eslint-disable @typescript-eslint/no-use-before-define */
import { AnimatePresence, motion as m } from "framer-motion";
import * as React from "react";
import { useState, useEffect } from "react";

const Header = ({ showLogo }: { showLogo: boolean }) => {
  const textClass = "text-2xl";

  return (
    <div className="w-full h-20 justify-center items-center gap-44 hidden xl:flex top-0 sticky">
      <h1 className={textClass}>Work</h1>
      <h1 className={textClass}>About</h1>
      <div>
        <AnimatePresence>
          {showLogo && (
            <m.div
              className="text-center"
              exit={{ width: 0, scale: 0 }}
              initial={{ width: 0, scale: 0 }}
              animate={{ width: 100, scale: 1 }}
            >
              <h2>LUCAS</h2>
              <h2>PENNICE</h2>
            </m.div>
          )}
        </AnimatePresence>
      </div>
      <h1 className={textClass}>For devs</h1>
      <h1 className={textClass}>Contact</h1>
    </div>
  );
};

export default Header;
