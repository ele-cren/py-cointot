import { Navbar } from '@/src/components/layout/Navbar'
import { Wrapper } from '@/src/components/layout/Wrapper'
import { About } from './(home)/About'
import { Hero } from './(home)/Hero'
import { Practices } from './(home)/Practices'
import { Pricing } from './(home)/Pricing'
import { Faq } from './(home)/Faq'
import { Testimonials } from './(home)/Testimonials'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Wrapper>
        <Hero />
        <About />
        <Practices />
        <Faq />
        <Pricing />
        <Testimonials />
      </Wrapper>
    </main>
  )
}
