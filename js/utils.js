(function() {
  var utils = window.utils || {};

  utils.generateUserId = generateUserId;
  utils.isValidEmail = isValidEmail;

  window.utils = utils;

  function generateUserId() {
    var userId = "";

    for(var i = 0; i < 5; i ++) {
      userId += s4();
    }

    return userId;
  }

  function isValidEmail(email) {
    var pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return pattern.test(email);
  }

  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
})();
