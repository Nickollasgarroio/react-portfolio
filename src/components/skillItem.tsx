import React from "react";
import { BiSolidRightArrow } from "react-icons/bi";

interface SkillItemProps {
  children: React.ReactNode;
}

export function SkillItem({ children }: SkillItemProps) {
  return (
    <li className="group/skills flex gap-2 pl-2 items-center">
      <BiSolidRightArrow className="size-4 flex-shrink-0 text-custom-violet-400 group-hover-skills group-hover-rotate-skills" />
      <span className="group-hover:text-custom-violet-300 transition-colors ">
        {children}
      </span>
    </li>
  );
}
