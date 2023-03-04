import './input.scss';

class Input {
  public readonly element: HTMLInputElement;

  // type - тип Input (читать про Input HTML)
  // name - имя Input (читать про Input HTML)
  // placeholder - подсказка при вводе Input (читать про Input HTML)

  constructor(type: string, name: string, placeholder?: string) {
    this.element = document.createElement('input');
    this.element.type = type;
    this.element.name = name;
    if (placeholder) {
      this.element.placeholder = placeholder;
    }
  }

  create(append: Element, title?: string) {
    // append - Элемент в конец которого мы вкладываем Input
    // title - приписка над Input

    const container = document.createElement('label');
    const containerBody = document.createElement('div');
    container.classList.add(`input`);
    containerBody.classList.add(`input__body`);
    append.append(container);
    if (title) {
      const containerTitle = document.createElement('div');
      containerTitle.textContent = `${title || ''}`;
      containerTitle.classList.add(`input__title`);
      container.append(containerTitle);
      container.style.cssText = 'justify-content:flex-end';
    }
    container.append(containerBody);
    containerBody.append(this.element);
    this.element.classList.add(`input__input_element`);

    container.addEventListener('focusin', () => {
      container.classList.add('border_2px');
    });
    container.addEventListener('focusout', () => {
      container.classList.remove('border_2px');
    });
  }
}
export default Input;
