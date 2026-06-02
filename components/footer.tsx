import Link from 'next/link'
import { Github, Linkedin, Twitter } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    Platform: [
      { label: 'Notes', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Resources', href: '#' },
      { label: 'Community', href: '#' },
    ],
    Resources: [
      { label: 'Study Tools', href: '#' },
      { label: 'Clinical Cases', href: '#' },
      { label: 'ENAM Prep', href: '#' },
      { label: 'Internship Guide', href: '#' },
    ],
    Company: [
      { label: 'About', href: '#' },
      { label: 'Contact', href: '#' },
      { label: 'Privacy', href: '#' },
      { label: 'Terms', href: '#' },
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
                M
              </div>
              <span className="font-bold">MedEd</span>
            </div>
            <p className="text-sm text-foreground/60">
              Empowering medical students with comprehensive education resources and community support.
            </p>
            <div className="flex gap-4 mt-4">
              <Link href="#" className="text-foreground/60 hover:text-foreground transition-colors">
                <Twitter className="w-4 h-4" />
              </Link>
              <Link href="#" className="text-foreground/60 hover:text-foreground transition-colors">
                <Linkedin className="w-4 h-4" />
              </Link>
              <Link href="#" className="text-foreground/60 hover:text-foreground transition-colors">
                <Github className="w-4 h-4" />
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
            &copy; {currentYear} MedEd. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm">
            <Link href="#" className="text-foreground/60 hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-foreground/60 hover:text-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
