(function(elementRenderer, localStorageHelper, http_request_helper, utils) {
  document.addEventListener('DOMContentLoaded', onDOMContentLoaded);
  document.getElementById("send").addEventListener("click", function() {
    
  });

  function onDOMContentLoaded() {
    if (localStorageHelper.doesExtensionHaveAssociatedUser()) {
      var injectionScript = {
        code: "window.getSelection().toString();"
      };

      var onTabsReturned = callbackWithFirstElement(onTabReturned);
      var onSelectionsReturned = callbackWithFirstElement(elementRenderer.renderHighlight);
      getCurrentTab(onTabsReturned);
      chrome.tabs.executeScript(injectionScript, onSelectionsReturned);

      if (localStorageHelper.getUserCache()) {
        console.log("User was cached.");
      } else {
        http_request_helper.getRequest("http://articl.io/users/" + localStorageHelper.getUserId(), function(data) {
          localStorageHelper.cacheUser(data);
        });
      }
    } else {
      var userId = utils.generateGuid();
      localStorageHelper.setUserId(userId);
      var newURL = "http://articl.io/users/" + userId;
      chrome.tabs.create({ url: newURL });
    }
  }

  function getCurrentTab(queryCallback) {
    var queryInfo = {
      active: true,
      currentWindow: true
    };

    chrome.tabs.query(queryInfo, queryCallback);
  }

  function callbackWithFirstElement(callback) {
    return function onArrayReturned(arr) {
      var firstElement = arr[0];
      callback(firstElement);
    }
  }

  function onTabReturned(tab) {
    elementRenderer.renderTitle(tab.title);
    elementRenderer.renderUrl(tab.url);
  }
})(window.elementRenderer, window.localStorageHelper, window.http_request_helper, window.utils);