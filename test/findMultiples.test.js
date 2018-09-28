const findMultiples = require("../src/findMultiples");

// write test cases to ensure findMultiples() works as expected

test('base 2 to limit 6 should return [2,4,6] ', () => {
    expect(findMultiples(2,6)).toEqual([2,4,6]);
});

test('base 3 to limit 13 should return [3,6,9,12]', () => {
    expect((findMultiples(3,13))).toEqual([3,6,9,12]);
});

test('base 5 to limit 6 should return [5] ', () => {
    expect(findMultiples(5,6)).toEqual([5]);
});