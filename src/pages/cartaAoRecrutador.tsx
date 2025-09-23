import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { AssNickollas } from "@/assets/svg/assNickollas";

export default function CartaAoRecutradorPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1
            className={`${title()} text-custom-violet-400 dark:text-custom-violet-300`}
          >
            Sobre o Dev
          </h1>
        </div>
      </section>
      <section className="">
        <div className="max-w-3xl mx-auto text-justify flex flex-col gap-4">
          <p>Prezados,</p>
          <p>
            Tenho experiência prática tanto em desenvolvimento de interfaces
            modernas com <strong> React.js</strong>, <strong> HeroUI</strong>,{" "}
            <strong> CSS/Tailwind</strong> e <strong> Supabase</strong> quanto
            em automação de processos e web scraping com
            <strong> Python</strong> e <strong> Selenium.</strong> Essa
            combinação me permite entregar soluções completas que aliam
            usabilidade, eficiência e escalabilidade. Além da experiência
            técnica, atuei em gestão de projetos e liderança de equipes de TI,
            garantindo entregas dentro do prazo e boa comunicação entre
            stakeholders e times técnicos. Estou motivado para aplicar esse
            conjunto de habilidades em um ambiente dinâmico como a sua empresa,
            contribuindo para inovação, eficiência e resultados de alto impacto.
            Em paralelo, meu processo de cidadania italiana e espanhola amplia
            minha mobilidade internacional, permitindo atuação em projetos
            multiculturais. Atenciosamente,
          </p>
          <p>Atenciosamente,</p>
          <span>
            <p className="text-custom-violet-400 dark:text-custom-violet-300 font-bold">
              Nickollas Giordano Arroio
            </p>
            <AssNickollas className="w-auto h-24 text-violet-alpha self-start text-custom-violet-800" />
          </span>
        </div>
      </section>
    </DefaultLayout>
  );
}
