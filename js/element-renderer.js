(function() {
  var elementRenderer = window.elementRenderer || {};
  var linkTextView = document.getElementById('link');
  var titleTextView = document.getElementById('title');
  var highlightTextView = document.getElementById('highlight');
  
  elementRenderer.renderUrl = renderText.bind(elementRenderer, linkTextView);
  elementRenderer.renderTitle = renderText.bind(elementRenderer, titleTextView);
  elementRenderer.renderHighlight = renderHighlight;

  window.elementRenderer = elementRenderer;

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