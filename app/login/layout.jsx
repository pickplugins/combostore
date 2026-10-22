import AuthShell from "@/components/AuthShell";

export const metadata = {
	title: "Sign in",
};

export default function LoginLayout({ children }) {
	return <AuthShell>{children}</AuthShell>;
}
