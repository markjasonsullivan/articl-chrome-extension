(function(elementRenderer) {
  document.addEventListener('DOMContentLoaded', onDOMContentLoaded);

  function onDOMContentLoaded() {
      var injectionScript = {
        code: "window.getSelection().toString();"
      };

      getCurrentTab(onTabsReturned);
      chrome.tabs.executeScript(injectionScript, grabFirstSelection);

      function grabFirstSelection(selections) {
        elementRenderer.renderHighlight(selections[0]);
      }
  }

  function getCurrentTab(queryCallback) {
    var queryInfo = {
      active: true,
      currentWindow: true
    };

    chrome.tabs.query(queryInfo, queryCallback);
  }

  function onTabsReturned(tabs) {
    var tab = tabs[0];
    elementRenderer.renderTitle(tab.title);
    elementRenderer.renderCurrentUrl(tab.url);
  }
})(window.elementRenderer);
