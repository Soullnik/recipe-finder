import Component from '../../util/core';
import Counter from './increment-component-counter';
import './increment-component-style.scss';

class IncrementComponents extends Component {
  constructor() {
    super('div', 'increment-component');
    this.createIncrementComponent();
  }
  private createIncrementComponentTitle() {
    const IncrementComponentTitle: HTMLElement = document.createElement('span');
    IncrementComponentTitle.classList.add('increment-component__title');
    IncrementComponentTitle.innerHTML = 'Adults';
    return IncrementComponentTitle;
  }
  private CreateIncrementComponentСondition() {
    const IncrementComponentСondition: HTMLElement =
      document.createElement('span');
    IncrementComponentСondition.classList.add('increment-component__condition');
    IncrementComponentСondition.innerHTML = '(Ages 13 or above)';
    return IncrementComponentСondition;
  }
  private createIncrementComponent() {
    this.parent.append(
      this.createIncrementComponentTitle(),
      this.CreateIncrementComponentСondition(),
      new Counter().getElement()
    );
  }
}

export default IncrementComponents;
