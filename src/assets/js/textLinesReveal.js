import SplitType from 'split-type';

export class TextLinesReveal {
    constructor(animationElems) {
        this.DOM = {
            animationElems: Array.from(animationElems),
        };

        this.SplitTypeInstances = [];

        this.DOM.animationElems.forEach((el) => {
            const SplitTypeInstance = new SplitType(el, {types: 'lines'});
            this.SplitTypeInstances.push({instance: SplitTypeInstance, el});
        });

        this.handleResize = this.handleResize.bind(this);

        window.addEventListener('resize', this.handleResize);

        this.wrapLinesAndWords();

        setTimeout(() => {
            this.handleResize();
        }, 0);
    }

    wrapLinesAndWords() {
        this.SplitTypeInstances.forEach(({instance}) => {
            instance.lines.forEach((line) => {
                const lineWrapper = document.createElement('div');
                lineWrapper.classList.add('line-wrapper');

                line.parentNode.insertBefore(lineWrapper, line);
                lineWrapper.appendChild(line);

                const words = line.textContent.split(/\s+/);
                line.innerHTML = words
                    .map((word) => `<span class="word">${word}</span>`)
                    .join(' ');
            });
        });
    }

    handleResize() {
        this.SplitTypeInstances.forEach(({instance}) => {
            instance.split();
        });
        this.wrapLinesAndWords();
    }
}
// gsapItems.forEach((gsIt) => {
//   const imgInner = gsIt.querySelector(".about__author-imgBg");
//   const imgBl = gsIt.querySelector(".about__author-imgBl");
//   const imgImg = gsIt.querySelector(".about__author-img");
//   const imgTest = gsIt.querySelector(".about__info-subtext");
//   let tl = gsap.timeline({
//     scrollTrigger: {
//       trigger: gsIt,
//       start: "top 70%",
//       toggleActions: "play none none none",
//       markers: true,
//     },
//   });
//   tl.from(imgTest, {
//     duration: 0.5,
//     opacity: "0",
//   });

//   tl.to(imgInner, {
//     duration: 0.5,
//     // clipPath: "polygon(0% 0%, 100% 0%,100% 100%, 0%)",
//     opacity: "0",
//     ease: "expo.out",
//   });
// });
