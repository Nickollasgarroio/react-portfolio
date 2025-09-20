import { Image } from "@heroui/image";
import { Button } from "@heroui/button";
import { Card, CardBody, CardHeader } from "@heroui/card";
import { title, subtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

export default function IndexPage() {
  return (
    <DefaultLayout>
      {/* Seção Inicial */}
      <div className="flex flex-col gap-4 items-center justify-center">
        <section className="flex flex-col items-center justify-center">
          <div className="inline-block max-w-lg text-center justify-center ">
            <Image
              src="/public/img/foto_portfolio.png"
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
          </div>
        </section>
        <section className="">
          <div className="max-w-3xl mx-auto text-justify flex flex-col gap-4">
            <Card>
              {/* <CardHeader>Sobre Mim</CardHeader> */}
              <CardBody className="p-4">
                <p>
                  <strong>Nickollas Giordano Arroio</strong>, nascido em 1998 em
                  São Paulo, é um desenvolvedor com experiência em
                  <strong> React.js</strong> e <strong>Python</strong>. Trabalha
                  com ferramentas como
                  <strong> Supabase</strong>, <strong>Tailwind CSS</strong>,
                  <strong> HeroUI</strong> e <strong>Selenium</strong>. Em 2024,
                  iniciou o processo de obtenção da
                  <strong> cidadania italiana e espanhola</strong>, ampliando
                  sua mobilidade internacional.
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
