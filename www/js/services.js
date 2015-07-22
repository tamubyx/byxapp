angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Kyle Roberts',
    lastText: 'blah',
    face: 'https://pbs.twimg.com/profile_images/593267524155871232/JJxcVtmG_400x400.jpg'
  }, {
    id: 1,
    name: 'Matt Green',
    lastText: 'Hey matt',
    face: 'https://pbs.twimg.com/profile_images/2938213921/4cb932649c6a4d6d3aceba0021ad6424.jpeg'
  },{
    id: 2,
    name: 'Brad Robertson',
    lastText: 'Big bad Brad',
    face: 'https://pbs.twimg.com/profile_images/378800000786413545/e9bc8e515614e63cc7eb5dd3afa210ac.jpeg'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
