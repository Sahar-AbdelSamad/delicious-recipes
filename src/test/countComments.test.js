import countComments from '../modules/countComments.js';

describe('Count the number of comments added', () => {
  test('Return 2 when there are two comments in the array', () => {
    const comments = [
      {
        item_id: '52951',
        username: 'Jane Akpan',
        comment: 'Hello',
      },
      {
        item_id: '52951',
        username: 'James Okon',
        comment: 'Nice Chicken',
      },
    ];
    expect(countComments(comments)).toBe(2);
  });

  test('Return 0 when the comments array is empty', () => {
    const comments = [];
    expect(countComments(comments)).toBe(0);
  });
});
