/**
 *
 * Initializer
 *
 * @author Takuto Yanagida
 * @version 2021-12-27
 *
 */


function initializeQuerySelector(s) {
	const t = document.querySelector(s);
	initialize(t);
}

function initializeQuerySelectorAll(s) {
	const ts = document.querySelectorAll(s);
	for (const t of ts) initialize(t);
}
