'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Calendar, User, ArrowRight } from 'lucide-react'

export default function BlogSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  }

  const articles = [
    {
      id: 1,
      title: 'Dominando ENAM: Guía de Estudio Integral',
      excerpt: 'Aprende estrategias efectivas para prepararte para el Examen Nacional de Medicina con técnicas de estudio comprobadas.',
      author: 'Dra. María González',
      date: '15 Mar, 2024',
      category: 'Preparación ENAM',
      readTime: '8 min de lectura',
    },
    {
      id: 2,
      title: 'Razonamiento Clínico en el Diagnóstico',
      excerpt: 'Desarrolla enfoques sistemáticos para diagnóstico diferencial en escenarios clínicos reales.',
      author: 'Dr. Carlos López',
      date: '12 Mar, 2024',
      category: 'Habilidades Clínicas',
      readTime: '10 min de lectura',
    },
    {
      id: 3,
      title: 'Comprendiendo la Farmacocinética',
      excerpt: 'Inmersión profunda en principios de metabolismo, distribución y eliminación de fármacos.',
      author: 'Dra. Ana Rodríguez',
      date: '10 Mar, 2024',
      category: 'Farmacología',
      readTime: '12 min de lectura',
    },
    {
      id: 4,
      title: 'Salud Mental Durante la Carrera de Medicina',
      excerpt: 'Estrategias para mantener el bienestar y prevenir el agotamiento en la educación médica.',
      author: 'Dr. Roberto Martínez',
      date: '8 Mar, 2024',
      category: 'Bienestar',
      readTime: '6 min de lectura',
    },
    {
      id: 5,
      title: 'Preparación para Entrevista de Internado',
      excerpt: 'Consejos esenciales para impresionar a los entrevistadores durante tu proceso de selección de internado.',
      author: 'Dra. Laura Sánchez',
      date: '5 Mar, 2024',
      category: 'Carrera',
      readTime: '7 min de lectura',
    },
    {
      id: 6,
      title: 'Errores Diagnósticos Comunes',
      excerpt: 'Aprende de los errores y evita fallas diagnósticas comunes en la práctica clínica.',
      author: 'Dr. Miguel Fernández',
      date: '1 Mar, 2024',
      category: 'Habilidades Clínicas',
      readTime: '9 min de lectura',
    },
  ]

  return (
    <section id="blog" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Blog Médico
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl">
            Perspectivas de expertos, consejos de estudio, conocimiento clínico y asesoramiento de profesionales médicos experimentados.
          </p>
        </motion.div>

        {/* Featured article */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:flex-1">
                <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                  Artículo Destacado
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-4">
                  {articles[0].title}
                </h3>
                <p className="text-lg text-foreground/70 mb-6">
                  {articles[0].excerpt}
                </p>
                <div className="flex flex-col md:flex-row gap-4 md:gap-6 text-sm text-foreground/60 mb-6">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    {articles[0].author}
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {articles[0].date}
                  </div>
                  <span>{articles[0].readTime}</span>
                </div>
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Leer Artículo
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Articles grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {articles.slice(1).map((article) => (
            <motion.div key={article.id} variants={itemVariants}>
              <Card className="p-6 h-full hover:border-primary/50 transition-all hover:shadow-lg flex flex-col group cursor-pointer">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium">
                    {article.category}
                  </span>
                  <span className="text-xs text-foreground/50">{article.readTime}</span>
                </div>

                <h3 className="font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {article.title}
                </h3>

                <p className="text-sm text-foreground/60 mb-6 flex-1">
                  {article.excerpt}
                </p>

                <div className="flex flex-col gap-3 border-t border-border/40 pt-4">
                  <div className="flex items-center gap-2 text-xs text-foreground/50">
                    <User className="w-3 h-3" />
                    {article.author}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-foreground/50">
                    <Calendar className="w-3 h-3" />
                    {article.date}
                  </div>
                  <Button variant="ghost" size="sm" className="justify-start pl-0 text-primary hover:text-primary/80">
                    Leer Más
                    <ArrowRight className="ml-2 w-3 h-3" />
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
