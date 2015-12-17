(function() {
  var elementRenderer = window.elementRenderer || {}
  elementRenderer.renderCurrentUrl = renderCurrentUrl;
  elementRenderer.renderTitle = renderTitle;
  elementRenderer.renderHighlight = renderHighlight;

  var linkTextView = document.getElementById('link');
  var titleTextView = document.getElementById('title');
  var highlightTextView = document.getElementById('highlight');

  window.elementRenderer = elementRenderer;

  function renderCurrentUrl(currentUrl) {
    linkTextView.textContent = currentUrl;
  }

  function renderTitle(title) {
    titleTextView.textContent = title;
  }

  function renderHighlight(highlight) {
    if (highlight == null || highlight === "") {
      highlight = "No highlight, No biggie.";
    } else {
      highlight = "\"" + highlight + "\"";
    }

    highlightTextView.textContent = highlight;
  }
})();