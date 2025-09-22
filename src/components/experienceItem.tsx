import { BiSolidRightArrow } from "react-icons/bi";

interface ExperienceItemProps {
  children: React.ReactNode;
}

export function ExperienceItem({ children }: ExperienceItemProps) {
  return (
    <li className="group flex items-center gap-2 cursor-default pl-2">
      <BiSolidRightArrow
        size={14}
        className="size-4 flex-shrink-0 text-violet-500 transition-shadow group-hover:filter group-hover:drop-shadow-[0_0_10px_rgba(255,0,255,0.8)] "
      />
      <span className="group-hover:text-violet-400 transition-colors ">
        {children}
      </span>
    </li>
  );
}
