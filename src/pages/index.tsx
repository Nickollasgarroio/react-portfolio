import { Image } from "@heroui/image";
import { Button } from "@heroui/button";
import { Spacer } from "@heroui/spacer";
import { Card, CardBody, CardHeader } from "@heroui/card";
import { title, subtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { FaReact } from "react-icons/fa6";
import { FaPython } from "react-icons/fa";
import { BiLogoJavascript } from "react-icons/bi";
import { SiSelenium } from "react-icons/si";
import { FaPaintBrush } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
import { LuLanguages } from "react-icons/lu";

export default function IndexPage() {
  return (
    <DefaultLayout>
      {/* Seção Inicial */}
      <div className=" flex flex-col gap-4 items-center justify-center">
        <section className="flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center inline-block max-w-lg text-center justify-center  lg:absolute">
            <Image
              src="/public/img/sembg_fixed_magenta.png"
              alt="Portfolio"
              className="mb-8 -top-4 lg:left-75 scale-150 -z-10 lg:top-0 "
              width={200}
              height={200}
            />
          </div>
          <div className="relative z-10 max-w-xl text-left flex-col">
            <p className={title()}>
              Olá, eu sou o{" "}
              <span className={title({ color: "violet" })}>
                Nickollas Giordano Arroio
              </span>
              <p
                className={`${title()} text-black dark:text-white 
                [text-shadow:0px_0px_5px_white] 
                dark:[text-shadow:none]`}
              >
                , Desenvolvedor Front-end & Python
              </p>
            </p>
          </div>
        </section>
        <Spacer y={10} />
        <section className="">
          <div className="max-w-3xl mx-auto grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-3 gap-4 transition-all ">
            <Card className="max-w-fit transition-all duration-500 hover:scale-105 hover:shadow-[0_0_25px_5px_rgba(255,0,255,0.6)] cursor-default">
              <CardBody className="p-4">
                <div className="flex flex gap-2 mb-4">
                  <FaReact className="size-6" />
                  <span className="font-bold">React.JS</span>
                </div>
                <p>
                  Desenvolvi um WebApp de prontuários usando React, React Hook
                  Form e Vite
                </p>
              </CardBody>
            </Card>

            <Card className="max-w-fit transition-all duration-500 hover:scale-105 hover:shadow-[0_0_25px_5px_rgba(255,0,255,0.6)] cursor-default">
              <CardBody className="p-4">
                <div className="flex flex gap-2 mb-4">
                  <FaPython className="size-6" />
                  <span className="font-bold">Python</span>
                </div>
                <p>
                  Scripts de automação Python para processamento de dados,
                  integrações e ferramentas internas.
                </p>
              </CardBody>
            </Card>

            <Card className="max-w-fit transition-all duration-500 hover:scale-105 hover:shadow-[0_0_25px_5px_rgba(255,0,255,0.6)] cursor-default">
              <CardBody className="p-4">
                <div className="flex flex gap-2 mb-4">
                  <BiLogoJavascript className="size-6" />
                  <span className="font-bold">JavaScript</span>
                </div>
                <p>
                  Lógica de cliente com JavaScript/TypeScript, validações com
                  Zod e integração com APIs.
                </p>
              </CardBody>
            </Card>

            <Card className="max-w-fit transition-all duration-500 hover:scale-105 hover:shadow-[0_0_25px_5px_rgba(255,0,255,0.6)] cursor-default">
              <CardBody className="p-4">
                <div className="flex flex gap-2 mb-4">
                  <SiSelenium className="size-6" />
                  <span className="font-bold">Selenium</span>
                </div>
                <p>
                  Automações operacionais que reduziram tarefas manuais,
                  scraping e integração com planilhas.
                </p>
              </CardBody>
            </Card>

            <Card className="max-w-fit transition-all duration-500 hover:scale-105 hover:shadow-[0_0_25px_5px_rgba(255,0,255,0.6)] cursor-default">
              <CardBody className="p-4">
                <div className="flex flex gap-2 mb-4">
                  <SiSelenium className="size-6" />
                  <span className="font-bold">Automação & Ops</span>
                </div>
                <p>
                  Criei rotinas para integração com Google Sheets e automações
                  operacionais que reduziram tarefas manuais.
                </p>
              </CardBody>
            </Card>

            <Card className="max-w-fit transition-all duration-500 hover:scale-105 hover:shadow-[0_0_25px_5px_rgba(255,0,255,0.6)] cursor-default">
              <CardBody className="p-4">
                <div className="flex flex gap-2 mb-4">
                  <FaPaintBrush className="size-6" />
                  <span className="font-bold">Front-End</span>
                </div>
                <p>
                  Implementação e design de interfaces responsivas com Tailwind,
                  HeroUI/NextUI — foco em acessibilidade e usabilidade.
                </p>
              </CardBody>
            </Card>

            <Card className="max-w-fit transition-all duration-500 hover:scale-105 hover:shadow-[0_0_25px_5px_rgba(255,0,255,0.6)] cursor-default">
              <CardBody className="p-4">
                <div className="flex flex gap-2 mb-4">
                  <FaDatabase className="size-6" />
                  <span className="font-bold">Back-End / DB</span>
                </div>
                <p>
                  Modelagem e queries SQL no Supabase/Postgres; upserts,
                  relacionamentos (profiles ↔ auth.users) e
                  agendamento/calendário.
                </p>
              </CardBody>
            </Card>

            <Card className="max-w-fit transition-all duration-500 hover:scale-105 hover:shadow-[0_0_25px_5px_rgba(255,0,255,0.6)] cursor-default">
              <CardBody className="p-4">
                <div className="flex flex gap-2 mb-4">
                  <RiTeamFill className="size-6" />
                  <span className="font-bold">Gerencial</span>
                </div>
                <p>
                  Definição de produto, coordenação de beta privado e
                  comunicação entre times para priorização de features.
                </p>
              </CardBody>
            </Card>

            <Card className="max-w-fit transition-all duration-500 hover:scale-105 hover:shadow-[0_0_25px_5px_rgba(255,0,255,0.6)] cursor-default">
              <CardBody className="p-4">
                <div className="flex flex gap-2 mb-4">
                  <LuLanguages className="size-6" />
                  <span className="font-bold">Linguas</span>
                </div>
                <p>
                  Inglês avançado, possibilidade de viagens, reuniões e
                  mobilidade
                </p>
              </CardBody>
            </Card>
          </div>
        </section>
        <div className="flex flex-col justify-center gap-4 mt-4 sm:flex-row ">
          <Button
            color="primary"
            as={"a"}
            href="/curriculum"
            target="_blank"
            className=" w-fit self-center"
          >
            Curriculum
          </Button>
          <Button
            color="primary"
            as={"a"}
            href="/about"
            target="_blank"
            className=" w-fit self-center"
          >
            Sobre
          </Button>
        </div>
      </div>
    </DefaultLayout>
  );
}
