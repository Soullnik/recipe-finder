import createCheckBox from './components/checkbox/checkbox';

export function sum(a: number, b: number): HTMLElement {
  return document.createElement('div');
}
const rooting = document.querySelector('#root');
if (rooting) {
  createCheckBox('123', 1, ['123'], rooting);
}
