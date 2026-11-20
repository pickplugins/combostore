import RecoverCart from "@/components/RecoverCart";

/* The abandoned-cart email's "Finish my order" link: ?o=<order id>&s=<signature>. */
export const dynamic = "force-dynamic";

export const metadata = {
	title: "Restoring your cart",
	robots: { index: false, follow: false },
};

export default function Page() {
	return <RecoverCart />;
}
