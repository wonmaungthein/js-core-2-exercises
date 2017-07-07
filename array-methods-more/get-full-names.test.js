const getFullNames = require('./get-full-names');

describe('getFullNames', function () {
  test('should return an array of full names', function () {
    // Arrange
    const persons = [{
      firstName: 'Michael',
      lastName: 'Keane',
      gender: 'male',
      age: 65
    }, {
      firstName: 'Susanne',
      lastName: 'Sarandon',
      gender: 'female',
      age: 55
    }, {
      firstName: 'Roberto',
      lastName: 'Carlos',
      gender: 'male',
      age: 38
    }, {
      firstName: 'Elizabeth',
      lastName: 'Taylor',
      gender: 'female',
      age: 88
    }];

    // Act
    const result = getFullNames(persons);

    // Assert
    expect(result).toEqual([{
      fullName: 'Michael Keane'
    }, {
      fullName: 'Susanne Sarandon'
    }, {
      fullName: 'Roberto Carlos'
    }, {
      fullName: 'Elizabeth Taylor'
    }]);
  });
});