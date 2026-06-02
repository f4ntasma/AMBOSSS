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
      title: 'Started Medical School',
      description: 'Began my journey at National University of Mexico',
    },
    {
      year: '2021',
      title: 'Basic Sciences',
      description: 'Focused on anatomy, biochemistry, and physiology',
    },
    {
      year: '2023',
      title: 'Clinical Rotations',
      description: 'Started clinical practice in various specialties',
    },
    {
      year: '2024',
      title: 'Internship Preparation',
      description: 'Preparing for ENAM and specialized internships',
    },
  ]

  const highlights = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: 'Comprehensive Learning',
      description: 'Master fundamental and clinical medical knowledge',
    },
    {
      icon: <Stethoscope className="w-6 h-6" />,
      title: 'Clinical Excellence',
      description: 'Develop practical skills through real cases',
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Exam Preparation',
      description: 'Ace ENAM, ECOE, and specialty exams',
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Community Support',
      description: 'Connect with peers and experienced mentors',
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
            About This Platform
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl">
            A comprehensive resource created to support medical students through every stage of their education, from basic sciences to internship preparation.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8">Educational Journey</h3>
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
          <h3 className="text-2xl font-bold mb-8">What You&apos;ll Find Here</h3>
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
