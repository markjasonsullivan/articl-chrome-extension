(function() {
  var http_request_helper = window.http_request_helper || {};
  
  http_request_helper.getRequest = getRequest;

  window.http_request_helper = http_request_helper;

  function getRequest(url, callback){
      var xmlHttp = new XMLHttpRequest();

      xmlHttp.onreadystatechange = function() { 
          if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
              callback(xmlHttp.responseText);
          }
      };

      xmlHttp.open("GET", url, true);
      xmlHttp.setRequestHeader("Accept", "application/json");      
      xmlHttp.send(null);
  }
})();