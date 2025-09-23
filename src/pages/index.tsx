import { Image } from "@heroui/image";
import { Spacer } from "@heroui/spacer";
import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { FaReact } from "react-icons/fa6";
import { FaPython } from "react-icons/fa";
import { BiLogoJavascript } from "react-icons/bi";
import { SiSelenium } from "react-icons/si";
import { FaPaintBrush } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
import { LuLanguages } from "react-icons/lu";
import { FaPencilAlt } from "react-icons/fa";
import { CardCompetencia } from "@/components/cardCompetencias";

export default function IndexPage() {
  return (
    <DefaultLayout>
      {/* Seção Inicial */}
      <div className=" flex flex-col gap-4 items-center justify-center">
        <section className="flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center max-w-lg text-center lg:absolute dark:opacity-85">
            <Image
              src="/public/img/sembg_fixed_magenta.png"
              alt="Portfolio"
              className="mb-8 -top-4 lg:right-90 scale-150 -z-10 lg:top-0 opacity-0 translate-x-20 animate-fade-slide-secondary "
              width={200}
              height={200}
            />
          </div>
          <div className="relative z-10 max-w-xl text-left flex-col opacity-0 translate-x-20 animate-fade-slide">
            <p className={title()}>
              Olá, eu sou o{" "}
              <span className="text-custom-violet-400 dark:text-custom-violet-300">
                Nickollas Giordano Arroio
              </span>
              <p
                className={`${title()} text-black dark:text-white 
                [text-shadow:0px_0px_4px_white] dark:[text-shadow:none]
                `}
              >
                , Desenvolvedor Front-end & Python
              </p>
            </p>
          </div>
          {/* Cards de Competências */}
        </section>
        <Spacer y={10} />
        <section className="">
          <div className="max-w-3xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 transition-all ">
            <CardCompetencia
              title="React.JS"
              icon={<FaReact size={20} />}
              text="Desenvolvi um WebApp de prontuários usando React, React Hook Form e Vite"
              className="opacity-0 animate-fade-slide [animation-delay:0.3s] md:[animation-delay:0.3s]"
            />
            <CardCompetencia
              title="Python"
              icon={<FaPython size={20} />}
              text="Scripts de automação Python para processamento de dados,
                  integrações e ferramentas internas."
              className="opacity-0 animate-fade-slide [animation-delay:0.6s] md:[animation-delay:0.6s]"
            />
            <CardCompetencia
              title="JavaScript"
              icon={<BiLogoJavascript size={20} />}
              text="Lógica de cliente com JavaScript/TypeScript, validações com
                  Zod e integração com APIs."
              className="opacity-0 animate-fade-slide [animation-delay:0.3s] md:[animation-delay:0.9s]"
            />
            <CardCompetencia
              title="Selenium"
              icon={<SiSelenium size={20} />}
              text="Lógica de cliente com JavaScript/TypeScript, validações com
                  Zod e integração com APIs."
              className="opacity-0 animate-fade-slide [animation-delay:0.6s] md:[animation-delay:0.3s]"
            />
            <CardCompetencia
              title="Automação & Ops"
              icon={<FaPencilAlt size={20} />}
              text="Criei rotinas para integração com Google Sheets e automações
                  operacionais que reduziram tarefas manuais."
              className="opacity-0 animate-fade-slide [animation-delay:0.3s] md:[animation-delay:0.6s]"
            />
            <CardCompetencia
              title="Front-End"
              icon={<FaPaintBrush size={20} />}
              text="Implementação e design de interfaces responsivas com Tailwind,
                  HeroUI/NextUI — foco em acessibilidade e usabilidade.."
              className="opacity-0 animate-fade-slide [animation-delay:0.6s] md:[animation-delay:0.9s]"
            />
            <CardCompetencia
              title="Back-End / DB"
              icon={<FaDatabase size={20} />}
              text="Modelagem e queries SQL no Supabase/Postgres; upserts,
                  relacionamentos (profiles ↔ auth.users) e
                  agendamento/calendário."
              className="opacity-0 animate-fade-slide [animation-delay:0.3s] md:[animation-delay:0.3s]"
            />
            <CardCompetencia
              title="Gerencial"
              icon={<RiTeamFill size={20} />}
              text="Definição de produto, coordenação de beta privado e
                  comunicação entre times para priorização de features."
              className="opacity-0 animate-fade-slide [animation-delay:0.6s] md:[animation-delay:0.6s]"
            />
            <CardCompetencia
              title="Linguas"
              icon={<LuLanguages size={20} />}
              text="Inglês avançado, possibilidade de viagens, reuniões e
                  mobilidade"
              className="opacity-0 animate-fade-slide [animation-delay:0.3s] md:[animation-delay:0.9s]"
            />
          </div>
        </section>
      </div>
    </DefaultLayout>
  );
}
