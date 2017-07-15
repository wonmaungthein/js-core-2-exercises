/*
    Refactor this to use .map and .filter together (chaining)
*/
const vowels = ["a", "e", "i", "o", "u"];

function getUpperCaseVowels(letters) {

    const resultFiltered = letters.filter(function (letter) {
        return vowels.indexOf(letter) !== -1
    }
    );

    const lettersMap = resultFiltered.map(function (letter) {
        return letter.toUpperCase();
    });
    return lettersMap;
};

module.exports = getUpperCaseVowels;






