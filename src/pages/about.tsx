import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { Image } from "@heroui/image";

export default function AboutPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1
            className={`${title()} text-custom-violet-400 opacity-0 animate-fade-slide`}
          >
            Sobre o Dev
          </h1>
        </div>
      </section>
      <section className="">
        <div className="max-w-3xl mx-auto text-justify flex flex-col items-center gap-4 ">
          <Image
            src="/img/sembg_fixed.png"
            alt="Foto Pessoal"
            className="mb-8 self-center h-80 lg:h-128 opacity-0 animate-fade-slide "
          />
          <p className="animate-fade-slide hover-violet opacity-0 animate-fade-slide [animation-delay:0.3s]">
            Nascido em São Paulo em 1998,
            <strong> Nickollas Giordano Arroio</strong> é um desenvolvedor
            apaixonado por tecnologia e inovação, com espírito de liderança e
            colaboração em equipe. Possui experiência sólida em
            <strong> React.js</strong> e <strong> Python</strong>, trabalhando
            com ferramentas modernas como <strong>Supabase</strong>,
            <strong> Tailwind CSS</strong>, <strong> HeroUI</strong> e
            <strong> Selenium</strong>. Em 2024, iniciou também o processo de
            obtenção da
            <strong> cidadania italiana e espanhola</strong>, ampliando sua
            mobilidade internacional e disponibilidade para projetos globais,
            com previsão de conclusão em 2026.
          </p>

          <p className="opacity-0 animate-fade-slide [animation-delay:0.6s] hover-violet">
            Em 2024, Nickollas desenvolveu um sistema de automação na
            <strong> Adequar Saúde</strong>, utilizando
            <strong> Python + Selenium</strong>, que coletava dados de diversos
            sites parceiros via web scraping e os organizava em uma
            <strong> planilha gerencial</strong>. Essa solução reduziu tarefas
            manuais, aumentou a eficiência operacional e forneceu informações
            estratégicas que influenciavam diretamente a
            <strong> tomada de decisões da empresa (BI)</strong>.
          </p>
          <p className="opacity-0 animate-fade-slide [animation-delay:0.9s] hover-violet">
            Em 2023, atuou na <strong> Media Portal</strong> no gerenciamento de
            equipes e projetos, com foco na coordenação das atividades de
            desenvolvimento de software e suporte técnico. Participou de
            reuniões estratégicas com stakeholders e clientes, além de
            contribuir para processos de reestruturação corporativa voltados à
            melhoria da eficiência nas entregas de soluções. Também desempenhou
            atividades em campo em projetos para clientes como
            <strong> SBT</strong>,<strong> SESC Belenzinho (São Paulo)</strong>,
            <strong> Rede Itatiaia</strong>, entre outros.
          </p>
          <p className="opacity-0 animate-fade-slide [animation-delay:1.2s] hover-violet">
            Atualmente, busca expandir sua experiência prática em
            desenvolvimento de software, com foco em <strong>Python</strong>,
            <strong> React.js </strong> e tecnologias relacionadas ao
            ecossistema web e desenvolvimento em geral. O objetivo é aprimorar
            competências técnicas, atuar em projetos desafiadores e
            consolidar-se como desenvolvedor <strong>full stack</strong>,
            contribuindo tanto no <strong>front-end</strong>, quanto no
            <strong> back-end</strong>,.
          </p>
        </div>
      </section>
    </DefaultLayout>
  );
}
