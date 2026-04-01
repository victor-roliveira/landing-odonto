import { motion, type Variants } from "framer-motion";

const faqs = [
  {
    question: "O aplicativo é feito apenas para clínicas odontológicas?",
    answer:
      "Sim. A plataforma foi pensada para atender a rotina de clínicas odontológicas, com recursos voltados para agendamento, pacientes, prontuários, financeiro e organização operacional.",
  },
  {
    question: "Como funciona a implantação na clínica?",
    answer:
      "A configuração é simples e rápida. Em pouco tempo, sua equipe já pode começar a organizar a agenda, centralizar informações e usar o sistema no dia a dia.",
  },
  {
    question: "É possível automatizar lembretes e confirmações?",
    answer:
      "Sim. O aplicativo ajuda a reduzir faltas e retrabalho com automações de comunicação, facilitando confirmações e lembretes de consultas.",
  },
  {
    question: "O sistema ajuda no controle financeiro da clínica?",
    answer:
      "Sim. Você pode acompanhar receitas, despesas e indicadores importantes para ter mais clareza sobre o desempenho financeiro da operação.",
  },
];

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

export default function FAQ() {
  return (
    <section id="faq" className="bg-navy-50/50 py-20">
      <div className="container-default">
        <motion.div
          className="max-w-3xl"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.p
            variants={itemVariants}
            className="text-sm font-semibold uppercase tracking-[0.25em] text-cyanBrand-600"
          >
            FAQ
          </motion.p>

          <motion.h2 variants={itemVariants} className="section-title mt-3">
            Perguntas frequentes
          </motion.h2>

          <motion.p variants={itemVariants} className="section-subtitle">
            Reunimos aqui as dúvidas mais comuns para mostrar, de forma clara,
            como o aplicativo pode simplificar a gestão, aumentar a
            produtividade e apoiar o crescimento da sua clínica odontológica.
          </motion.p>
        </motion.div>

        <motion.div
          className="mt-12 space-y-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          {faqs.map((faq) => (
            <motion.div
              key={faq.question}
              variants={itemVariants}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2, ease: "easeOut" as const }}
              className="rounded-3xl border border-navy-100 bg-white p-6 shadow-soft"
            >
              <h3 className="text-lg font-bold text-navy-900">
                {faq.question}
              </h3>
              <p className="mt-3 text-sm leading-7 text-navy-700/80">
                {faq.answer}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
