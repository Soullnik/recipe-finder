import getSwitchButton from './components/switch-buttom/switch-button';
import СheckBox from './components/checkbox/checkbox';
import Input from './components/input/input';
import  RecipeCard  from './components/recipe-card/recipe-card-recipeCard';

const root: HTMLElement | null = document.getElementById('root');

const App = () => {
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
  const recipeCard = new RecipeCard();
  root?.append(recipeCard.getElement());
};
App();
