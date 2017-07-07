require('./remove-vowels-prototype');

test('removing vowels in Codeyourfuture', function(){
    const result = 'CodeYourFuture'.removeVowels();
    expect(result).toEqual('CdYrFtr')
});


test.skip('removing vowels in Codeyourfuture then CAPITALISE', function(){
    const result = 'CodeYourFuture'.removeVowels(true);
    expect(result).toEqual('CDYRFTR');
});