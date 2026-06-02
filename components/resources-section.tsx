'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Brain, BookMarked, BarChart3, Users } from 'lucide-react'

export default function ResourcesSection() {
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

  const studyTools = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: 'Mnemonics & Memory Aids',
      description: 'Clever acronyms and memory techniques for complex medical concepts',
    },
    {
      icon: <BookMarked className="w-6 h-6" />,
      title: 'Flashcard Sets',
      description: 'Spaced repetition flashcards covering anatomy, physiology, and pathology',
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Study Guides',
      description: 'Comprehensive guides for exam preparation and clinical rotations',
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Group Study Resources',
      description: 'Materials designed for collaborative learning and discussion',
    },
  ]

  const recommendations = [
    {
      category: 'Textbooks',
      items: [
        'Robbins & Cotran Pathologic Basis of Disease',
        'Guyton & Hall Textbook of Medical Physiology',
        'Harrison\'s Principles of Internal Medicine',
        'Gray\'s Anatomy for Students',
      ],
    },
    {
      category: 'Apps & Platforms',
      items: [
        'Anki - Spaced repetition flashcards',
        'Osmosis - Video learning platform',
        'NEJM Knowledge+ - Journal content',
        'Medscape - Medical news and references',
      ],
    },
    {
      category: 'Clinical Resources',
      items: [
        'UpToDate - Evidence-based clinical information',
        'PubMed - Medical literature database',
        'DynaMed - Point-of-care medical information',
        'Radiopaedia - Radiology learning platform',
      ],
    },
  ]

  return (
    <section id="resources" className="py-16 md:py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Study Tools & Resources
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl">
            Everything you need to study effectively, from mnemonics to clinical references.
          </p>
        </motion.div>

        {/* Study Tools */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8">Available Study Tools</h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {studyTools.map((tool, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="p-6 h-full hover:border-primary/50 transition-colors group">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    {tool.icon}
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">
                    {tool.title}
                  </h4>
                  <p className="text-sm text-foreground/60">
                    {tool.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Recommendations Accordion */}
        <div>
          <h3 className="text-2xl font-bold mb-8">Recommended Resources</h3>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Accordion type="single" collapsible className="w-full">
              {recommendations.map((section, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-lg font-semibold hover:no-underline hover:text-primary transition-colors">
                    {section.category}
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-3">
                      {section.items.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="flex items-start gap-3 text-foreground/70 hover:text-foreground transition-colors"
                        >
                          <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
