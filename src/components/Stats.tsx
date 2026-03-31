const items = [
  { value: "+5 mil", label: "Pacientes atendidos" },
  { value: "+10 anos", label: "De experiência clínica" },
  { value: "98%", label: "Satisfação dos pacientes" },
  { value: "24h", label: "Confirmação de agendamento" },
];

export default function Stats() {
  return (
    <section className="border-y border-navy-100 bg-white">
      <div className="container-default grid gap-6 py-8 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <div
            key={item.label}
            className="rounded-3xl border border-navy-100 bg-white p-6 text-center shadow-soft"
          >
            <p className="text-3xl font-extrabold text-navy-900">
              {item.value}
            </p>
            <p className="mt-2 text-sm text-navy-700/80">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
