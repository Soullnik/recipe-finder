import './input.scss';

class Input {
  public readonly element: HTMLInputElement;

  constructor(type: string, name: string, placeholder?: string) {
    this.element = document.createElement('input');
    this.element.type = type;
    this.element.name = name;
    if (placeholder) {
      this.element.placeholder = placeholder;
    }
  }

  create(append: Element, title?: string) {
    const container = document.createElement('label');
    const containerTitle = document.createElement('div');
    const containerBody = document.createElement('div');
    container.classList.add(`input`);
    containerTitle.classList.add(`input__title`);
    containerBody.classList.add(`input__body`);
    containerTitle.textContent = `${title || ''}`;
    append.append(container);
    container.append(containerTitle);
    container.append(containerBody);
    containerBody.append(this.element);
    this.element.classList.add(`input__input_element`);

    // container.addEventListener('click', (e) => {
    //   if (e.target === this.element) {
    //     container.classList.add('border_2px');
    //   } else {
    //     container.classList.remove('border_2px');
    //   }
    // });
  }
}
export default Input;
