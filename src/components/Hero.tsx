import {
  ArrowRight,
  CalendarCheck2,
  ShieldCheck,
  SmilePlus,
} from "lucide-react";

import { motion, type Variants } from "framer-motion";

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

const visualVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut" as const,
      delay: 0.15,
    },
  },
};

const floatingAnimation = {
  y: [0, -8, 0],
  transition: {
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut" as const,
  },
};

export default function Hero() {
  return (
    <section className="bg-hero-grid relative overflow-hidden">
      <div className="container-default grid min-h-[88vh] items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <motion.div
            variants={itemVariants}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyanBrand-200 bg-cyanBrand-50 px-4 py-2 text-sm font-medium text-cyanBrand-700"
          >
            <ShieldCheck size={16} />
            Gestão moderna, segura e eficiente para clínicas odontológicas
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="max-w-3xl text-4xl font-extrabold leading-tight text-navy-900 sm:text-5xl lg:text-6xl"
          >
            Transforme a rotina da sua clínica com um app que une{" "}
            <span className="text-cyanBrand-500">tecnologia</span>, organização
            e praticidade.
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-6 max-w-2xl text-lg leading-8 text-navy-700/85"
          >
            Centralize agendamentos, prontuários, atendimentos, controle
            financeiro e comunicação com pacientes em uma única plataforma feita
            para clínicas odontológicas.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-col gap-4 sm:flex-row"
          >
            <motion.a
              href="#contato"
              className="btn-primary gap-2"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Solicitar demonstração
              <motion.span whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
                <ArrowRight size={18} />
              </motion.span>
            </motion.a>

            <motion.a
              href="#servicos"
              className="btn-secondary"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Conhecer recursos
            </motion.a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-col gap-4 text-sm text-navy-700 sm:flex-row sm:items-center sm:gap-8"
          >
            <div className="flex items-center gap-2">
              <CalendarCheck2 className="text-cyanBrand-500" size={18} />
              Agendamentos automatizados
            </div>
            <div className="flex items-center gap-2">
              <SmilePlus className="text-cyanBrand-500" size={18} />
              Experiência melhor para equipe e pacientes
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative"
          variants={visualVariants}
          initial="hidden"
          animate="show"
        >
          <motion.div
            animate={floatingAnimation}
            className="rounded-[2rem] border border-white/60 bg-gradient-to-br from-navy-900 to-navy-800 p-4 shadow-glow"
          >
            <div className="rounded-[1.6rem] bg-white p-5 sm:p-6">
              <div className="rounded-[1.5rem] bg-gradient-to-br from-cyanBrand-50 to-navy-50 p-6 sm:p-8">
                <div className="grid gap-4">
                  <motion.div
                    variants={itemVariants}
                    initial="hidden"
                    animate="show"
                    transition={{ delay: 0.35 }}
                    className="rounded-3xl bg-white p-5 shadow-soft"
                  >
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
                  </motion.div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <motion.div
                      variants={itemVariants}
                      initial="hidden"
                      animate="show"
                      transition={{ delay: 0.45 }}
                      className="rounded-3xl bg-navy-900 p-5 text-white"
                    >
                      <p className="text-sm text-white/70">Funcionalidades</p>
                      <p className="mt-2 text-3xl font-bold">+8</p>
                      <p className="mt-2 text-sm text-white/80">
                        Agenda, prontuário, financeiro, lembretes e mais.
                      </p>
                    </motion.div>

                    <motion.div
                      variants={itemVariants}
                      initial="hidden"
                      animate="show"
                      transition={{ delay: 0.55 }}
                      className="rounded-3xl bg-cyanBrand-500 p-5 text-white"
                    >
                      <p className="text-sm text-white/80">Disponibilidade</p>
                      <p className="mt-2 text-3xl font-bold">24h</p>
                      <p className="mt-2 text-sm text-white/90">
                        Acesse sua gestão de qualquer lugar.
                      </p>
                    </motion.div>
                  </div>

                  <motion.div
                    variants={itemVariants}
                    initial="hidden"
                    animate="show"
                    transition={{ delay: 0.65 }}
                    className="rounded-3xl border border-navy-100 bg-white p-5"
                  >
                    <p className="text-sm font-medium text-navy-500">
                      Diferencial do aplicativo
                    </p>
                    <p className="mt-2 text-lg font-semibold text-navy-900">
                      Mais produtividade, organização e controle para o dia a
                      dia da clínica.
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
            className="absolute -bottom-6 -left-6 hidden rounded-3xl border border-cyanBrand-100 bg-white p-4 shadow-soft sm:block"
          >
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-cyanBrand-700">
              Solução premium
            </p>
            <p className="mt-2 text-sm text-navy-700">
              Tecnologia pensada para clínicas odontológicas.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
