// lib/variationDefaults.js
/*
	A product's default variation: the one selected when its page opens.

	Stored as meta.isDefault on that variation (the variations table's `meta`
	column), so it needs no new column and survives a save - the plugin
	deletes and re-inserts a product's variations on every save, so their ids
	change and a product-level "default id" would not.

	The plugin returns `meta` as the stored JSON string (it decodes the
	thumbnail and attributes, not meta), and saves whatever it is given through
	wp_json_encode - so a string sent back would be stored double-encoded.
	variationMeta reads every shape; the product editor turns each variation's
	meta into an object before it is saved (withParsedVariationMeta).
*/

/* A variation's meta as an object: from an object, a JSON string, or a double-encoded one. */
export function variationMeta(variation) {
	var meta = variation?.meta;
	for (var i = 0; i < 3 && typeof meta === 'string'; i++) {
		try { meta = meta ? JSON.parse(meta) : {}; } catch (e) { meta = {}; }
	}
	return meta && typeof meta === 'object' && !Array.isArray(meta) ? meta : {};
}

/* `enable` is stored as "yes"/"no" (and has been true/false or 1/0); missing means enabled. */
export function isVariationEnabled(variation) {
	var value = variation?.enable;
	if (value === undefined || value === null || value === '') return true;
	return !['no', '0', 'false', 'off'].includes(String(value).trim().toLowerCase()) && value !== false && value !== 0;
}

export function isDefaultVariation(variation) {
	return variationMeta(variation).isDefault === true;
}

/* The variations with their meta as objects - for the editor, so a save stores clean JSON. */
export function withParsedVariationMeta(variations) {
	return (Array.isArray(variations) ? variations : []).map(variation => ({ ...variation, meta: variationMeta(variation) }));
}

/* The variations with `index` as the only default; index null clears it. New objects throughout. */
export function withDefaultVariation(variations, index) {
	return (Array.isArray(variations) ? variations : []).map((variation, i) => {
		var meta = { ...variationMeta(variation) };
		if (i === index) meta.isDefault = true;
		else delete meta.isDefault;
		return { ...variation, meta };
	});
}
