"use client";

/*
  Field styling shared by the sign-in and register forms, which are the only
  two screens this shell wraps. The global CSS rules for `input` and `button`
  are unlayered, so they beat Tailwind utilities on those elements and these
  overrides have to be important to land. `pl-10` leaves room for the leading
  icon.
*/
export const FIELD_CLASSES =
	"w-full !rounded-lg !border !border-gray-300 !bg-white !py-2.5 !pl-10 !pr-3 !text-sm !text-gray-900 !shadow-sm !outline-none transition-colors placeholder:text-gray-400 hover:!border-gray-400 focus:!border-brand focus:!ring-4 focus:!ring-brand/15";

export const LABEL_CLASSES = "mb-1.5 block text-xs font-semibold text-gray-700";

export const ADORNMENT_CLASSES =
	"pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400";

export const SUBMIT_CLASSES =
	"mt-1 inline-flex w-full items-center justify-center gap-2 !rounded-lg !border-0 !bg-brand !px-4 !py-2.5 !text-sm !font-semibold !text-white !shadow-sm transition-colors hover:!bg-brand-600 disabled:!cursor-not-allowed disabled:!opacity-70";

/*
  The frame for /login and /register.

  These screens used to centre their card with `h-screen w-screen` on a
  `bg-gray-300` block. On a phone `h-screen` is the *largest* viewport height,
  so with the browser chrome showing, a card taller than the visible area had
  nowhere to scroll to - the top of the form sat above the fold and stayed
  there. `min-h-dvh` tracks the visible height instead, and the padding keeps
  the card clear of the notch and the home indicator.
*/
export default function AuthShell({ children }) {
	return (
		<div className="relative flex min-h-dvh w-full items-center justify-center overflow-hidden bg-gray-100 px-4 py-10 [padding-bottom:max(2.5rem,env(safe-area-inset-bottom))] [padding-top:max(2.5rem,env(safe-area-inset-top))]">

			{/* Two soft brand washes behind the card, so the sign-in screen is not
			    a white box on flat grey. Non-interactive and purely decorative. */}
			<div
				aria-hidden="true"
				className="pointer-events-none absolute -left-32 -top-32 h-80 w-80 rounded-full bg-brand/10 blur-3xl"
			/>
			<div
				aria-hidden="true"
				className="pointer-events-none absolute -bottom-40 -right-24 h-96 w-96 rounded-full bg-sky-400/10 blur-3xl"
			/>

			<div className="relative w-full max-w-sm">{children}</div>

		</div>
	);
}
