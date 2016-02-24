(function() {
  var environmentHelper = window.environmentHelper || {};
	var useDevelopmentStuff = false;

	environmentHelper.getAmplitudeApiKey = getAmplitudeApiKey;
  environmentHelper.getBaseUrl = getBaseUrl;
  environmentHelper.shouldUseDevelopmentStuff = shouldUseDevelopmentStuff;

	window.environmentHelper = environmentHelper;

  function shouldUseDevelopmentStuff() {
    return useDevelopmentStuff;
  }

  function getAmplitudeApiKey() {
    if (useDevelopmentStuff) {
      return "5c4075c16ed1ffee21673d8ba496a77f";
    } else {
      return "273ba912672536b43cd626b8716cc557";
    }
  }

  function getBaseUrl() {
    if (useDevelopmentStuff) {
			return "http://ngrok.tambykojak.com/";
		} else {
			return "http://www.articl.io/";
		}
  }
})();
