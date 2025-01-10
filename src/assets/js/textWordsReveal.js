import SplitType from "split-type";

export class TextWordsSplit {
  constructor(animationElems) {
    this.DOM = {
      animationElems: Array.from(animationElems),
    };

    // Array of SplitType instances
    this.SplitTypeInstances = [];

    // Initialize SplitType for each animation element
    this.DOM.animationElems.forEach((el) => {
      const SplitTypeInstance = new SplitType(el, { types: "words" });
      this.SplitTypeInstances.push({ instance: SplitTypeInstance, el });
    });

    // Call resize event handler
    this.handleResize = this.handleResize.bind(this);
    window.addEventListener("resize", this.handleResize);

    // Wrap each word with appropriate HTML elements
    this.wrapWords();
  }

  // Method to wrap each word inside a line with appropriate HTML elements
  wrapWords() {
    this.SplitTypeInstances.forEach(({ instance }) => {
      instance.words.forEach((word) => {
        // Wrap each word with a span
        word.outerHTML = `<span class="word-box">${word.outerHTML}</span>`;
      });
    });
  }

  handleResize() {
    this.SplitTypeInstances.forEach(({ instance }) => {
      instance.split();
    });
    this.wrapWords();
  }
}
