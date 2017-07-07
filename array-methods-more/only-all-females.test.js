const onlyAllFemales = require('./only-all-females');

describe('onlyAllFemales', function () {
    test('returns FALSE because this array contains one male', function () {
        // Arrange
        const persons = [{
            fullName: 'Michael Keane',
            gender: 'male',
        }, {
            fullName: 'Susanne Kaspersky',
            gender: 'female'
        }, {
            fullName: 'Ally Mcbeal',
            gender: 'female'
        }];

        // Act
        const result = onlyAllFemales(persons);

        // Assert
        expect(result).toEqual(false);
    });
    test('returns TRUE because this array contains one male', function () {
        // Arrange
        const persons = [{
            fullName: 'Louise Kamakazi',
            gender: 'female',
        }, {
            fullName: 'Susanne Kaspersky',
            gender: 'female'
        }, {
            fullName: 'Ally Mcbeal',
            gender: 'female'
        }];

        // Act
        const result = onlyAllFemales(persons);

        // Assert
        expect(result).toEqual(true);
    });
});