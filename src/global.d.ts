// globals.d.ts

declare global {
  interface Window {
    recaptchaVerifier: import("firebase/auth").RecaptchaVerifier;
  }
}

export {};
