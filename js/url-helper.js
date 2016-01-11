(function() {
	var urlHelper = window.urlHelper || {};
	var shouldUseDevelopmentUrls = false;

	urlHelper.getBaseUrl = getBaseUrl;
	urlHelper.getUserUrl = getUserUrl;
	urlHelper.getCreateShareUrl = getCreateShareUrl;
	var baseUrl = setBaseUrl(shouldUseDevelopmentUrls);

	window.urlHelper = urlHelper;

	function getBaseUrl() {
		return baseUrl;
		// This is a change.
	}

	function setBaseUrl(isDevelopment) {
		if (isDevelopment) {
			return "http://ngrok.tambykojak.com/";
		}

		return "http://www.articl.io/";
	}

	function getUserUrl(userId) {
		return getBaseUrl() + "users/" + userId;
	}

	function getCreateShareUrl() {
		return getBaseUrl() + "shares";
	}
})();
