'use client'

import { Button } from '@/src/components/ui/button'
import { ArrowRightIcon } from 'lucide-react'
import Link from 'next/link'
import { useMediaQuery } from 'react-responsive'

export function DiscoverButton() {
  const isLg = useMediaQuery({
    query: '(max-width: 1280px)'
  })
  const isMobile = useMediaQuery({
    query: '(max-width: 1024px)'
  })

  function handleClick(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
    e.preventDefault()

    if (typeof document !== 'undefined') {
      const sectionId = href.replace('#', '')
      const section = document.getElementById(sectionId)

      if (section) {
        const navbarHeight = isMobile ? 83 : isLg ? 71 : 79
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
    <Button variant={'link'} className="flex items-center gap-2" asChild>
      <Link
        href={'#presentation'}
        onClick={(e) => handleClick(e, '#presentation')}
      >
        Découvrir l'approche <ArrowRightIcon />
      </Link>
    </Button>
  )
}
