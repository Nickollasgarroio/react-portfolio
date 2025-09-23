import { BiSolidRightArrow } from "react-icons/bi";

interface ExperienceItemProps {
  children: React.ReactNode;
}

export function ExperienceItem({ children }: ExperienceItemProps) {
  return (
    <li className="group flex items-center gap-2 cursor-default pl-2">
      <BiSolidRightArrow
        size={14}
        className="size-4 flex-shrink-0 text-custom-violet-400 group-hover:icon-rotate"
      />
      <span className="transition-colors hover-violet">{children}</span>
    </li>
  );
}
