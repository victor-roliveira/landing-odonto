import {
  Aperture,
  BadgeCheck,
  ScanFace,
  Sparkles,
  Syringe,
  Hospital,
} from "lucide-react";

const services = [
  {
    icon: Hospital,
    title: "Gestão de pacientes",
    description:
      "Cadastre pacientes, acompanhe históricos, organize informações e mantenha o atendimento da clínica sempre centralizado.",
  },
  {
    icon: Sparkles,
    title: "Agendamento inteligente",
    description:
      "Gerencie consultas com mais praticidade, reduza conflitos de horário e facilite a rotina da recepção.",
  },
  {
    icon: Aperture,
    title: "Prontuário digital",
    description:
      "Tenha acesso rápido ao histórico clínico, evolução dos atendimentos e informações importantes de cada paciente.",
  },
  {
    icon: Syringe,
    title: "Controle financeiro",
    description:
      "Acompanhe recebimentos, despesas e relatórios da clínica com mais organização e visão do faturamento.",
  },
  {
    icon: ScanFace,
    title: "Relatórios e indicadores",
    description:
      "Visualize dados da operação com mais clareza para tomar decisões estratégicas e melhorar a gestão da clínica.",
  },
  {
    icon: BadgeCheck,
    title: "Comunicação automatizada",
    description:
      "Envie lembretes, confirmações e avisos para pacientes, melhorando a experiência e reduzindo faltas.",
  },
];

export default function Services() {
  return (
    <section id="servicos" className="bg-navy-50/50 py-20">
      <div className="container-default">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyanBrand-600">
            Recursos
          </p>
          <h2 className="section-title mt-3">
            Tudo o que sua clínica precisa para ganhar mais controle e
            eficiência
          </h2>
          <p className="section-subtitle">
            Estruturamos esta seção para apresentar os principais recursos do
            aplicativo, destacando organização, produtividade, automação e uma
            gestão mais simples para clínicas odontológicas.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map(({ icon: Icon, title, description }) => (
            <article key={title} className="card">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyanBrand-50 text-cyanBrand-600">
                <Icon size={24} />
              </div>
              <h3 className="mt-5 text-xl font-bold text-navy-900">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-navy-700/80">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
