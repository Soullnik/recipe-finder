import СheckBox from './components/checkbox/checkbox';

export function sum(a: number, b: number): HTMLElement {
  return document.createElement('div');
}

const root = document.querySelector('#root');
const resept1 = new СheckBox(
  'Макароны по флотски',
  ['Макароны', 'Фарш', 'Специи'],
  1
);
const resept2 = new СheckBox(
  'Мясо по французски',
  ['Филе', 'Сыр', 'Помидор', 'Майонез', 'Специи'],
  2
);

if (root) {
  resept1.create(root);
  resept2.create(root);
}
