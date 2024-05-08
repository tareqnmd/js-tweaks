function isElementInViewport(element) {
	const rect = element.getBoundingClientRect();
	return (
		rect.top >= 0 &&
		rect.left >= 0 &&
		rect.bottom <=
			(window.innerHeight || document.documentElement.clientHeight) &&
		rect.right <= (window.innerWidth || document.documentElement.clientWidth)
	);
}

function isElementPartiallyVisible(element) {
	const rect = element.getBoundingClientRect();
	const viewportWidth =
		window.innerWidth || document.documentElement.clientWidth;
	const viewportHeight =
		window.innerHeight || document.documentElement.clientHeight;

	const isVisible =
		(rect.top < viewportHeight && rect.bottom > 0) ||
		(rect.left < viewportWidth && rect.right > 0);

	return isVisible;
}
