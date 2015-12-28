(function(urlHelper, elementRenderer, localStorageHelper, httpRequestHelper, utils) {
  document.addEventListener('DOMContentLoaded', onDOMContentLoaded);

  function onDOMContentLoaded() {
    if (localStorageHelper.getUserId()) {
      if (!localStorageHelper.getUserCache()) {
        httpRequestHelper.getRequest(urlHelper.getUserUrl(localStorageHelper.getUserId()), onGetUserRequestFinished);
      }

      populateViewWithDataFromCurrentTab();
    } else {
      openNewTabWithArticlsNewUserPage();
    }

    function populateViewWithDataFromCurrentTab() {
      var injectionScript = { code: "window.getSelection().toString();" };
      var onTabsReturned = callbackWithFirstElement(onTabReturned);
      var onSelectionsReturned = callbackWithFirstElement(elementRenderer.renderHighlight);
      getCurrentTab(onTabsReturned);
      chrome.tabs.executeScript(injectionScript, onSelectionsReturned);
    }

    function onGetUserRequestFinished(data) {
      localStorageHelper.setUserCache(data);
    }

    function openNewTabWithArticlsNewUserPage() {
      var newUserId = utils.generateGuid();
      localStorageHelper.setUserId(newUserId);
      newTabUrl = urlHelper.getUserUrl(userId);
      chrome.tabs.create({ url: newTabUrl });
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
})(window.urlHelper, window.elementRenderer, window.localStorageHelper, window.httpRequestHelper, window.utils);