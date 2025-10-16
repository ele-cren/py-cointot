import osteopathy from '@/public/images/osteopathy.jpg'
import Image from 'next/image'
import sport1 from '@/public/images/about/1.jpg'
import sport2 from '@/public/images/about/2.jpg'
import sport3 from '@/public/images/about/3.jpg'

export function About() {
  return (
    <section className="bg-muted/30 px-6 py-12" id="presentation">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 xl:px-0">
        <div className="flex flex-col gap-12 md:flex-row">
          <div className="relative hidden md:block md:min-w-0 md:basis-1/3 md:self-stretch">
            <Image
              src={osteopathy}
              fill
              alt="Osteopathy"
              className="rounded-md object-cover object-center shadow-sm"
            />
          </div>
          <p className="text-base md:min-w-0 md:basis-2/3">
            <span className="font-semibold">
              Praticien orienté vers la thérapie manuelle et l'écoute du
              patient.
            </span>
            <br />
            <br />
            Mon approche repose sur des techniques précises et adaptées à chaque
            situation, visant à améliorer la mobilité, soulager les tensions et
            rétablir l'équilibre fonctionnel du corps. <br />
            Chaque séance est personnalisée et prend en compte la globalité de
            la personne — son âge, son activité, ses antécédents et son mode de
            vie.
            <br />
            L'objectif : accompagner durablement chaque patient vers un meilleur
            confort et une meilleure mobilité.
          </p>
        </div>
        <div className="flex flex-col gap-6">
          <p className="text-base">
            Passionné par le sport outdoor, j'ai eu l'opportunité, au fil de ma
            pratique, d'accompagner des athlètes de haut niveau dans différentes
            disciplines (trail et ultra-trail, ski- alpinisme, escalade en
            équipe de France…). J'ai suivi mes études à l'EDO Paris, partenaire
            des Jeux Olympiques. Également formé au CFPMS, par le programme
            “Human Training System” qui m'a permis d'acquérir une solide
            expérience dans la prise en charge, la préparation et le suivi des
            athlètes.
          </p>
          <div className="grid grid-cols-3 gap-6 max-md:grid-cols-2 max-sm:grid-cols-1">
            <div className="relative aspect-video">
              <Image
                src={sport1}
                alt="Trail running"
                fill
                className="rounded-md object-cover object-center shadow-sm"
              />
            </div>
            <div className="relative aspect-video">
              <Image
                src={sport2}
                alt="Ski-alpinisme"
                fill
                className="rounded-md object-cover object-center shadow-sm"
              />
            </div>
            <div className="relative aspect-video">
              <Image
                src={sport3}
                alt="Escalade en équipe de France"
                fill
                className="rounded-md object-cover object-center shadow-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
