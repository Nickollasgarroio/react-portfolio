import { Image } from "@heroui/image";
import { Button } from "@heroui/button";
import { title, subtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <Image
            src="/img/foto-portfolio.png"
            alt="Portfolio"
            className="rounded-lg mb-8 hover:scale-110 transition-all duration-600"
            width={200}
            height={200}
          />
        </div>
        <div className="max-w-xl text-center justify-center flex-col">
          <span className={title()}>Nickollas Giordano Arroio</span>
          <br />
          <span
            className={subtitle({
              class:
                "bg-gradient-to-r from-[#FF1CF7] to-[#b249f8] bg-clip-text text-transparent",
            })}
          >
            Desenvolvedor Front-end & Python
          </span>
          <br />
        </div>
      </section>
      <section>
        <div className="max-w-3xl mx-auto text-justify flex flex-col gap-4">
          <p>
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
            mobilidade internacional e disponibilidade para projetos globais.
          </p>

          <p>
            Em 2024, Nickollas desenvolveu um sistema de automação na
            <strong> Adequar Saúde</strong>, utilizando
            <strong> Python + Selenium</strong>, que coletava dados de diversos
            sites parceiros via web scraping e os organizava em uma
            <strong> planilha gerencial</strong>. Essa solução reduziu tarefas
            manuais, aumentou a eficiência operacional e forneceu informações
            estratégicas que influenciavam diretamente a
            <strong> tomada de decisões da empresa (BI)</strong>.
          </p>
        </div>
        <Button
          as={"a"}
          href="/files/Nickollas_Giordano_Arroio_CV.pdf"
          target="_blank"
          className="mt-8"
        >
          AAAA
        </Button>
      </section>
    </DefaultLayout>
  );
}
