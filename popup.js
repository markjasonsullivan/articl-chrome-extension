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

function init() {
  alert("test");
}

function renderCurrentUrl(currentUrl) {
  document.getElementById('link').textContent = currentUrl;
}

function renderTitle(title) {
  document.getElementById('title').textContent = title;
}

document.addEventListener('DOMContentLoaded', 
  function() {
    getCurrentTab(
      function(tab) {
        renderTitle(tab.title);
        renderCurrentUrl(tab.url);
      }
    );
  }
);
