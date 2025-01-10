// import React, { useEffect } from "react";
// import gsap from "gsap";

// const SliderAnimation = () => {
//   const tl = React.useRef(null);

//   useEffect(() => {
//     // Задержка перед инициализацией анимации
//     const delay = setTimeout(() => {
//       tl.current = gsap.timeline({ paused: true });
//       tl.current.to(
//         [".archetypes-demo__item-number", ".archetypes-demo__img-box"],
//         {
//           duration: 1,
//           x: "0",
//         }
//       );

//       tl.current.from([".archetypes-demo__item-title .line"], {
//         duration: 1,

//         y: "300%",
//         rotate: "10deg",
//       });

//       tl.current.from([".archetypes-demo__item-text "], {
//         duration: 0.5,

//         opacity: 0,
//       });
//       tl.current.from(
//         [".archetypes-demo__button ", " .archetypes-demo__item-link"],
//         {
//           duration: 0.5,

//           opacity: 0,
//         }
//       );
//     }, 500); // Задержка в 0.3 секунды

//     return () => clearTimeout(delay);
//   }, []);

//   useEffect(() => {
//     const onServicesEntry = (entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           tl.current?.play();
//         }
//       });
//     };
//     const servicesObserver = new IntersectionObserver(onServicesEntry, {
//       threshold: 0.25,
//     });

//     const servicesElements = document.querySelectorAll(".slider-animation");
//     servicesElements.forEach((element) => servicesObserver.observe(element));

//     return () => {
//       servicesObserver.disconnect();
//     };
//   }, []);

//   return null;
// };

// export default SliderAnimation;
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollMagic from "scrollmagic";

const SliderAnimation = () => {
  const tl = useRef(null);
  const controller = useRef(null);

  useEffect(() => {
    const delay = setTimeout(() => {
      controller.current = new ScrollMagic.Controller();

      tl.current = gsap.timeline({ paused: true });
      tl.current.to(
        [".archetypes-demo__item-number", ".archetypes-demo__img-box"],
        {
          duration: 1,
          x: "0",
        }
      );

      tl.current.from([".archetypes-demo__item-title .line"], {
        duration: 1,

        y: "300%",
        rotate: "10deg",
      });

      tl.current.from([".archetypes-demo__item-text "], {
        duration: 0.5,

        opacity: 0,
      });
      tl.current.from(
        [".archetypes-demo__button ", " .archetypes-demo__item-link"],
        {
          duration: 0.5,

          opacity: 0,
        }
      );

      new ScrollMagic.Scene({
        triggerElement: ".slider-animation",
        triggerHook: 0.8,
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

export default SliderAnimation;
