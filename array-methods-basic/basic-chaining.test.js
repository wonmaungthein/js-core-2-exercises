var getUpperCaseVowels = require('./basic-chaining.js');

describe('getUpperCaseVowels', function() {
    test('returns an array of vowels in UPPER CASE', function() {
        // Arrange
        var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", 
            "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
        
        // Act
        var result = getUpperCaseVowels(alphabet);

        // Assert
        expect(result).toEqual(["A", "E", "I", "O", "U"]);

    });
});