/*
  Refactor this function to use .find and ES6 syntax
 */

function findByGender(persons, gender) {
  var result = [];
  for(var i = 0; i < persons.length; i++) {
    if(persons[i].gender === gender) {
      result.push(persons[i]);
    }
  }
  return result;
};

module.exports = findByGender;