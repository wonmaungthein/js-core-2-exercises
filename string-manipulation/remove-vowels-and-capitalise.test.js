var removeVowelsAndCapitalise = require('./remove-vowels-and-capitalise');

describe.skip('removeVowelsAndCapitalise', function() {
    test('removes vowels and capitalises', function() {
        var result = removeVowelsAndCapitalise('CodeYourFuture');
        expect(result).toEqual('CDYRFTR');
    });
});