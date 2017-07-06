const findByGender = require('./find-by-gender');

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

describe('findByGender', function () {
  test('should return an array of all female', function () {
    // Act
    const result = findByGender(persons, 'female');

    // Assert
    expect(result).toEqual([{
      firstName: 'Susanne',
      lastName: 'Sarandon',
      gender: 'female',
      age: 55
    }, {
      firstName: 'Elizabeth',
      lastName: 'Taylor',
      gender: 'female',
      age: 88
    }]);
  });
  
  test('should return an array of all male', function () {
    // Act
    const result = findByGender(persons, 'male');

    // Assert
    expect(result).toEqual([{
        firstName: 'Michael',
        lastName: 'Keane',
        gender: 'male',
        age: 65
      }, {
      firstName: 'Roberto',
      lastName: 'Carlos',
      gender: 'male',
      age: 38
    }]);
  });
});