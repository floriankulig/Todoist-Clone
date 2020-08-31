import React, { createContext, useContext, useEffect, useState } from "react";
import { firebase } from "../firebase";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
        console.log(user);
      } else {
        setUser(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, [user]);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export const useAuthValue = () => useContext(UserContext);
