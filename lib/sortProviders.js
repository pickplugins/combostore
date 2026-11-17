/*
  Payment gateways and couriers are stored as objects keyed by provider id,
  and the order a merchant picks is kept as a `sort` number on each saved
  entry rather than in the key order: update_settings merges into the stored
  blob, so a new key order would not survive the save.

  `entries` is an Object.entries() list (from the provider definitions or the
  saved settings); `saved` is the saved settings object whose `sort` values
  decide the order. A provider with no `sort` yet keeps its original position,
  so nothing moves until the merchant reorders.
*/
export function sortProviderEntries(entries, saved) {
	return (entries || [])
		.map((entry, index) => {
			var sort = Number(saved?.[entry[0]]?.sort);
			return { entry, index, sort: Number.isFinite(sort) ? sort : index };
		})
		.sort((a, b) => a.sort - b.sort || a.index - b.index)
		.map(({ entry }) => entry);
}

/*
  Moves the provider at `from` to `to` within the current sorted order and
  returns the saved object with every provider's `sort` rewritten to its new
  position. Rewriting all of them keeps the numbers dense and unambiguous.
*/
export function moveProvider(entries, saved, from, to) {
	var ordered = sortProviderEntries(entries, saved).map(([key]) => key);
	if (to < 0 || to >= ordered.length || from === to) return saved;

	var [moved] = ordered.splice(from, 1);
	ordered.splice(to, 0, moved);

	var next = { ...(saved || {}) };
	ordered.forEach((key, sort) => {
		next[key] = { ...(next[key] || {}), sort };
	});
	return next;
}
