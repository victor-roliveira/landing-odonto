import { Clock3, HeartHandshake, Shield, Wallet } from "lucide-react";
import { motion, type Variants } from "framer-motion";

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

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

export default function Benefits() {
  return (
    <section id="beneficios" className="py-20">
      <div className="container-default grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        {/* LEFT */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.p
            variants={itemVariants}
            className="text-sm font-semibold uppercase tracking-[0.25em] text-cyanBrand-600"
          >
            Diferenciais
          </motion.p>

          <motion.h2 variants={itemVariants} className="section-title mt-3">
            Um aplicativo pensado para aumentar a eficiência da sua clínica
          </motion.h2>

          <motion.p variants={itemVariants} className="section-subtitle">
            Nosso objetivo é simplificar a gestão e melhorar a produtividade.
            Por isso, a plataforma foi desenvolvida com foco em automação,
            organização e facilidade de uso no dia a dia da clínica
            odontológica.
          </motion.p>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          className="grid gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          {benefits.map(({ icon: Icon, title, description }) => (
            <motion.div
              key={title}
              variants={itemVariants}
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ duration: 0.25, ease: "easeOut" as const }}
              className="rounded-3xl border border-navy-100 bg-white p-6 shadow-soft"
            >
              <div className="flex items-start gap-4">
                <motion.div
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-navy-900 text-white"
                  whileHover={{ scale: 1.08, rotate: -4 }}
                  transition={{ duration: 0.2, ease: "easeOut" as const }}
                >
                  <Icon size={20} />
                </motion.div>

                <div>
                  <h3 className="text-lg font-bold text-navy-900">{title}</h3>
                  <p className="mt-2 text-sm leading-7 text-navy-700/80">
                    {description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
