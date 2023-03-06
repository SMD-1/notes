import { useState, createContext, useEffect } from "react";
import {
  auth,
  signInWithGoogle,
  registerWithEmailAndPassword,
  loginWithEmailAndPassword,
  logout,
} from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";
import axiosInstance from "../utils/axios";

export const userContext = createContext({
  user: null,
  FBUser: null,
  googleSignin: null,
  logoutUser: null,
  updateUser: null,
  isLoading: true,
});

const UserContextProvider = ({ children }) => {
  const [user, loading, error] = useAuthState(auth);
  // console.log(user, loading, error);
  const [DBUser, setDBUser] = useState(null);
  const router = useRouter();
  useEffect(() => {
    if (loading) return;
    if (!user) {
      router.push("/signup");
      return;
    }

    fetchUserFromDB();
  }, [user, loading]);
  const fetchUserFromDB = async () => {
    try {
      const res = await axiosInstance.post("/users/get-user-info", {
        email: user.email,
      });
      setDBUser(res.data);
    } catch (err) {
      router.push("/complete-signup");
    }
  };
  // const [user, setUser] = useState({ username: "danIsPro" });
  const register = async (email, password) => {
    try {
      const { user } = await registerWithEmailAndPassword(email, password);
      // console.log(user)
      router.push("/complete-signup");
      return user;
    } catch (err) {
      //TODO: show soemthing is wrong toast
      console.log(err);
    }
  };

  const login = async (email, password) => {
    const { user } = await loginWithEmailAndPassword(email, password);
    // console.log(user)
    return user;
  };
  const googleSignin = async () => {
    try {
      const { user } = await signInWithGoogle();
      // console.log(user);
      router.push("/complete-signup");
      return user;
    } catch (err) {
      console.log(err);
    }
  };

  const logoutUser = async () => {
    try {
      await logout();
      // setUser(null)
    } catch (err) {
      console.log(err);
    }
    // console.log("Logout");
  };

  const updateUser = async (id, fullName, username) => {
    try {
      await axiosInstance.patch(`/users/${id}`, { fullName, username });
      await fetchUserFromDB();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <userContext.Provider
      value={{
        user: DBUser,
        FBUser: user,
        googleSignin,
        isLoading: loading,
        register,
        login,
        logoutUser,
        updateUser,
      }}
    >
      {children}
    </userContext.Provider>
  );
};

export default UserContextProvider;

// comp -> context |-> firebase.js -> actual stuff (FB SDK)
//                 |-> MongoDB
// user <- user state <-user obj
