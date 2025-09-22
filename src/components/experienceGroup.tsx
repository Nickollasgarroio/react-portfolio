import { ExperienceItem } from "@/components/experienceItem";
import { subtitle } from "./primitives";

interface experienceGroupProps {
  title?: string;
  items: string[];
}

export function ExperienceGroup({ title, items }: experienceGroupProps) {
  return (
    <section className="mb-6 pl-2 flex flex-col gap-2">
      {title && <span className={subtitle()}>{title}</span>}
      <ul className="space-y-1">
        {items.map((item, index) => (
          <ExperienceItem key={index}>{item}</ExperienceItem>
        ))}
      </ul>
    </section>
  );
}
