var doubleNumber = require('./basic-map');

describe('doubleNumber', function() {
    test('doubles every number in the array', function() {
        var numbers = [1, 3, 4];
        var result = doubleNumber(numbers);
        expect(result).toEqual([2, 6, 8]);
    });
})