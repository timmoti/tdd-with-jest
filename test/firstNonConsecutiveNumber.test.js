const firstNonConsecutiveNumber = require("../src/firstNonConsecutiveNumber");

// write test cases to ensure firstNonConsecutiveNumber() works as expected
test('[1,2] should return null ', () => {
    expect(firstNonConsecutiveNumber([1,2])).toEqual(null);
});

test('[1,3] should return 3 ', () => {
    expect(firstNonConsecutiveNumber([1,3])).toEqual(3);
});

test('[1,2,4,5,6] should return 4 ', () => {
    expect(firstNonConsecutiveNumber([1,2,4,5,6])).toEqual(4);
});

test('[-1,0,1,-10] should return -10', () => {
    expect(firstNonConsecutiveNumber([-1,0,1,-10])).toEqual(-10);
});

test('[1,2,3,4,5,6] should return null ', () => {
    expect(firstNonConsecutiveNumber([1,2,3,4,5,6])).toEqual(null);
});