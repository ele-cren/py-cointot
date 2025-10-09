import portrait from '@/public/images/portrait.webp'
import { Button } from '@/src/components/ui/button'
import { cn } from '@/src/lib/utils'
import { ArrowRightIcon, CalendarIcon, MenuIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

function Navbar() {
  return (
    <div className="relative">
      <div className="bg-background flex items-center justify-between border p-6">
        <p className="text-base font-semibold">Pierre-Yves COINTOT</p>
        <nav className="max-lg:hidden">
          <ul className="flex gap-8 text-sm">
            <li>
              <Link href={'#accueil'} className="hover:text-muted-foreground">
                Accueil
              </Link>
            </li>
            <li>
              <Link
                href={'#presentation'}
                className="hover:text-muted-foreground"
              >
                Présentation
              </Link>
            </li>
            <li>
              <Link href={'#pratiques'} className="hover:text-muted-foreground">
                Pratiques
              </Link>
            </li>
            <li>
              <Link
                href={'#questions-frequentes'}
                className="hover:text-muted-foreground"
              >
                Questions fréquentes
              </Link>
            </li>
            <li>
              <Link href={'#tarifs'} className="hover:text-muted-foreground">
                Tarifs
              </Link>
            </li>
            <li>
              <Link
                href={'#temoignages'}
                className="hover:text-muted-foreground"
              >
                Témoignages
              </Link>
            </li>
            <li>
              <Link
                href={'#le-cabinet'}
                className="hover:text-muted-foreground"
              >
                Le cabinet
              </Link>
            </li>
          </ul>
        </nav>
        <Button variant={'ghost'} size={'icon'} className="lg:hidden">
          <MenuIcon />
        </Button>
        <Button size={'sm'} className="flex items-center gap-2 max-xl:hidden">
          <CalendarIcon />
          Prendre rendez-vous
        </Button>
      </div>
    </div>
  )
}

function ContentSide({ className = '' }: { className?: string }) {
  return (
    <div className={cn(className, 'flex flex-col gap-10')}>
      <div className="flex flex-col gap-8 max-sm:text-center">
        <h1 className="text-5xl">
          Pierre-Yves COINTOT,{' '}
          <span className="font-semibold"> Ostéopathe D.O.</span> à
          <span className="text-muted-foreground"> Aime-la-Plagne</span>
        </h1>
        <p className="text-2xl">
          Approche douce et personnalisée pour soulager les douleurs et
          restaurer l’équilibre du corps.
        </p>
      </div>
      <div className="flex items-center gap-6 max-sm:flex-col">
        <Button size={'lg'} className="flex items-center gap-2">
          <CalendarIcon /> Prendre rendez-vous sur Doctolib
        </Button>
        <Button variant={'link'} className="flex items-center gap-2" asChild>
          <Link href={'#presentation'}>
            Découvrir l'approche <ArrowRightIcon />
          </Link>
        </Button>
      </div>
    </div>
  )
}

function ImageSide({ className = '' }: { className?: string }) {
  return (
    <Image
      src={portrait}
      alt="Pierre-Yves COINTOT"
      className="w-72 rounded-md shadow-sm max-lg:mx-auto"
    />
  )
}

export default function Home() {
  return (
    <main>
      <Navbar />
      <section className="mx-auto max-w-7xl py-12 max-xl:px-6">
        <div className="flex gap-12 max-xl:flex-col">
          <ContentSide />
          <ImageSide />
        </div>
      </section>
    </main>
  )
}
