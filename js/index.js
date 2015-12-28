(function(urlHelper, elementRenderer, localStorageHelper, http_request_helper, utils) {
  document.addEventListener('DOMContentLoaded', onDOMContentLoaded);

  function onDOMContentLoaded() {
    console.log("DOM Content has been loaded!");
    console.log("urlHelper.getBaseUrl() returns " + urlHelper.getBaseUrl());

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
        http_request_helper.getRequest(urlHelper.getBaseUrl() + "users/" + localStorageHelper.getUserId(), function(data) {
          localStorageHelper.setUserCache(data);
        });
      }
    } else {
      var userId = utils.generateGuid();
      localStorageHelper.setUserId(userId);
      chrome.tabs.create({ url: urlHelper.getUserUrl(userId) });
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
})(window.urlHelper, window.elementRenderer, window.localStorageHelper, window.http_request_helper, window.utils);