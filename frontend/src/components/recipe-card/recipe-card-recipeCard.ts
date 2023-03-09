import Component from '../../util/core';
import  Reviews  from './recipe-card-reviews';
import './recipe-card-style.scss';

class RecipeCard extends Component {
  recipeCardTitle: HTMLElement;

  recipeCardBtn: HTMLInputElement;

  constructor() {
    super('div', 'recipe-card');
    this.recipeCardBtn = new Component(
      'button',
      'recipe-card__btn'
    ).getElement();
    this.recipeCardBtn.addEventListener('click', () => {
      this.recipeCardBtn.classList.toggle('like');
    });
    this.recipeCardTitle = document.createElement('span');
    this.recipeCardTitle.classList.add('recipe-card__title');
    this.recipeCardTitle.innerHTML = 'Блинчики с Малиной';
    this.createRecipeCard();
  }

  createRecipeCard() {
    this.parent.append(
      new Component('img', 'recipe-card__image').getElement(),
      this.recipeCardBtn,
      new Reviews().getElement(),
      this.recipeCardTitle
    );
  }
}

export default RecipeCard;