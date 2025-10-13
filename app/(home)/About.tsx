import osteopathy from '@/public/images/osteopathy.jpg'
import Image from 'next/image'

export function About() {
  return (
    <section className="bg-muted/30 px-6 py-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 md:flex-row xl:px-0">
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
            Pierre-Yves Cointot est un praticien orienté vers la thérapie
            manuelle et l'écoute du patient.
          </span>
          <br />
          <br />
          Son approche repose sur des techniques douces, précises et adaptées à
          chaque situation, visant à améliorer la mobilité, soulager les
          tensions et rétablir l'équilibre fonctionnel du corps. Chaque séance
          est personnalisée et prend en compte la globalité de la personne — son
          âge, son activité, ses antécédents et son mode de vie. L'objectif :
          accompagner durablement chaque patient vers un meilleur confort et une
          meilleure mobilité. Formé à la prise en charge des sportifs, il
          accompagne aussi bien les pratiquants occasionnels que réguliers dans
          la prévention des blessures, la récupération et le retour à la
          performance. L'ostéopathie qu'il pratique s'appuie sur une vision
          globale du corps humain, où structure et fonction sont intimement
          liées. Grâce à des manipulations manuelles et à des techniques de
          relâchement myofascial, Pierre-Yves Cointot agit sur les tensions, les
          déséquilibres et les douleurs pour restaurer l'harmonie du corps.
        </p>
      </div>
    </section>
  )
}
