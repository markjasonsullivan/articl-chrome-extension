function getCurrentTab(callback) {
  var queryInfo = {
    active: true,
    currentWindow: true
  };

  chrome.tabs.query(queryInfo, function(tabs) {
    var tab = tabs[0];
    callback(tab);
  });
}

function renderCurrentUrl(currentUrl) {
  document.getElementById('link').textContent = currentUrl;
}

function renderTitle(title) {
  document.getElementById('title').textContent = title;
}

function renderHighlight(highlight) {
  if (highlight == null || highlight === "") {
    highlight = "No highlight, No biggie.";
  } else {
    highlight = "\"" + highlight + "\"";
  }

  document.getElementById('highlight').textContent = highlight;
}

document.addEventListener('DOMContentLoaded',
  function() {
    getCurrentTab(
      function(tab) {
        renderTitle(tab.title);
        renderCurrentUrl(tab.url);
      }
    );

    chrome.tabs.executeScript( {
      code: "window.getSelection().toString();"
    }, function(selection) {
      renderHighlight(selection[0]);
    });
  }
);
