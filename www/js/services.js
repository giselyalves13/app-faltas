angular.module('starter.services', [])

.factory('Materias', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  let materias = [ ];

  return {
    all: function() {
      return materias;
    },
    // remove: function(chat) {
    //   materias.splice(materias.indexOf(materias), 1);
    // },
    remove: function(materia) {
      materias.pop(materia);
    },
    push: function(materia) {
      console.log('service');
      materias.push(materia);
    }
    // get: function(chatId) {
    //   for (var i = 0; i < materias.length; i++) {
    //     if (materias[i].id === parseInt(chatId)) {
    //       return materias[i];
    //     }
    //   }
    //   return null;
    // }
  };
});
