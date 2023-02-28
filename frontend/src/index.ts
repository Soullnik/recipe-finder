import Input from './components/input/input';

export function sum(a: number, b: number): HTMLElement {
  return document.createElement('div');
}

const root: any = document.getElementById('root');

const input1 = new Input('text', '231');

const input2 = new Input('text', '132');
if (root) {
  input1.create(root, '1');
  input2.create(root, '2');
  // input1.focus();
}
