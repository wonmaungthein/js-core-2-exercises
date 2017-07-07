/*
  Refactor this function to use .map and ES6 syntax
 */

function getFullNames(persons) {
  const result  = [];
  for (var i = 0; i < persons.length; i++) {
    var person = persons[i];
    var fullName = person.firstName + ' ' + person.lastName;
    result.push({ fullName: fullName });
  }
  return result;
};

module.exports = getFullNames;