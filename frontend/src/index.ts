import {
  Dropdown,
  Select,
} from './components/dropdown menu/dropdown-menu-class';
import getSwitchButton, {
  SwitchButton,
} from './components/switch-buttom/switch-button';
import СheckBox from './components/checkbox/checkbox';
import Input from './components/input/input';
import userService from './services/user.service';

const root: HTMLElement | null = document.getElementById('root');

const App = () => {
  const input1 = new Input('text', '231', 'Адрес');
  const input2 = new Input('text', '132', 'Паспортные данные');
  const checkbox = new СheckBox('sex', ['male', 'female'], 1);
  const dropDown = new Dropdown(userService);
  const select = new Select([
    'Сообщения',
    'Уведомления',
    'Аккаунт',
    'Помощь',
    'Выйти',
  ]);
  const switchButton = new SwitchButton();
  if (root) {
    input1.create(root);
    input2.create(root, 'Необязательно');
    checkbox.create(root);
    root.append(switchButton.getElement());
    // input1.focus();
  }
  root?.append(dropDown.getElement(), select.getElement());
};
App();
