import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

import "./styles.scss";

function Preloader() {
  const [percent, setPercent] = useState(1);
  const barRef = useRef(null);
  const tll = useRef(null);

  useEffect(() => {
    tll.current = gsap.timeline({ paused: true });
    // document.body.classList.add("menu-open");
    tll.current.to("#percent, #bar", {
      duration: 0.15,
      opacity: 0,
      zIndex: -1,
    });
    tll.current.to("#preloader", {
      duration: 1.5,
      // height: "0%",
      y: "-100%",
    });
    tll.current.to("#preloader-wrapper", {
      duration: 2,
      x: "100%",
      // onComplete: () => {
      //   document.body.classList.remove("menu-open");
      // },
    });
  }, []);

  useEffect(() => {
    let width = 1;
    let id = setInterval(() => {
      if (width >= 100) {
        clearInterval(id);
        tll.current.play();
      } else {
        width++;
        setPercent(width);
        if (barRef.current) {
          barRef.current.style.width = width + "%";
        }
      }
    }, 10);

    return () => clearInterval(id);
  }, []);

  return (
    <div id="preloader-wrapper">
      <div id="preloader">
        <div id="percent">{percent}%</div>
        <div id="bar">
          <div ref={barRef} id="barconfirm"></div>
        </div>
      </div>
    </div>
  );
}

export default Preloader;
