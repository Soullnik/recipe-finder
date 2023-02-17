interface BasicPropsFn<T> {
  tag: string;
  classList: string[];
  id: string;
  children: HTMLElement[] | string[];
  events?: Record<string, (event: T | any)=> void>
}

interface BasicPropsClass {
  tag: string;
  classList: string[];
  id: string;
  children: HTMLElement[] | string[];
  events?: Record<string, ()=> void>
}

export const createComponent = <T>({
  tag,
  classList,
  id,
  children,
  events
}: BasicPropsFn<T>): HTMLElement => {
  const element = document.createElement(tag);
  element.classList.add(...classList);
  element.id = id;
  children.forEach((child) => {
    element.append(child);
  });
  if(events) {
    for (const key in events) {
      element.addEventListener(key, events[key])
    }
  }
  return element;
};

export class BaseComponent {
  element: HTMLElement;
  constructor({ tag, classList, id, children, events }: BasicPropsClass) {
    this.element = document.createElement(tag);
    this.element.classList.add(...classList);
    this.element.id = id;
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
