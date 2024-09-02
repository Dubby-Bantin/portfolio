import { getApp, getApps, initializeApp } from "firebase/app";
import { Auth, getAuth, RecaptchaVerifier } from "firebase/auth";
import { signInWithCredential } from "firebase/auth";
// Usage

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
auth.useDeviceLanguage();
export { auth, RecaptchaVerifier, signInWithCredential };
