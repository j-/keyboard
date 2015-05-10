(function () {

var cache = window.applicationCache;

// application cache may not be available
if (!cache) {
	return;
}

// try and update
if (navigator.onLine) {
	cache.update();
}

cache.addEventListener('updateready', function () {
	cache.swapCache();
	console.info('A new version of this page is available. Refresh page to see latest version.');
});

})();