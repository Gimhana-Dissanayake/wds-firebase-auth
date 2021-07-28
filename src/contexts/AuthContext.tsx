import React, { FC, useContext, useEffect, useState } from "react";
import { auth } from "../firebase";

const AuthContext = React.createContext<any>(null);

export function useAuth() {
  return useContext(AuthContext);
}

export const AuthProvider: FC = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<any>();
  const [loading, setLoading] = useState(true);

  const signup = (email: string, password: string) => {
    return auth.createUserWithEmailAndPassword(email, password);
  };

  useEffect(() => {
    const unsub = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsub;
  }, []);

  const value = {
    currentUser,
    signup,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
