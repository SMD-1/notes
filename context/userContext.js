import { useState, createContext } from "react";
import { auth, signInWithGoogle, registerWithEmailAndPassword, loginWithEmailAndPassword } from "../firebase";
import { useAuthState} from "react-firebase-hooks/auth";

export const userContext = createContext({ user: null, googleSignin: null, isLoading: true });

const UserContextProvider = ({ children }) => {
  const [user, loading, error] = useAuthState(auth);
  // console.log(user, loading, error);
  // const [user, setUser] = useState({ username: "danIsPro" });
  const register = async (email, password) => {
    const {user} = await registerWithEmailAndPassword(email, password)
    // console.log(user)
    return user;
  }
  const login = async (email, password) => {
    const {user} = await loginWithEmailAndPassword(email, password)
    // console.log(user)
    return user
  }
  const googleSignin = async () => {
    try {
      const {user} = await signInWithGoogle();
      // console.log(user);
      return user;
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <userContext.Provider
      value={{
        user,
        googleSignin,
        isLoading: loading,
        register,
        login
      }}
    >
      {children}
    </userContext.Provider>
  );
};

export default UserContextProvider;

// comp -> context -> firebase.js -> actual stuff
// user <- user state <-user obj
