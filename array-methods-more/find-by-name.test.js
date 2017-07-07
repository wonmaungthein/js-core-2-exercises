const findByName = require('./find-by-name');

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

describe('findByName', function () {
  test('should return the first person matching the name', function () {
    // Act
    const result = findByName(persons, 'Susanne');

    // Assert
    expect(result).toEqual({
      firstName: 'Susanne',
      lastName: 'Sarandon',
      gender: 'female',
      age: 55
    });
  });
  
  test('should return the first person matching the name', function () {
    // Act
    const result = findByName(persons, 'Roberto');

    // Assert
    expect(result).toEqual({
      firstName: 'Roberto',
      lastName: 'Carlos',
      gender: 'male',
      age: 38
    });
  });
});