import Navbar from '@/components/navbar'
import HeroSection from '@/components/hero-section'
import AboutSection from '@/components/about-section'
import NotesSection from '@/components/notes-section'
import BlogSection from '@/components/blog-section'
import ResourcesSection from '@/components/resources-section'
import ContactSection from '@/components/contact-section'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <NotesSection />
      <BlogSection />
      <ResourcesSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
