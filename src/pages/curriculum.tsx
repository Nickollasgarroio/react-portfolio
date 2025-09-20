import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

export default function CurriculumPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>Curriculum</h1>
        </div>
        <div className="max-w-3xl px-3 text-justify flex flex-col gap-4">
          <span className={title({ size: "sm" })}>Projetos Pessoais</span>
          <p>
            Desenvolvedor Front-End com experiência em <strong>React.js</strong>
            , <strong>HeroUI</strong>,<strong>CSS/Tailwind</strong> e{" "}
            <strong>Supabase</strong>, focado na criação de interfaces modernas,
            responsivas e escaláveis. Participei do desenvolvimento de um
            aplicativo médico de prontuários, integrando front-end a banco de
            dados no Supabase, aplicando boas práticas de versionamento com Git
            e priorizando a usabilidade. Tenho também experiência complementar
            com Python e automação de processos, o que amplia minha visão em
            soluções de software completas. Atualmente em processo de obtenção
            da cidadania italiana e espanhola, o que aumenta minha
            disponibilidade para atuar em projetos internacionais.
          </p>
        </div>
      </section>
    </DefaultLayout>
  );
}
