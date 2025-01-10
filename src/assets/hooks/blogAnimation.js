// import React, { useEffect } from "react";
// import gsap from "gsap";

// const BlogAnimation = () => {
//   const tl = React.useRef(null);

//   useEffect(() => {
//     // Задержка перед инициализацией анимации
//     const delay = setTimeout(() => {
//       tl.current = gsap.timeline({ paused: true });
//       tl.current.from(".blog-list__item", {
//         duration: 1,
//         stagger: {
//           amount: 0.5,
//         },
//         x: "-100%",
//       });
//       tl.current.from(
//         [".blog-list__tag", ".blog-list__item .line", ".blog-list__link"],
//         {
//           duration: 1,
//           stagger: {
//             amount: 0.5,
//           },
//           y: "500%",
//           rotate: "10deg",
//         }
//       );
//     }, 300); // Задержка в 0.3 секунды

//     return () => clearTimeout(delay);
//   }, []);

//   useEffect(() => {
//     const onBlogEntry = (entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           tl.current?.play();
//         }
//       });
//     };

//     const blogObserver = new IntersectionObserver(onBlogEntry, {
//       threshold: 0.25,
//     });

//     const blogElements = document.querySelectorAll(".blog-animation");
//     blogElements.forEach((element) => blogObserver.observe(element));

//     return () => {
//       blogObserver.disconnect();
//     };
//   }, []);

//   return null;
// };

// export default BlogAnimation;
import React, {useEffect, useRef} from 'react';
import gsap from 'gsap';
import ScrollMagic from 'scrollmagic';

const BlogAnimation = () => {
    const tl = useRef(null);
    const controller = useRef(null);

    useEffect(() => {
        const delay = setTimeout(() => {
            controller.current = new ScrollMagic.Controller();

            tl.current = gsap.timeline({paused: true});
            tl.current.from('.blog-list__item', {
                duration: 1,
                stagger: {
                    amount: 0.5,
                },
                x: '-100%',
            });
            tl.current.from(
                [
                    '.blog-list__tag',
                    '.blog-list__item .line',
                    '.blog-list__link',
                ],
                {
                    duration: 1,
                    stagger: {
                        amount: 0.5,
                    },
                    y: '500%',
                    rotate: '10deg',
                }
            );

            new ScrollMagic.Scene({
                triggerElement: '.blog-animation',
                triggerHook: 0.8,
                reverse: false,
            })
                .on('enter', () => {
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

export default BlogAnimation;
// React.useEffect(() => {
//   const gsapItems = document.querySelectorAll(
//     ".archetypes-demo__item-wrapper"
//   );
//   gsapItems.forEach((element) => {
//     const imgBg = element.querySelector(".archetypes-demo__item-imgBg");
//     const imgBl = element.querySelector(".archetypes-demo__item-imgBl");
//     const imgImg = element.querySelector(".archetypes-demo__item-img");
//     const delay = setTimeout(() => {
//       let tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: element,
//           start: "top 70%",
//           toggleActions: "play none none none",
//         },
//       });
//       tl.from(imgBg, {
//         width: 0,
//         duration: 1,
//       })
//         .from(imgBl, {
//           width: 0,
//           duration: 1,
//         })
//         .from(imgImg, {
//           scale: 1,
//           filter: "blur(15px)",
//           duration: 1,
//         });
//     }, 500);
//     return () => clearTimeout(delay);
//   });
// }, []);
