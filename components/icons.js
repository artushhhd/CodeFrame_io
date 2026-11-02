export function ArrowRight() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 12h15m0 0l-6-6m6 6l-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Instagram() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <defs>
        <linearGradient id="instagram-gradient" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#FED576" />
          <stop offset="35%" stopColor="#F7772F" />
          <stop offset="65%" stopColor="#CD3684" />
          <stop offset="100%" stopColor="#4C6EDD" />
        </linearGradient>
      </defs>
      <rect width="24" height="24" rx="7" fill="url(#instagram-gradient)" />
      <rect
        x="5.5"
        y="5.5"
        width="13"
        height="13"
        rx="4"
        fill="none"
        stroke="#fff"
        strokeWidth="1.8"
      />
      <circle cx="12" cy="12" r="3.2" fill="none" stroke="#fff" strokeWidth="1.8" />
      <circle cx="16.4" cy="7.7" r="1.15" fill="#fff" />
    </svg>
  );
}

export function Menu() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 7h16M4 12h16M4 17h16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Close() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M6 6l12 12M18 6L6 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export function IconBrowser() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="4.5" width="18" height="15" rx="3" {...stroke} />
      <path d="M3 9.5h18" {...stroke} />
      <path d="M6.5 7h2" {...stroke} />
    </svg>
  );
}

export function IconLayers() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="4" y="3.5" width="16" height="17" rx="3" {...stroke} />
      <path d="M8 8.5h8M8 12.5h8M8 16.5h5" {...stroke} />
    </svg>
  );
}

export function IconCube() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3.5l8 4.5v8L12 20.5 4 16V8z" {...stroke} />
      <path d="M4 8l8 4.5L20 8M12 12.5v8" {...stroke} />
    </svg>
  );
}

export function IconLifebuoy() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" {...stroke} />
      <circle cx="12" cy="12" r="3.5" {...stroke} />
      <path d="M6 6l3.5 3.5M18 6l-3.5 3.5M6 18l3.5-3.5M18 18l-3.5-3.5" {...stroke} />
    </svg>
  );
}

export const serviceIconMap = {
  browser: IconBrowser,
  layers: IconLayers,
  cube: IconCube,
  lifebuoy: IconLifebuoy,
};
