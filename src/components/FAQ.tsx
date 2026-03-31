const faqs = [
  {
    question: "Quais tratamentos a clínica oferece?",
    answer:
      "A clínica pode destacar serviços como limpeza, restauração, clareamento, ortodontia, implantes e odontopediatria.",
  },
  {
    question: "Como funciona o agendamento?",
    answer:
      "O visitante entra em contato pelo CTA principal, escolhe um horário disponível e recebe a confirmação pela equipe.",
  },
  {
    question: "A landing pode ser conectada ao WhatsApp?",
    answer:
      "Sim. Basta trocar o link do botão principal pelo número ou URL de atendimento da clínica.",
  },
  {
    question: "Posso adicionar fotos reais da clínica e da equipe?",
    answer:
      "Sim. Essa é uma das melhores melhorias para aumentar credibilidade e taxa de conversão.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="bg-navy-50/50 py-20">
      <div className="container-default">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyanBrand-600">
            FAQ
          </p>
          <h2 className="section-title mt-3">Perguntas frequentes</h2>
          <p className="section-subtitle">
            Inspirado no uso de FAQ da referência, este bloco ajuda a eliminar
            dúvidas comuns antes do clique final. :contentReference[oaicite:1]
          </p>
        </div>

        <div className="mt-12 space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="rounded-3xl border border-navy-100 bg-white p-6 shadow-soft"
            >
              <h3 className="text-lg font-bold text-navy-900">
                {faq.question}
              </h3>
              <p className="mt-3 text-sm leading-7 text-navy-700/80">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
