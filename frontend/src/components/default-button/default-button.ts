import './default-button.scss';

export enum DefaultButtonTypes {
  pink = 'pink',
  white = 'white',
}

class DefaultButton {
  private text: string;

  private type: DefaultButtonTypes;

  private template!: HTMLButtonElement;

  private callback: (event: MouseEvent) => void;

  constructor(
    text: string,
    type: DefaultButtonTypes,
    callback: (event: MouseEvent) => void
  ) {
    this.text = text;
    this.callback = callback;
    this.type = type;
    this.create();
  }

  private create() {
    this.template = document.createElement('button');
    this.template.innerText = this.text;
    this.template.classList.add(
      'default-button',
      `default-button_${this.type}`
    );
    this.template.addEventListener('click', this.callback);
  }

  public render() {
    return this.template;
  }
}

export default DefaultButton;
