(function(localStorageHelper) {
  var elementHelper = window.elementHelper || {};
  var linkTextView = document.getElementById('link');
  var titleTextView = document.getElementById('title');
  var highlightTextView = document.getElementById('highlight');
  var toEditText = document.getElementById('recipient');
  var sendButton = document.getElementById('send');
  var confirmationDiv = document.getElementById('confirmation');
  var mainDiv = document.getElementById('main');
  var errorDiv = document.getElementById('error');
  var containerDiv = document.getElementById('container');

  elementHelper.renderUrl = renderText.bind(elementHelper, linkTextView);
  elementHelper.renderTitle = renderText.bind(elementHelper, titleTextView);
  elementHelper.renderHighlight = renderHighlight;
  elementHelper.getHighlightText = getHighlightText;
  elementHelper.getTitleText = getTitleText;
  elementHelper.getToText = getToText;
  elementHelper.getLinkText = getLinkText;
  elementHelper.clickSendButton = clickSendButton;
  elementHelper.shakeSendButton = shakeSendButton;
  elementHelper.getConfirmationDiv = getConfirmationDiv;
  elementHelper.getMainDiv = getMainDiv;
  elementHelper.getErrorDiv = getErrorDiv;
  elementHelper.getContainerDiv = getContainerDiv;
  elementHelper.fadeConfirmationDivIn = fadeConfirmationDivIn;
  elementHelper.fadeErrorDivIn = fadeErrorDivIn;

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

  function getConfirmationDiv() {
    return confirmationDiv;
  }

  function getMainDiv() {
    return mainDiv;
  }

  function getErrorDiv() {
    return errorDiv;
  }

  function getContainerDiv() {
    return containerDiv;
  }

  function fadeConfirmationDivIn() {
    mainDiv.style.display = "none";
    confirmationDiv.style.display = "block";

    confirmationDiv.classList.add("fade-in");

    confirmationDiv.addEventListener("animationend", function() {
      confirmationDiv.classList.remove("fade-in");
    })
  }

  function fadeErrorDivIn() {
    mainDiv.style.display = "none";
    errorDiv.style.display = "block";

    errorDiv.classList.add("fade-in");

    errorDiv.addEventListener("animationend", function() {
      errorDiv.classList.remove("fade-in");
    })

    setTimeout(function() {
      sendButton.classList.remove("pivot");
      mainDiv.style.display = "flex";
      errorDiv.style.display = "none";
    }, 1500);
  }
})(window.localStorageHelper);
