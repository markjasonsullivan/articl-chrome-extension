(function(urlHelper, elementHelper, localStorageHelper, httpRequestHelper, utils) {
  document.addEventListener('DOMContentLoaded', onDOMContentLoaded);
  document.addEventListener('keydown', function(event) {
    if (event.which === 13) {
        elementHelper.clickSendButton();
    }
  });

  function onDOMContentLoaded() {
    if (localStorageHelper.getArticlUserId()) {
      addEventListenersToButtons();
      populateViewWithDataFromCurrentTab();
    } else {
      openNewTabWithArticlsNewUserPage();
    }
  }

  function addEventListenersToButtons() {
    sendButton = document.getElementById("send");
    sendButton.addEventListener("click", onSendClick);
  }

  function populateViewWithDataFromCurrentTab() {
    var injectionScript = { code: "window.getSelection().toString();" };
    var onTabsReturned = callbackWithFirstElement(onTabReturned);
    var onSelectionsReturned = callbackWithFirstElement(elementHelper.renderHighlight);
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

  function onTabReturned(tab) {
    if (tab.url.startsWith("http://www.articl.io/users/" + localStorageHelper.getArticlUserId())) {
      elementHelper.renderTitle("My first share with Articl!");
    } else {
      elementHelper.renderTitle(tab.title);
    }

    elementHelper.renderUrl(tab.url);
    setTimeout(
      function() {
        var height = elementHelper.getMainDiv().scrollHeight;
        elementHelper.getConfirmationDiv().style.height = height + "px";
        elementHelper.getErrorDiv().style.height = height + "px";
      }, 500);
  }

  function openNewTabWithArticlsNewUserPage() {
    var newArticlUserId = utils.generateUserId();
    localStorageHelper.setArticlUserId(newArticlUserId);
    var newTabUrl = urlHelper.getUserUrl(newArticlUserId);
    chrome.tabs.create({ url: newTabUrl });
  }

  function onSendClick() {
    toText = elementHelper.getToText();

    if (!toText
      || !utils.isValidEmail(toText)) {
      elementHelper.shakeSendButton();
      return;
    }

    httpRequestHelper.createNewShareRequest(
      urlHelper.getCreateShareUrl(),
      localStorageHelper.getArticlUserId(),
      elementHelper.getToText(),
      elementHelper.getLinkText(),
      elementHelper.getHighlightText(),
      elementHelper.getTitleText(),
      function() {
        elementHelper.fadeConfirmationDivIn();
        setTimeout(
          function() {
            window.close();
        }, 1000);
      },
      function() {
        elementHelper.fadeErrorDivIn();
      });
  }

  function callbackWithFirstElement(callback) {
    return function onArrayReturned(arr) {
      var firstElement = arr[0];
      callback(firstElement);
    }
  }
})(window.urlHelper, window.elementHelper, window.localStorageHelper, window.httpRequestHelper, window.utils);
