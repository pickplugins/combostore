import DashboardShell from "@/components/DashboardShell";

/*
  Same frame as /dashboard. The settings screens sit inside the dashboard
  chrome, so they share its shell rather than keeping a second copy of it.
*/
export const metadata = {
	title: "Settings",
};

export default function SettingsLayout({ children }) {
	return <DashboardShell>{children}</DashboardShell>;
}
