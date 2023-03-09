import Component from '../../util/core';

class Reviews extends Component {
  counterMarks: HTMLElement;

  counterReviews: HTMLElement;

  constructor() {
    super('div', 'reviews');
    this.counterMarks = document.createElement('span');
    this.counterMarks.classList.add('reviews__counterMarks');
    this.counterMarks.innerHTML = '0';
    this.counterReviews = document.createElement('span');
    this.counterReviews.classList.add('reviews__counterReviews');
    this.counterReviews.innerHTML = `(0 reviews)`;
    this.createRecipeCard();
  }

  createRecipeCard() {
    this.parent.append(
      new Component('button', 'review__image').getElement(),
      this.counterMarks,
      this.counterReviews
    );
  }
}

export default Reviews;