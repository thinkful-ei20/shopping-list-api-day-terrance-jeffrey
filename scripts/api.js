'use strict';
/* global $ */

const api = (() => {
	const BASE_URL = 'https://thinkful-list-api.herokuapp.com/terrance-corley';

	function getItems(callback) {
		$.getJSON(`${BASE_URL}/items`, callback);
	}

	return {getItems};
})();