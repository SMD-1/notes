import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithPopup, signOut, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA9BoQ11tKO0WJjaqrtIuf21S54T7oYP2U",
  authDomain: "assignments-finder.firebaseapp.com",
  projectId: "assignments-finder",
  storageBucket: "assignments-finder.appspot.com",
  messagingSenderId: "1022708235273",
  appId: "1:1022708235273:web:1f923e106d74ca5d628cd8",
  measurementId: "G-1Y6H7V496Q",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
const auth = getAuth(app);
const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    console.log(res.user);
    return res;
  } catch (err) {
    console.log(err);
  }
};

const logout= async () => {
  try {
    await signOut();
  } catch (err) {
    console.log(err);
  }
};
export { app, signInWithGoogle, logout, auth };
// export const auth = getAuth();
// const analytics = getAnalytics(app);
