
interface BasicPropsClass {
    tag: string;
    classList: string[];
    children: HTMLElement[] | string[];
    events?: Record<string, ()=> void>
  }
  interface BasicPropsClassImg {
    tag: string;
    classList: string[];
    src: any;
    children: HTMLImageElement[] | string[];
    events?: Record<string, ()=> void>
  }
  
  export class BaseComponent {
    element:  HTMLElement;
    constructor({ tag, classList, children, events }: BasicPropsClass) {
      this.element = document.createElement(tag);
      this.element.classList.add(...classList);
      if(events) {
        for (const key in events) {
          this.element.addEventListener(key, events[key])
        }
      }
      children.forEach((child) => {
        this.element.append(child);
      });
    }
    render(): HTMLElement {
      return this.element;
    }
  }
  export class BaseComponentImg {
    element:  HTMLImageElement;
    constructor({ tag, classList,src, children, events }: BasicPropsClassImg) {
      this.element = document.createElement('img');
      this.element.classList.add(...classList);
      this.element.src = src;
      if(events) {
        for (const key in events) {
          this.element.addEventListener(key, events[key])
        }
      }
      children.forEach((child) => {
        this.element.append(child);
      });
    }
    render(): HTMLImageElement {
      return this.element;
    }
  }