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
      title: 'Inicio de la Carrera',
      description: 'Comencé mi viaje en la Universidad Nacional de México',
    },
    {
      title: 'Ciencias Básicas',
      description: 'Me enfoqué en anatomía, bioquímica y fisiología',
    },
    {
      title: 'Rotaciones Clínicas',
      description: 'Comencé la práctica clínica en varias especialidades',
    },
    {
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
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-4">
            La trayectoria educativa de un estudiante de Medicina en Perú suele seguir este recorrido:
          </h2>
          <div className="text-lg text-foreground/70 max-w-2xl">
            <p className="mb-2">
              1. Primer al tercer año (1° a 6° ciclo): Ciencias básicas
            </p>
            
            <p className="mb-2 font-bold tracking-tight">
              Durante los primeros ciclos se estudian las bases científicas de la medicina. Los cursos más comunes incluyen:
            </p>

            <ul className="list-disc ml-8 mt-2 space-y-1">
              <li>Anatomía Humana</li>
              <li>Histología y Embriología</li>
              <li>Bioquímica</li>
              <li>Fisiología</li>
              <li>Microbiología</li>
              <li>Inmunología</li>
              <li>Genética</li>
              <li>Farmacología</li>
              <li>Salud Pública</li>
              <li>Metodología de la Investigación</li>
            </ul>

            <p className="mb-2 mt-4 ">
              En esta etapa el estudiante desarolla conocimientos sobre el funcionamiento normal del cuerpo humano y comienza a tener contacto limitado con paciente.
            </p>

            <p className="mb-2 font-bold tracking-tight">
              2. Cuarto y quinto año (7° al 10° ciclo): Formación clínica
            </p>
            
            <p className="mb-2;">
              El estudiante empieza a aplicar los conocimientos básicos en escenarios clínicos y hospitalarios. Las asignatura suelen incluir:
            </p>

            <ul className="list-disc ml-8 mt-2 space-y-1">
              <li>Medicina Interna</li>
              <li>Cirugía</li>
              <li>Pediatría</li>
              <li>Ginecología y Obstetricia</li>
              <li>Psiquiatría</li>
              <li>Neurología</li>
              <li>Dermatología</li>
              <li>Diagnóstico por Imágenes</li>
            </ul>

            <p className="mb-2 mt-4">
              Además, realiza prácticas en hospitales y centros de salud bajo supervisión docente.
            </p>
            <p className="mb-2 font-bold">
              3. Sexto año (11° y 12° ciclo): Externado o práctica clínica avanzada
            </p>
            
            <p className="mb-2">
              En muchas universidades el estudiante pasa más tiempo en hospitales, participando en la atención de pacientes y desarrollando habilidades clínicas avanzadas. Aprenden a:
            </p>

            <ul className="list-disc ml-8 mt-2 space-y-1">
              <li>Elaborar historias clínicas.</li>
              <li>Realizar exámenes físicos.</li>
              <li>Interpretar exámenes auxiliares.</li>
              <li>Participar en discuciones de casos clínicos.</li>
            </ul>

            <p className="mb-2 mt-4">
              Esta etapa sirve de preparación para el internado.
            </p>

          </div>
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
