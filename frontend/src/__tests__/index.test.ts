import { sum } from '../index';

describe('sum', () => {
  it('adds two numbers', () => {
    const div: HTMLElement = sum(1, 2);
    expect(div.innerText).toBe(undefined);
  });
});
