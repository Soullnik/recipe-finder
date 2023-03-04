
import СheckBox from './components/checkbox/checkbox';
import Input from './components/input/input';


export function sum(a: number, b: number): HTMLElement {
  return document.createElement('div');
}

const root: any = document.getElementById('root');

const input1 = new Input('text', '231', 'Адрес');
const input2 = new Input('text', '132', 'Паспортные данные');
const checkbox = new СheckBox('sex', ['male', 'female'], 1)
if (root) {
  input1.create(root);
  input2.create(root, 'Необязательно');
  checkbox.create(root)
  // input1.focus();
}
