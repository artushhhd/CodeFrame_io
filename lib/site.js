export const siteUrl = "https://codeframe-io.vercel.app";

export const instagramUrl = "https://www.instagram.com/codeframe_io/";
export const telegramUrl = null;
export const phoneUrl = null;

const whatsappNumber = "37496022234";

export function whatsappLink(message) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const navIds = ["services", "work", "process", "pricing"];

export const works = [
  { id: "aroma", mockup: "coffee", url: "https://aroma-cafe.base44.app/" },
  { id: "bean", mockup: "shop", url: "https://cafeweb-tau.vercel.app/en/shop" },
  { id: "steam", mockup: "product", url: null },
];
