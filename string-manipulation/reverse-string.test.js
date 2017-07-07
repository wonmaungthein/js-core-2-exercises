var reverseString = require('./reverse-string');

describe.skip('reverseString', function() {
    test('should reverse CodeYourFuture', function(){
        var originalString = 'CodeYourFuture';
        var result = reverseString(originalString);
        expect(result).toEqual('erutuFruoYedoC');
    });

    //add more tests
});