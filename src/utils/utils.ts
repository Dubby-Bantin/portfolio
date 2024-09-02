import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const encryptKey = (passKey: string) => btoa(passKey);
const decryptKey = (passKey: string) => atob(passKey);

export { cn, encryptKey, decryptKey };
