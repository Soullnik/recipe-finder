import { describe, expect, test } from '@jest/globals';
import СheckBox from '../components/checkbox/checkbox';

describe('test', () => {
  test('asdfsdf', () => {
    const checkBox = new СheckBox('sex', ['male', 'female'], 1);
    expect(checkBox).toBeDefined();
  });
});
