import { useEffect, useRef } from "react";
import { cx } from "@/lib/cx";

export default function Reveal({
  as: Tag = "div",
  children,
  delay = 0,
  className = "",
}) {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const reveal = () => node.classList.add("is-shown");

    if (
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      reveal();
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;
        reveal();
        observer.disconnect();
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={cx("reveal", delay > 0 && `reveal-delay-${delay}`, className)}
    >
      {children}
    </Tag>
  );
}
