/**
 * Element layouts for the `loginByPhone` element.
 *
 * ElementLayouts.jsx scopes this file to a selected `loginByPhone` block and its
 * Replace action splices the preset in place of that block, so every root here
 * MUST be `"type": "loginByPhone"`. (PageBuilder.jsx regenerates all ids on
 * paste/replace, so the readable ids below are safe.)
 *
 * LoginByPhoneView (and the builder's LoginByPhone.jsx) render a two-step form.
 * Step 1: the phone field and the send button. Step 2: the phone field turns
 * read-only (phone-input-locked) with a Change button inside it, then a "we
 * sent a code" note, the code field, the verify button and a resend link. An
 * error box shows under either step. Every part has a cssSelectors key,
 * declared with its default in ElementsDefinition.js: form, field, field-label,
 * field-control, field-input, phone-input, phone-input-locked, change-button,
 * sent-note, sent-phone, otp-input, submit-button, resend-button, error, plus
 * '*' for the wrapper. submit-button styles both steps' buttons.
 *
 * Each preset is built with withElementCssDefaults(), so it carries the full
 * key set (the builder's style editor only lists keys a block has) and lists
 * only the keys it changes from the defaults. The four label options are
 * filled in too; they are also editable in the settings panel.
 *
 * Keep `relative` on field-control and the absolute positioning on
 * change-button, or the Change button falls out of the phone field. The
 * button texts change while sending, counting down and checking ("Send again
 * in 42s"), so keep submit-button fluid rather than sized to its label.
 */

import { withElementCssDefaults } from '../ElementsDefinition';

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
      "cssSelectors": withElementCssDefaults('loginByPhone', {
        "*": { "classes": "w-full max-w-sm mx-auto p-6 bg-white border border-gray-200 rounded-2xl shadow-sm" }
      })
    },
  },

  {
    title: 'Tracking OTP Boxes',
    thumbnail: '',
    content: {
      "id": "lbp-tracking",
      "type": "loginByPhone",
      "options": {
        "phoneLabel": "Phone number",
        "otpLabel": "6-digit code",
        "sendOtpLabel": "Send code",
        "verifyOtpLabel": "Verify"
      },
      "cssSelectors": withElementCssDefaults('loginByPhone', {
        "*": { "classes": "w-full max-w-xs mx-auto p-6 bg-white border border-gray-200 rounded-2xl text-center" },
        "field-label": { "classes": "text-sm font-medium text-gray-700 text-center" },
        "otp-input": { "classes": "text-center text-2xl font-semibold tracking-[0.6em]" }
      })
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
      "cssSelectors": withElementCssDefaults('loginByPhone', {
        "*": { "classes": "w-full max-w-sm mx-auto" },
        "form": { "classes": "flex flex-col gap-6" },
        "field": { "classes": "flex flex-col gap-1" },
        "field-label": { "classes": "text-[11px] font-semibold uppercase tracking-widest text-gray-400" },
        "field-input": { "classes": "w-full border-0 border-b border-gray-300 bg-transparent pb-2 text-sm text-gray-900 placeholder:text-gray-400 rounded-none focus:border-gray-900 focus:outline-none" },
        "submit-button": { "classes": "inline-flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-full bg-[#1b0e9f] px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#150b7d] disabled:cursor-not-allowed disabled:opacity-60" }
      })
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
      "cssSelectors": withElementCssDefaults('loginByPhone', {
        "*": { "classes": "w-full max-w-sm mx-auto p-6 bg-gray-50 rounded-3xl" },
        "field-input": { "classes": "w-full rounded-xl border border-transparent bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 shadow-sm transition-colors focus:border-[#1b0e9f]/40 focus:outline-none focus:ring-2 focus:ring-[#1b0e9f]/15" },
        "submit-button": { "classes": "inline-flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-[#1b0e9f] px-4 py-3 text-sm font-bold text-white transition-colors hover:bg-[#150b7d] disabled:cursor-not-allowed disabled:opacity-60" }
      })
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
      "cssSelectors": withElementCssDefaults('loginByPhone', {
        "*": { "classes": "w-full max-w-sm mx-auto p-6 bg-gray-900 border border-white/10 rounded-2xl" },
        "field-label": { "classes": "text-sm font-medium text-gray-300" },
        "field-input": { "classes": "w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white placeholder:text-gray-500 transition-colors focus:border-amber-400/50 focus:outline-none focus:ring-2 focus:ring-amber-400/10" },
        "phone-input-locked": { "classes": "pr-24 text-gray-400" },
        "change-button": { "classes": "absolute right-2 top-1/2 inline-flex -translate-y-1/2 items-center gap-1 rounded-md px-2 py-1 text-xs font-medium text-amber-400 hover:bg-amber-400/10" },
        "sent-note": { "classes": "text-sm text-gray-400" },
        "sent-phone": { "classes": "font-medium text-white" },
        "submit-button": { "classes": "inline-flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-amber-400 px-4 py-2.5 text-sm font-semibold text-gray-900 transition-colors hover:bg-amber-300 disabled:cursor-not-allowed disabled:opacity-60" },
        "resend-button": { "classes": "text-center text-sm font-medium text-amber-400 hover:underline disabled:cursor-not-allowed disabled:text-gray-500 disabled:no-underline" },
        "error": { "classes": "flex items-start gap-2 rounded-lg border border-red-400/30 bg-red-500/10 px-3 py-2 text-sm text-red-300" }
      })
    },
  },

];

export default layouts;
