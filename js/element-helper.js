(function() {
  var elementHelper = window.elementHelper || {};
  var linkTextView = document.getElementById('link');
  var titleTextView = document.getElementById('title');
  var highlightTextView = document.getElementById('highlight');
  var toEditText = document.getElementById('highlight');
  
  elementHelper.renderUrl = renderText.bind(elementHelper, linkTextView);
  elementHelper.renderTitle = renderText.bind(elementHelper, titleTextView);
  elementHelper.renderHighlight = renderHighlight;

  window.elementHelper = elementHelper;

  function renderHighlight(highlight) {
    if (highlight) {
      highlight = "\"" + highlight + "\"";
    } else {
      highlight = "No highlight, No biggie.";
    }

    renderText(highlightTextView, highlight);
  }

  function renderText(element, text) {
    element.textContent = text;
  }
})();