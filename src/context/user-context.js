import React, { createContext, useContext, useEffect, useState } from "react";
import { firebase } from "../firebase";

export const UserContext = createContext({ user: null });

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((userAuth) => {
      setUser(userAuth);
      console.log(user);
    });
  }, []);

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};

export const useUserValue = () => useContext(UserContext);
