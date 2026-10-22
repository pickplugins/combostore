"use client";

import Sidebar from "./Sidebar";
import GlobalHeader from "./GlobalHeader";

/*
  The frame shared by /dashboard and /settings.

  Both route groups used to inline this, each inside its own `<html>`/`<body>`
  nested within the root layout's. The browser's parser drops a nested
  `<html>`/`<body>` but keeps their children, so what actually rendered was the
  dashboard shell inside the root layout's unflexed `<main className="bg-gray-300">`
  - two `w-screen` containers deep. That is what pushed the page sideways on a
  phone: `w-screen` is 100vw regardless of how much room the column actually
  has, so sidebar plus content always came to more than the viewport.

  The column is `min-w-0` because a flex item defaults to `min-width: auto`,
  which refuses to shrink below its content. Without it a wide table stretches
  the shell instead of scrolling inside its own wrapper - the single most
  common way a dashboard ends up with a horizontal scrollbar.
*/
export default function DashboardShell({ children }) {
	return (
		<div className="flex min-h-screen bg-gray-50">

			<Sidebar />

			<div className="flex min-w-0 flex-1 flex-col">

				<GlobalHeader />

				{/* `isolate` keeps page-level sticky toolbars and popovers from
				    stacking above the header and the nav drawer. */}
				<main className="isolate min-w-0 flex-1">{children}</main>

			</div>

		</div>
	);
}
