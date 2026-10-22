"use client";
// src/store/useCounterStore.js
import { create } from 'zustand'

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;
const appUrl = process.env.NEXT_PUBLIC_APP_URL;



export const useCounterStore = create((set) => ({


  cartItems: [],
  appData: {
    serverUrl: serverUrl,
    appUrl: appUrl,
  },
  // appData: {
  //   serverUrl: "https://server.kidobazar.com/",
  //   appUrl: "https://kidobazar.com/",
  // },
  settings: null,
  settingsLoading: false,
  settingsError: null,

  notifications: [],
  userDataX: null,
  currency: "BDT",
  currencyPosition: "after",
  currencySymbole: "Tk",
  coupons: {
    applied: false,
    couponCode: "",
    discountType: "percent", // "percent" or "fixed"
    discountAmount: 0,
    amount: 0,
    loading: false,
  },





  token: null,
  breakPoint: "Desktop",

  currency: "BDT",
  currencyPosition: "after",
  currencySymbole: "Tk",
  cartItems: [],
  appData: {
    serverUrl: serverUrl,
    appUrl: appUrl,
    // serverUrl: "https://server.kidobazar.com/",
    // appUrl: "https://dashboard.kidobazar.com/",
  },
  PageBuilderPrams: {
    liveMode: false,

  },


  notifications: [],
  settings: null,
  settingsLoading: false,
  settingsError: null,
  orderStatusArgs: {
    confirmed: { label: "Confirmed", value: "confirmed" },
    completed: { label: "Completed", value: "completed" },
    incomplete: { label: "Incomplete", value: "incomplete" },
    delivered: { label: "Delivered", value: "delivered" },
    pending: { label: "Pending", value: "pending" },
    processing: { label: "Processing", value: "processing" },
    hold: { label: "On hold", value: "hold" },
    scheduled: { label: "Scheduled", value: "scheduled" },
    canceled: { label: "Canceled", value: "canceled" },
    failed: { label: "Failed", value: "failed" },
    refunded: { label: "Refunded", value: "refunded" },
    returned: { label: "Returned", value: "returned" }
  },
  paymentStatusArgs: {
    paid: { label: 'Paid', value: 'paid' },
    pending: { label: 'Pending', value: 'pending' },
    due: { label: 'Due', value: 'due' },
    refunded: { label: 'Refunded', value: 'refunded' },
    delayed: { label: 'Delayed', value: 'delayed' },
    failed: { label: 'Failed', value: 'failed' },
    partial: { label: 'Partial', value: 'partial' }
  },


  paymentGateways: {
    "cod": {

      "id": 'cod',
      "enable": false,
      "label": "Cash On Delivery",
      "value": "cod",
    },

    "bank_transfer": {

      "id": 'bank_transfer',
      "enable": false,
      "label": "Bank Transfer",
      "value": "bank_transfer",
    },

    "bkashPersonal": {

      "id": 'bkashPersonal',
      "enable": false,

      "label": "Bkash Personal",
      "value": "bkashPersonal",
    },

    "nagadPersonal": {

      "id": 'nagadPersonal',
      "enable": false,
      "label": "Nagad Personal",
      "value": "nagadPersonal",
    },

    "roketPersonal": {

      "id": 'roketPersonal',
      "enable": false,
      "label": "Roket Personal",
      "value": "roketPersonal",
    },

    "paypal": {

      "id": 'paypal',
      "enable": false,
      "comingSoon": true,
      "label": "PayPal",
      "value": "paypal",
    },
    "aamarpay": {

      "id": 'aamarpay',
      "enable": false,
      "comingSoon": true,
      "label": "aamarPay",
      "value": "aamarpay",
    },
    "sslcommerz": {

      "id": 'sslcommerz',
      "enable": false,
      "comingSoon": true,
      "label": "SSLCOMMERZ",
      "value": "sslcommerz",
    },
    "shurjopay": {

      "id": 'shurjopay',
      "enable": false,
      "comingSoon": true,
      "label": "Shurjopay",
      "value": "shurjopay",
    },
    "paystation": {

      "id": 'paystation',
      "enable": false,
      "comingSoon": true,
      "label": "Paystation",
      "value": "paystation",
    },




    // "nagad": {
    //   "label": "Nagad",
    //   "value": "nagad",
    // },
    // "roket": {
    //   "label": "Roket",
    //   "value": "roket",
    // },
    // "bkash": {
    //   "label": "Bkash",
    //   "value": "bkash",
    // },
    // "sslcommerz": {
    //   "label": "SSLCommerz",
    //   "value": "sslcommerz",
    // },
    // "aamarpay": {
    //   "label": "aamarPay",
    //   "value": "aamarpay",
    // },
    // "eps": {
    //   "label": "EPS",
    //   "value": "eps",
    // },
  },
  paymentGatewaysArgs: {
    "cod": {
      "label": "Cash On Delivery",
      "value": "cod",
    },
    // "COD": {
    //   "label": "Cash On Delivery(COD)",
    //   "value": "COD",
    // },
    "bank_transfer": {
      "label": "Bank Transfer",
      "value": "bank_transfer",
    },
    "bkash": {
      "label": "Bkash",
      "value": "bkash",
    },
    "bkashPersonal": {
      "label": "Bkash Personal",
      "value": "bkashPersonal",
    },
    "nagad": {
      "label": "Nagad",
      "value": "nagad",
    },
    "nagadPersonal": {
      "label": "Nagad Personal",
      "value": "nagadPersonal",
    },
    "roket": {
      "label": "Roket",
      "value": "roket",
    },
    "roketPersonal": {
      "label": "Roket Personal",
      "value": "roketPersonal",
    },
    // "sslcommerz": {
    //   "label": "SSLCommerz",
    //   "value": "sslcommerz",
    // },
    "aamarpay": {
      "label": "aamarPay",
      "value": "aamarpay",
    },
    "paypal": {
      "label": "PayPal",
      "value": "paypal",
    },
  },
  couriersPrams: {
    "steadfast": {
      "label": "Steadfast",
      "id": 'steadfast',
      "enable": false,
      args: {
        "key": "",
        "secret": ""
      }
    },
    "courrierfast": {
      "label": "CourrierFast",
      "id": 'courrierfast',
      "enable": false,
      "comingSoon": true,
      args: {
        "token": "",
      }
    },
    "pathao": {
      "label": "Pathao",
      "id": 'pathao',
      "enable": false,
      "comingSoon": true,

      args: {
        "key": "",
      }
    },
    "redx": {
      "label": "Redx",
      "id": 'redx',
      "enable": false,
      "comingSoon": true,

      args: {
        "token": "",
      }
    },
    "carrybee": {
      "label": "Carry Bee",
      "id": 'carrybee',
      "enable": false,
      "comingSoon": true,

      args: {
        "token": "",
      }
    },
    "paperfly": {
      "label": "Paperfly",
      "id": 'paperfly',
      "enable": false,
      "comingSoon": true,

      args: {
        "token": "",
      }
    },



  },


  inHousePaymentMethods: {
    "cash": {
      "label": "Cash",
      "value": "cash",
    },
    "bank_transfer": {
      "label": "Bank Transfer",
      "value": "bank_transfer",
    },
    "bkash": {
      "label": "Bkash",
      "value": "bkash",
    },

    "nagad": {
      "label": "Nagad",
      "value": "nagad",
    },
  },



  userDataX: null,
  /*
    Two independent pieces of nav state, because the sidebar is two different
    things at two different widths.

    `navToggle` is the desktop column: it is part of the layout, so leaving it
    open by default is right, and collapsing it is a deliberate "give me more
    room" action.

    `mobileNav` is the drawer below `lg`, which floats over the page. It has to
    start closed - one shared flag defaulting to `true` meant a phone loaded
    with the nav already covering the screen, and the only way to reach the
    page was to dismiss it first.
  */
  navToggle: true,
  mobileNav: false,
  privacyMode: false,
  lang: 'en',
  setToken: (token) => set({ token }),
  clearToken: () => set({ token: null }),
  setlang: () =>
    set((state) => ({
      lang: !state.lang,
    })),

  setprivacyMode: () =>
    set((state) => ({
      privacyMode: !state.privacyMode,
    })),

  setCoupons: (newCoupons) =>
    set((state) => ({
      coupons: { ...state.coupons, ...newCoupons },
    })),

  resetCoupons: () =>
    set({
      coupons: {
        applied: false,
        couponCode: "",
        discountType: "percent",
        discountAmount: 10,
      },
    }),
  // ✅ Update any coupon property
  updateCoupons: (key, value) =>
    set((state) => ({
      coupons: {
        ...state.coupons,
        [key]: value, // dynamic property update
      },
    })),

  /*
    Both setters take an optional explicit value. Callers have always written
    `setnavToggle(!navToggle)`, which the old signature ignored and flipped
    anyway; now "close this" can actually say so, which is what the drawer's
    route-change and Escape handlers need.
  */
  setnavToggle: (value) =>
    set((state) => ({
      navToggle: typeof value === 'boolean' ? value : !state.navToggle,
    })),
  setmobileNav: (value) =>
    set((state) => ({
      mobileNav: typeof value === 'boolean' ? value : !state.mobileNav,
    })),
  addNotification: (newNotification) =>
    set((state) => ({
      notifications: [...state.notifications, newNotification],
    })),

  removeNotification: (id) =>
    set((state) => ({
      notifications: state.notifications.filter((todo) => todo.id !== id),
    })),
  resetNotification: (id) =>
    set((state) => ({
      notifications: [],
    })),
  updateNotification: (id, updatedFields) => set((state) => ({
    notifications: state.notifications.map((todo) =>
      todo.id === id ? { ...todo, ...updatedFields } : todo
    ),
  })),

  //cartItems
  // addCartItems: (newCartItems) =>
  //   set((state) => ({
  //     cartItems: [...state.cartItems, newCartItems],
  //   })),
  addCartItems: (newCartItem) =>
    set((state) => {
      const existingItem = state.cartItems.find(
        (item) => item.id === newCartItem.id
      );

      if (existingItem) {
        // update quantity of existing product
        return {
          cartItems: state.cartItems.map((item) =>
            item.id === newCartItem.id
              ? { ...item, quantity: item.quantity + newCartItem.quantity }
              : item
          ),
        };
      } else {
        // add new product to cart
        return {
          cartItems: [...state.cartItems, newCartItem],
        };
      }
    }),
  removeCartItems: (id) =>
    set((state) => ({
      cartItems: state.cartItems.filter((todo) => todo.id !== id),
    })),
  resetCartItems: (id) =>
    set((state) => ({
      cartItems: [],
    })),
  updateCartItems: (id, updatedFields) => set((state) => ({
    cartItems: state.cartItems.map((todo) =>
      todo.id === id ? { ...todo, ...updatedFields } : todo
    ),
  })),



  addPropertyDeep: (obj, path, value) => {
    const [head, ...rest] = path;
    return {
      ...obj,
      [head]: rest.length
        ? useCounterStore.getState().addPropertyDeep(obj[head], rest, value)
        : value,
    };
  },




  onAddStyleElement: (sudoScource, key, obj) => {


    const breakPoint = useCounterStore.getState().breakPoint;


    var path = [sudoScource, key, breakPoint];
    let objX = { ...obj };
    const object = useCounterStore.getState().addPropertyDeep(objX, path, "");


    return object;

    //setAttributes({ [attributeName]: object });
  },
  onResetElement: (state, sudoSources, obj, attributeName, objSelector, blockCssY) => {

    const { breakPoint } = state;
    let objX = { ...obj }
    Object.entries(sudoSources).map((args) => {
      var sudoScource = args[0];
      if (objX[sudoScource] == undefined) {
      } else {
        objX[sudoScource] = {};
        var elementSelector = state.getElementSelector(state.
          sudoScource,
          objSelector
        );
        var cssObject = state.deletePropertyDeep(state, blockCssY.items, [
          elementSelector,
        ]);
        //setAttributes({ ["blockCssY"]: { items: cssObject } });
      }
    });
    //setAttributes({ [attributeName]: objX });
  },



  onBulkAddStyleElement: (state, sudoScource, cssObj, obj, attributeName, objSelector, blockCssY) => {


    const { breakPoint } = state;
    let objX = { ...obj };
    objX[sudoScource] = cssObj;
    //setAttributes({ [attributeName]: objX });
    var selector = state.getElementSelector(state, sudoScource, objSelector);
    var stylesObj = {};
    Object.entries(cssObj).map((args) => {
      var attr = args[0];
      var cssPropty = state.cssAttrParse(state, attr);
      if (stylesObj[selector] == undefined) {
        stylesObj[selector] = {};
      }
      if (stylesObj[selector][cssPropty] == undefined) {
        stylesObj[selector][cssPropty] = {};
      }
      stylesObj[selector][cssPropty] = args[1];
    });
    var cssItems = { ...blockCssY.items };
    var cssItemsX = { ...cssItems, ...stylesObj };
    //setAttributes({ ["blockCssY"]: { items: cssItemsX } });

    Object.entries(cssItemsX).map((args) => {
      var cssHandle = args[0]
      var cssValues = args[1]
      window.blocksCssArr[cssHandle] = cssValues
    })
  },


  onRemoveStyleElement: (state, sudoScource, key, obj, attributeName, objSelector, blockCssY) => {

    const { breakPoint } = state;
    let objX = { ...obj };
    var object = state.deletePropertyDeep(state, objX, [
      sudoScource,
      key,
      breakPoint,
    ]);
    var isEmpty =
      Object.entries(object[sudoScource][key]).length == 0 ? true : false;
    var objectX = isEmpty
      ? state.deletePropertyDeep(state, object, [sudoScource, key])
      : object;
    //setAttributes({ [attributeName]: objectX });


    var elementSelector = state.getElementSelector(state,
      sudoScource,
      objSelector
    );
    var cssPropty = state.cssAttrParse(state, key);
    var cssObject = state.deletePropertyDeep(state, blockCssY.items, [
      elementSelector,
      cssPropty,
      breakPoint,
    ]);
    var isEmptyX = cssObject[cssPropty] == undefined ? false : true;
    var cssObjectX = isEmptyX ? state.deletePropertyDeep(state, cssObject, [cssPropty]) : cssObject;



    Object.entries(cssObjectX).map((args) => {
      var cssHandle = args[0]
      var cssValues = args[1]
      window.blocksCssArr[cssHandle] = cssValues
    })



    //setAttributes({ ["blockCssY"]: { items: cssObjectX } });

  },




  onChangeStyleElement: (state, sudoScource, newVal, attr, obj, attributeName, objSelector, blockCssY, setAttributes) => {

    const { breakPoint } = state;

    var path = [sudoScource, attr, breakPoint];
    let objX = { ...obj };
    const object = state.updatePropertyDeep(state, objX, path, newVal);
    //setAttributes({ [attributeName]: object });

    var elementSelector = state.getElementSelector(state,
      sudoScource,
      objSelector
    );



    var cssPropty = state.cssAttrParse(state, attr);
    let itemsX = { ...blockCssY.items };
    if (itemsX[elementSelector] == undefined) {
      itemsX[elementSelector] = {};
    }
    var cssPath = [elementSelector, cssPropty, breakPoint];
    const cssItems = state.updatePropertyDeep(state, itemsX, cssPath, newVal);


    Object.entries(cssItems).map((args) => {
      var cssHandle = args[0]
      var cssValues = args[1]
      window.blocksCssArr[cssHandle] = cssValues
    })



    //setAttributes({ ["blockCssY"]: { items: cssItems } });

  },




  // ✅ Add these for userDataX
  setUserDataX: (data) => set(() => ({ userDataX: data })),
  resetUserDataX: () => set(() => ({ userDataX: null })),
  updateUserDataX: (partialData) =>
    set((state) => ({
      userData: { ...state.userData, ...partialData },
    })),

  fetchSettings: async () => {


    try {
      set({ settingsLoading: true, settingsError: null });

      const response = await fetch("/api/settings");

      if (!response.ok) throw new Error("Failed to fetch");

      const data = await response.json();


      set({
        settings: data,
        settingsLoading: false,
      });
    } catch (error) {
      set({
        settingsError: error.message,
        settingsLoading: false,
      });
    }
  },



  setSettings: (newSettings) =>
    set((state) => ({
      settings: { ...state.settings, ...newSettings },
    })),




  mobileMenu: 0,
  setmobileMenu: (value) => set({ mobileMenu: value }),
  cartTotal: 0,
  setcartTotal: (amount) => set({ cartTotal: amount }),

  shippingMethod: "free",
  setshippingMethod: (value) => set({ shippingMethod: value }),

  shippingCost: 0,
  setshippingCost: (amount) => set({ shippingCost: amount }),
  cartStep: 0,
  setcartStep: (amount) => set({ cartStep: amount }),

  cartTotalPay: 0,
  setcartTotalPay: (amount) => set({ cartTotalPay: amount }),

  navToggle: false,
  setnavToggle: () =>
    set((state) => ({
      navToggle: !state.navToggle,
    })),

  cartToggle: false,
  setcartToggle: (value) =>
    set((state) => ({
      cartToggle: value ? value : !state.cartToggle,
    })),


  addNotification: (newNotification) =>
    set((state) => ({
      notifications: [...state.notifications, newNotification],
    })),

  removeNotification: (id) =>
    set((state) => ({
      notifications: state.notifications.filter((todo) => todo.id !== id),
    })),
  resetNotification: (id) =>
    set((state) => ({
      notifications: [],
    })),
  updateNotification: (id, updatedFields) => set((state) => ({
    notifications: state.notifications.map((todo) =>
      todo.id === id ? { ...todo, ...updatedFields } : todo
    ),
  })),


  addCartItems: (newCartItem) =>
    set((state) => {
      const isVariableProduct = !!newCartItem?.variation_id;

      const existingItem = state.cartItems.find((item) => {
        if (isVariableProduct) {
          // Variable product:
          // Match both product ID and variation ID
          return (
            item.id === newCartItem.id &&
            item.variation_id === newCartItem.variation_id
          );
        }

        // Simple product:
        // Match only product ID
        return (
          item.id === newCartItem.id &&
          !item.variation_id
        );
      });

      if (existingItem) {
        state.addNotification({
          type: 'success',
          title: 'Item updated to cart',
          content: '',
        });

        return {
          cartItems: state.cartItems.map((item) =>
            item === existingItem
              ? {
                ...item,
                quantity: item.quantity + newCartItem.quantity,
              }
              : item
          ),
        };
      }

      state.addNotification({
        type: 'success',
        title: 'Item(s) added to cart',
        content: '',
      });

      return {
        cartItems: [...state.cartItems, newCartItem],
      };
    }),
  // addCartItems: (newCartItem) =>
  //   set((state) => {
  //     const existingItem = state.cartItems.find(
  //       (item) => item.id === newCartItem.id
  //     );

  //     if (existingItem) {
  //       // update quantity of existing product
  //       state.addNotification({ type: 'success', title: 'Item updated to cart', content: "" })


  //       return {
  //         cartItems: state.cartItems.map((item) =>
  //           item.id === newCartItem.id
  //             ? { ...item, quantity: item.quantity + newCartItem.quantity }
  //             : item
  //         ),
  //       };
  //     } else {
  //       // add new product to cart
  //       state.addNotification({ type: 'success', title: 'Item(s) added to cart', content: "" })

  //       return {
  //         cartItems: [...state.cartItems, newCartItem],
  //       };
  //     }




  //   }),
  // removeCartItems: (id) =>
  //   set((state) => ({
  //     cartItems: state.cartItems.filter((todo) => todo.id !== id),
  //   })),

  removeCartItems: (index) =>
    set((state) => ({
      cartItems: state.cartItems.filter((_, itemIndex) => itemIndex !== index),
    })),

  resetCartItems: (id) =>
    set((state) => ({
      cartItems: [],
    })),
  // updateCartItems: (id, updatedFields) => set((state) => ({
  //   cartItems: state.cartItems.map((todo) =>
  //     todo.id === id ? { ...todo, ...updatedFields } : todo
  //   ),
  // })),

  updateCartItems: (id, updatedFields) =>
    set((state) => {
      const existingItem = state.cartItems.find((item) => item.id === id);

      if (existingItem) {
        // ✅ Item exists → update it
        state.addNotification({ type: "success", title: "Cart updated", content: "" });

        return {
          cartItems: state.cartItems.map((item) =>
            item.id === id ? { ...item, ...updatedFields } : item
          ),
        };
      } else {
        // ✅ Item does not exist → call addCartItems
        const newCartItem = { id, ...updatedFields };

        // Instead of duplicating code, reuse addCartItems
        state.addCartItems(newCartItem);

        return {}; // No direct update here, because addCartItems will handle it
      }
    }),






}))
