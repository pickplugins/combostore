// store/useUtilsStore.js
import { create } from "zustand";
import { useCounterStore } from "./useCounterStore";

/* trackPageVisit used this without it ever being defined here: the
   ReferenceError was caught below, so no activity was ever sent. */
const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

export const useUtilsStore = create((set, get) => ({

  /*
    How a price is turned into text, when something other than core decides.

    `wrapCurrency` and `priceHtml` below offer every amount to this first
    and use what comes back. Returning null or undefined means "not mine"
    and core formats it as it always has - so an unset slot and a formatter
    that declines are the same thing, which is what lets a formatter cover
    the storefront and leave the dashboard's figures alone.

    It lives in this store rather than beside the cart because the
    components that print prices subscribe to this one. Installing a
    formatter is a `set`, so they all re-render and the new formatting
    reaches the page; from another store it would be read on the next
    render that happened to occur, and switching currency would leave
    every price on screen unchanged.

    extensions/currency-switcher fills it in to show prices in the currency
    a shopper picked. It is display only: carts, orders and payments stay
    in the store's own currency, and nothing here touches an amount that
    is stored or sent.
  */
  formatPrice: null,
  setFormatPrice: (fn) => set({ formatPrice: typeof fn === "function" ? fn : null }),




  /*
    Every price the storefront prints comes through here, which is why it is
    where an extension gets to intervene - see `formatPrice` above.

    A formatter that returns null or undefined is declining, and core formats
    the amount exactly as it did before. That is deliberate: with nothing
    installed, or on a screen the formatter chooses not to touch, the output
    is byte for byte what it always was.
  */
  wrapCurrency: (value) => {
    const formatPrice = get().formatPrice;
    if (formatPrice) {
      const formatted = formatPrice(value);
      if (formatted != null) return formatted;
    }

    const currencySymbole = useCounterStore.getState().currencySymbole;
    const currencyPosition = useCounterStore.getState().currencyPosition;
    var string = "";

    if (currencyPosition == 'before') {
      string = `${currencySymbole}${value}`;

    }
    if (currencyPosition == 'after') {
      string = `${value}${currencySymbole}`;


    }
    return string;
  },

  /*
    Records a storefront event (add to cart, ...) in the Activity log
    (combo-store/v2/add_activity). Fire-and-forget: it never throws, and
    answers the server's reply, or null when it could not be sent.

    The reply used to be read twice - once inside a console.log - which
    threw, so even a saved event looked like a failure. No `keepalive`: a
    cross-origin JSON post needs a preflight, which some browsers refuse
    for keepalive requests.
  */
  trackPageVisit: async (trackPrams) => {

    if (!serverUrl || !trackPrams?.event) return null;

    /* The server takes the shopper from the sign-in token and ignores any
       user id in the body, so a guest cannot log events as a customer. */
    const token = useCounterStore.getState().token;

    try {
      const response = await fetch(serverUrl + "wp-json/combo-store/v2/add_activity", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        body: JSON.stringify({
          event: trackPrams?.event,
          source: trackPrams?.source ?? "",
          value: {
            productId: trackPrams?.productId,
            /* How many units the line holds after the event, when the caller knows. */
            ...(Number.isFinite(trackPrams?.quantity) ? { quantity: trackPrams.quantity } : {}),
          },
        }),
      });

      if (!response.ok) {
        throw new Error(`Server answered ${response.status}.`);
      }

      return await response.json();
    } catch (error) {
      if (process.env.NODE_ENV !== "production") {
        console.warn("[trackPageVisit] not recorded:", error?.message ?? error);
      }
      return null;
    }
  },
  priceHtml: (entry) => {

    var price = entry?.price
    var regularPrice = entry?.regularPrice

    /*
      The same hand-off wrapCurrency makes, once per amount. Both numbers go
      through it, so a sale price and the struck-out price beside it cannot
      end up in two different currencies.
    */
    const formatPrice = get().formatPrice;
    if (formatPrice) {
      const formattedPrice = formatPrice(price);
      if (formattedPrice != null) {
        const formattedRegular = regularPrice != null ? formatPrice(regularPrice) : null;
        return `<span>${formattedPrice}</span>`
          + (formattedRegular != null ? `<span class="line-through">${formattedRegular}</span>` : "");
      }
    }




    const currencySymbole = useCounterStore.getState().currencySymbole;
    const currencyPosition = useCounterStore.getState().currencyPosition;
    var string = "";

    if (currencyPosition == 'before') {
      string = `<span>${currencySymbole}${price}</span>`;
      if (regularPrice) {
        string += `<span class="line-through">${currencySymbole}${regularPrice}</span>`;
      }
    }
    if (currencyPosition == 'after') {
      string = `<span>${price}${currencySymbole} </span>`;
      if (regularPrice) {
        string += `<span class="line-through">${regularPrice}${currencySymbole} </span>`;
      }
    }




    return string;
  },



  formatDate: (dateTimeStr, format = "DD-MM-YYYY HH:mm A") => {
    const date = new Date(dateTimeStr.replace(' ', 'T'));
    if (isNaN(date)) return "Invalid Date";

    let hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();

    // Determine AM/PM
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12; // Convert to 12-hour format
    const hourStr = String(hours).padStart(2, '0');

    // Replace tokens in format string
    return format
      .replace("DD", day)
      .replace("MM", month)
      .replace("YYYY", year)
      .replace("HH", hourStr)
      .replace("mm", minutes)
      .replace("ss", seconds)
      .replace("A", ampm) // Uppercase AM/PM
      .replace("a", ampm.toLowerCase()); // Lowercase am/pm
  },



  addNumbers: (a, b) => {
    return a + b;
  },

  generateToken: () => {
    return Math.random().toString(36).substring(2);
  },






}));
