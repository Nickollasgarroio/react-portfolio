import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { Link } from "@heroui/link";
import { LogoNickollas } from "@/assets/svg/logoNickollas";
import { CardCompetencia } from "@/components/cardCompetencias";
import { BsWhatsapp } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

export default function ContactPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={`${title()} text-custom-violet-400`}>
            Contato / Redes
          </h1>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center gap-20">
        <p>Para maiores informações, entre em contato!</p>
        <div className="max-w-3xl mx-auto grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-4 transition-all ">
          <CardCompetencia
            title="WhatsApp"
            icon={<BsWhatsapp size={20} />}
            text="(11) 98521-4691"
            className="opacity-0 animate-fade-slide [animation-delay:0.3s]"
            link="https://wa.me/5511985214691"
          />

          <CardCompetencia
            title="Email"
            icon={<BiLogoGmail size={20} />}
            text="nickollasgiordanoarroio@gmail.com"
            className="opacity-0 animate-fade-slide [animation-delay:0.6s]"
            link="mailto:nickollasgiordanoarroio@gmail.com"
          />
          <CardCompetencia
            title="LinkedIn"
            icon={<FaLinkedin size={20} />}
            text="https://www.linkedin.com/in/nickollasgiordanoarroio/"
            className="opacity-0 animate-fade-slide [animation-delay:0.3s]"
            link="https://www.linkedin.com/in/nickollasgiordanoarroio/"
          />
          <CardCompetencia
            title="GitHub"
            icon={<FaGithub size={20} />}
            text="https://github.com/nickollasgiordanoarroio"
            className="opacity-0 animate-fade-slide [animation-delay:0.6s]"
            link="https://github.com/nickollasgiordanoarroio"
          />
        </div>
        <div className="max-w-3xl mx-auto text-justify flex flex-col items-center gap-4 ">
          {/* <p className="font-bold opacity-0 animate-fade-slide [animation-delay:0.9s]">
            Nickollas Giordano Arroio
          </p> */}
          <svg className="opacity-0 animate-fade-slide [animation-delay:1.2s] flex flex-col size-10">
            <LogoNickollas className="text-custom-violet-800" />
          </svg>
        </div>
      </section>
    </DefaultLayout>
  );
}
