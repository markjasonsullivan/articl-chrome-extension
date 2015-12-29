(function() {
  var utils = window.utils || {};
  
  utils.generateUserId = generateUserId;

  window.utils = utils;

  function generateUserId() {
    var userId = "";

    for(int i = 0; i < 5; i ++) {
      userId += s4();
    }
    
    return userId;
  }
  
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
})();