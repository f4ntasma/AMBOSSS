'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { FileText, Bookmark } from 'lucide-react'

export default function NotesSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  const categories = ['all', 'basic-sciences', 'clinical', 'pharmacology']
  const categoryLabels = {
    'all': 'All Notes',
    'basic-sciences': 'Basic Sciences',
    'clinical': 'Clinical',
    'pharmacology': 'Pharmacology',
  }

  const notes = [
    {
      id: 1,
      title: 'Anatomy: Cardiovascular System',
      category: 'basic-sciences',
      downloads: 234,
      rating: 4.8,
    },
    {
      id: 2,
      title: 'Biochemistry: Metabolism',
      category: 'basic-sciences',
      downloads: 189,
      rating: 4.6,
    },
    {
      id: 3,
      title: 'Pathophysiology: Heart Failure',
      category: 'clinical',
      downloads: 312,
      rating: 4.9,
    },
    {
      id: 4,
      title: 'Clinical Diagnosis: Hypertension',
      category: 'clinical',
      downloads: 267,
      rating: 4.7,
    },
    {
      id: 5,
      title: 'Drug Interactions Guide',
      category: 'pharmacology',
      downloads: 198,
      rating: 4.5,
    },
    {
      id: 6,
      title: 'Antimicrobial Therapy',
      category: 'pharmacology',
      downloads: 245,
      rating: 4.8,
    },
  ]

  const filteredNotes = selectedCategory === 'all'
    ? notes
    : notes.filter(note => note.category === selectedCategory)

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

  return (
    <section id="notes" className="py-16 md:py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Study Notes Bank
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl">
            Comprehensive, organized notes covering basic sciences, clinical knowledge, and pharmacology.
          </p>
        </motion.div>

        {/* Filter buttons */}
        <div className="mb-12 flex flex-wrap gap-2">
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setSelectedCategory(category)}
              variant={selectedCategory === category ? 'default' : 'outline'}
              className={selectedCategory === category ? 'bg-primary text-primary-foreground' : ''}
            >
              {categoryLabels[category as keyof typeof categoryLabels]}
            </Button>
          ))}
        </div>

        {/* Notes grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredNotes.map((note) => (
              <motion.div
                key={note.id}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                layout
              >
                <Card className="p-6 h-full hover:border-primary/50 transition-all hover:shadow-lg cursor-pointer group">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <FileText className="w-6 h-6" />
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Bookmark className="w-4 h-4" />
                    </Button>
                  </div>

                  <h3 className="font-semibold text-foreground mb-2 line-clamp-2">
                    {note.title}
                  </h3>

                  <div className="flex items-center justify-between text-sm text-foreground/60 mb-4">
                    <span>{note.downloads} downloads</span>
                    <span className="flex items-center gap-1">
                      ⭐ {note.rating}
                    </span>
                  </div>

                  <Button variant="outline" size="sm" className="w-full">
                    Download Note
                  </Button>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
