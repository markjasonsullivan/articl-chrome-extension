(function() {
	var urlHelper = window.urlHelper || {};
	var shouldUseDevelopmentUrls = false;

	urlHelper.getBaseUrl = getBaseUrl;
	urlHelper.getUserUrl = getUserUrl;
	urlHelper.getCreateShareUrl = getCreateShareUrl;

	window.urlHelper = urlHelper;

	function getBaseUrl() {
		if (shouldUseDevelopmentUrls) {
			return "http://ngrok.tambykojak.com/";
		} else {
			return "http://articl.io/";
		}
	}

	function getUserUrl(userId) {
		return getBaseUrl() + "users/" + userId;
	}

	function getCreateShareUrl() {
		return getBaseUrl() + "shares";
	}	
})();