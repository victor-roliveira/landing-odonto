import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section id="contato" className="py-20">
      <div className="container-default">
        <div className="rounded-[2rem] bg-gradient-to-r from-navy-900 via-navy-800 to-cyanBrand-700 px-6 py-12 text-white shadow-glow sm:px-10 sm:py-16 lg:px-16">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyanBrand-200">
              Pronto para agendar?
            </p>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Marque sua avaliação e descubra o tratamento ideal para o seu
              sorriso.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-white/80">
              Use este bloco final para captar leads via WhatsApp, formulário ou
              botão de agenda online.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="https://wa.me/5500000000000"
                className="btn-primary gap-2"
              >
                Falar no WhatsApp
                <ArrowRight size={18} />
              </a>
              <a
                href="#servicos"
                className="btn-secondary border-white/20 bg-white/10 text-white hover:text-white"
              >
                Ver especialidades
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
