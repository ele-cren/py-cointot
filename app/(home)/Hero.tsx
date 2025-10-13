import portrait from '@/public/images/portrait.webp'
import { Button } from '@/src/components/ui/button'
import { cn } from '@/src/lib/utils'
import { ArrowRightIcon, CalendarIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

function AvailableNow() {
  return (
    <div className="from-primary/10 to-primary/5 border-primary/20 flex w-fit items-center gap-2 rounded-full border bg-gradient-to-r px-4 py-2 text-sm backdrop-blur-sm">
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
        <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
      </span>
      <span className="text-primary font-medium">
        Disponible dès maintenant
      </span>
    </div>
  )
}

function ContentSide({ className = '' }: { className?: string }) {
  return (
    <div className={cn(className, 'flex flex-col gap-10')}>
      <div className="flex flex-col gap-8 max-sm:items-center max-sm:text-center">
        <AvailableNow />
        <h1 className="text-5xl">
          Pierre-Yves COINTOT,{' '}
          <span className="font-semibold"> Ostéopathe D.O.</span> à
          <span className="text-muted-foreground"> Aime-la-Plagne</span>
        </h1>
        <p className="text-2xl">
          Approche douce et personnalisée pour soulager les douleurs et
          restaurer l'équilibre du corps.
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
      className={cn('w-72 rounded-md shadow-sm max-lg:mx-auto', className)}
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
