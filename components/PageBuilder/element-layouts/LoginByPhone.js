/**
 * Element layouts for the `loginByPhone` element.
 *
 * ElementLayouts.jsx scopes this file to a selected `loginByPhone` block and its
 * Replace action splices the preset in place of that block, so every root here
 * MUST be `"type": "loginByPhone"`. (PageBuilder.jsx regenerates all ids on
 * paste/replace, so the readable ids below are safe.)
 *
 * loginByPhone is the OTP sibling of `login`: a form with a phone row, an OTP
 * row and one submit, driven by a `step` state. It is the only form element in
 * this folder that actually works -- and the only one with no options panel at
 * all -- which changes what a preset here is for.
 *
 * Renderer notes that shaped these presets:
 *
 * 1. There is no options panel, so a preset is the only way to configure this
 *    element. BlockPreview.jsx:159 renders it, but there is no
 *    LoginByPhoneOptions.jsx and no `loginByPhone` branch in ElementOptions.jsx,
 *    so selecting the block offers no controls for its four labels. Every preset
 *    below therefore ships all four, filled in, rather than leaving any to be
 *    typed later.
 *
 * 2. The form submits for real, unlike login and register. `onSubmit` is
 *    attached to the <form> (:233) and calls `preventDefault()` (:92), the phone
 *    is normalised and validated (`/^01[3-9]\\d{8}$/` after stripping spaces and
 *    a `+88`/`8801` prefix, :40-47), and the handlers POST to
 *    combo-store/v2/send_login_otp (:169) and the verify endpoint. So
 *    `cursor-pointer` on `submit` is a real affordance here, and pressing Enter
 *    in a field runs the handler instead of reloading the page.
 *
 * 3. `step` starts at 2 (:49), so what renders -- in the canvas and on a fresh
 *    page -- is the phone row, the OTP row and the Verify button. The step-1
 *    branch holding the Send OTP button (:247-262) is unreachable from that
 *    initial state, since `setstep(2)` at :124 is the only call that ever
 *    changes it. So `sendOtpLabel` and the resend countdown are dead UI for now.
 *    Both branches share the single `submit` key, so a preset styles one button
 *    and gets both if that is ever fixed.
 *
 * 4. The button's text is replaced at runtime, so do not size it to the label.
 *    :258 and :286 substitute hardcoded "Please wait...", "Resend OTP in {n}s"
 *    and "Verifying..." while loading or counting down, which are longer than
 *    any of the label options. These presets keep the submit fluid --
 *    padding plus `whitespace-nowrap`, never a fixed width -- so it cannot clip
 *    mid-request. The label itself sits in an inner plain <div> with no key.
 *
 * 5. The error message renders but carries no classes, and the only way in is a
 *    descendant variant. :296 emits
 *    `<div role="alert" aria-live="polite">{error}</div>` with no selector key
 *    at all -- better than login and register, where the error state is never
 *    rendered, but unstyleable directly. Each preset reaches it with
 *    `[&_[role=alert]]:...` on `input-fields-wrap`, which compiles against this
 *    project's Tailwind to `.[&_[role=alert]]:text-red-600 [role=alert]` (I
 *    built the candidate set through @tailwindcss/node to confirm it emits a
 *    real descendant rule rather than being dropped).
 *
 * 6. The phone field is `type="number"` (:238), which puts spinner arrows on a
 *    phone input. The `input-phone` key below removes them with
 *    `[appearance:textfield]` and an `appearance-none` reset on each of the
 *    inner and outer webkit spin-button pseudo-elements; all three were
 *    compiled against this project's Tailwind alongside the alert variant.
 *    (Do not spell a wildcard form of those two selectors anywhere in this
 *    file: the scanner reads comments too, and would compile it to CSS that
 *    fails to parse.) They are on `input-phone` -- the one place a preset here uses a
 *    per-row key rather than the shared `input`, because it applies to that
 *    field only. The placeholder (`01537039053`) is hardcoded and cannot be set
 *    from a preset.
 *
 * 7. `input` is the shared base, combined with `input-phone` (:243) and
 *    `input-otp` (:277). Of the declared keys only `label` is dead -- the two
 *    labels use `label-phone` (:236) and `label-otp` (:272) -- and unlike
 *    register, every live key here is actually declared, so nothing has to be
 *    invented.
 *
 * 8. Three undeclared options are read and left unset: `sendOtpEndpoint` (:114)
 *    and `verifyOtpEndpoint` (:138), which override the default API routes and
 *    are store-specific, and `otpResendCooldown` (:125, default 60), which only
 *    matters for the unreachable step-1 branch. `options.tag` is read at :31 and
 *    never used.
 */

var layouts = [

  {
    title: 'Centered Card',
    thumbnail: '',
    content: {
      "id": "lbp-card",
      "type": "loginByPhone",
      "options": {
        "phoneLabel": "Phone number",
        "otpLabel": "Enter the code we sent you",
        "sendOtpLabel": "Send code",
        "verifyOtpLabel": "Verify and sign in"
      },
      "cssSelectors": {
        "*": { "classes": "w-full max-w-sm mx-auto p-6 bg-white border border-neutral-200 rounded-2xl shadow-sm" },
        "form": { "classes": "flex flex-col gap-5" },
        "input-fields-wrap": { "classes": "flex flex-col gap-4 [&_[role=alert]]:text-xs [&_[role=alert]]:text-red-600" },
        "input-wrap": { "classes": "flex flex-col gap-1.5" },
        "input": { "classes": "w-full px-3 py-2.5 text-sm text-neutral-900 bg-white border border-neutral-300 rounded-lg focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100" },
        "input-phone": { "classes": "[appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none" },
        "input-otp": { "classes": "" },
        "label": { "classes": "" },
        "label-phone": { "classes": "text-sm font-medium text-neutral-700" },
        "label-otp": { "classes": "text-sm font-medium text-neutral-700" },
        "submit": { "classes": "mt-1 w-full px-4 py-2.5 text-sm font-semibold text-center text-white bg-neutral-900 rounded-lg cursor-pointer whitespace-nowrap hover:bg-neutral-800 transition-colors" }
      }
    },
  },

  {
    title: 'Tracking OTP Boxes',
    thumbnail: '',
    content: {
      "id": "lbp-otp",
      "type": "loginByPhone",
      "options": {
        "phoneLabel": "Phone number",
        "otpLabel": "6-digit code",
        "sendOtpLabel": "Send code",
        "verifyOtpLabel": "Verify"
      },
      "cssSelectors": {
        "*": { "classes": "w-full max-w-xs mx-auto p-6 bg-white border border-neutral-200 rounded-2xl text-center" },
        "form": { "classes": "flex flex-col gap-5" },
        "input-fields-wrap": { "classes": "flex flex-col gap-4 [&_[role=alert]]:text-xs [&_[role=alert]]:text-red-600 [&_[role=alert]]:mt-1" },
        "input-wrap": { "classes": "flex flex-col gap-1.5 text-left" },
        "input": { "classes": "w-full px-3 py-2.5 text-sm text-neutral-900 bg-white border border-neutral-300 rounded-lg focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100" },
        "input-phone": { "classes": "[appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none" },
        "input-otp": { "classes": "text-center text-lg font-semibold tracking-[0.4em]" },
        "label": { "classes": "" },
        "label-phone": { "classes": "text-xs font-medium text-neutral-600" },
        "label-otp": { "classes": "text-xs font-medium text-neutral-600" },
        "submit": { "classes": "mt-1 w-full px-4 py-2.5 text-sm font-semibold text-center text-white bg-orange-500 rounded-lg cursor-pointer whitespace-nowrap hover:bg-orange-600 transition-colors" }
      }
    },
  },

  {
    title: 'Minimal Underline',
    thumbnail: '',
    content: {
      "id": "lbp-min",
      "type": "loginByPhone",
      "options": {
        "phoneLabel": "Phone",
        "otpLabel": "Code",
        "sendOtpLabel": "Send code",
        "verifyOtpLabel": "Continue"
      },
      "cssSelectors": {
        "*": { "classes": "w-full max-w-sm mx-auto" },
        "form": { "classes": "flex flex-col gap-7" },
        "input-fields-wrap": { "classes": "flex flex-col gap-5 [&_[role=alert]]:text-xs [&_[role=alert]]:text-red-600" },
        "input-wrap": { "classes": "flex flex-col gap-1" },
        "input": { "classes": "w-full px-0 py-2 text-sm text-neutral-900 bg-transparent border-0 border-b border-neutral-300 rounded-none focus:outline-none focus:border-neutral-900" },
        "input-phone": { "classes": "[appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none" },
        "input-otp": { "classes": "tracking-[0.2em]" },
        "label": { "classes": "" },
        "label-phone": { "classes": "text-[11px] font-semibold uppercase tracking-widest text-neutral-400" },
        "label-otp": { "classes": "text-[11px] font-semibold uppercase tracking-widest text-neutral-400" },
        "submit": { "classes": "mt-3 w-full px-4 py-3 text-xs font-bold uppercase tracking-widest text-center text-white bg-neutral-900 cursor-pointer whitespace-nowrap hover:bg-neutral-700 transition-colors" }
      }
    },
  },

  {
    title: 'Soft Filled Fields',
    thumbnail: '',
    content: {
      "id": "lbp-soft",
      "type": "loginByPhone",
      "options": {
        "phoneLabel": "Phone number",
        "otpLabel": "Verification code",
        "sendOtpLabel": "Send code",
        "verifyOtpLabel": "Verify and continue"
      },
      "cssSelectors": {
        "*": { "classes": "w-full max-w-sm mx-auto p-6 bg-neutral-50 rounded-2xl" },
        "form": { "classes": "flex flex-col gap-5" },
        "input-fields-wrap": { "classes": "flex flex-col gap-3.5 [&_[role=alert]]:text-xs [&_[role=alert]]:text-red-600" },
        "input-wrap": { "classes": "flex flex-col gap-1.5" },
        "input": { "classes": "w-full px-3.5 py-3 text-sm text-neutral-900 bg-white border border-transparent rounded-xl focus:outline-none focus:border-orange-300 focus:ring-2 focus:ring-orange-100" },
        "input-phone": { "classes": "[appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none" },
        "input-otp": { "classes": "" },
        "label": { "classes": "" },
        "label-phone": { "classes": "text-xs font-semibold text-neutral-500" },
        "label-otp": { "classes": "text-xs font-semibold text-neutral-500" },
        "submit": { "classes": "mt-2 w-full px-4 py-3 text-sm font-semibold text-center text-white bg-orange-500 rounded-xl cursor-pointer whitespace-nowrap hover:bg-orange-600 transition-colors" }
      }
    },
  },

  {
    title: 'Dark Panel',
    thumbnail: '',
    content: {
      "id": "lbp-dark",
      "type": "loginByPhone",
      "options": {
        "phoneLabel": "Phone number",
        "otpLabel": "Verification code",
        "sendOtpLabel": "Send code",
        "verifyOtpLabel": "Verify and sign in"
      },
      "cssSelectors": {
        "*": { "classes": "w-full max-w-sm mx-auto p-6 bg-neutral-900 border border-neutral-800 rounded-2xl" },
        "form": { "classes": "flex flex-col gap-5" },
        "input-fields-wrap": { "classes": "flex flex-col gap-4 [&_[role=alert]]:text-xs [&_[role=alert]]:text-red-400" },
        "input-wrap": { "classes": "flex flex-col gap-1.5" },
        "input": { "classes": "w-full px-3 py-2.5 text-sm text-neutral-100 bg-neutral-800 border border-neutral-700 rounded-lg placeholder:text-neutral-500 focus:outline-none focus:border-amber-400" },
        "input-phone": { "classes": "[appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none" },
        "input-otp": { "classes": "tracking-[0.2em]" },
        "label": { "classes": "" },
        "label-phone": { "classes": "text-xs font-medium text-neutral-400" },
        "label-otp": { "classes": "text-xs font-medium text-neutral-400" },
        "submit": { "classes": "mt-1 w-full px-4 py-2.5 text-sm font-semibold text-center text-neutral-900 bg-amber-400 rounded-lg cursor-pointer whitespace-nowrap hover:bg-amber-300 transition-colors" }
      }
    },
  },

  {
    title: 'Compact Modal',
    thumbnail: '',
    content: {
      "id": "lbp-compact",
      "type": "loginByPhone",
      "options": {
        "phoneLabel": "Phone",
        "otpLabel": "Code",
        "sendOtpLabel": "Send code",
        "verifyOtpLabel": "Verify"
      },
      "cssSelectors": {
        "*": { "classes": "w-full max-w-xs p-4 bg-white border border-neutral-200 rounded-xl shadow-lg" },
        "form": { "classes": "flex flex-col gap-3.5" },
        "input-fields-wrap": { "classes": "flex flex-col gap-2.5 [&_[role=alert]]:text-[11px] [&_[role=alert]]:text-red-600" },
        "input-wrap": { "classes": "flex flex-col gap-1" },
        "input": { "classes": "w-full px-2.5 py-2 text-xs text-neutral-900 bg-white border border-neutral-300 rounded-md focus:outline-none focus:border-orange-400" },
        "input-phone": { "classes": "[appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none" },
        "input-otp": { "classes": "tracking-[0.2em]" },
        "label": { "classes": "" },
        "label-phone": { "classes": "text-[11px] font-medium text-neutral-600" },
        "label-otp": { "classes": "text-[11px] font-medium text-neutral-600" },
        "submit": { "classes": "mt-1 w-full px-3 py-2 text-xs font-semibold text-center text-white bg-orange-500 rounded-md cursor-pointer whitespace-nowrap hover:bg-orange-600 transition-colors" }
      }
    },
  },

];

export default layouts;
