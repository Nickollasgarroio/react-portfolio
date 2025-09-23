import React from "react";

interface LogoNickollasProps {
  className?: string; // permite passar tamanho ou cor via Tailwind
}

export const LogoNickollas: React.FC<LogoNickollasProps> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 500 500"
      fill="currentColor"
      className={className}
      width="40"
      height="40"
    >
      <g data-name="Ass">
        <path d="M469.98,87.92h-148.81c-5.52,0-10,4.48-10,10v105.24l-108.75-115.23h0s-.01-.01-.01-.01h-.01s-.01,0-.01,0h-77.18l319.77,319.77h25.01c5.52,0,10-4.48,10-10V97.92c0-5.52-4.48-10-10-10Z" />
        <path d="M43.61,87.92c-5.52,0-10,4.48-10,10v299.77c0,5.52,4.48,10,10,10h148.81c5.52,0,10-4.48,10-10v-98.75l108.75,108.75h77.23L68.63,87.92h-25.03Z" />
      </g>
    </svg>
  );
};
