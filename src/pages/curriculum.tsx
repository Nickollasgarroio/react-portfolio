import { subtitle, title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { ExperienceGroup } from "@/components/experienceGroup";
import { SkillsGroup } from "@/components/skillGroup";
import { Spacer } from "@heroui/spacer";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";

export default function CurriculumPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="text-custom-violet-400 inline-block max-w-lg text-center justify-center mb-4">
          <h1 className={title()}>Curriculum</h1>
        </div>
        <div className="max-w-3xl text-justify flex flex-col gap-3">
          <div className="flex flex-col gap-1 group/title opacity-0 animate-fade-slide [animation-delay:0.3s]">
            <span
              className={`${title({ size: "sm" })} group-hover-title text-glow-violet `}
            >
              Resumo Profissional
            </span>
            <p className="pl-2 mt-4">
              Desenvolvedor com experiência em Front-End (React.js, HeroUI,
              Tailwind, Supabase) e Back-End (Python, Selenium, automação e web
              scraping). Atuei em projetos que uniram criação de interfaces
              modernas, responsivas e escaláveis a soluções internas de
              automação, reduzindo custos e otimizando fluxos de trabalho.
              Participei do desenvolvimento de um aplicativo médico de
              prontuários, integrei front-end a banco de dados no Supabase e
              implementei automações em Python + Selenium para coleta e análise
              de dados. Tenho também experiência em gestão de equipes de TI e
              projetos, priorizando entregas com eficiência e qualidade.
              Atualmente em processo de obtenção da cidadania italiana e
              espanhola, o que amplia minha mobilidade internacional e
              disponibilidade para atuar em ambientes multiculturais.
            </p>
          </div>
          <Spacer x={4} />
          <div className="flex flex-col gap-2 group/title opacity-0 animate-fade-slide [animation-delay:0.6s]">
            <span className={`${title({ size: "sm" })} group-hover-title `}>
              Projetos Pessoais
            </span>
            <ExperienceGroup
              title="CareMore - Aplicativo de Prontuários Médicos (2024 - Atual)"
              items={[
                "Desenvolvimento completo do front-end em React.js com HeroUI e Tailwind CSS.",
                "Implementação de formulários dinâmicos com React Hook Form e Zod.",
                "Integração com Supabase para autenticação, banco de dados e armazenamento seguro.",
                "Uso de Git para versionamento e boas práticas de desenvolvimento.",
                "Design responsivo e experiência de usuário otimizada para médicos e pacientes.",
              ]}
            />
          </div>
          <Spacer x={4} />
          <div className="flex flex-col gap-4 group/title opacity-0 animate-fade-slide [animation-delay:0.9s]">
            <span className={`${title({ size: "sm" })} group-hover-title `}>
              Experiência Profissional
            </span>
            <ExperienceGroup
              title="Adequar Saúde (2018 - 2025)"
              items={[
                "Desenvolvimento de sistemas internos de automação e web scraping em Python + Selenium",
                "Implementação de processos automatizados que reduziram tarefas manuais repetitivas",
                "Criação de dashboards estratégicos com Google Apps Script e Google Sheets.",
                "Desenvolvimento e manutenção de aplicações web internas com React.js e Supabase.",
                "Design responsivo e experiência de usuário otimizada para médicos e pacientes.",
              ]}
            />
            <ExperienceGroup
              title="Media Portal (2023)"
              items={[
                "Gestão e acompanhamento de projetos de TI, garantindo alinhamento entre equipe técnica e stakeholders.",
                "Apoio em projetos de desenvolvimento com foco em satisfação do cliente.",
                "Comunicação clara para resolução de demandas técnicas e entrega de valor.",
              ]}
            />
          </div>
          <Spacer x={4} />
          <div className="flex flex-col gap-4 group/title opacity-0 animate-fade-slide [animation-delay:1.2s]">
            <span className={`${title({ size: "sm" })} group-hover-title `}>
              Educação
            </span>
            <ExperienceGroup
              // title="Media Portal (2023)"
              items={[
                "Análise e Desenvolvimento de Software - UNIFATECIE (2024 - Atual)",
                "Produção Fonográfica - Faculdade Belas Artes de São Paulo (2017 - 2019)",
                "Automação Industrial - ETEC Martin Luther King (2014 - 2017)",
              ]}
            />
          </div>
          <Spacer x={4} />
          <div className="flex flex-col gap-4 group/title opacity-0 animate-fade-slide [animation-delay:1.5s]">
            <span className={`${title({ size: "sm" })} group-hover-title`}>
              Certificações
            </span>
            <ExperienceGroup
              // title="Media Portal (2023)"
              items={[
                "Meta Front-End Developer Professional Certificate (em andamento) - Coursera",
                "Google Project Management Professional Certificate (em andamento) - Coursera",
                "Introdução ao Desenvolvimento Front-End - Coursera (2023)",
                "Arquitetura de Computadores - Alura (2022)",
                "Design de Sites Mobile com Figma - Alura (2022)",
              ]}
            />
          </div>
          <Spacer x={4} />
          <div className="flex flex-col gap-4 group/title opacity-0 animate-fade-slide [animation-delay:1.8s]">
            <span className={`${title({ size: "sm" })} group-hover-title`}>
              Habilidades Técnicas
            </span>
            <div className="flex flex-col gap-4 group/title">
              <SkillsGroup
                items={[
                  <>
                    <strong>Linguagens</strong>: Python, JavaScript, TypeScript,
                    HTML, CSS
                  </>,
                  <>
                    <strong>Front-End</strong>: React.js, HeroUI, Tailwind,
                    Bootstrap
                  </>,
                  <>
                    <strong>Back-End & Banco de Dados</strong>: Supabase, Python
                    (Selenium, automação, web scraping)
                  </>,
                  <>
                    <strong>Ferramentas</strong>: Git, VSCode, Google Apps
                    Script, Google Sheets, Figma, Photoshop, Illustrator,
                    Microsoft Office
                  </>,
                  <>
                    <strong>Metodologias</strong>: Agile/Scrum, Automação de
                    processos, Desenvolvimento de interfaces, Gestão de projetos
                  </>,
                ]}
              />
            </div>
          </div>
          <Spacer x={4} />
          <div className="flex flex-col gap-4 group/title opacity-0 animate-fade-slide [animation-delay:2.1s]">
            <span className={`${title({ size: "sm" })} group-hover-title`}>
              Idiomas
            </span>
            <ExperienceGroup
              items={[
                "Português (Nativo)",
                "Inglês (Avançado)",
                "Espanhol (Intermediário)",
                "Francês (Iniciante)",
                "Alemão (Iniciante)",
              ]}
            />
          </div>
          <div className="flex flex-col gap-4 group/title opacity-0 animate-fade-slide [animation-delay:2.4s]">
            <span className={`${title({ size: "sm" })} group-hover-title`}>
              Mobilidade Internacional
            </span>
            <ExperienceGroup
              items={[
                "Processo de cidadania italiana e espanhola em andamento",
              ]}
            />
          </div>
          <Link href="recruiter">
            <Button className="bg-custom-violet-800 hover:bg-custom-violet-400 font-bold text-white dark:text-black max-w-fit mx-auto p-5 opacity-0 animate-fade-slide [animation-delay:2.8s]">
              Carta ao Recrutador
            </Button>
          </Link>
        </div>
      </section>
    </DefaultLayout>
  );
}
