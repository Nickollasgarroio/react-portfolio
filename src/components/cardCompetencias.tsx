import { ExperienceItem } from "@/components/experienceItem";
import { subtitle } from "./primitives";
import { Card, CardBody } from "@heroui/card";

interface CardCompetenciaProps {
  title?: string;
  icon: React.ReactNode;
  text: string;
  className?: string;
}

export function CardCompetencia({
  title,
  text,
  icon,
  className,
}: CardCompetenciaProps) {
  return (
    <section className={`flex flex-col ${className}`}>
      <Card className="min-h-full max-w-fit transition-all duration-500 hover:scale-105 hover:shadow-violet-glow cursor-default">
        <CardBody className="p-4 group/card">
          <div className="flex flex gap-2 mb-4 items-center card-hover">
            <span className="">{icon}</span>
            <span className="font-bold ">{title}</span>
          </div>
          <p>{text}</p>
        </CardBody>
      </Card>
    </section>
  );
}
