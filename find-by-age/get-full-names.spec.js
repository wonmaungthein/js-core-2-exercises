const getFullNames = require('./get-full-names');

const persons = require('./person-data.json');

test('full names', () => {
  it('should return an array of full names', () => {
    // Act
    const result = getFullNames(person);

    // Assert
    expect(result).toEqual([{
      name: 'Rares Mate'
    }]);
  });
});