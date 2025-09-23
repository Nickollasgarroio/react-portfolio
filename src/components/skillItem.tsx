import React from "react";
import { BiSolidRightArrow } from "react-icons/bi";

interface SkillItemProps {
  children: React.ReactNode;
}

export function SkillItem({ children }: SkillItemProps) {
  return (
    <li className="group flex gap-2 pl-2 items-center">
      <BiSolidRightArrow className="size-4 flex-shrink-0 text-violet-alpha transition-shadow text-custom-violet-400 " />
      <span className="group-hover:text-custom-violet-300 transition-colors ">
        {children}
      </span>
    </li>
  );
}
