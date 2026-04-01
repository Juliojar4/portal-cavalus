import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Categories from '@/components/Categories'
import Courses from '@/components/Courses'
import WhyUs from '@/components/WhyUs'
import Testimonials from '@/components/Testimonials'
import ContactCTA from '@/components/ContactCTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Courses />
        <About />
        <Categories />
        <WhyUs />
        <Testimonials />
        <ContactCTA />
      </main>
      <Footer />
    </>
  )
}
