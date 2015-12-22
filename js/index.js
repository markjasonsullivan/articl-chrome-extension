(function(elementRenderer) {
  document.addEventListener('DOMContentLoaded', onDOMContentLoaded);

  function onDOMContentLoaded() {
      var injectionScript = {
        code: "window.getSelection().toString();"
      };

      var onTabsReturned = callbackWithFirstElement(onTabReturned);
      var onSelectionsReturned = callbackWithFirstElement(elementRenderer.renderHighlight);
      getCurrentTab(onTabsReturned);
      chrome.tabs.executeScript(injectionScript, onSelectionsReturned);
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
})(window.elementRenderer);