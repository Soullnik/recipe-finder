const createCheckBox = (
  title: string,
  numsPoints: number,
  arr: string[],
  append: Element
) => {
  // title - пишем титульник для контейнера
  // numsPoints - количество чекбоксов
  // arr - массив с текстом для чекбоксов
  // append - в конец какого элемента вложить контейнер
  const container = document.createElement('div');
  container.classList.add('check_wrapper');
  const containerTitle = document.createElement('div');
  containerTitle.classList.add('check_wrapper__title');
  const containerBody = document.createElement('div');
  containerBody.classList.add('check_wrapper__body');
  containerTitle.textContent = title;
  append.append(container);
  container.append(containerTitle);
  container.append(containerBody);

  for (let i = 0; i < numsPoints; i += 1) {
    const label = document.createElement('label');
    containerBody.append(label);
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    label.innerHTML = `<span>${arr[i]}</span>`;
    label.setAttribute('for', 'myCheckbox');
    label.prepend(checkbox);
    label.classList.add('check_wrapper__checkbox');
  }
};
export default createCheckBox;
