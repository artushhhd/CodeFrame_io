import { defaultLocale, dictionary } from "@/lib/i18n";
import { storageKey } from "@/lib/site";

const listeners = new Set();

export function getLocale() {
  const saved = window.localStorage.getItem(storageKey);
  return dictionary[saved] ? saved : defaultLocale;
}

export function setLocale(value) {
  window.localStorage.setItem(storageKey, value);
  listeners.forEach((listener) => listener());
}

export function subscribeLocale(listener) {
  listeners.add(listener);
  window.addEventListener("storage", listener);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", listener);
  };
}
