/**
 * Element layouts for the `login` element.
 *
 * ElementLayouts.jsx scopes this file to a selected `login` block and its
 * Replace action splices the preset in place of that block, so every root here
 * MUST be `"type": "login"`. (PageBuilder.jsx regenerates all ids on
 * paste/replace, so the readable ids below are safe.)
 *
 * login is a leaf with a fixed structure: a form holding an input-fields-wrap,
 * two input-wrap rows (username then password), the submit, and a
 * forget-password line. A preset is the four label options plus the selector
 * keys.
 *
 * Renderer notes that shaped these presets:
 *
 * 1. The "email" keys style the PASSWORD row. Login.jsx:115 and :120 give the
 *    password label and input the `label-email` and `input-email` keys -- a
 *    copy-paste artifact, since there is no email field in this form at all.
 *    So `label-username`/`input-username` are row one and
 *    `label-email`/`input-email` are row two, the password. Renaming those keys
 *    would be the honest fix, but it would break any page already styled through
 *    them.
 *
 * 2. `label` is declared and never read -- only the two row-specific label keys
 *    are. It is kept at "" below to match the definition.
 *
 * 3. `input` is combined with `input-username` on the first field and with
 *    `input-email` on the second (:110, :120), so `input` is the shared base and
 *    the row keys add to it. These presets put everything shared in `input` and
 *    leave the row keys empty rather than splitting properties between them, so
 *    nothing depends on stylesheet order.
 *
 * 4. The form does not work, and nothing in a preset can change that. The submit
 *    is a <div> with an onClick (:122-129), not a button, so it needs
 *    `cursor-pointer` from the `submit` key to even look clickable -- and
 *    `onSubmit` is commented out end to end (:52-62), so clicking it does
 *    nothing. The `error` state is declared at :51 and never rendered, so there
 *    is no error element to style. And because the real submit is a div, the
 *    <form> has no submit control: pressing Enter in a field triggers the
 *    browser's native submit on a form with no action or handler, which
 *    reloads the page. Worth knowing before shipping this element.
 *
 * 5. `forget-password` is a plain div of text (:138-140), not a link, so it has
 *    no href and no real hover target. These presets still give it a link-like
 *    look, which is what it will need once it is wired up.
 *
 * 6. The inputs carry no hardcoded classes, so focus styling through `input`
 *    (`focus:outline-none focus:ring-2 ...`) applies cleanly with no conflict --
 *    unlike the gallery's images or the tabs root.
 */

var layouts = [

  {
    title: 'Centered Card',
    thumbnail: '',
    content: {
      "id": "lg-card",
      "type": "login",
      "options": {
        "usernameLabel": "Email or phone",
        "passwordLabel": "Password",
        "loginLabel": "Sign in",
        "forgetPasswordLabel": "Forgot your password?"
      },
      "cssSelectors": {
        "*": { "classes": "w-full max-w-sm mx-auto p-6 bg-white border border-neutral-200 rounded-2xl shadow-sm" },
        "form": { "classes": "flex flex-col gap-5" },
        "input-fields-wrap": { "classes": "flex flex-col gap-4" },
        "input-wrap": { "classes": "flex flex-col gap-1.5" },
        "input": { "classes": "w-full px-3 py-2.5 text-sm text-neutral-900 bg-white border border-neutral-300 rounded-lg focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100" },
        "input-username": { "classes": "" },
        "input-email": { "classes": "" },
        "label": { "classes": "" },
        "label-username": { "classes": "text-sm font-medium text-neutral-700" },
        "label-email": { "classes": "text-sm font-medium text-neutral-700" },
        "submit": { "classes": "mt-1 w-full px-4 py-2.5 text-sm font-semibold text-center text-white bg-neutral-900 rounded-lg cursor-pointer hover:bg-neutral-800 transition-colors" },
        "forget-password": { "classes": "text-xs text-center text-neutral-500 cursor-pointer hover:text-orange-600 transition-colors" }
      }
    },
  },

  {
    title: 'Minimal Underline',
    thumbnail: '',
    content: {
      "id": "lg-min",
      "type": "login",
      "options": {
        "usernameLabel": "Email",
        "passwordLabel": "Password",
        "loginLabel": "Continue",
        "forgetPasswordLabel": "Forgot password?"
      },
      "cssSelectors": {
        "*": { "classes": "w-full max-w-sm" },
        "form": { "classes": "flex flex-col gap-6" },
        "input-fields-wrap": { "classes": "flex flex-col gap-5" },
        "input-wrap": { "classes": "flex flex-col gap-1" },
        "input": { "classes": "w-full pb-2 text-sm text-neutral-900 bg-transparent border-0 border-b border-neutral-300 rounded-none focus:outline-none focus:border-neutral-900" },
        "input-username": { "classes": "" },
        "input-email": { "classes": "" },
        "label": { "classes": "" },
        "label-username": { "classes": "text-[11px] font-semibold uppercase tracking-widest text-neutral-400" },
        "label-email": { "classes": "text-[11px] font-semibold uppercase tracking-widest text-neutral-400" },
        "submit": { "classes": "w-full py-3 text-sm font-semibold text-center text-white bg-orange-600 rounded-full cursor-pointer hover:bg-orange-700 transition-colors" },
        "forget-password": { "classes": "text-xs text-neutral-400 cursor-pointer hover:text-neutral-700 transition-colors" }
      }
    },
  },

  {
    title: 'Dark Panel',
    thumbnail: '',
    content: {
      "id": "lg-dark",
      "type": "login",
      "options": {
        "usernameLabel": "Email or phone",
        "passwordLabel": "Password",
        "loginLabel": "Sign in",
        "forgetPasswordLabel": "Forgot your password?"
      },
      "cssSelectors": {
        "*": { "classes": "w-full max-w-sm mx-auto p-6 bg-neutral-900 border border-white/10 rounded-2xl" },
        "form": { "classes": "flex flex-col gap-5" },
        "input-fields-wrap": { "classes": "flex flex-col gap-4" },
        "input-wrap": { "classes": "flex flex-col gap-1.5" },
        "input": { "classes": "w-full px-3 py-2.5 text-sm text-white bg-white/5 border border-white/10 rounded-lg placeholder:text-neutral-500 focus:outline-none focus:border-amber-400/50 focus:ring-2 focus:ring-amber-400/10" },
        "input-username": { "classes": "" },
        "input-email": { "classes": "" },
        "label": { "classes": "" },
        "label-username": { "classes": "text-sm font-medium text-neutral-300" },
        "label-email": { "classes": "text-sm font-medium text-neutral-300" },
        "submit": { "classes": "mt-1 w-full px-4 py-2.5 text-sm font-semibold text-center text-neutral-900 bg-amber-400 rounded-lg cursor-pointer hover:bg-amber-300 transition-colors" },
        "forget-password": { "classes": "text-xs text-center text-neutral-500 cursor-pointer hover:text-amber-400 transition-colors" }
      }
    },
  },

  {
    title: 'Soft Filled Fields',
    thumbnail: '',
    content: {
      "id": "lg-soft",
      "type": "login",
      "options": {
        "usernameLabel": "Email or phone",
        "passwordLabel": "Password",
        "loginLabel": "Log in",
        "forgetPasswordLabel": "Forgot password?"
      },
      "cssSelectors": {
        "*": { "classes": "w-full max-w-md mx-auto p-7 bg-neutral-50 rounded-3xl" },
        "form": { "classes": "flex flex-col gap-6" },
        "input-fields-wrap": { "classes": "flex flex-col gap-4" },
        "input-wrap": { "classes": "flex flex-col gap-2" },
        "input": { "classes": "w-full px-4 py-3 text-sm text-neutral-900 bg-white border border-transparent rounded-xl shadow-sm focus:outline-none focus:border-orange-300 focus:ring-2 focus:ring-orange-100" },
        "input-username": { "classes": "" },
        "input-email": { "classes": "" },
        "label": { "classes": "" },
        "label-username": { "classes": "text-sm font-semibold text-neutral-800" },
        "label-email": { "classes": "text-sm font-semibold text-neutral-800" },
        "submit": { "classes": "w-full px-4 py-3 text-sm font-bold text-center text-white bg-orange-600 rounded-xl cursor-pointer hover:bg-orange-700 transition-colors" },
        "forget-password": { "classes": "text-xs text-center text-neutral-500 underline decoration-neutral-300 underline-offset-2 cursor-pointer hover:text-orange-600" }
      }
    },
  },

  {
    title: 'Compact Dropdown',
    thumbnail: '',
    content: {
      "id": "lg-compact",
      "type": "login",
      "options": {
        "usernameLabel": "Email",
        "passwordLabel": "Password",
        "loginLabel": "Sign in",
        "forgetPasswordLabel": "Forgot password?"
      },
      "cssSelectors": {
        "*": { "classes": "w-72 p-4 bg-white border border-neutral-200 rounded-xl shadow-lg" },
        "form": { "classes": "flex flex-col gap-3" },
        "input-fields-wrap": { "classes": "flex flex-col gap-2.5" },
        "input-wrap": { "classes": "flex flex-col gap-1" },
        "input": { "classes": "w-full px-2.5 py-1.5 text-xs text-neutral-900 bg-white border border-neutral-300 rounded-md focus:outline-none focus:border-orange-400" },
        "input-username": { "classes": "" },
        "input-email": { "classes": "" },
        "label": { "classes": "" },
        "label-username": { "classes": "text-[11px] font-medium text-neutral-600" },
        "label-email": { "classes": "text-[11px] font-medium text-neutral-600" },
        "submit": { "classes": "w-full px-3 py-1.5 text-xs font-semibold text-center text-white bg-neutral-900 rounded-md cursor-pointer hover:bg-neutral-800 transition-colors" },
        "forget-password": { "classes": "text-[11px] text-center text-neutral-400 cursor-pointer hover:text-neutral-700" }
      }
    },
  },

  {
    title: 'Accent Left Border',
    thumbnail: '',
    content: {
      "id": "lg-accent",
      "type": "login",
      "options": {
        "usernameLabel": "Username or email",
        "passwordLabel": "Password",
        "loginLabel": "Sign in to your account",
        "forgetPasswordLabel": "Forgot your password?"
      },
      "cssSelectors": {
        "*": { "classes": "w-full max-w-sm mx-auto p-6 bg-white border-l-4 border-orange-500 shadow-sm" },
        "form": { "classes": "flex flex-col gap-5" },
        "input-fields-wrap": { "classes": "flex flex-col gap-4" },
        "input-wrap": { "classes": "flex flex-col gap-1.5" },
        "input": { "classes": "w-full px-3 py-2 text-sm text-neutral-900 bg-neutral-50 border border-neutral-200 rounded focus:outline-none focus:bg-white focus:border-orange-400" },
        "input-username": { "classes": "" },
        "input-email": { "classes": "" },
        "label": { "classes": "" },
        "label-username": { "classes": "text-xs font-semibold uppercase tracking-wide text-neutral-500" },
        "label-email": { "classes": "text-xs font-semibold uppercase tracking-wide text-neutral-500" },
        "submit": { "classes": "w-full px-4 py-2.5 text-sm font-semibold text-center text-white bg-orange-600 rounded cursor-pointer hover:bg-orange-700 transition-colors" },
        "forget-password": { "classes": "text-xs text-neutral-500 cursor-pointer hover:text-orange-600 transition-colors" }
      }
    },
  },

];

export default layouts;
