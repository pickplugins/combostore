import PageBuilderContent from "../../components/PageBuilder/PageBuilderContent";

/* TEMPORARY test route for the orderTracking element - delete after testing. */
export const dynamic = "force-dynamic";

export default function Page() {
	const blocks = [{ id: "ot-test", type: "orderTracking", options: {}, cssSelectors: {}, children: [] }];
	return <div className="p-6"><PageBuilderContent blocks={blocks} /></div>;
}
