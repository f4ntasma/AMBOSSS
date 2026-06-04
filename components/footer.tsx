import Link from 'next/link'
import { Github, Linkedin, Mail, Twitter } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    Plataforma: [
      { label: 'Notas', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Recursos', href: '#' },
      { label: 'Comunidad', href: '#' },
    ],
    Recursos: [
      { label: 'Herramientas de Estudio', href: '#' },
      { label: 'Casos Clínicos', href: '#' },
      { label: 'Preparación ENAM', href: '#' },
      { label: 'Guía de Internado', href: '#' },
    ],
    Empresa: [
      { label: 'Acerca de', href: '#' },
      { label: 'Contacto', href: '#' },
      { label: 'Privacidad', href: '#' },
      { label: 'Términos', href: '#' },
    ],
  }

  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary text-primary-foreground flex items-center justify-center font-bold">
                A
              </div>
              <span className="font-bold">AMBOSS</span>
            </div>
            <p className="text-sm text-foreground/60">
              Empoderando a estudiantes de medicina con recursos educativos integrales y apoyo comunitario.
            </p>
            <div className="flex gap-4 mt-4">
              <Link href="cielo.acuna@upsjb.edu.pe" className="text-foreground/60 hover:text-foreground transition-colors">
                <Mail className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Links sections */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="font-semibold mb-4 text-foreground">{section}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-foreground/60 hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border/40 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-foreground/60">
            &copy; {currentYear} AMBOSS. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
