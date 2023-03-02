import "./cards-class.scss";
import imgPerson from "../../assets/data_analysis_icon_131031.svg"
import imgSecurity from  "../../assets/firewallshield_114494.svg"
import imgPayment from "../../assets/income_payday_pay_salary_payment_finance_invoice_day_icon_232618.svg"
import imgNotifications from "../../assets/alarm_alert_attention_bell_clock_notification_ring_icon_123203.svg"
import imgPrivacy from "../../assets/eye-visible-outlined-interface-symbol_icon-icons.com_57844.svg"
import imgPreferences from "../../assets/sliders_icon_128308.svg"
import imgBonus from "../../assets/Gift_icon-icons.com_52072.svg"

import { BaseComponent, BaseComponentImg } from '../../util/core';

const createCard = (a: string, b: string, c: string) => {
  const containerDiv = new BaseComponent({
    tag: 'div',
    classList: ['person-card'],
    children: [],
  });
  const linkBlock = new BaseComponent({
    tag: 'div',
    classList: ['card-link__block'],
    children: [],
  });
  const cardLink = new BaseComponent({
    tag: 'a',
    classList: ['card-link'],
    children: [],
  });
  const Personimg = new BaseComponentImg({
    tag: 'img',
    classList: ['card-link__personimg'],
    src: c,
    children: [],
  });
  const linkInformation = new BaseComponent({
    tag: 'div',
    classList: ['card-link__information'],
    children: [],
  });
  const linkAction = new BaseComponent({
    tag: 'div',
    classList: ['card-link__action'],
    children: [],
  });
  linkBlock.render().append(Personimg.render());
  linkBlock.render().append(linkInformation.render());
  linkBlock.render().append(linkAction.render());
  cardLink.render().append(linkBlock.render());
  containerDiv.render().append(cardLink.render());
  linkInformation.render().innerHTML = a;
  linkAction.render().innerHTML = b;
  return containerDiv.render();
};

export const createCardPerson = () => {
  return createCard(
    'Личная информация',
      'Предоставьте личные и контактные данные',
      imgPerson
  );
};
export const createCardSecurity = () => {
  return createCard(
    'Вход и безопасность',
      'Обновите пароль и обеспечьте безопасность аккаунта',
      imgSecurity
  );
};
export const createCardPayment = () => {
    return createCard(
      'Платежи и выплаты',
        'Проверьте платежи, выплаты, купоны и подарочные карты',
        imgPayment
    );
};
export const createCardNotifications = () => {
    return createCard(
      'Уведомления',
        'Выберите настройки уведомлений и способы связи',
        imgNotifications
    );
};
export const createCardPrivacy = () => {
    return createCard(
      'Конфиденциальность и совместное использование данных',
        'Управляйте личной информацией, подключенными сервисами и настройками совместного доступа к данным',
        imgPrivacy
    );
};
export const createCardPreferences = () => {
    return createCard(
      'Глобальные предпочтения',
        'Выберите язык, валюту и часовой пояс по умолчанию',
        imgPreferences
    );
};
export const createCardBonus = () => {
    return createCard(
      'Реферальный бонус и купон',
        'Баланс реферальных бонусов и купонов: 0$.Подробнее',
        imgBonus
    );
};