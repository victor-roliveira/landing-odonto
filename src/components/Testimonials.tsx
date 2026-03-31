import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Mariana Souza",
    role: "Gestora de clínica",
    text: "Depois que começamos a usar o aplicativo, nossa rotina ficou muito mais organizada. Hoje temos mais controle sobre agendamentos, pacientes e processos internos.",
  },
  {
    name: "Rafael Lima",
    role: "Administrador clínico",
    text: "A plataforma trouxe mais agilidade para a equipe e reduziu bastante os erros no dia a dia. Ficou muito mais fácil acompanhar tudo em um só lugar.",
  },
  {
    name: "Juliana Alves",
    role: "Dentista",
    text: "O que mais gostei foi a praticidade. O sistema facilita a gestão da clínica, melhora a experiência do paciente e ajuda muito na produtividade.",
  },
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-20">
      <div className="container-default">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyanBrand-600">
            Depoimentos
          </p>
          <h2 className="section-title mt-3">
            Clínicas que modernizaram a gestão e ganharam mais eficiência
          </h2>
          <p className="section-subtitle">
            Nada gera mais confiança do que resultados reais. Esta seção reforça
            a credibilidade da solução mostrando como o aplicativo impacta a
            rotina de clínicas odontológicas na prática.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((item) => (
            <article key={item.name} className="card">
              <div className="flex gap-1 text-cyanBrand-500">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} size={18} fill="currentColor" />
                ))}
              </div>
              <p className="mt-5 text-sm leading-7 text-navy-700/85">
                “{item.text}”
              </p>
              <div className="mt-6 border-t border-navy-100 pt-4">
                <p className="font-semibold text-navy-900">{item.name}</p>
                <p className="text-sm text-navy-600">{item.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
