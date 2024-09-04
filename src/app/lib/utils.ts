import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const encryptKey = (passKey: string) => btoa(passKey);
const decryptKey = (passKey: string) => atob(passKey);

const passKey =
  typeof window !== "undefined"
    ? window.localStorage.getItem("accessKey")
    : null;
export { cn, encryptKey, decryptKey, passKey };
