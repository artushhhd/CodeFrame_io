"use client";

import { useEffect, useState } from "react";
import { Close, Menu } from "@/components/icons";

// The links themselves are rendered on the server and passed in as children,
// this component only owns the open/closed state.
export default function MobileMenu({ openLabel, closeLabel, children }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return undefined;
    const onKeyDown = (event) => event.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? closeLabel : openLabel}
        className="menu-button"
      >
        {open ? <Close /> : <Menu />}
      </button>

      {open && (
        <div
          id="mobile-menu"
          className="mobile-menu"
          onClick={(event) => event.target.closest("a") && setOpen(false)}
        >
          {children}
        </div>
      )}
    </>
  );
}
