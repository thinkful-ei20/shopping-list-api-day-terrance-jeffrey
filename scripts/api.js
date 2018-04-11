'use strict';
/* global $ */

const api = (() => {
	const BASE_URL = 'https://thinkful-list-api.herokuapp.com/terrance-jeffrey';

	function getItems(callback) {
		$.getJSON(`${BASE_URL}/items`, callback);

	}

	function createItem(name, callback, failback) {
		let newItem = JSON.stringify({ name: name });

		$.ajax({
			url: `${BASE_URL}/items`,
			method: 'POST',
			contentType: 'application/json',
			data: newItem,
			success: callback,
			error: failback
		});
	}

	function updateItem(id, updateData, callback, failback) {
		$.ajax({
			url: `${BASE_URL}/items/${id}`,
			method: 'PATCH',
			contentType: 'application/json',
			data: JSON.stringify(updateData),
			success: callback,
			error: failback
		});
	}

	function deleteItem(id, callback, failback) {
		$.ajax({
			url: `${BASE_URL}/items/${id}`,
			method: 'DELETE',
			success: callback,
			error: failback
		});
	}

	return { getItems, createItem, updateItem, deleteItem };
})();