import {
  ArrowRight,
  CalendarCheck2,
  ShieldCheck,
  SmilePlus,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-hero-grid relative overflow-hidden">
      <div className="container-default grid min-h-[88vh] items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyanBrand-200 bg-cyanBrand-50 px-4 py-2 text-sm font-medium text-cyanBrand-700">
            <ShieldCheck size={16} />
            Gestão moderna, segura e eficiente para clínicas odontológicas
          </div>

          <h1 className="max-w-3xl text-4xl font-extrabold leading-tight text-navy-900 sm:text-5xl lg:text-6xl">
            Transforme a rotina da sua clínica com um app que une{" "}
            <span className="text-cyanBrand-500">tecnologia</span>, organização
            e praticidade.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-navy-700/85">
            Centralize agendamentos, prontuários, atendimentos, controle
            financeiro e comunicação com pacientes em uma única plataforma feita
            para clínicas odontológicas.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a href="#contato" className="btn-primary gap-2">
              Solicitar demonstração
              <ArrowRight size={18} />
            </a>
            <a href="#servicos" className="btn-secondary">
              Conhecer recursos
            </a>
          </div>

          <div className="mt-10 flex flex-col gap-4 text-sm text-navy-700 sm:flex-row sm:items-center sm:gap-8">
            <div className="flex items-center gap-2">
              <CalendarCheck2 className="text-cyanBrand-500" size={18} />
              Agendamentos automatizados
            </div>
            <div className="flex items-center gap-2">
              <SmilePlus className="text-cyanBrand-500" size={18} />
              Experiência melhor para equipe e pacientes
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-[2rem] border border-white/60 bg-gradient-to-br from-navy-900 to-navy-800 p-4 shadow-glow">
            <div className="rounded-[1.6rem] bg-white p-5 sm:p-6">
              <div className="rounded-[1.5rem] bg-gradient-to-br from-cyanBrand-50 to-navy-50 p-6 sm:p-8">
                <div className="grid gap-4">
                  <div className="rounded-3xl bg-white p-5 shadow-soft">
                    <p className="text-sm font-medium text-navy-500">
                      Gestão centralizada
                    </p>
                    <div className="mt-2 flex items-end justify-between">
                      <h3 className="text-2xl font-bold text-navy-900">
                        Controle completo da clínica
                      </h3>
                      <span className="rounded-full bg-cyanBrand-100 px-3 py-1 text-xs font-semibold text-cyanBrand-700">
                        Para novas clínicas
                      </span>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-navy-700/80">
                      Organize pacientes, agenda, prontuários e processos
                      internos com mais agilidade e menos retrabalho.
                    </p>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-3xl bg-navy-900 p-5 text-white">
                      <p className="text-sm text-white/70">Funcionalidades</p>
                      <p className="mt-2 text-3xl font-bold">+8</p>
                      <p className="mt-2 text-sm text-white/80">
                        Agenda, prontuário, financeiro, lembretes e mais.
                      </p>
                    </div>

                    <div className="rounded-3xl bg-cyanBrand-500 p-5 text-white">
                      <p className="text-sm text-white/80">Disponibilidade</p>
                      <p className="mt-2 text-3xl font-bold">24h</p>
                      <p className="mt-2 text-sm text-white/90">
                        Acesse sua gestão de qualquer lugar.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-3xl border border-navy-100 bg-white p-5">
                    <p className="text-sm font-medium text-navy-500">
                      Diferencial do aplicativo
                    </p>
                    <p className="mt-2 text-lg font-semibold text-navy-900">
                      Mais produtividade, organização e controle para o dia a
                      dia da clínica.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-6 -left-6 hidden rounded-3xl border border-cyanBrand-100 bg-white p-4 shadow-soft sm:block">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-cyanBrand-700">
              Solução premium
            </p>
            <p className="mt-2 text-sm text-navy-700">
              Tecnologia pensada para clínicas odontológicas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
