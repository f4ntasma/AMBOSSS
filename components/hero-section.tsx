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
            <span className="text-sm font-medium text-foreground/80">Medical Education Platform</span>
          </div>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-6xl font-bold tracking-tight mb-6"
        >
          Master Medical Knowledge with <span className="text-primary">MedEd</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xl text-foreground/70 mb-8 max-w-2xl mx-auto"
        >
          Comprehensive study resources, clinical cases, exam preparation tools, and a supportive community for medical students. Your complete companion for medical education success.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            Explore Resources
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
          <Button size="lg" variant="outline">
            Learn More
          </Button>
        </motion.div>

        {/* Feature highlights */}
        <motion.div
          variants={itemVariants}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            {
              title: 'Study Notes',
              description: 'Organized clinical and basic science notes',
            },
            {
              title: 'Clinical Cases',
              description: 'Real-world scenarios for practical learning',
            },
            {
              title: 'Exam Prep',
              description: 'ENAM, ECOE, and internship preparation',
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
