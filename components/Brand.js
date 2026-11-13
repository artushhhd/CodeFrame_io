import Image from "next/image";
import logo from "@/public/logo-cf.png";
import { cx } from "@/lib/cx";

export default function Brand({ footer = false }) {
  const size = footer ? 24 : 28;

  return (
    <a href="#top" className="brand">
      <Image
        src={logo}
        alt=""
        width={size}
        height={size}
        className={cx("brand__mark", footer && "brand__mark--footer")}
      />
      <span className={cx("brand__text", footer && "brand__text--footer")}>
        Code<span className="brand__accent">Frame</span>
      </span>
    </a>
  );
}
