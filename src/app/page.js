// import Image from 'next/image'

import About from "@/components/About/About";
import Contact from "@/components/ContactForm/Contact";
import Hero from "@/components/Hero/Hero";
import Services from "@/components/Services/Services";
import Stats from "@/components/Stats/Stats";
import Testimonials from "@/components/Testimonials/Testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Stats />
      <Testimonials />
      <Contact />
    </main>
  )
}
