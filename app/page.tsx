import { Navbar } from '@/src/components/layout/Navbar'
import { Wrapper } from '@/src/components/layout/Wrapper'
import { About } from './(home)/About'
import { Hero } from './(home)/Hero'
import { Practices } from './(home)/Practices'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Wrapper>
        <Hero />
        <About />
        <Practices />
      </Wrapper>
    </main>
  )
}
