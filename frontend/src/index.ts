export function sum(a: number, b: number): HTMLElement {
  return document.createElement('div');
}
import { createCardPerson,createCardSecurity,createCardPayment,createCardNotifications,createCardPrivacy,createCardPreferences,createCardBonus } from "./components/personal-cards/cards-class"
import { BaseComponent } from "./util/core";
import getSwitchButton from './components/switch-buttom/switch-button';
import СheckBox from './components/checkbox/checkbox';
import Input from './components/input/input';

const root: HTMLElement | null = document.getElementById('root');


const App = () => {
  const containerCard: any = new BaseComponent({
    tag: 'section',
    classList: ['container-card'],
    children: [],
  });
  const input1 = new Input('text', '231', 'Адрес');
const input2 = new Input('text', '132', 'Паспортные данные');
const checkbox = new СheckBox('sex', ['male', 'female'], 1);
if (root) {
  input1.create(root);
  input2.create(root, 'Необязательно');
  checkbox.create(root);
  root.append(getSwitchButton());
  // input1.focus();
}
  containerCard.render().append(createCardPerson())
  containerCard.render().append(createCardSecurity())
  containerCard.render().append(createCardPayment())
  containerCard.render().append(createCardNotifications())
  containerCard.render().append(createCardPrivacy())
  containerCard.render().append(createCardPreferences())
  containerCard.render().append(createCardBonus())
  root?.append(containerCard.render())
}
App()
  






