type IconProps = {
  iconName: string;
  width?: number;
  height?: number;
  className?: string;
  title?: string;
  fill?: string;
  strokeWidth?: number;
};

export default function Icon({
  iconName,
  width = 24,
  height = 24,
  className,
  title,
  fill = "currentColor",
  strokeWidth = 2,
}: IconProps) {
  const paths: Record<string, JSX.Element> = {
    menu: (
      <g stroke={fill} strokeWidth={strokeWidth} strokeLinecap="round">
        <path d="M3 7h18" />
        <path d="M3 12h18" />
        <path d="M3 17h18" />
      </g>
    ),
    close: (
      <g stroke={fill} strokeWidth={strokeWidth} strokeLinecap="round">
        <path d="M6 6l12 12" />
        <path d="M6 18L18 6" />
      </g>
    ),
    "arrow-right": (
      <g
        stroke={fill}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      >
        <path d="M5 12h14" />
        <path d="M12 5l7 7-7 7" />
      </g>
    ),
    "chevron-left": (
      <g
        stroke={fill}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      >
        <path d="M15 6L9 12l6 6" />
      </g>
    ),
    "chevron-right": (
      <g
        stroke={fill}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      >
        <path d="M9 6l6 6-6 6" />
      </g>
    ),
    search: (
      <g
        stroke={fill}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      >
        <circle cx="11" cy="11" r="6" />
        <path d="M21 21l-4.35-4.35" />
      </g>
    ),
    mail: (
      <g
        stroke={fill}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      >
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 7l9 6 9-6" />
      </g>
    ),
    external: (
      <g
        stroke={fill}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      >
        <path d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
        <path d="M15 3h6v6" />
        <path d="M10 14L21 3" />
      </g>
    ),
    github: (
      <g fill={fill} stroke="none">
        <path d="M12 2C7.03 2 3 6.03 3 11c0 4 2.53 7.39 6.04 8.58.44.08.6-.19.6-.42 0-.21-.01-.77-.01-1.5-2.45.53-2.97-1.18-2.97-1.18-.4-1.02-0.98-1.29-0.98-1.29-.8-.55.06-.54.06-.54.88.06 1.34.9 1.34.9.79 1.35 2.07.96 2.57.73.08-.57.31-.96.56-1.18-1.96-.22-4.02-.98-4.02-4.36 0-.96.34-1.75.9-2.36-.09-.23-.39-1.15.08-2.4 0 0 .73-.23 2.4.9A8.3 8.3 0 0112 6.8c.74.01 1.49.1 2.19.29 1.66-1.13 2.39-.9 2.39-.9.47 1.25.17 2.17.08 2.4.56.61.9 1.4.9 2.36 0 3.39-2.07 4.14-4.04 4.35.32.28.6.82.6 1.66 0 1.2-.01 2.17-.01 2.46 0 .23.16.51.61.42A9 9 0 0021 11c0-4.97-4.03-9-9-9z" />
      </g>
    ),
    "5Point": (
      <g fill={fill}>
        <rect
          x="3.2002"
          y="3.8667"
          width="8.8"
          height="8.55555"
          rx="0.533333"
          fill={fill}
        />
        <rect
          x="3.2002"
          y="16.2666"
          width="8.8"
          height="8.55555"
          rx="0.533333"
          fill={fill}
        />
        <rect
          x="16"
          y="3.8667"
          width="8.8"
          height="8.55555"
          rx="0.533333"
          fill={fill}
        />
        <rect
          x="16"
          y="16.2666"
          width="8.8"
          height="8.55555"
          rx="0.533333"
          fill={fill}
        />
        <rect
          x="12"
          y="12.4443"
          width="4"
          height="3.88889"
          rx="0.533333"
          fill={fill}
        />
        <rect
          x="0.0666667"
          y="0.466569"
          width="27.8667"
          height="27.8667"
          stroke={fill}
          strokeWidth="0.133333"
        />
      </g>
    ),
    "5Point_small": (
      <g fill={fill}>
        <rect width="6.28572" height="6.11111" rx="0.380952" fill={fill} />
        <rect
          y="13.8887"
          width="6.28572"
          height="6.11111"
          rx="0.380952"
          fill={fill}
        />
        <rect
          x="13.7144"
          width="6.28572"
          height="6.11111"
          rx="0.380952"
          fill={fill}
        />
        <rect
          x="13.7144"
          y="13.8887"
          width="6.28572"
          height="6.11111"
          rx="0.380952"
          fill={fill}
        />
        <rect
          x="8.57129"
          y="8.88867"
          width="2.85714"
          height="2.77778"
          rx="0.380952"
          fill={fill}
        />
      </g>
    ),
    Burger: (
      <g fill={fill}>
        <rect y="1.5" width="24" height="5" fill={fill} />
        <rect y="9.5" width="24" height="5" fill={fill} />
        <rect y="17.5" width="24" height="5" fill={fill} />
      </g>
    ),
    rune_1: (
      <svg
        width="86"
        height="114"
        viewBox="0 0 86 114"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill={fill}>
          <circle cx="6.47178" cy="6.47178" r="3.59532" fill={fill} />
          <circle cx="6.47129" cy="16.5123" r="3.59532" fill={fill} />
          <circle cx="6.47129" cy="26.5531" r="3.59532" fill={fill} />
          <circle cx="6.47129" cy="36.5936" r="3.59532" fill={fill} />
          <circle cx="6.47178" cy="46.6344" r="3.59532" fill={fill} />
          <circle cx="6.47129" cy="56.6754" r="3.59532" fill={fill} />
          <circle cx="6.47178" cy="66.7159" r="3.59532" fill={fill} />
          <circle cx="6.47129" cy="76.7567" r="3.59532" fill={fill} />
          <circle cx="6.47178" cy="86.7975" r="3.59532" fill={fill} />
          <circle cx="6.47129" cy="106.879" r="3.59532" fill={fill} />
          <circle cx="16.8624" cy="6.47178" r="3.59532" fill={fill} />
          <circle cx="16.8624" cy="16.5123" r="3.59532" fill={fill} />
          <circle cx="16.8624" cy="26.5531" r="3.59532" fill={fill} />
          <circle cx="27.2525" cy="36.5939" r="3.59532" fill={fill} />
          <circle cx="16.8624" cy="46.6344" r="3.59532" fill={fill} />
          <circle cx="16.8624" cy="36.5936" r="3.59532" fill={fill} />
          <circle cx="16.8624" cy="56.6754" r="3.59532" fill={fill} />
          <circle cx="27.2525" cy="56.6754" r="3.59532" fill={fill} />
          <circle cx="27.2525" cy="66.7162" r="3.59532" fill={fill} />
          <circle cx="27.2525" cy="76.7567" r="3.59532" fill={fill} />
          <circle cx="37.6432" cy="76.7567" r="3.59532" fill={fill} />
          <circle cx="16.8619" cy="66.7159" r="3.59532" fill={fill} />
          <circle cx="16.8624" cy="76.7567" r="3.59532" fill={fill} />
          <circle cx="16.8624" cy="86.7975" r="3.59532" fill={fill} />
          <circle cx="16.8619" cy="96.8382" r="3.59532" fill={fill} />
          <circle cx="16.8624" cy="106.879" r="3.59532" fill={fill} />
          <circle cx="48.0333" cy="66.7159" r="3.59532" fill={fill} />
          <circle cx="48.0333" cy="76.7567" r="3.59532" fill={fill} />
          <circle cx="48.0333" cy="86.7975" r="3.59532" fill={fill} />
          <circle cx="48.0333" cy="96.8382" r="3.59532" fill={fill} />
          <circle cx="48.0333" cy="106.879" r="3.59532" fill={fill} />
          <circle cx="58.4239" cy="66.7162" r="3.59532" fill={fill} />
          <circle cx="58.4239" cy="76.7567" r="3.59532" fill={fill} />
          <circle cx="58.4239" cy="86.7975" r="3.59532" fill={fill} />
          <circle cx="58.4239" cy="96.8385" r="3.59532" fill={fill} />
          <circle cx="58.4239" cy="106.879" r="3.59532" fill={fill} />
          <circle cx="68.8146" cy="66.7159" r="3.59532" fill={fill} />
          <circle cx="79.2047" cy="66.7159" r="3.59532" fill={fill} />
          <circle cx="68.8146" cy="76.7567" r="3.59532" fill={fill} />
          <circle cx="79.2052" cy="76.7567" r="3.59532" fill={fill} />
          <circle cx="68.8146" cy="86.7975" r="3.59532" fill={fill} />
          <circle cx="79.2052" cy="86.7975" r="3.59532" fill={fill} />
          <circle cx="68.8146" cy="96.8382" r="3.59532" fill={fill} />
          <circle cx="79.2047" cy="96.8382" r="3.59532" fill={fill} />
          <circle cx="68.8146" cy="106.879" r="3.59532" fill={fill} />
          <circle cx="79.2052" cy="106.879" r="3.59532" fill={fill} />
          <circle cx="68.8146" cy="16.5123" r="3.59532" fill={fill} />
          <circle cx="79.2052" cy="16.5123" r="3.59532" fill={fill} />
          <circle cx="68.8146" cy="26.5531" r="3.59532" fill={fill} />
          <circle cx="79.2052" cy="26.5531" r="3.59532" fill={fill} />
          <circle cx="68.8146" cy="36.5939" r="3.59532" fill={fill} />
          <circle cx="79.2052" cy="36.5936" r="3.59532" fill={fill} />
          <circle cx="68.8146" cy="46.6346" r="3.59532" fill={fill} />
          <circle cx="79.2052" cy="46.6344" r="3.59532" fill={fill} />
          <circle cx="68.8146" cy="56.6754" r="3.59532" fill={fill} />
          <circle cx="79.2052" cy="56.6754" r="3.59532" fill={fill} />
          <circle cx="27.2525" cy="86.7975" r="3.59532" fill={fill} />
          <circle cx="27.2525" cy="96.8385" r="3.59532" fill={fill} />
          <circle cx="58.4239" cy="36.5939" r="3.59532" fill={fill} />
          <circle cx="58.4239" cy="46.6344" r="3.59532" fill={fill} />
          <circle cx="79.2052" cy="6.47178" r="3.59532" fill={fill} />
          <circle cx="37.6432" cy="86.7975" r="3.59532" fill={fill} />
          <circle cx="37.6432" cy="96.8382" r="3.59532" fill={fill} />
          <circle cx="37.6432" cy="106.879" r="3.59532" fill={fill} />
          <circle cx="27.2525" cy="106.879" r="3.59532" fill={fill} />
          <circle cx="6.47178" cy="96.8382" r="3.59532" fill={fill} />
        </g>
      </svg>
    ),
    "five-point-rect": (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="6.28572" height="6.11111" rx="0.380952" fill="#5E00FB" />
        <rect
          y="13.8887"
          width="6.28572"
          height="6.11111"
          rx="0.380952"
          fill="#5E00FB"
        />
        <rect
          x="13.7144"
          width="6.28572"
          height="6.11111"
          rx="0.380952"
          fill="#5E00FB"
        />
        <rect
          x="13.7144"
          y="13.8887"
          width="6.28572"
          height="6.11111"
          rx="0.380952"
          fill="#5E00FB"
        />
        <rect
          x="8.57129"
          y="8.88867"
          width="2.85714"
          height="2.77778"
          rx="0.380952"
          fill="#5E00FB"
        />
      </svg>
    ),
  };

  const content = paths[iconName] ?? null;

  if (!content) {
    console.warn(`Icon: unknown iconName "${iconName}"`);
    return (
      <svg
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden={title ? undefined : true}
      />
    );
  }

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden={title ? undefined : true}
      role={title ? "img" : "presentation"}
    >
      {title ? <title>{title}</title> : null}
      {content}
    </svg>
  );
}
