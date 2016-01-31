(function(shouldUseDevelopmentStuff) {
  var localStorageHelper = window.localStorageHelper || {};

  localStorageHelper.getArticlUserId = getArticlUserId;
  localStorageHelper.setArticlUserId = setArticlUserId;
  localStorageHelper.setUserCache = setUserCache;
  localStorageHelper.getUserCache = getUserCache;

  window.localStorageHelper = localStorageHelper;

  function getArticlUserId() {
    if (shouldUseDevelopmentStuff) {
      return localStorage.devArticlUserId;
    } else {
      return localStorage.articlUserId;
    }
  }

  function setArticlUserId(articlUserId) {
    if (shouldUseDevelopmentStuff) {
      localStorage.devArticlUserId = articlUserId;
    } else {
      localStorage.articlUserId = articlUserId;
    }
  }

  function setUserCache(userJsonData) {
    if (shouldUseDevelopmentStuff) {
      localStorage.devUserCache = userJsonData;
    } else {
      localStorage.userCache = userJsonData;
    }
  }

  function getUserCache() {
    if (shouldUseDevelopmentStuff) {
      return localStorage.devUserCache;
    } else {
      return localStorage.userCache;
    }
  }
})(window.environmentHelper.shouldUseDevelopmentStuff());
