import Image from "next/image";
import logoCf from "@/public/logo-cf.png";
import { cx } from "@/lib/cx";

export default function Brand({ variant = "header" }) {
  const footer = variant === "footer";

  return (
    <a href="#top" className="brand">
      <Image
        src={logoCf}
        alt=""
        className={cx("brand__mark", footer && "brand__mark--footer")}
      />
      <span className={cx("brand__text", footer && "brand__text--footer")}>
        Code<span className="brand__accent">Frame</span>
      </span>
    </a>
  );
}
