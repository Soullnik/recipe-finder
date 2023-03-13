import Component from '../../util/core';

class Counter extends Component {
  private counterReduce: HTMLElement;
  private counterResult: HTMLElement;
  private counterIncrease: HTMLElement;
  private counter: number;
  constructor() {
    super('div', 'counter');
    this.counter = 0;
    this.createCounterReduce();
    this.createCounterIncrease();
    this.createCounterResult();
    this.createCounter();
  }
  private createCounterReduce() {
    this.counterReduce = document.createElement('button');
    this.counterReduce.classList.add('button__reduce');
    if (this.counter < 1) {
      this.counterReduce.classList.add('hidden-button');
    }
    this.counterReduce.addEventListener('click', () => {
      this.counter--;
      if (this.counter < 1) {
        this.counterReduce.classList.add('hidden-button');
      }
      this.counterResult.innerHTML = `${this.counter}`;
      return this.counter;
    });
  }
  private createCounterIncrease() {
    this.counterIncrease = document.createElement('button');
    this.counterIncrease.classList.add('button__increase');
    this.counterIncrease.addEventListener('click', () => {
      this.counter++;
      if (this.counter > 0) {
        this.counterReduce.classList.remove('hidden-button');
      }
      this.counterResult.innerHTML = `${this.counter}`;
      return this.counter;
    });
  }
  private createCounterResult() {
    this.counterResult = document.createElement('span');
    this.counterResult.classList.add('counter__result');
    this.counterResult.innerHTML = `${this.counter}`;
  }
  private createCounter() {
    this.parent.append(
      this.counterReduce,
      this.counterResult,
      this.counterIncrease
    );
  }
}

export default Counter;
