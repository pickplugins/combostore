import AuthShell from "@/components/AuthShell";

export const metadata = {
	title: "Create account",
};

export default function RegisterLayout({ children }) {
	return <AuthShell>{children}</AuthShell>;
}
