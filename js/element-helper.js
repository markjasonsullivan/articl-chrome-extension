(function(localStorageHelper) {
  var elementHelper = window.elementHelper || {};
  var linkTextView = document.getElementById('link');
  var titleTextView = document.getElementById('title');
  var highlightTextView = document.getElementById('highlight');
  var toEditText = document.getElementById('recipient');
  var sendButton = document.getElementById('send');

  elementHelper.renderUrl = renderText.bind(elementHelper, linkTextView);
  elementHelper.renderTitle = renderText.bind(elementHelper, titleTextView);
  elementHelper.renderHighlight = renderHighlight;
  elementHelper.getHighlightText = getHighlightText;
  elementHelper.getTitleText = getTitleText;
  elementHelper.getToText = getToText;
  elementHelper.getLinkText = getLinkText;
  elementHelper.clickSendButton = clickSendButton;
  elementHelper.shakeSendButton = shakeSendButton;

  window.elementHelper = elementHelper;

  function renderHighlight(highlight) {
    if (highlight) {
      highlight = "\"" + highlight + "\"";
    } else {
      highlight = "";
    }

    renderText(highlightTextView, highlight);
  }

  function renderText(element, text) {
    element.textContent = text;
  }

  function getHighlightText() {
    var highlight = highlightTextView.textContent;
    return highlight.substring(1, highlight.length-1);
  }

  function getTitleText() {
    return titleTextView.textContent;
  }

  function getToText() {
    return toEditText.value;
  }

  function getLinkText() {
    return linkTextView.textContent;
  }

  function clickSendButton() {
    sendButton.classList.add("pivot");

    sendButton.addEventListener("animationend", function() {
      sendButton.classList.remove("pivot");
    })
    return sendButton.click();

  }

  function shakeSendButton() {
    toEditText.classList.add("shake");

    toEditText.addEventListener("animationend", function() {
      toEditText.classList.remove("shake");
    })
  }

})(window.localStorageHelper);
