import { iconsData, ICON_NAME } from "@/lib/icons/iconData";

/*
	GET /api/icons?n=IconUser,IconHeart -> { IconUser: [type, name, node], IconHeart: ... }

	For icons a page's server render did not include (a template part loaded
	in the browser, a block added in the builder): components/icons/TablerIcon.jsx
	batches what it is missing into one request. The data only changes with
	the Tabler version, so the response is cached for a year; the client
	sorts the names, so the same set is the same URL.
*/
export function GET(request) {
	var names = String(new URL(request.url).searchParams.get("n") ?? "")
		.split(",")
		.map(s => s.trim())
		.filter(s => ICON_NAME.test(s))
		.slice(0, 200);

	return Response.json(iconsData(names), {
		headers: { "Cache-Control": "public, max-age=31536000, immutable" },
	});
}
