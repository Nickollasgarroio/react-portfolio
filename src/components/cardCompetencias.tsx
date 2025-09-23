import { ExperienceItem } from "@/components/experienceItem";
import { subtitle } from "./primitives";
import { Card, CardBody } from "@heroui/card";
import { Link } from "@heroui/link";

interface CardCompetenciaProps {
  title?: string;
  icon: React.ReactNode;
  text?: string;
  className?: string;
  link?: string;
}

export function CardCompetencia({
  title,
  text,
  icon,
  className,
  link, // agora aceitamos link
}: CardCompetenciaProps) {
  return (
    <section className={`flex flex-col ${className}`}>
      {link ? (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full"
        >
          <Card className="min-h-30 min-w-full  transition-all duration-500 hover:scale-105 hover:shadow-violet-glow cursor-pointer">
            <CardBody className="p-4 group/card">
              <div className="flex flex gap-2 mb-4 items-center card-hover">
                <span>{icon}</span>
                <span className="font-bold">{title}</span>
              </div>
              {text && <p>{text}</p>}
              {/* <p>{text}</p> */}
            </CardBody>
          </Card>
        </a>
      ) : (
        <Card className="min-h-full min-w-full max-w-fit transition-all duration-500 hover:scale-105 hover:shadow-violet-glow cursor-default">
          <CardBody className="p-4 group/card">
            <div className="flex flex gap-2 mb-4 items-center card-hover">
              <span>{icon}</span>
              <span className="font-bold">{title}</span>
            </div>
            <p>{text}</p>
          </CardBody>
        </Card>
      )}
    </section>
  );
}
