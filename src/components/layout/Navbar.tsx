'use client'
import Link from 'next/link'
import { Button } from '../ui/button'
import { MenuIcon, CalendarIcon } from 'lucide-react'
import { useRef, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'

gsap.registerPlugin(ScrollTrigger)

const navItems = [
  {
    label: 'Accueil',
    href: '#accueil'
  },
  {
    label: 'Présentation',
    href: '#presentation'
  },
  {
    label: 'Pratiques',
    href: '#pratiques'
  },
  {
    label: 'Questions fréquentes',
    href: '#questions-frequentes'
  },
  {
    label: 'Tarifs',
    href: '#tarifs'
  },
  {
    label: 'Témoignages',
    href: '#temoignages'
  },
  {
    label: 'Le cabinet',
    href: '#cabinet'
  }
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const isLg = useMediaQuery({
    query: '(max-width: 1280px)'
  })
  const isMobile = useMediaQuery({
    query: '(max-width: 1024px)'
  })
  const navListRef = useRef<HTMLUListElement>(null)

  useGSAP(() => {
    const navElems = navListRef.current?.querySelectorAll('a')
    const navbarHeight = isMobile ? 84 : isLg ? 72 : 80

    navElems?.forEach((elem) => {
      const sectionId = elem.getAttribute('href')?.replace('#', '') ?? ''
      const section = document.getElementById(sectionId)

      if (section) {
        ScrollTrigger.create({
          trigger: section,
          start: `top ${navbarHeight}px`,
          end: `bottom ${navbarHeight}px`,
          onEnter: () => {
            navElems.forEach((elem) => {
              elem.classList.remove('font-semibold')
            })

            elem.classList.add('font-semibold')
          },
          onEnterBack: () => {
            navElems.forEach((elem) => {
              elem.classList.remove('font-semibold')
            })

            elem.classList.add('font-semibold')
          }
        })
      }
    })
  }, [isMobile, isLg])

  function handleClick(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
    e.preventDefault()

    if (typeof document !== 'undefined') {
      const sectionId = href.replace('#', '')
      const section = document.getElementById(sectionId)

      if (section) {
        const navbarHeight = isMobile ? 81 : isLg ? 69 : 77
        const elementPosition = section.getBoundingClientRect().top
        const offsetPosition =
          elementPosition + window.pageYOffset - navbarHeight

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
      }
    }
  }

  return (
    <div className="fixed inset-x-0 top-0 z-20">
      <div className="bg-background/80 flex items-center justify-between p-6 backdrop-blur-md">
        <p className="text-base font-semibold">Pierre-Yves COINTOT</p>
        <nav className="max-lg:hidden">
          <ul className="flex gap-8 text-sm" ref={navListRef}>
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="hover:text-muted-foreground"
                  onClick={(e) => handleClick(e, item.href)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Button
          variant={'ghost'}
          size={'icon'}
          className="lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <MenuIcon />
        </Button>
        <Button
          size={'sm'}
          className="flex items-center gap-2 max-xl:hidden"
          asChild
        >
          <Link
            href="https://www.doctolib.fr/osteopathe/aime-la-plagne/pierre-yves-cointot"
            target="_blank"
          >
            <CalendarIcon />
            Prendre rendez-vous
          </Link>
        </Button>
      </div>
      {isOpen && (
        <nav className="bg-foreground text-background absolute inset-x-0 hidden max-lg:block">
          <ul className="flex flex-col items-center gap-4 p-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="hover:text-background/80"
                  onClick={(e) => {
                    handleClick(e, item.href)
                    setIsOpen(false)
                  }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  )
}
