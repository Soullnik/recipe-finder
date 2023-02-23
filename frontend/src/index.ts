import СheckBox from './components/checkbox/checkbox';

export function sum(a: number, b: number): HTMLElement {
  return document.createElement('div');
}

const rooting = document.querySelector('#root');
const resept = new СheckBox('123', 3, ['123', '123', '123']);
if (rooting) {
  resept.create(rooting);
}
