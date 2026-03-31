const steps = [
  {
    number: "01",
    title: "Você configura sua clínica",
    description:
      "Crie sua conta em minutos e organize pacientes, agenda e processos em um único lugar.",
  },
  {
    number: "02",
    title: "Automatize sua rotina",
    description:
      "Agendamentos, lembretes e gestão fluem automaticamente, reduzindo erros e economizando tempo da equipe.",
  },
  {
    number: "03",
    title: "Ganhe mais controle e resultados",
    description:
      "Acompanhe indicadores, melhore a produtividade e ofereça uma experiência mais profissional aos pacientes.",
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-navy-900 py-20 text-white">
      <div className="container-default">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyanBrand-300">
            Como funciona
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Comece a transformar sua clínica em poucos passos
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-white/75">
            Um fluxo simples e direto para você sair do controle manual e levar
            sua clínica para um novo nível de organização, produtividade e
            crescimento.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <article
              key={step.number}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <span className="text-sm font-semibold text-cyanBrand-300">
                {step.number}
              </span>
              <h3 className="mt-4 text-2xl font-bold">{step.title}</h3>
              <p className="mt-4 text-sm leading-7 text-white/75">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
