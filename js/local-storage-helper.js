(function() {
  var localStorageHelper = window.localStorageHelper || {};
  
  localStorageHelper.getArticlUserId = getArticlUserId;
  localStorageHelper.setArticlUserId = setArticlUserId;
  localStorageHelper.setUserCache = setUserCache;
  localStorageHelper.getUserCache = getUserCache;

  window.localStorageHelper = localStorageHelper;

  function getArticlUserId() {
    return localStorage.articlUserId;
  }

  function setArticlUserId(articlUserId) {
    localStorage.articlUserId = articlUserId;
  }

  function setUserCache(userJsonData) {
    localStorage.userCache = userJsonData;
  }

  function getUserCache() {
    return localStorage.userCache;
  }
})();