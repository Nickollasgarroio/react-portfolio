import { SkillItem } from "@/components/skillItem";
import { subtitle } from "./primitives";

interface SkillsGroupProps {
  title?: string;
  items: React.ReactNode[]; // agora aceita React nodes
}

export function SkillsGroup({ title, items }: SkillsGroupProps) {
  return (
    <section className="mb-6 pl-2">
      {title && <span className={subtitle()}>{title}</span>}
      <ul className="">
        {items.map((item, index) => (
          <SkillItem key={index}>{item}</SkillItem>
        ))}
      </ul>
    </section>
  );
}
