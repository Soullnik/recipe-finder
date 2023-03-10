class Component {
  parent: any;

  constructor(tagName: string, className: string | string[], src?: string) {
    this.parent = document.createElement(tagName);
    this.parent.classList.add(className);
    if (src) {
      this.parent.src = src
    }
  }

  getElement() {
    return this.parent;
  }
}

export default Component;
