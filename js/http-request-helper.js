(function() {
  var httpRequestHelper = window.httpRequestHelper || {};
  
  httpRequestHelper.getRequest = getRequest;

  window.httpRequestHelper = httpRequestHelper;

  function getRequest(url, callback){
      var xmlHttp = new XMLHttpRequest();

      xmlHttp.onreadystatechange = function() { 
          if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
              callback(xmlHttp.responseText);
          }
      };

      xmlHttp.open("GET", url, true);
      xmlHttp.setRequestHeader("Content-Type", "application/json");      
      xmlHttp.send(null);
  }
})();