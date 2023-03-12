import Component from '../../util/core';
import './switch-button.scss';

const getSwitchButton = () => {
  const divToggle = document.createElement('div');

  divToggle.classList.add('toggle');
  const divToggleBtn = document.createElement('div');
  divToggleBtn.classList.add('toggle-button');
  const divOk: HTMLDivElement = document.createElement('div');
  divOk.classList.add('ok');
  divToggleBtn.append(divOk);

  divToggle.append(divToggleBtn);

  divToggle.addEventListener('click', () => {
    divToggle.classList.toggle('active');
  });
  return divToggle;
};

export default getSwitchButton;

export class SwitchButton extends Component {
  constructor() {
    super({
      tagName: 'div',
      className: ['toggle'],
    });
    const btn = new Component({
      tagName: 'div',
      className: ['toggle-button'],
    });
    const ok = new Component({
      tagName: 'div',
      className: ['ok'],
    });
    btn.append([ok.getElement()]);
    this.append([btn.getElement()]);
    this.addEvent('click', (event, template) => {
      template.classList.toggle('active');
    });
  }
}
