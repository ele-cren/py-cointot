import { Testimonial } from '@/src/components/ui/testimonial-card'
import testimonial1 from '@/public/images/testimonial1.jpg'
import testimonial2 from '@/public/images/testimonial2.jpg'
import testimonial3 from '@/public/images/testimonial3.jpg'
import testimonial4 from '@/public/images/testimonial4.jpg'

const testimonials = [
  {
    name: 'Erwan LE CREN',
    rating: 5,
    image: testimonial1.src,
    testimonial: `Praticien très à l'écoute, qui connaît parfaitement son métier qui vous met totalement en confiance tout au long de la séance. Des résultats concrets, je suis reparti soulagé dès la première séance. Je recommande sans hésiter !`,
  },
  {
    name: 'Guillaume MACQUART',
    rating: 5,
    image: testimonial2.src,
    testimonial: `Nouveau praticien sur Aime, j'ai voulu essayer. Praticien disponible, super agréable, et professionnel. Sportif lui-même, il interprète très bien les douleurs liées au sport et sait comment les traiter! A recommander sans réserve.`,
  },
  {
    name: 'Laetitia LAURENT',
    rating: 5,
    image: testimonial4.src,
    testimonial:
      'Mr Cointot m a soigné à plusieurs reprises, avec. De bons conseils et même en urgence, Mr Cointot est un excellent ostéopathe !',
  },
  {
    name: 'Quentin ARNAULT',
    rating: 5,
    image: testimonial3.src,
    testimonial: "Bon ostéopathe a l'écoute et très efficace",
  },
]

export function Testimonials() {
  return (
    <section className="bg-muted/30 px-6 py-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 xl:px-0">
        <div className="flex flex-col gap-6">
          <h2 className="text-center text-2xl leading-none font-semibold">
            Ils ont fait confiance à Pierre-Yves
          </h2>
          <p className="mx-auto max-w-full text-center text-base lg:max-w-1/2">
            La satisfaction et le bien-être des patients sont au cœur de la
            pratique de Pierre-Yves.
            <br />
            Découvrez quelques témoignages qui reflètent la qualité de
            l'accompagnement et l'attention portée à chacun.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {testimonials.map((testimonial) => (
            <Testimonial key={testimonial.name} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}
