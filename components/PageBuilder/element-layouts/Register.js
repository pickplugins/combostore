/**
 * Element layouts for the `register` element.
 *
 * ElementLayouts.jsx scopes this file to a selected `register` block and its
 * Replace action splices the preset in place of that block, so every root here
 * MUST be `"type": "register"`. (PageBuilder.jsx regenerates all ids on
 * paste/replace, so the readable ids below are safe.)
 *
 * register is the four-field sibling of `login`: a form holding an
 * input-fields-wrap with email, phone, password and confirm-password rows plus
 * the submit, then a have-account line. See Login.js in this folder for the
 * shared form constraints -- this file documents what differs, and most of it
 * differs in the selector keys.
 *
 * Renderer notes that shaped these presets:
 *
 * 1. Two of the keys these presets need are not declared anywhere.
 *    ElementsDefinition declares fourteen keys for register; the renderer reads
 *    `label-username` (Register.jsx:112 and :126) and `input-username` (:122),
 *    neither of which is in that list. So a block dragged from the palette has
 *    no way to style its first label or its email input until a preset adds
 *    those keys -- which every preset below does, alongside the declared ones.
 *
 * 2. Four declared keys are dead, and the live ones are misnamed. The renderer
 *    pairs them like this:
 *
 *      label-username  ->  the EMAIL label (:112) AND the PHONE label (:126)
 *      label-email     ->  BOTH password labels (:141, :153)
 *      input-username  ->  the email input (:122)
 *      input-phone     ->  the phone input (:136)
 *      input-password  ->  both password inputs (:149, :161)
 *
 *    which leaves `input-email`, `label`, `label-phone` and `label-password`
 *    declared and never read. So styling every label alike means setting
 *    `label-username` and `label-email` to the same string -- there is no key
 *    that reaches one label on its own. The dead four are kept at "" to match
 *    the definition.
 *
 * 3. `input` is the shared base, combined with the per-row key on every field
 *    (:122, :136, :149, :161). These presets put all field styling in `input`
 *    and leave the row keys empty, so nothing depends on which of two equal
 *    class strings the stylesheet happens to emit first.
 *
 * 4. The submit is INSIDE input-fields-wrap, not a sibling of it (:167). It is
 *    the fifth child of that wrapper, so the wrapper's own gap spaces the button
 *    exactly like a field -- an `mt-*` on `submit` is the only way to give the
 *    button its own breathing room. It also means a grid on
 *    `input-fields-wrap` makes the submit a grid cell: the two-column preset
 *    gives it `sm:col-span-2` so it spans the full width instead of sitting in
 *    a half-width cell. (That span is `sm:`-prefixed because at one column a
 *    `col-span-2` makes CSS Grid add an implicit second column rather than
 *    clamping.)
 *
 * 5. Both password fields are `type="text"` (:143, :155), so what a customer
 *    types is shown in clear text and no password manager will recognise the
 *    form. No option or selector key can change that -- it needs a renderer
 *    fix. Worth knowing before shipping this element.
 *
 * 6. The email and phone inputs share `name="email"` (:116 and :130). The
 *    component's own state still works, because each input writes its own key
 *    from an inline onChange, but autofill and anything that reads the form by
 *    field name will see two fields with one name.
 *
 * 7. The form does not submit, and there is nothing to show when it fails. The
 *    submit is a <div> with its handler commented out (:167-175), so it needs
 *    `cursor-pointer` to even look clickable; `onSubmit` (:61) is an empty stub
 *    and is not attached to the <form> (:109); and `messages`, `errors` and
 *    `logging` are all declared (:52-54) and never rendered, with the Spinner
 *    import commented out -- so there is no error element to style. Because the
 *    real submit is a div, the form also has no submit control, which means
 *    pressing Enter in a field triggers the browser's native submission on a
 *    form with no action, reloading the page.
 *
 * 8. Placeholders cannot be set from a preset: `yourmail@domain.com` and
 *    `01737034053` are hardcoded (:115, :129) and the password rows pass an
 *    empty string, so `placeholder:` utilities on `input` only ever affect the
 *    first two rows.
 *
 * 9. `have-account` is a plain div of text inside the form (:182), not a link,
 *    so it has no href -- the presets give it a link-like look for when it is
 *    wired up. `options.tag` is read at :28 and never used.
 *
 * The Centered Card preset deliberately matches Login.js's "Centered Card" key
 * for key, so the two sit together as a pair in a customerAccount split.
 */

var layouts = [

  {
    title: 'Centered Card',
    thumbnail: '',
    content: {
      "id": "rg-card",
      "type": "register",
      "options": {
        "emailLabel": "Email",
        "phoneLabel": "Phone",
        "password1Label": "Password",
        "password2Label": "Confirm password",
        "registerLabel": "Create account",
        "haveAccountLabel": "Already have an account? Sign in"
      },
      "cssSelectors": {
        "*": { "classes": "w-full max-w-sm mx-auto p-6 bg-white border border-neutral-200 rounded-2xl shadow-sm" },
        "form": { "classes": "flex flex-col gap-5" },
        "input-fields-wrap": { "classes": "flex flex-col gap-4" },
        "input-wrap": { "classes": "flex flex-col gap-1.5" },
        "input": { "classes": "w-full px-3 py-2.5 text-sm text-neutral-900 bg-white border border-neutral-300 rounded-lg focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100" },
        "input-username": { "classes": "" },
        "input-email": { "classes": "" },
        "input-phone": { "classes": "" },
        "input-password": { "classes": "" },
        "label": { "classes": "" },
        "label-username": { "classes": "text-sm font-medium text-neutral-700" },
        "label-email": { "classes": "text-sm font-medium text-neutral-700" },
        "label-phone": { "classes": "" },
        "label-password": { "classes": "" },
        "submit": { "classes": "mt-1 w-full px-4 py-2.5 text-sm font-semibold text-center text-white bg-neutral-900 rounded-lg cursor-pointer hover:bg-neutral-800 transition-colors" },
        "have-account": { "classes": "text-xs text-center text-neutral-500 cursor-pointer hover:text-orange-600 transition-colors" }
      }
    },
  },

  {
    title: 'Two Column Fields',
    thumbnail: '',
    content: {
      "id": "rg-grid",
      "type": "register",
      "options": {
        "emailLabel": "Email",
        "phoneLabel": "Phone",
        "password1Label": "Password",
        "password2Label": "Confirm password",
        "registerLabel": "Create account",
        "haveAccountLabel": "Already have an account? Sign in"
      },
      "cssSelectors": {
        "*": { "classes": "w-full max-w-xl mx-auto p-7 bg-white border border-neutral-200 rounded-2xl shadow-sm" },
        "form": { "classes": "flex flex-col gap-6" },
        "input-fields-wrap": { "classes": "grid grid-cols-1 sm:grid-cols-2 gap-4" },
        "input-wrap": { "classes": "flex flex-col gap-1.5" },
        "input": { "classes": "w-full px-3 py-2.5 text-sm text-neutral-900 bg-white border border-neutral-300 rounded-lg focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100" },
        "input-username": { "classes": "" },
        "input-email": { "classes": "" },
        "input-phone": { "classes": "" },
        "input-password": { "classes": "" },
        "label": { "classes": "" },
        "label-username": { "classes": "text-xs font-medium text-neutral-600" },
        "label-email": { "classes": "text-xs font-medium text-neutral-600" },
        "label-phone": { "classes": "" },
        "label-password": { "classes": "" },
        "submit": { "classes": "sm:col-span-2 mt-1 w-full px-4 py-3 text-sm font-semibold text-center text-white bg-orange-500 rounded-lg cursor-pointer hover:bg-orange-600 transition-colors" },
        "have-account": { "classes": "text-xs text-center text-neutral-500 cursor-pointer hover:text-orange-600 transition-colors" }
      }
    },
  },

  {
    title: 'Minimal Underline',
    thumbnail: '',
    content: {
      "id": "rg-min",
      "type": "register",
      "options": {
        "emailLabel": "Email",
        "phoneLabel": "Phone",
        "password1Label": "Password",
        "password2Label": "Confirm password",
        "registerLabel": "Create account",
        "haveAccountLabel": "Already have an account? Sign in"
      },
      "cssSelectors": {
        "*": { "classes": "w-full max-w-sm mx-auto" },
        "form": { "classes": "flex flex-col gap-7" },
        "input-fields-wrap": { "classes": "flex flex-col gap-5" },
        "input-wrap": { "classes": "flex flex-col gap-1" },
        "input": { "classes": "w-full px-0 py-2 text-sm text-neutral-900 bg-transparent border-0 border-b border-neutral-300 rounded-none focus:outline-none focus:border-neutral-900" },
        "input-username": { "classes": "" },
        "input-email": { "classes": "" },
        "input-phone": { "classes": "" },
        "input-password": { "classes": "" },
        "label": { "classes": "" },
        "label-username": { "classes": "text-[11px] font-semibold uppercase tracking-widest text-neutral-400" },
        "label-email": { "classes": "text-[11px] font-semibold uppercase tracking-widest text-neutral-400" },
        "label-phone": { "classes": "" },
        "label-password": { "classes": "" },
        "submit": { "classes": "mt-3 w-full px-4 py-3 text-xs font-bold uppercase tracking-widest text-center text-white bg-neutral-900 cursor-pointer hover:bg-neutral-700 transition-colors" },
        "have-account": { "classes": "text-xs text-center text-neutral-400 cursor-pointer hover:text-neutral-900 transition-colors" }
      }
    },
  },

  {
    title: 'Soft Filled Fields',
    thumbnail: '',
    content: {
      "id": "rg-soft",
      "type": "register",
      "options": {
        "emailLabel": "Email",
        "phoneLabel": "Phone",
        "password1Label": "Password",
        "password2Label": "Confirm password",
        "registerLabel": "Create my account",
        "haveAccountLabel": "Already have an account? Sign in"
      },
      "cssSelectors": {
        "*": { "classes": "w-full max-w-sm mx-auto p-6 bg-neutral-50 rounded-2xl" },
        "form": { "classes": "flex flex-col gap-5" },
        "input-fields-wrap": { "classes": "flex flex-col gap-3.5" },
        "input-wrap": { "classes": "flex flex-col gap-1.5" },
        "input": { "classes": "w-full px-3.5 py-3 text-sm text-neutral-900 bg-white border border-transparent rounded-xl focus:outline-none focus:border-orange-300 focus:ring-2 focus:ring-orange-100" },
        "input-username": { "classes": "" },
        "input-email": { "classes": "" },
        "input-phone": { "classes": "" },
        "input-password": { "classes": "" },
        "label": { "classes": "" },
        "label-username": { "classes": "text-xs font-semibold text-neutral-500" },
        "label-email": { "classes": "text-xs font-semibold text-neutral-500" },
        "label-phone": { "classes": "" },
        "label-password": { "classes": "" },
        "submit": { "classes": "mt-2 w-full px-4 py-3 text-sm font-semibold text-center text-white bg-orange-500 rounded-xl cursor-pointer hover:bg-orange-600 transition-colors" },
        "have-account": { "classes": "text-xs text-center text-neutral-500 cursor-pointer hover:text-orange-600 transition-colors" }
      }
    },
  },

  {
    title: 'Dark Panel',
    thumbnail: '',
    content: {
      "id": "rg-dark",
      "type": "register",
      "options": {
        "emailLabel": "Email",
        "phoneLabel": "Phone",
        "password1Label": "Password",
        "password2Label": "Confirm password",
        "registerLabel": "Create account",
        "haveAccountLabel": "Already have an account? Sign in"
      },
      "cssSelectors": {
        "*": { "classes": "w-full max-w-sm mx-auto p-6 bg-neutral-900 border border-neutral-800 rounded-2xl" },
        "form": { "classes": "flex flex-col gap-5" },
        "input-fields-wrap": { "classes": "flex flex-col gap-4" },
        "input-wrap": { "classes": "flex flex-col gap-1.5" },
        "input": { "classes": "w-full px-3 py-2.5 text-sm text-neutral-100 bg-neutral-800 border border-neutral-700 rounded-lg placeholder:text-neutral-500 focus:outline-none focus:border-amber-400" },
        "input-username": { "classes": "" },
        "input-email": { "classes": "" },
        "input-phone": { "classes": "" },
        "input-password": { "classes": "" },
        "label": { "classes": "" },
        "label-username": { "classes": "text-xs font-medium text-neutral-400" },
        "label-email": { "classes": "text-xs font-medium text-neutral-400" },
        "label-phone": { "classes": "" },
        "label-password": { "classes": "" },
        "submit": { "classes": "mt-1 w-full px-4 py-2.5 text-sm font-semibold text-center text-neutral-900 bg-amber-400 rounded-lg cursor-pointer hover:bg-amber-300 transition-colors" },
        "have-account": { "classes": "text-xs text-center text-neutral-500 cursor-pointer hover:text-amber-400 transition-colors" }
      }
    },
  },

  {
    title: 'Compact Modal',
    thumbnail: '',
    content: {
      "id": "rg-compact",
      "type": "register",
      "options": {
        "emailLabel": "Email",
        "phoneLabel": "Phone",
        "password1Label": "Password",
        "password2Label": "Confirm",
        "registerLabel": "Sign up",
        "haveAccountLabel": "Have an account? Sign in"
      },
      "cssSelectors": {
        "*": { "classes": "w-full max-w-xs p-4 bg-white border border-neutral-200 rounded-xl shadow-lg" },
        "form": { "classes": "flex flex-col gap-3.5" },
        "input-fields-wrap": { "classes": "flex flex-col gap-2.5" },
        "input-wrap": { "classes": "flex flex-col gap-1" },
        "input": { "classes": "w-full px-2.5 py-2 text-xs text-neutral-900 bg-white border border-neutral-300 rounded-md focus:outline-none focus:border-orange-400" },
        "input-username": { "classes": "" },
        "input-email": { "classes": "" },
        "input-phone": { "classes": "" },
        "input-password": { "classes": "" },
        "label": { "classes": "" },
        "label-username": { "classes": "text-[11px] font-medium text-neutral-600" },
        "label-email": { "classes": "text-[11px] font-medium text-neutral-600" },
        "label-phone": { "classes": "" },
        "label-password": { "classes": "" },
        "submit": { "classes": "mt-1 w-full px-3 py-2 text-xs font-semibold text-center text-white bg-orange-500 rounded-md cursor-pointer hover:bg-orange-600 transition-colors" },
        "have-account": { "classes": "text-[11px] text-center text-neutral-500 cursor-pointer hover:text-orange-600 transition-colors" }
      }
    },
  },

];

export default layouts;
