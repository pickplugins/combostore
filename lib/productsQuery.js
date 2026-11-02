/*
	The products list's filters, search and page, kept so that opening a product
	and coming back shows the same results.

	This is sessionStorage for the same reason as lib/ordersQuery.js: a filter
	that outlived the tab would come back days later and make products look
	missing, so it goes when the tab closes or the user logs out.
*/

const STORAGE_KEY = "products:query";


/** The saved query, or null if there is nothing usable. */
export function loadProductsQuery() {

	try {
		const saved = JSON.parse(window.sessionStorage.getItem(STORAGE_KEY));

		return saved && typeof saved === "object" && !Array.isArray(saved) ? saved : null;

	} catch (error) {
		/* Storage switched off, or an unreadable entry. */
		return null;
	}
}


export function saveProductsQuery(query) {

	try {
		window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(query));
	} catch (error) {
		/* The list still works; it just will not be remembered. */
	}
}


export function clearProductsQuery() {

	try {
		window.sessionStorage.removeItem(STORAGE_KEY);
	} catch (error) {
	}
}
