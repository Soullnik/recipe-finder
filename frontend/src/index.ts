import СheckBox from './components/checkbox/checkbox';
import DefaultButton, {
  DefaultButtonTypes,
} from './components/default-button/default-button';

export function sum(a: number, b: number): HTMLElement {
  return document.createElement('div');
}

const root: any = document.getElementById('root');

root.append(
  new DefaultButton('Согласиться', DefaultButtonTypes.pink, () => {
    console.log('ok');
  }).render(),
  new DefaultButton('Отмена', DefaultButtonTypes.white, () => {
    console.log('ne ok');
  }).render()
);
