import React from "react";
import gsap from "gsap";

const StorysAnimation = () => {
  const tl = React.useRef(null);

  React.useEffect(() => {
    const delay = setTimeout(() => {
      tl.current = gsap.timeline({ paused: true });
      tl.current.from(".storys-demo__body", {
        duration: 0.5,
        stagger: {
          amount: 0.5,
        },
        x: "-150% ",
        opacity: "0",
      });
      tl.current.from(".storys-demo__item-tag", {
        duration: 0.5,
        x: "-150% ",
      });

      tl.current.from(
        [
          ".storys-demo__item-tag .line",
          ".storys-demo__item-title .line",
          ".storys-demo__item-text .line",
        ],
        {
          duration: 1,
          stagger: {
            amount: 0.5,
          },
          y: "500%",
          rotate: "10deg",
        }
      );
      tl.current.from(".storys-demo__item-link", {
        duration: 0.5,
        opacity: "0",
      });
    }, 500);

    return () => clearTimeout(delay);
  }, []);

  React.useEffect(() => {
    const onStorysEntry = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          tl.current?.play();
        }
      });
    };

    const storysObserver = new IntersectionObserver(onStorysEntry, {
      threshold: 0.25,
    });

    const storysElements = document.querySelectorAll(".storys-animation");
    storysElements.forEach((element) => storysObserver.observe(element));

    return () => {
      storysObserver.disconnect();
    };
  }, []);

  return null;
};

export default StorysAnimation;
