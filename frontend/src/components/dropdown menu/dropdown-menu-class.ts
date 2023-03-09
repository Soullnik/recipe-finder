import { UserService } from '../../services/user.service';
import Component from '../../util/core';
import './dropdown-menu-style.scss';
export class Dropdown extends Component {
  count: HTMLElement;

  constructor(private userService:UserService) {
    super('button', 'dropdown');
    this.parent.addEventListener('click', () => {
      const selectList = document.querySelector('.select__list');
      selectList?.classList.toggle('hidden');
    });
    this.count = document.createElement('div');
    this.count.classList.add('dropdown__count');
    this.count.innerHTML = '0';
    this.createDropDown();
  }

  createDropDown() {
    this.parent.append(
      new Component('img', 'dropdown__burger', 'введите src').getElement(),
      new Component('img', 'dropdown__avatar', this.userService.getAvatar()).getElement(),
      this.count
    );
  }
}
export class Select extends Component {
  listItems: HTMLElement[];

  constructor(arr: string[]) {
    super('ul', 'select__list');
    this.parent.classList.add('hidden');
    this.listItems = arr.map((item) => {
      const li = document.createElement('li');
      li.classList.add('select__item');
      li.innerHTML = item;
      li.addEventListener('click', () => {
        console.log('допилить ссылку');
      });
      return li;
    });
    this.createSelect();
  }

  createSelect() {
    this.parent.append(...this.listItems);
  }
}
