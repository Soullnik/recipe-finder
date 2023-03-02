export function sum(a: number, b: number): HTMLElement {
  return document.createElement('div');
}
import { createCardPerson,createCardSecurity,createCardPayment,createCardNotifications,createCardPrivacy,createCardPreferences,createCardBonus } from "./components/personal-cards/cards-class"
import { BaseComponent } from "./util/core";

const root: any = document.getElementById('root');
const containerCard: any = new BaseComponent({
  tag: 'section',
  classList: ['container-card'],
  children: [],
});

const App = () => {
  containerCard.render().append(createCardPerson())
  containerCard.render().append(createCardSecurity())
  containerCard.render().append(createCardPayment())
  containerCard.render().append(createCardNotifications())
  containerCard.render().append(createCardPrivacy())
  containerCard.render().append(createCardPreferences())
  containerCard.render().append(createCardBonus())
}
App()
  
root?.append(containerCard.render())