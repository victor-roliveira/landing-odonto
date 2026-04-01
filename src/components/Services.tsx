import {
  Aperture,
  BadgeCheck,
  ScanFace,
  Sparkles,
  Syringe,
  Hospital,
} from "lucide-react";
import { motion, type Variants } from "framer-motion";

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

export default function Services() {
  return (
    <section id="servicos" className="bg-navy-50/50 py-20">
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
            Recursos
          </motion.p>

          <motion.h2 variants={itemVariants} className="section-title mt-3">
            Tudo o que sua clínica precisa para ganhar mais controle e
            eficiência
          </motion.h2>

          <motion.p variants={itemVariants} className="section-subtitle">
            Estruturamos esta seção para apresentar os principais recursos do
            aplicativo, destacando organização, produtividade, automação e uma
            gestão mais simples para clínicas odontológicas.
          </motion.p>
        </motion.div>

        <motion.div
          className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          {services.map(({ icon: Icon, title, description }) => (
            <motion.article
              key={title}
              variants={itemVariants}
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ duration: 0.25, ease: "easeOut" as const }}
              className="card"
            >
              <motion.div
                className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyanBrand-50 text-cyanBrand-600"
                whileHover={{ scale: 1.08, rotate: -4 }}
                transition={{ duration: 0.2, ease: "easeOut" as const }}
              >
                <Icon size={24} />
              </motion.div>

              <h3 className="mt-5 text-xl font-bold text-navy-900">{title}</h3>

              <p className="mt-3 text-sm leading-7 text-navy-700/80">
                {description}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
