import { useState, createContext } from "react";
import { auth, signInWithGoogle } from "../firebase";
import { useAuthState} from "react-firebase-hooks/auth";

export const userContext = createContext({ user: null, googleSignin: null, isLoading: false });

const UserContextProvider = ({ children }) => {
  const [user, loading, error] = useAuthState(auth);
  console.log(user, loading, error);
  // const [user, setUser] = useState({ username: "danIsPro" });

  const googleSignin = async () => {
    try {
      const {user} = await signInWithGoogle();
      console.log(user);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <userContext.Provider
      value={{
        user,
        googleSignin,
        isLoading: loading
      }}
    >
      {children}
    </userContext.Provider>
  );
};

export default UserContextProvider;

// comp -> context -> firebase.js -> actual stuff
// user <- user state <-user obj
