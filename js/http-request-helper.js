(function() {
  var httpRequestHelper = window.httpRequestHelper || {};

  httpRequestHelper.createNewShareRequest = createNewShareRequest;
  httpRequestHelper.getRequest = getRequest;
  httpRequestHelper.postRequest = postRequest;

  window.httpRequestHelper = httpRequestHelper;

  function createNewShareRequest(url, articlUserId, emailTo, emailBody, link, highlight, callback) {
      var xmlHttp = new XMLHttpRequest();

      xmlHttp.onreadystatechange = function() {
          if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
              callback(xmlHttp.responseText);
          }
      };

      xmlHttp.open("POST", encodeURI(url), true);
      xmlHttp.setRequestHeader("Content-Type", "application/json");
      xmlHttp.setRequestHeader("X-Articl-User-Id", articlUserId);
      xmlHttp.send(JSON.stringify({
        to: emailTo,
        body: emailBody,
        link: link,
        highlight: highlight
      }));
  }

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

  function postRequest(url, body, callback){
      var xmlHttp = new XMLHttpRequest();

      xmlHttp.onreadystatechange = function() {
          if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
              callback(xmlHttp.responseText);
          }
      };

      xmlHttp.open("POST", encodeURI(url), true);
      xmlHttp.setRequestHeader("Content-Type", "application/json");
      xmlHttp.send(body);
  }
})();
