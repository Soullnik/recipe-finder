import './checkbox.scss';

//              Ояъвление элемента
// title: загаловок;
// arr: массив с перечеслением боксов по очереди
// columns: количество колонок

//        Создание элемента методом create(append)
// append: внутрь чего вложить структуру (в коннец)

class СheckBox {
  title: string;

  arr: string[]

  columns: number;

  constructor(title: string, arr: string[], columns: number) {
    this.title = title;
    this.arr = arr;

    this.columns = columns;
  }

  create(append: Element) {
    const container = document.createElement('div');
    container.classList.add('check_wrapper');
    const containerTitle = document.createElement('div');
    containerTitle.classList.add('check_wrapper__title');
    const containerBody = document.createElement('div');
    containerBody.classList.add('check_wrapper__body');
    containerBody.style.cssText = `grid-template-columns: repeat(${this.columns}, 1fr)`;
    containerTitle.textContent = this.title;
    append.append(container);
    container.append(containerTitle);
    container.append(containerBody);

    for (let i = 0; i < this.arr.length; i += 1) {
      const label = document.createElement('label');
      containerBody.append(label);
      const checkbox = document.createElement('input');
      const fakeCheckbox = document.createElement('span');
      checkbox.type = 'checkbox';
      label.innerHTML = `<span class="check_wrapper__checkbox_text">${this.arr[i]}</span>`;

      label.prepend(checkbox);
      checkbox.after(fakeCheckbox);
      checkbox.classList.add('check_wrapper__checkbox_input');
      label.classList.add('check_wrapper__checkbox');
      fakeCheckbox.classList.add('check_wrapper__checkbox_fake');
    }
  }
}
export default СheckBox;
