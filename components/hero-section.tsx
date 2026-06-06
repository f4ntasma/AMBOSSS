'use client'

import { motion } from 'framer-motion'
import { ArrowRight, BookOpen } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section className="min-h-[calc(100vh-64px)] flex items-center justify-center relative overflow-hidden px-4">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 pointer-events-none" />
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-3xl mx-auto text-center z-10"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-secondary">
            <BookOpen className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground/80">Plataforma de Educación Médica</span>
          </div>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-6xl font-bold tracking-tight mb-6"
        >
          Domina el Conocimiento Médico con <span className="text-primary">AMBOSS</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xl text-foreground/70 mb-8 max-w-2xl mx-auto"
        >
          Brindar orientación y recursos útiles a los estudiantes de Medicina de primeros ciclos, facilitando su adaptación a la vida universitaria y fortaleciendo sus habilidades de estudio, organización y bienestar para lograr un mejor desarrollo académico y profesional.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
          <a href="https://drive.google.com/drive/folders/1EsPPrkcpjyllIMLLB0mFSYgWbAez9cRg?usp=sharing" className="flex items-center gap-2" target="_blank" rel="noopener noreferrer">
            Explorar Recursos
            <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </Button>
        </motion.div>

        {/* Feature highlights */}
        <motion.div
          variants={itemVariants}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            {
              title: 'Notas de Estudio',
              description: 'Notas clínicas y de ciencias básicas organizadas',
            },
            {
              title: 'Casos Clínicos',
              description: 'Escenarios del mundo real para aprendizaje práctico',
            },
            {
              title: 'Preparación de Exámenes',
              description: 'Preparación para ENAM, ECOE e internados',
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="p-4 rounded-lg bg-card border border-border/50 hover:border-border transition-colors"
            >
              <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-foreground/60">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
