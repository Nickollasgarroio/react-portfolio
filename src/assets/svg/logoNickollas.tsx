import React from "react";

interface LogoNickollasProps {
  className?: string; // permite passar tamanho ou cor via Tailwind
}

export const LogoNickollas: React.FC<LogoNickollasProps> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 500 350"
      fill="currentColor"
      className={className}
      width="40"
      height="40"
    >
      <g data-name="Ass">
        <path d="M40.84.01H10C4.48.01,0,4.49,0,10.01v299.77c0,5.52,4.48,10,10,10h30.84V.01Z" />
        <path d="M392.94,319.78h.06V.01h-105.44c-5.52,0-10,4.48-10,10v105.24L168.81.02h0s-.01-.01-.01-.01h-.01s-.01,0-.01,0h-95.61l319.77,319.77Z" />
        <path d="M54.23.01s0,0,0,0v319.77h104.58c5.52,0,10-4.48,10-10v-98.75l108.75,108.75h96.44S108.72,54.5,54.23.01Z" />
        <path d="M406.39.01v319.77h29.98c5.52,0,10-4.48,10-10V10.01c0-5.52-4.48-10-10-10h-29.98Z" />
      </g>
    </svg>
  );
};
