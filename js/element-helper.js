(function() {
  var elementHelper = window.elementHelper || {};
  var linkTextView = document.getElementById('link');
  var titleTextView = document.getElementById('title');
  var highlightTextView = document.getElementById('highlight');
  var toEditText = document.getElementById('recipient');

  elementHelper.renderUrl = renderText.bind(elementHelper, linkTextView);
  elementHelper.renderTitle = renderText.bind(elementHelper, titleTextView);
  elementHelper.renderHighlight = renderHighlight;
  elementHelper.getHighlightText = getHighlightText;
  elementHelper.getTitleText = getTitleText;
  elementHelper.getToText = getToText;
  elementHelper.getLinkText = getLinkText;

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
})();
