import {
  ArrowRight,
  CalendarCheck2,
  ShieldCheck,
  SmilePlus,
} from "lucide-react";
import { motion, type Variants } from "framer-motion";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { cn } from "@/lib/utils";

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
      {/* BACKGROUND ANIMADO */}
      <AnimatedGridPattern
        numSquares={40}
        maxOpacity={0.06}
        duration={4}
        repeatDelay={1}
        className={cn(
          "pointer-events-none absolute inset-0 h-full w-full skew-y-6 text-cyanBrand-400/60",
          "[mask-image:radial-gradient(900px_circle_at_center,white,transparent)]",
        )}
      />

      <div className="container-default relative z-10 grid min-h-[88vh] items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
        {/* LEFT */}
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
              <motion.span whileHover={{ x: 4 }}>
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

        {/* RIGHT - PAINEL SEM MOLDURA */}
        <motion.div
          className="relative"
          variants={visualVariants}
          initial="hidden"
          animate="show"
        >
          <motion.div
            animate={floatingAnimation}
            className="space-y-4 rounded-[2rem] bg-white/70 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur"
          >
            {/* HEADER */}
            <div className="flex items-center justify-between rounded-3xl bg-white/80 px-5 py-4 backdrop-blur">
              <div>
                <p className="text-sm font-medium text-navy-500">
                  Painel da clínica
                </p>
                <p className="mt-1 text-lg font-semibold text-navy-900">
                  Visão completa da operação
                </p>
              </div>

              <span className="rounded-full bg-cyanBrand-100 px-3 py-1 text-xs font-semibold text-cyanBrand-700">
                Em tempo real
              </span>
            </div>

            {/* METRICS */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-navy-900/95 p-5 text-white shadow-lg backdrop-blur">
                <p className="text-sm text-white/70">Consultas confirmadas</p>
                <p className="mt-2 text-3xl font-bold">128</p>
                <p className="mt-2 text-sm text-white/80">
                  Agenda organizada com confirmações automáticas.
                </p>
              </div>

              <div className="rounded-3xl bg-cyanBrand-500 p-5 text-white shadow-lg">
                <p className="text-sm text-white/80">Produtividade da equipe</p>
                <p className="mt-2 text-3xl font-bold">+32%</p>
                <p className="mt-2 text-sm text-white/90">
                  Mais eficiência na rotina clínica.
                </p>
              </div>
            </div>

            {/* FLOW */}
            <div className="rounded-3xl bg-white/80 p-5 backdrop-blur">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-navy-500">Fluxo operacional</p>
                  <h3 className="mt-1 text-lg font-bold text-navy-900">
                    Tudo centralizado em um só lugar
                  </h3>
                </div>

                <span className="rounded-full bg-navy-100 px-3 py-1 text-xs text-navy-700">
                  SaaS odontológico
                </span>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl bg-white/70 px-4 py-3 backdrop-blur">
                  <p className="text-xs text-navy-500">AGENDA</p>
                  <p className="mt-1 text-sm font-semibold text-navy-900">
                    Consultas
                  </p>
                </div>

                <div className="rounded-2xl bg-white/70 px-4 py-3 backdrop-blur">
                  <p className="text-xs text-navy-500">PACIENTES</p>
                  <p className="mt-1 text-sm font-semibold text-navy-900">
                    Histórico
                  </p>
                </div>

                <div className="rounded-2xl bg-white/70 px-4 py-3 backdrop-blur">
                  <p className="text-xs text-navy-500">FINANCEIRO</p>
                  <p className="mt-1 text-sm font-semibold text-navy-900">
                    Controle
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* BADGE */}
          <motion.div
            initial={{ opacity: 0, x: -20, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 0.8 }}
            className="absolute -bottom-6 -left-6 hidden rounded-3xl bg-white p-4 shadow-lg sm:block"
          >
            <p className="text-xs text-cyanBrand-700 uppercase">
              Plataforma premium
            </p>
            <p className="mt-1 text-sm text-navy-700">Gestão inteligente</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
