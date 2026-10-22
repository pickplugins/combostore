"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { useCounterStore } from '../store/useCounterStore'
import { useRouter } from "next/navigation";


const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const router = useRouter();
  // const { setToken } = useCounterStore.getState();

  const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;
  const { token, setToken, appData, notifications, addNotification, cartItems, addCartItems, removeCartItems, resetCartItems, updateCartItems, userDataX, setUserDataX, } = useCounterStore()

  const [user, setUser] = useState(null);



  const [error, setError] = useState(null);
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




  const handleLogin = (username, password) => {


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

    var postData = {
      username: username,
      password: password,
    };
    postData = JSON.stringify(postData);


    fetch(serverUrl + "wp-json/jwt-auth/v1/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: postData,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Token validation failed");
        }

        if (response.ok && response.status < 400) {
          response.json().then((res) => {



            setToken(res.token);

            localStorage.setItem("token", res.token);

            setTimeout(() => {
              fetchUser()
              router.push("/dashboard");

            }, 500);
          });
        }
        setlogging(false);
      })
      .catch((_error) => {
        setError("Invalid credentials. Please try again.");
        setlogging(false);
      });
  };


  const handleLogout = () => {
    setUser(null)
    localStorage.removeItem("token");
    setToken(null);
    setUserDataX(null);
    router.push("/login");
  };

  return (
    /* `error` was being set on a failed sign-in and then never read by
       anything: Login kept its own unused `error` state, so bad credentials
       produced a spinner that stopped and no message at all. */
    <AuthContext.Provider value={{ user, error, logging, handleLogin, handleLogout }}>
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
