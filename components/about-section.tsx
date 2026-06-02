'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { BookOpen, Stethoscope, Award, Users } from 'lucide-react'

export default function AboutSection() {
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

  const timeline = [
    {
      year: '2020',
      title: 'Inicio de la Carrera',
      description: 'Comencé mi viaje en la Universidad Nacional de México',
    },
    {
      year: '2021',
      title: 'Ciencias Básicas',
      description: 'Me enfoqué en anatomía, bioquímica y fisiología',
    },
    {
      year: '2023',
      title: 'Rotaciones Clínicas',
      description: 'Comencé la práctica clínica en varias especialidades',
    },
    {
      year: '2024',
      title: 'Preparación de Internado',
      description: 'Preparándome para ENAM e internados especializados',
    },
  ]

  const highlights = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: 'Aprendizaje Integral',
      description: 'Domina conocimientos médicos fundamentales y clínicos',
    },
    {
      icon: <Stethoscope className="w-6 h-6" />,
      title: 'Excelencia Clínica',
      description: 'Desarrolla habilidades prácticas a través de casos reales',
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Preparación para Exámenes',
      description: 'Domina los exámenes ENAM, ECOE y especializados',
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Apoyo Comunitario',
      description: 'Conecta con compañeros y mentores experimentados',
    },
  ]

  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Acerca de esta Plataforma
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl">
            Un recurso integral creado para apoyar a los estudiantes de medicina en cada etapa de su educación, desde ciencias básicas hasta la preparación del internado.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8">Mi Trayectoria Educativa</h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-4 gap-6"
          >
            {timeline.map((item, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="p-6 h-full hover:border-primary/50 transition-colors">
                  <div className="text-sm font-semibold text-primary mb-2">
                    {item.year}
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-foreground/60">
                    {item.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Highlights */}
        <div>
          <h3 className="text-2xl font-bold mb-8">Qué Encontrarás Aquí</h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {highlights.map((highlight, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="p-6 h-full flex flex-col hover:border-accent/50 transition-colors group">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    {highlight.icon}
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">
                    {highlight.title}
                  </h4>
                  <p className="text-sm text-foreground/60">
                    {highlight.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
