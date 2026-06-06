import Link from 'next/link'
import { Mail } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary text-primary-foreground flex items-center justify-center font-bold">
                A
              </div>
              <span className="font-bold">AMBOSS</span>
            </div>
            <p className="text-sm text-foreground/60">
              Empoderando a estudiantes de medicina con <br/>recursos educativos integrales y apoyo comunitario.
            </p>
            <div className="flex gap-4 mt-4">
              <Link
                href="mailto:cielo.acuna@upsjb.edu.pe"
                className="text-foreground/60 hover:text-foreground transition-colors flex items-center gap-1"
              >
                <Mail className="w-4 h-4" />
                Gmail
              </Link>
            </div>
          </div>
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