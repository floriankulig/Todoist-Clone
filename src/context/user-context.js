import React, { createContext, useContext, useEffect, useState } from "react";
import { firebase } from "../firebase";

export const UserContext = createContext();

//Mock out user so our hooks have an user id to filter to fetch tasks
const userMockOut = {
  uid: "",
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(userMockOut);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
        console.log("User signed In: ");
        console.log(user);
      } else {
        setUser(userMockOut);
        console.log("No User signed In");
      }
    });

    return () => {
      unsubscribe();
    };
  }, [user]);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export const useAuthValue = () => useContext(UserContext);
