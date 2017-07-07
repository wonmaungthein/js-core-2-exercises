const shiftLetters = require('./shift-letters');

describe.skip('shiftLetters', function() {
  test('changes hello to ifmmp', () => {
    // Arrange
    const word = 'hello';

    // Act
    const result = shiftLetters(word);

    // Assert
    expect(result).toEqual('ifmmp');
  });

  it('changes abcxyz to bcdyz{', () => {
    // Arrange
    const word = 'abcxyz';

    // Act
    const result = shiftLetters(word);

    // Assert
    expect(result).toEqual('bcdyz{');
  });
});