import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-navy-100 bg-white">
      <div className="container-default grid gap-10 py-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <img src="/OdontoHub.png" alt="logomarca" width={200} />
          </div>
          <p className="mt-4 max-w-xs text-sm leading-7 text-navy-700/80">
            Plataforma completa para gestão de clínicas odontológicas, com foco
            em organização, produtividade e crescimento sustentável.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-navy-900">Navegação</h3>
          <div className="mt-4 space-y-3 text-sm text-navy-700">
            <a href="#servicos" className="block hover:text-cyanBrand-600">
              Recursos
            </a>
            <a href="#beneficios" className="block hover:text-cyanBrand-600">
              Diferenciais
            </a>
            <a href="#como-funciona" className="block hover:text-cyanBrand-600">
              Como funciona
            </a>
            <a href="#faq" className="block hover:text-cyanBrand-600">
              FAQ
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-navy-900">Contato</h3>
          <div className="mt-4 space-y-3 text-sm text-navy-700">
            <div className="flex items-center gap-2">
              <Phone size={16} className="text-cyanBrand-600" />
              (71) 99999-9999
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} className="text-cyanBrand-600" />
              contato@odontohub.com
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-navy-900">Localização</h3>
          <div className="mt-4 flex items-start gap-2 text-sm leading-7 text-navy-700">
            <MapPin size={16} className="mt-1 shrink-0 text-cyanBrand-600" />
            <span>Salvador - BA, Brasil</span>
          </div>
        </div>
      </div>

      <div className="border-t border-navy-100 py-5">
        <div className="container-default flex flex-col items-center justify-between gap-3 text-sm text-navy-600 sm:flex-row">
          <p>© 2026 OdontoHub. Todos os direitos reservados.</p>
          <p>
            Desenvolvido por <strong>Brothers</strong> Company
          </p>
        </div>
      </div>
    </footer>
  );
}
