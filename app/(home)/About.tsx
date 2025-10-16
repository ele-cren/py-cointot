import osteopathy from '@/public/images/osteopathy.jpg'
import Image from 'next/image'

export function About() {
  return (
    <section className="bg-muted/30 px-6 py-12" id="presentation">
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
            Praticien orienté vers la thérapie manuelle et l'écoute du patient.
          </span>
          <br />
          <br />
          Mon approche repose sur des techniques précises et adaptées à chaque
          situation, visant à améliorer la mobilité, soulager les tensions et
          rétablir l'équilibre fonctionnel du corps. <br />
          Chaque séance est personnalisée et prend en compte la globalité de la
          personne — son âge, son activité, ses antécédents et son mode de vie.
          <br />
          L'objectif : accompagner durablement chaque patient vers un meilleur
          confort et une meilleure mobilité. <br />
          Formé à la prise en charge des sportifs, j'accompagne aussi bien les
          pratiquants occasionnels que réguliers dans la prévention des
          blessures, la récupération et le retour à la performance.
        </p>
      </div>
    </section>
  )
}
