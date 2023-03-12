interface ComponentProps {
  tagName: string;
  className?: string[];
  src?: string;
}

class Component {
  private template: HTMLElement | HTMLImageElement;

  constructor(props: ComponentProps) {
    this.template = document.createElement(props.tagName);
    if (props.className) {
      this.template.classList.add(...props.className);
    }
    if (props.src && this.isImageElement(this.template)) {
      this.template.src = props.src;
    }
  }

  private isImageElement(
    template: HTMLElement | HTMLImageElement
  ): template is HTMLImageElement {
    return template.tagName === 'img';
  }

  public getElement() {
    return this.template;
  }

  public append(child: HTMLElement[]) {
    this.template.append(...child);
  }

  public addEvent(
    eventName: string,
    callback: (event: Event, template: HTMLElement) => void
  ) {
    this.template.addEventListener(eventName, (event: Event) =>
      callback(event, this.template)
    );
  }
}

export default Component;
