(function(e) {
	var urlHelper = window.urlHelper || {};

	urlHelper.getBaseUrl = getBaseUrl;
	urlHelper.getUserUrl = getUserUrl;
	urlHelper.getCreateShareUrl = getCreateShareUrl;

	window.urlHelper = urlHelper;

	function getBaseUrl(isDevelopment) {
		return e.getBaseUrl();
	}

	function getUserUrl(userId) {
		return getBaseUrl() + "users/" + userId;
	}

	function getCreateShareUrl() {
		return getBaseUrl() + "shares";
	}
})(window.environmentHelper);
