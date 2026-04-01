import { ArrowRight } from "lucide-react";
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

const glowAnimation = {
  boxShadow: [
    "0 20px 50px rgba(6, 182, 212, 0.18)",
    "0 25px 60px rgba(6, 182, 212, 0.28)",
    "0 20px 50px rgba(6, 182, 212, 0.18)",
  ],
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut" as const,
  },
};

export default function CTA() {
  return (
    <section id="contato" className="py-20">
      <div className="container-default">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" as const }}
          className="rounded-[2rem] bg-gradient-to-r from-navy-900 via-navy-800 to-cyanBrand-700 px-6 py-12 text-white shadow-glow sm:px-10 sm:py-16 lg:px-16"
          animate={glowAnimation}
        >
          <motion.div
            className="max-w-3xl"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.p
              variants={itemVariants}
              className="text-sm font-semibold uppercase tracking-[0.25em] text-cyanBrand-200"
            >
              Pronto para evoluir sua clínica?
            </motion.p>

            <motion.h2
              variants={itemVariants}
              className="mt-4 text-3xl font-bold sm:text-4xl"
            >
              Comece a organizar, automatizar e escalar sua clínica com mais
              eficiência.
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="mt-4 max-w-2xl text-base leading-7 text-white/80"
            >
              Solicite uma demonstração e veja na prática como o aplicativo pode
              reduzir tarefas manuais, melhorar a gestão e aumentar a
              produtividade da sua equipe.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-col gap-4 sm:flex-row"
            >
              <motion.a
                href="https://wa.me/5500000000000"
                className="btn-primary gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                Solicitar demonstração
                <motion.span
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowRight size={18} />
                </motion.span>
              </motion.a>

              <motion.a
                href="#servicos"
                className="btn-secondary border-white/20 bg-white/10 text-white hover:text-white"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                Ver recursos do sistema
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
