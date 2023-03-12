import { UserService } from '../../services/user.service';
import Component from '../../util/core';
import './dropdown-menu-style.scss';
export class Dropdown extends Component {
  count: HTMLElement;

  constructor(private userService: UserService) {
    super({ tagName: 'button', className: ['dropdown'] });
    this.addEvent('click', () => {
      const selectList = document.querySelector('.select__list');
      selectList?.classList.toggle('hidden');
    });
    this.count = document.createElement('div');
    this.count.classList.add('dropdown__count');
    this.count.innerHTML = '0';
    this.createDropDown();
  }

  createDropDown() {
    this.append([
      new Component({
        tagName: 'img',
        className: ['dropdown__burger'],
        src: 'введите src',
      }).getElement(),
      new Component({
        tagName: 'img',
        className: ['dropdown__avatar'],
        src: this.userService.getAvatar(),
      }).getElement(),
      this.count,
    ]);
  }
}
export class Select extends Component {
  listItems: HTMLElement[];

  constructor(arr: string[]) {
    super({ tagName: 'ul', className: ['select__list', 'hidden'] });
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
    this.append(this.listItems);
  }
}
