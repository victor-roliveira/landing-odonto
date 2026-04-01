import { Menu } from "lucide-react";

const navItems = [
  { label: "Recursos", href: "#servicos" },
  { label: "Diferenciais", href: "#beneficios" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Resultados", href: "#depoimentos" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-navy-100/80 bg-white/85 backdrop-blur">
      <div className="container-default flex h-20 items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <img src="/OdontoHub.png" alt="logomarca" width={200} />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-navy-700 transition hover:text-cyanBrand-600"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a href="#contato" className="btn-primary">
            Solicitar demonstração
          </a>
        </div>

        <button
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-navy-200 text-navy-900 md:hidden"
          aria-label="Abrir menu"
        >
          <Menu size={20} />
        </button>
      </div>
    </header>
  );
}
