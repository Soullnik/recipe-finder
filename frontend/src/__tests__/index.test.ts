import СheckBox from '../components/checkbox/checkbox';

describe('test', () => {
  const checkBox = new СheckBox('sex', ['male', 'female'], 1);

  expect(checkBox).toBeDefined();
});
