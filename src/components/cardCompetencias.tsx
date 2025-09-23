import { ExperienceItem } from "@/components/experienceItem";
import { subtitle } from "./primitives";
import { Card, CardBody } from "@heroui/card";

interface CardCompetenciaProps {
  title?: string;
  icon: React.ReactNode;
  text: string;
}

export function CardCompetencia({ title, text, icon }: CardCompetenciaProps) {
  return (
    <section className="flex flex-col">
      <Card className="min-h-full max-w-fit transition-all duration-500 hover:scale-105 hover:shadow-violet-glow cursor-default">
        <CardBody className="p-4 group">
          <div className="flex flex gap-2 mb-4 items-center  group-hover:text-custom-violet-300 transition-colors duration-300">
            <span className="">{icon}</span>
            <span className="font-bold ">{title}</span>
          </div>
          <p>{text}</p>
        </CardBody>
      </Card>
    </section>
  );
}
