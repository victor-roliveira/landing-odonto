import { Clock3, HeartHandshake, Shield, Wallet } from "lucide-react";

const benefits = [
  {
    icon: HeartHandshake,
    title: "Experiência otimizada",
    description:
      "Melhore o fluxo de atendimento e proporcione mais organização para equipe e pacientes.",
  },
  {
    icon: Shield,
    title: "Segurança de dados",
    description:
      "Informações protegidas, controle de acesso e armazenamento seguro dos dados da clínica.",
  },
  {
    icon: Clock3,
    title: "Automação de processos",
    description:
      "Reduza tarefas manuais com agendamentos automáticos, lembretes e gestão inteligente.",
  },
  {
    icon: Wallet,
    title: "Gestão financeira integrada",
    description:
      "Controle receitas, despesas e acompanhe o desempenho financeiro da clínica em tempo real.",
  },
];

export default function Benefits() {
  return (
    <section id="beneficios" className="py-20">
      <div className="container-default grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyanBrand-600">
            Diferenciais
          </p>
          <h2 className="section-title mt-3">
            Um aplicativo pensado para aumentar a eficiência da sua clínica
          </h2>
          <p className="section-subtitle">
            Nosso objetivo é simplificar a gestão e melhorar a produtividade.
            Por isso, a plataforma foi desenvolvida com foco em automação,
            organização e facilidade de uso no dia a dia da clínica
            odontológica.
          </p>
        </div>

        <div className="grid gap-5">
          {benefits.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-3xl border border-navy-100 bg-white p-6 shadow-soft"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-navy-900 text-white">
                  <Icon size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-navy-900">{title}</h3>
                  <p className="mt-2 text-sm leading-7 text-navy-700/80">
                    {description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
