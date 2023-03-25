const churchMemebers = [
  'John',
  'Jame',
  'Paul',
  'Peter',
  'Enoch',
];

test('the church members has Peter on it', () => {
  expect(churchMemebers).toContain('Peter');
  expect(churchMemebers).not.toContain('Sarah');
});

const object = [
  {
    user: 'Peter',
  },
  {
    user: 'Abel',
  },
  {
    user: 'Simeon',
  },
];

test('test the length of an object', () => {
  expect(object).not.toBe(5);
});
