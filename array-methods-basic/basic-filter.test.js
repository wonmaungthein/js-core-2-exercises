var getShortMessages = require('./basic-filter');

describe('getShortMessages', function () {
  test('should return an array of all messages shorter than 10 character', function () {

    // Arrange
    const messages = [
        {
            text: 'Lorem ipsum dolor sit amet'
        }, {
            text: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;'
        }, {
            text: 'Cras egestas pretium dictum. Sed sit amet rhoncus mi. Ut augue lectus, facilisis sed leo non, elementum ultricies dui.'
        }, {
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tristique odio sit amet facilisis mattis.'
        }, {
            text: 'Curabitur ac odio blandit risus dapibus convallis. Integer et neque ut quam sagittis malesuada. Ut sed purus rutrum.'
        }, {
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus maximus, metus non viverra hendrerit, elit nibh fermentum ligula.'
        }, {
            text: 'Efficitur quam blandit'
        }];
    // Act
    const result = getShortMessages(messages);

    // Assert
    expect(result).toEqual([{
      text: 'Lorem ipsum dolor sit amet'
    }, {
      text: 'Efficitur quam blandit'
    }]);
  });
});