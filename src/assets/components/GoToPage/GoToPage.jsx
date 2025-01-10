import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

import "./styles.scss";

function GoToPage() {
  const tll = useRef(null);

  useEffect(() => {
    tll.current = gsap.timeline({ paused: true });

    tll.current.to("#loading", {
      duration: 2,
      y: "-100%",
    });

    tll.current.to("#loading-wrapper", {
      duration: 2.5,
      x: "100%",
    });

    setTimeout(() => {
      tll.current.play();
    }, 1500);
  }, []);

  return (
    <div id="loading-wrapper">
      <div id="loading"></div>
    </div>
  );
}

export default GoToPage;
