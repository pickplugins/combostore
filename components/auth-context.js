"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { useCounterStore } from '../store/useCounterStore'
import { useRouter } from "next/navigation";
import { clearCheckoutDraft } from "@/lib/checkoutDraft";
import { clearOrdersQuery } from "@/lib/ordersQuery";
import { clearProductsQuery } from "@/lib/productsQuery";
import { clearPostsQuery } from "@/lib/postsQuery";
import { installDemoFetch } from "@/lib/demo/install";

/* NEXT_PUBLIC_DEMO_MODE: answer dashboard requests from the demo store
   (lib/demo). Here, at module load, so it is in place before AuthProvider's
   effect - or any other - sends its first request. A no-op otherwise. */
installDemoFetch();


const AuthContext = createContext(null);

/* A sign-in the server refused, carrying the message to show. */
class LoginError extends Error {}

export const VERIFY_EMAIL_MESSAGE = "Please verify your email first - open the verification link we sent you, then sign in.";

/*
	What to tell someone whose sign-in jwt-auth refused, from its error body
	({ code, message }). Wrong username / email / password stay one message,
	so the form does not reveal which accounts exist. An unverified email
	(the user-verification plugin: "Verify your email first!") says so, since
	"Invalid credentials" sends a shopper with the right password round in
	circles. Anything else shows the server's own words with its HTML
	stripped - the plugin's message carries tags and a link.
*/
export function loginErrorMessage(body) {
  const code = String(body?.code ?? '');
  const text = String(body?.message ?? '').replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();

  if (/verif/i.test(code) || /uv_authentication/i.test(code) || /verify your email/i.test(text)) {
    return VERIFY_EMAIL_MESSAGE;
  }

  if (/incorrect_password|invalid_username|invalid_email|empty_username|empty_password|invalid_credentials/i.test(code) || !text) {
    return "Invalid credentials. Please try again.";
  }

  return text;
}

/*
	The "Resend verification email" link the user-verification plugin puts in
	its refusal, or null. Only taken when it points at our own backend
	(NEXT_PUBLIC_SERVER_URL's origin) and is that plugin's resend action, so
	a reply cannot make the storefront request somewhere else.
*/
export function loginResendUrl(body) {
  const href = String(body?.message ?? '').match(/href="([^"]+)"/)?.[1]?.replace(/&amp;/g, '&');
  if (!href) return null;

  try {
    const url = new URL(href);
    const server = new URL(process.env.NEXT_PUBLIC_SERVER_URL);
    if (url.origin !== server.origin) return null;
    if (url.searchParams.get('user_verification_action') !== 'resend_verification') return null;
    return url.toString();
  } catch {
    return null;
  }
}

export function AuthProvider({ children }) {
  const router = useRouter();
  // const { setToken } = useCounterStore.getState();

  const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;
  const { token, setToken, appData, notifications, addNotification, cartItems, addCartItems, removeCartItems, resetCartItems, updateCartItems, userDataX, setUserDataX, } = useCounterStore()

  const [user, setUser] = useState(null);



  const [error, setError] = useState(null);
  /* Set with the "verify your email" error: where to ask for a new verification email. */
  const [resendUrl, setResendUrl] = useState(null);
  const [logging, setlogging] = useState(null);
  const [loading, setLoading] = useState(null);



  function fetchUser() {
    const token = localStorage.getItem("token");




    if (!token) {
      return;
      //throw new Error("No token found");
    }

    /*
      Put the stored JWT back into the store before validating it.

      `setToken` was only ever called from `handleLogin`, so on a reload the
      store's `token` started null while the JWT sat in localStorage being used
      by this very request. GlobalHeader logs out on `token == null`, so every
      refresh - and every link opened directly - bounced a signed-in user to
      /login. Nothing was wrong with the credentials; the session just was not
      being rehydrated.

      Set from here rather than at store creation because the store module is
      imported during SSR, where `localStorage` does not exist; this runs from
      an effect, on the client, which is also where a mismatch cannot occur.
    */
    setToken(token);

    var postData = {};
    postData = JSON.stringify(postData);

    fetch(serverUrl + "wp-json/combo-store/v2/get_user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: postData,
    })
      .then((response) => {
        if (response.status == 429) {
          setLoading(false);

          throw new Error("Too Many Requests");
        }
        /*
          The token itself was refused - revoked by a password change
          (jwt_auth_revoked), expired, or otherwise invalid. It used to be kept,
          leaving a half-signed-in session where every request failed. Now it is
          dropped. Inside the dashboard that means the sign-in page; on the
          storefront the shopper just carries on signed out.
        */
        if (response.status === 401 || response.status === 403) {
          return response.json().catch(() => null).then((res) => {
            if (String(res?.code ?? "").startsWith("jwt_auth")) {
              endRefusedSession();
            }
            throw new Error("Token validation failed");
          });
        }
        if (!response.ok) {
          throw new Error("Token validation failed");
        }

        if (response.ok && response.status < 400) {
          response.json().then((res) => {


            var roles = res.user.roles;



            if (!roles?.includes("administrator")) {

              // setTimeout(() => {


              //   setUser(null)
              //   localStorage.removeItem("token");
              //   setToken(null);
              //   setUserDataX(null);
              //   router.push("/activity");

              // }, 500);



            }

            setUserDataX(res.user);

          });
        }
      })
      .catch((_error) => {
        //this.saveAsStatus = 'error';
        // handle the error
      });
  }
  useEffect(() => {
    fetchUser();
  }, []);




  /* `redirectTo` is where to go once signed in. The dashboard's login page
     relies on the default; a storefront login block passes null to stay on
     the page it is on (the account page swaps to the logged-in view). */
  const handleLogin = (username, password, redirectTo = "/dashboard") => {


    // 📝 Fake login (replace with API call)
    // if (username === "admin" && password === "123456") {
    //   setUser({ name: "Admin User" });
    //   return true;
    // }
    // return false;
    setlogging(true);
    /* Cleared on each attempt, otherwise a failure's message sticks around
       under the form through every retry that follows. */
    setError(null);
    setResendUrl(null);

    var postData = {
      username: username,
      password: password,
    };
    postData = JSON.stringify(postData);


    /* Resolves true once signed in, false on failure, for callers that need
       to know (Register's sign-in after sign-up). Others ignore it. */
    return fetch(serverUrl + "wp-json/jwt-auth/v1/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: postData,
    })
      .then((response) => {
        if (!response.ok) {
          /* The reason the server gave, so a shopper whose email is not yet
             verified is told that rather than "Invalid credentials". */
          return response.json()
            .catch(() => null)
            .then((body) => {
              const message = loginErrorMessage(body);
              if (message === VERIFY_EMAIL_MESSAGE) setResendUrl(loginResendUrl(body));
              throw new LoginError(message);
            });
        }

        setlogging(false);

        return response.json().then((res) => {

          if (!res?.token) {
            throw new Error("No token");
          }

          setToken(res.token);

          localStorage.setItem("token", res.token);

          setTimeout(() => {
            fetchUser()
            if (redirectTo) router.push(redirectTo);

          }, 500);

          return true;
        });
      })
      .catch((error) => {
        setError(error instanceof LoginError ? error.message : "We couldn't sign you in just now. Please try again.");
        setlogging(false);
        return false;
      });
  };


  function endRefusedSession() {
    setUser(null);
    localStorage.removeItem("token");
    setToken(null);
    setUserDataX(null);
    if (typeof window !== "undefined" && window.location.pathname.startsWith("/dashboard")) {
      router.push("/login");
    }
  }

  const handleLogout = () => {
    setUser(null)
    localStorage.removeItem("token");
    setToken(null);
    setUserDataX(null);
    clearCheckoutDraft();
    clearOrdersQuery();
    clearProductsQuery();
    clearPostsQuery();
    router.push("/login");
  };

  return (
    /* `error` was being set on a failed sign-in and then never read by
       anything: Login kept its own unused `error` state, so bad credentials
       produced a spinner that stopped and no message at all. */
    <AuthContext.Provider value={{ user, error, resendUrl, logging, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }
  return context;
}
