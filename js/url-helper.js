(function() {
	var urlHelper = window.urlHelper || {};
	var shouldUseDevelopmentUrls = true;

	urlHelper.getBaseUrl = getBaseUrl;
	urlHelper.getUserUrl = getUserUrl;

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
})();