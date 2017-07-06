/*
  Refactor this function to use .filter and ES6 syntax
 */

function arrangeByGender(persons) {
  const result  = [];
  for (let i = 0; i < persons.length; i++) {
    var person = persons[i];
    var fullName = person.firstName + ' ' + person.lastName;
    result.push({ fullName: fullName });
  }
  return result;
};

module.exports = arrangeByGender;