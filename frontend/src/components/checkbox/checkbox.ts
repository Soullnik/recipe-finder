class СheckBox {
  title: string;

  numsPoints: number;

  arr: string[];

  constructor(title: string, numsPoints: number, arr: string[]) {
    this.title = title;
    this.numsPoints = numsPoints;
    this.arr = arr;
  }

  create(append: Element) {
    const container = document.createElement('div');
    container.classList.add('check_wrapper');
    const containerTitle = document.createElement('div');
    containerTitle.classList.add('check_wrapper__title');
    const containerBody = document.createElement('div');
    containerBody.classList.add('check_wrapper__body');
    containerTitle.textContent = this.title;
    append.append(container);
    container.append(containerTitle);
    container.append(containerBody);

    for (let i = 0; i < this.numsPoints; i += 1) {
      const label = document.createElement('label');
      containerBody.append(label);
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      label.innerHTML = `<span>${this.arr[i]}</span>`;
      label.setAttribute('for', 'myCheckbox');
      label.prepend(checkbox);
      label.classList.add('check_wrapper__checkbox');
    }
  }
}
export default СheckBox;
