"use client";

import { useEffect } from "react";

// Fades in `.reveal` blocks as they scroll into view. Blocks that are already
// on screen (or above it) are left alone, so the first paint never waits for JS.
export default function RevealObserver() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;

    const items = [...document.querySelectorAll(".reveal")].filter(
      (el) => el.getBoundingClientRect().top > window.innerHeight
    );
    if (!items.length) return undefined;

    const finish = (event) => {
      if (event.target !== event.currentTarget) return;
      event.currentTarget.removeAttribute("data-reveal");
      event.currentTarget.removeEventListener("transitionend", finish);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const { isIntersecting, target } of entries) {
          if (!isIntersecting) continue;
          observer.unobserve(target);
          target.addEventListener("transitionend", finish);
          target.dataset.reveal = "shown";
        }
      },
      { rootMargin: "0px 0px -6% 0px" }
    );

    for (const el of items) {
      el.dataset.reveal = "hidden";
      observer.observe(el);
    }

    return () => {
      observer.disconnect();
      for (const el of items) el.removeAttribute("data-reveal");
    };
  }, []);

  return null;
}
