import { Check, Sparkles } from "lucide-react";
import { motion, type Variants } from "framer-motion";

const plans = [
  {
    name: "Essencial",
    description:
      "Ideal para clínicas em fase inicial que precisam organizar a operação.",
    price: "R$ 97",
    period: "/mês",
    highlight: false,
    features: [
      "Agenda inteligente",
      "Cadastro de pacientes",
      "Prontuário digital",
      "Confirmações de consulta",
      "Suporte por e-mail",
    ],
    cta: "Começar com Essencial",
  },
  {
    name: "Profissional",
    description:
      "Perfeito para clínicas que querem mais controle, automação e crescimento.",
    price: "R$ 197",
    period: "/mês",
    highlight: true,
    badge: "Mais escolhido",
    features: [
      "Tudo do plano Essencial",
      "Controle financeiro integrado",
      "Relatórios e indicadores",
      "Automação de lembretes",
      "Gestão de equipe",
      "Suporte prioritário",
    ],
    cta: "Escolher Profissional",
  },
  {
    name: "Premium",
    description:
      "Para clínicas que buscam escala, performance e gestão avançada.",
    price: "R$ 297",
    period: "/mês",
    highlight: false,
    features: [
      "Tudo do plano Profissional",
      "Dashboard avançado",
      "Múltiplos usuários",
      "Acompanhamento estratégico",
      "Atendimento prioritário",
      "Onboarding personalizado",
    ],
    cta: "Falar com especialista",
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

export default function Pricing() {
  return (
    <section id="planos" className="py-20">
      <div className="container-default">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.p
            variants={itemVariants}
            className="text-sm font-semibold uppercase tracking-[0.25em] text-cyanBrand-600"
          >
            Planos
          </motion.p>

          <motion.h2 variants={itemVariants} className="section-title mt-3">
            Escolha o plano ideal para o momento da sua clínica
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="section-subtitle mx-auto"
          >
            Tenha mais organização, produtividade e controle com uma plataforma
            que acompanha o crescimento da sua clínica odontológica.
          </motion.p>
        </motion.div>

        <motion.div
          className="mt-12 grid gap-6 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          {plans.map((plan) => (
            <motion.article
              key={plan.name}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.01 }}
              transition={{ duration: 0.25, ease: "easeOut" as const }}
              className={`relative rounded-3xl border p-8 shadow-soft ${
                plan.highlight
                  ? "border-cyanBrand-300 bg-gradient-to-b from-white to-cyanBrand-50/40 shadow-glow"
                  : "border-navy-100 bg-white"
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="inline-flex items-center gap-2 rounded-full bg-cyanBrand-500 px-4 py-2 text-xs font-semibold text-white shadow-lg">
                    <Sparkles size={14} />
                    {plan.badge}
                  </div>
                </div>
              )}

              <div>
                <h3 className="text-2xl font-bold text-navy-900">
                  {plan.name}
                </h3>
                <p className="mt-3 text-sm leading-7 text-navy-700/80">
                  {plan.description}
                </p>
              </div>

              <div className="mt-8 flex items-end gap-2">
                <span className="text-4xl font-extrabold text-navy-900">
                  {plan.price}
                </span>
                <span className="pb-1 text-sm text-navy-600">
                  {plan.period}
                </span>
              </div>

              <div className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyanBrand-100 text-cyanBrand-700">
                      <Check size={14} />
                    </div>
                    <span className="text-sm leading-6 text-navy-700/90">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <motion.a
                href="#contato"
                className={`mt-10 inline-flex w-full items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition ${
                  plan.highlight
                    ? "bg-cyanBrand-500 text-white hover:bg-cyanBrand-600"
                    : "border border-navy-200 bg-white text-navy-900 hover:border-cyanBrand-400 hover:text-cyanBrand-700"
                }`}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                {plan.cta}
              </motion.a>
            </motion.article>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" as const, delay: 0.15 }}
          className="mt-8 text-center text-sm text-navy-600"
        >
          Todos os planos podem ser ajustados conforme a necessidade da sua
          clínica.
        </motion.p>
      </div>
    </section>
  );
}
