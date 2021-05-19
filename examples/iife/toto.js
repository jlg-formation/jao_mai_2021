(function (window) {
  'use strict';
  function coucouToto() {
    console.log('coucou toto');
  }

  var toto = {};
  toto.coucouToto = coucouToto;

  window.toto = toto;
})(window);
