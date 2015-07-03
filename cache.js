var cache = window.applicationCache;

// application cache may not be available
if (cache) {

	// try and update
	if (navigator.onLine) {
		try {
			cache.update();
		}
		catch (err) {
			// swallow
		}
	}

	cache.addEventListener('updateready', function () {
		cache.swapCache();
		console.info('A new version of this page is available. Refresh page to see latest version.');
	});

}

export default null;
