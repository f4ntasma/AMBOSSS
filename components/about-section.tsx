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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6">
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
            <p className="mb-2 font-bold tracking-tight">
              1. Primer al tercer año (1° a 6° ciclo): Ciencias básicas
            </p>
            
            <p className="mb-2">
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
            
            <p className="mb-2">
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
              4. Séptimo año  (13° y 14° ciclo): Internado Médico
            </p>
            
            <p className="mb-2">
              Es un año de práctica intensia en hospitales. El interno rota por cuatro áreas principales:
            </p>

            <ul className="list-disc ml-8 mt-2 space-y-1">
              <li>Medicina interna</li>
              <li>Cirugía General</li>
              <li>Pediatría</li>
              <li>Ginecología y Obstetricia</li>
            </ul>

            <p className="mb-2 mt-4">
              Trabaja junto a médicos asistentes y residentes, participa en guardias hospitalarias y en la atención directa de pacientes bajo supervisión.
            </p>
            <p className="mb-2 font-bold">
              5. Examen Nacional de Medicina (ENAM)
            </p>
            
            <p className="mb-2">
              Al finalizar el internado, los estudiantes suelen rendir el ENAM, evaluación nacional que mide los conocimientos adquiridos durante la carrera. El resultado es considerado para procesos posteriores como el SERUMS y el residentado.
            </p>
            <p className="mb-2 font-bold">
              6. Titulación y colegiatura
            </p>
            
            <p className="mb-2">
              Después de egresar, el médico realiza los trámites para obtener el título de Médico Cirujano, registrar el grado y colegiarse en el Colegio Médico del Perú.
            </p>
            <p className="mb-2 font-bold">
              7. SERUMS (1 año)
            </p>
            
            <p className="mb-2">
              El Servicio Rural y Urbano Marginal de Salud es un año de trabajo en establecimientos de salud del país, generalmente en zonas rurales o urbano-marginales.
            </p>
            <p className="mb-2">
              Durante esta etapa el médico ejerce como profesional responsable de la atención primaria de salud. El SERUMS es requisito para trabajar en el sector público y para postular al residentado médico.
            </p>
            <p className="mb-2 font-bold">
              8. Residentado Médico (Especialización)
            </p>
            
            <p className="mb-2">
              Luego del SERUMS, el médico puede postular al Residentado Médico para obtener una especialidad.
            </p>

            <p className="mb-2">
              Duración aproximada:
            </p>
            
            <ul className="list-disc ml-8 mt-2 space-y-1">
              <li>Especialidades clínicas: 3 años.</li>
              <li>Especialidades quirúrgicas: 4 años</li>
              <li>Algunas subespecialidades: 2 a 3 años adicionales.</li>
            </ul>

            <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-4 mt-12">
            Tips para el control del estrés en estudiantes de Medicina:
          </h2>

          <p className="mb-2">
              1. Organizar el tiempo de estudio
          </p>
            
            <ul className="list-disc ml-8 mt-2 space-y-1">
              <li>Utilizar una agenda o calendario para planificar actividades académicas.</li>
              <li>Dividir los temas extensos en metas pequeñas y alcanzables.</li>
              <li>Evitar dejar tareas y exámenes para último momento.</li>
            </ul>
          <p className="mb-2">
              2. Mantener hábitos de sueño saludables
          </p>
            
            <ul className="list-disc ml-8 mt-2 space-y-1">
              <li>Dormir entre 7 y 9 horas diarias cuando sea posible.</li>
              <li>Mantener horarios regulares de sueño.</li>
              <li>Evitar estudiar toda la noche antes de los exámenes.</li>
            </ul>
          <p className="mb-2">
              3. Realizar actividad física regularmente
          </p>
            
            <ul className="list-disc ml-8 mt-2 space-y-1">
              <li>Caminar, correr, nadar o practicar algún deporte.</li>
              <li>Realizar al menos 30 minutos de ejercicio la mayoría de los días.</li>
              <li>El ejercicio ayuda a reducir la ansiedad y mejora la concentración.</li>
            </ul>
          <p className="mb-2">
              4. Llevar una alimentación equilibrada
          </p>
            
            <ul className="list-disc ml-8 mt-2 space-y-1">
              <li>Consumir frutas, verduras y proteínas de calidad.</li>
              <li>Mantener una adecuada hidratación.</li>
              <li>Evitar el exceso de cafeína y bebidas energéticas.</li>
            </ul>
          <p className="mb-2">
              5. Practicar técnicas de relajación
          </p>
            
            <ul className="list-disc ml-8 mt-2 space-y-1">
              <li>Meditación</li>
              <li>Atención plena (mindfulness").</li>
              <li>Ejercicios de respirción profunda.</li>
              <li>Relajación muscular progresiva.</li>
            </ul>
          <p className="mb-2">
              6. Mantener una red de apoyo
          </p>
            
            <ul className="list-disc ml-8 mt-2 space-y-1">
              <li>Compartir experiencias con compañeros de estudio.</li>
              <li>Conversar con familiares y amigos.</li>
              <li>Buscar apoyo de docentes o tutores cuando sea necesario.</li>
            </ul>
          <p className="mb-2">
              7. Evitar el perfeccionismo excesivo
          </p>
            
            <ul className="list-disc ml-8 mt-2 space-y-1">
              <li>Reconocer que no es posible saberlo todo</li>
              <li>Aceptar los errores como parte del aprendizaje.</li>
              <li>Establecer expectativas realistas sobre el rendimiento académico.</li>
            </ul>
          <p className="mb-2">
              8. Reservar tiempo para actividades recreativas 
          </p>
            
            <ul className="list-disc ml-8 mt-2 space-y-1">
              <li>Practicar hobbies.</li>
              <li>Escuchar música.</li>
              <li>Leer por placer.</li>
              <li>Participar en actividades culturales o deportivas.</li>
            </ul>
          <p className="mb-2">
              9. Identificar signos tempranos de estrés 
          </p>
            
            <ul className="list-disc ml-8 mt-2 space-y-1">
              <li>Irritabilidad.</li>
              <li>Fatiga constante.</li>
              <li>Problemas de concentración.</li>
              <li>Alteraciones del sueño.</li>
              <li>Dolores de cabeza frecuentes.</li>
            </ul>

          <p className="mb-2">
              Reconocer estos signos permite actuar antes de que el estrés afecte la salud física o mental.
            </p>
          <p className="mb-2">
              10. Buscar ayuda profesional cuando sea necesario 
          </p>
            
            <ul className="list-disc ml-8 mt-2 space-y-1">
              <li>Acudir a servicios de consejería psicológica de la universidad.</li>
              <li>Consultar con un profesional de salud mental si el estrés se vuelve persistente o afecta significativamente la vida diaria.</li>
            </ul>

          <p className="mb-2">
              Recomendación para estudiantes de Medicina.
            </p>

            <p className="mb-2">
               Una estrategia práctica es aplicar la regla 8-8-8 cuando sea posible: 
          </p>
            
            <ul className="list-disc ml-8 mt-2 space-y-1">
              <li>8 horas para dormir.</li>
              <li>8 horas para actividades académicas.</li>
              <li>8 horas para actividades personales, alimentación, ejercicio y descanso.</li>
            </ul>

          <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-4">
            <br/>Tips adicionales para Medicina:
          </h2>

          <p className="mb-2">
              1. Repetición espaciada (Spaced Repetition)
            </p>

            <p className="mb-2">
               Consiste en repasar la información en intervalos cada vez más largos para evitar el olvido. 
          </p>
            <p className="mb-2">
               Cómo aplicarlo:
          </p>
            
            <ul className="list-disc ml-8 mt-2 space-y-1">
              <li>Revisar el tema el mismo día que se estudia.</li>
              <li>Repasarlo nuevamente a los 2-3 días.</li>
              <li>Volver a revisarlo una semana después.</li>
              <li>Realizar repasos mensuales..</li>
            </ul>
            <p className="mb-2">
               Ventajas:
          </p>
            
            <ul className="list-disc ml-8 mt-2 space-y-1">
              <li>Mejora la retención a largo plazo.</li>
              <li>Reduce el tiempo de estudio antes de los exámenes.</li>
            </ul>
          <p className="mb-2">
              2. Recuperación activa (Active Recall)
            </p>

            <p className="mb-2">
               Consiste en intentar recordar la información sin mirar los apuntes. 
          </p>
            <p className="mb-2">
               Ejemplos:
          </p>
            
            <ul className="list-disc ml-8 mt-2 space-y-1">
              <li>Responder preguntas de memoria.</li>
              <li>Explicar un tema sin leer.</li>
              <li>Resolver casos clínicos.</li>
            </ul>
            <p className="mb-2">
               Ventajas:
          </p>
            
            <ul className="list-disc ml-8 mt-2 space-y-1">
              <li>Fortalece la memoria.</li>
              <li>Permite identificar vacíos de conocimientos.</li>
            </ul>
          <p className="mb-2">
              3. Método Feynman
            </p>

            <p className="mb-2">
               Consiste en explicar un tema con palabras simples, como si se enseñara a alguien sin conocimientos previos. 
          </p>
            <p className="mb-2">
               Pasos:
          </p>
            
            <ol className="list-disc ml-8 mt-2 space-y-1">
              <li>1. Estudiar el tema.</li>
              <li>2. Explicarlo con lenguaje sencillo.</li>
              <li>3. Detectar lo que no se comprende bien.</li>
              <li>4. Volver a estudiar esos puntos.</li>
            </ol>
            <p className="mb-2">
               Ideal para:
          </p>
            
            <ul className="list-disc ml-8 mt-2 space-y-1">
              <li>Fisiología.</li>
              <li>Farmacología.</li>
              <li>Patología.</li>
              <li>Medicina Interna.</li>
            </ul>

            <p className="mb-2">
              4. Mapas conceptuales
            </p>

            <p className="mb-2">
               Permiten organizar y relacionar conceptos visualmente.
          </p>
            <p className="mb-2">
               Útiles para:
          </p>
            
            <ol className="list-disc ml-8 mt-2 space-y-1">
              <li>Fisiopatología.</li>
              <li>Inmunología.</li>
              <li>Microbiología.</li>
              <li>Endocrinología.</li>
            </ol>
            <p className="mb-2">
                Ayudan a comprender relaciones entre enfermedades, síntomas y tratamientos.
          </p>

          <p className="mb-2">
              5. Estudio basado en casos clínicos
            </p>

            <p className="mb-2">
              Consiste en aplicar los conocimientos a situaciones reales o simuladas.
          </p>
            <p className="mb-2">
              Ejemplo: <br/>En lugar de memorizar los síntomas de diabetes, analizar el caso de un paciente con poliuria, polidipsia y pérdida de peso.
          </p>
            <p className="mb-2">
              Ventajas:
          </p>
            
            <ol className="list-disc ml-8 mt-2 space-y-1">
              <li>Favorece el razonamiento clínico.</li>
              <li>Facilita el aprendizaje significativo.</li>
            </ol>
          <p className="mb-2">
              6. Técnica Pomodoro
            </p>

            <p className="mb-2">
              Método de gestión del tiempo.
          </p>
            <p className="mb-2">
              Procedimiento:
          </p>
            
            <ul className="list-disc ml-8 mt-2 space-y-1">
              <li>Estudiar 25 minutos.</li>
              <li>Descansar 5 minutos.</li>
              <li>Repetir 4 ciclos.</li>
              <li>Tomar un descanso más largo de 15 a 30 minutos.</li>
            </ul>
            <p className="mb-2">
              Beneficios:
          </p>
            
            <ul className="list-disc ml-8 mt-2 space-y-1">
              <li>Mantiene la conecntración.</li>
              <li>Reduce la fatiga mental.</li>
            </ul>

          <p className="mb-2">
              7. Elaboración de resúmenes inteligentes
            </p>

            <p className="mb-2">
              No copiar todo el tema.
          </p>
            <p className="mb-2">
              Se recomienda:
          </p>
            
              <ul className="list-disc ml-8 mt-2 space-y-1">
                <li>Escribir solo ideas clave.</li>
                <li>Utilizar cuadros comparativos.</li>
                <li>Resumir algoritmos diagnósticos y terapéuticos.</li>
              </ul>
          <p className="mb-2">
              8. Uso de reglas mnemotécnicas
            </p>

            <p className="mb-2">
              Ayudan a recordar listas complejas.
          </p>
            <p className="mb-2">
              Ejemplo: <br/>Para recordar los pares craneales se utilizan frases o acrónimos diseñados para memorizar el orden y función de cada nervio.
          </p>

          <p className="mb-2">
              9. Grupos de estudio
            </p>

            <p className="mb-2">
              Funcionan mejor cuando:
          </p>

          <ul className="list-disc ml-8 mt-2 space-y-1">
              <li>Son pequeños (3 a 5 integrantes).</li>
              <li>Cada miembro explica un tema.</li>
              <li>Se discuten preguntas y casos clínicos.</li>
            </ul>
            <p className="mb-2">
              Ventajas:
          </p>

          <ul className="list-disc ml-8 mt-2 space-y-1">
              <li>Refuerzan el aprendizaje activo.</li>
              <li>Mejoran la comunicación médica.</li>
            </ul>

          <p className="mb-2">
              10. Banco de preguntas y simulacros
            </p>

            <p className="mb-2">
              Resolver preguntas de exámenes anteriores o simulacros.
          </p>
            <p className="mb-2">
              Beneficios:
          </p>

          <ul className="list-disc ml-8 mt-2 space-y-1">
              <li>Identifica temas débiles.</li>
              <li>Entrena el razonamiento clínico.</li>
              <li>Reduce la ansiedad ante los exámenes.</li>
            </ul>

          </div>
        </motion.div>
      </div>
    </section>
  )
}
