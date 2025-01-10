import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollMagic from "scrollmagic";

const ServicesAnimation = () => {
  const tl = useRef(null);
  const controller = useRef(null);

  useEffect(() => {
    const delay = setTimeout(() => {
      controller.current = new ScrollMagic.Controller();

      tl.current = gsap.timeline({ paused: true });
      tl.current.from(".services-list__item", {
        duration: 1,
        stagger: {
          amount: 0.5,
        },
        x: "-100%",
      });
      tl.current.from(
        [".services-list__button", ".services-list__item .line"],
        {
          duration: 1,
          stagger: {
            amount: 0.5,
          },
          y: "500%",
          rotate: "10deg",
        }
      );

      new ScrollMagic.Scene({
        triggerElement: ".services-animation",
        triggerHook: 0.5,
        reverse: false,
      })
        .on("enter", () => {
          tl.current.play();
        })
        .addTo(controller.current);
    }, 500);

    return () => {
      clearTimeout(delay);
      controller.current.destroy();
    };
  }, []);

  return null;
};

export default ServicesAnimation;
