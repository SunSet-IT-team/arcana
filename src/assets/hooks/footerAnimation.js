import React from "react";
import gsap from "gsap";

const FooterAnimation = () => {
  const tl = React.useRef(null);

  React.useEffect(() => {
    tl.current = gsap.timeline({ paused: true });
    tl.current.from(".footer__wrapper .footer__top", {
      duration: 1,
      stagger: {
        amount: 0.5,
      },
      x: "-100%",
    });
    tl.current.from(
      [
        ".footer__privacy-button",
        ".footer__menu-link",
        ".footer__contact-link",
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
  }, []);

  React.useEffect(() => {
    const onServicesEntry = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          tl.current.play();
        }
      });
    };

    const servicesObserver = new IntersectionObserver(onServicesEntry, {
      threshold: 0.25,
    });

    const servicesElements = document.querySelectorAll(".footer-animation");
    servicesElements.forEach((element) => servicesObserver.observe(element));

    return () => {
      servicesObserver.disconnect();
    };
  }, []);

  return null;
};

export default FooterAnimation;
