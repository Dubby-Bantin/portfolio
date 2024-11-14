import { getApp, getApps, initializeApp } from "firebase/app";
import {
  Auth,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithRedirect,
  signOut,
} from "firebase/auth";
import { signInWithCredential } from "firebase/auth";
import { toast } from "react-toastify";
import { getStorage } from "firebase/storage";
import { getFirestore, onSnapshot  } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyACXLXasfLknupT9MU9iXGAWMtlWs5r-iw",
  authDomain: "portfolio-ce445.firebaseapp.com",
  projectId: "portfolio-ce445",
  storageBucket: "portfolio-ce445.appspot.com",
  messagingSenderId: "721160426334",
  appId: "1:721160426334:web:cd6b1c962c32103199f5cf",
};

const app = getApps.length === 0 ? initializeApp(firebaseConfig) : getApp();
const auth: Auth = getAuth(app);
const firestore = getFirestore(app);
auth.useDeviceLanguage();

const signInWithGoogle = async () => {
  try {
    await signInWithRedirect(auth, new GoogleAuthProvider());
  } catch (e: any) {
    toast.error(e?.message);
  }
};

const signInWithGitHub = async () => {
  try {
    await signInWithRedirect(auth, new GithubAuthProvider());
  } catch (e: any) {
    toast.error(e?.message);
  }
};

const logOut = async () => signOut(auth);

const storage = getStorage();

export {
  auth,
  storage,
  signInWithCredential,
  signInWithGoogle,
  signInWithGitHub,
  logOut,
  firestore,
};
