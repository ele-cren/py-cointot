import portrait from '@/public/images/portrait.webp'
import { Button } from '@/src/components/ui/button'
import { cn } from '@/src/lib/utils'
import { ArrowRightIcon, CalendarIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

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

export function Hero() {
  return (
    <section className="mx-auto max-w-7xl py-12 max-xl:px-6">
      <div className="flex gap-12 max-lg:flex-col">
        <ContentSide />
        <ImageSide />
      </div>
    </section>
  )
}
