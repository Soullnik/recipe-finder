import {
  Dropdown,
  Select,
} from './components/dropdown menu/dropdown-menu-class';

const root: HTMLElement | null = document.getElementById('root');

const App = () => {
  const dropDown = new Dropdown();
  const select = new Select([
    'Сообщения',
    'Уведомления',
    'Аккаунт',
    'Помощь',
    'Выйти',
  ]);
  root?.append(dropDown.getElement(), select.getElement());
};
App();
