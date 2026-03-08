import { useId } from "react";

type PremiumWaveBackgroundProps = {
  className?: string;
  opacity?: number;
};

export default function PremiumWaveBackground({
  className = "absolute inset-0 h-full w-full",
  opacity = 0.5,
}: PremiumWaveBackgroundProps) {
  const gradientId = useId();
  const glowId = useId();

  const upperOffsets = Array.from({ length: 14 }, (_, index) => index * 5);
  const centerOffsets = Array.from({ length: 16 }, (_, index) => index * 5);
  const lowerOffsets = Array.from({ length: 14 }, (_, index) => index * 5);

  return (
    <svg
      viewBox="0 0 680 260"
      className={className}
      fill="none"
      aria-hidden="true"
      preserveAspectRatio="none"
      style={{ opacity }}
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="rgba(255,255,255,0.04)" />
          <stop offset="24%" stopColor="rgba(255,255,255,0.16)" />
          <stop offset="50%" stopColor="rgba(255,255,255,0.28)" />
          <stop offset="76%" stopColor="rgba(255,255,255,0.16)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0.05)" />
        </linearGradient>
        <radialGradient id={glowId} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.18)" />
          <stop offset="48%" stopColor="rgba(255,255,255,0.08)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </radialGradient>
      </defs>

      <ellipse cx="332" cy="144" rx="240" ry="96" fill={`url(#${glowId})`} />

      <path
        d="M-8 212C108 162 202 146 288 154C378 162 456 208 692 122V260H-8Z"
        fill="rgba(255,255,255,0.08)"
      />

      {upperOffsets.map((offset) => (
        <path
          key={`upper-wave-${offset}`}
          d="M-90 112C-6 54 92 42 180 66C278 92 346 172 432 184C522 196 604 146 760 78"
          transform={`translate(0 ${offset})`}
          stroke={`url(#${gradientId})`}
          strokeOpacity="0.55"
          strokeWidth="0.9"
          strokeLinecap="round"
        />
      ))}

      {centerOffsets.map((offset) => (
        <path
          key={`center-wave-${offset}`}
          d="M-84 154C10 94 110 76 202 98C304 122 378 210 468 214C560 218 644 154 760 98"
          transform={`translate(0 ${offset})`}
          stroke={`url(#${gradientId})`}
          strokeOpacity="0.6"
          strokeWidth="1"
          strokeLinecap="round"
        />
      ))}

      {lowerOffsets.map((offset) => (
        <path
          key={`lower-wave-${offset}`}
          d="M-86 194C8 138 108 118 200 136C302 156 380 238 476 238C572 238 652 176 764 126"
          transform={`translate(0 ${offset})`}
          stroke={`url(#${gradientId})`}
          strokeOpacity="0.46"
          strokeWidth="0.9"
          strokeLinecap="round"
        />
      ))}

      <path
        d="M-94 124C-2 62 102 48 194 72C294 98 362 176 450 190C548 206 636 150 766 82"
        stroke="rgba(255,255,255,0.12)"
        strokeWidth="24"
        strokeLinecap="round"
        filter="blur(16px)"
      />
      <path
        d="M-90 160C8 100 110 82 204 104C308 128 384 214 474 216C570 218 658 154 770 96"
        stroke="rgba(255,255,255,0.14)"
        strokeWidth="22"
        strokeLinecap="round"
        filter="blur(16px)"
      />
      <path
        d="M-92 122C0 60 104 46 194 70C292 96 362 174 448 188C544 202 632 146 764 80"
        stroke="rgba(255,255,255,0.28)"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M-90 160C8 100 110 82 204 104C308 128 384 214 474 216C570 218 658 154 770 96"
        stroke="rgba(255,255,255,0.34)"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path
        d="M-86 194C8 138 108 118 200 136C302 156 380 238 476 238C572 238 652 176 764 126"
        stroke="rgba(255,255,255,0.24)"
        strokeWidth="2.1"
        strokeLinecap="round"
      />
      <path
        d="M-42 142C48 84 144 70 232 92C328 116 398 188 488 190C582 192 664 132 750 84"
        stroke="rgba(255,255,255,0.18)"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M-36 182C58 122 154 102 246 120C348 140 422 222 512 222C604 222 682 162 766 112"
        stroke="rgba(255,255,255,0.16)"
        strokeWidth="1.1"
        strokeLinecap="round"
      />
    </svg>
  );
}
