/*
  Refactor this function to use .find and ES6 syntax
 */

function findByName(persons, name) {
  for(var i = 0; i < persons.length; i++) {
    if(persons[i].firstName === name) {
      // notice how this returns once it finds a match (it breaks the loop)
      return persons[i];
    }
  }
};

module.exports = findByName;