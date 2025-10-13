import { Testimonial } from '@/src/components/ui/testimonial-card'
import testimonial3 from '@/public/images/testimonial3.jpg'

const testimonials = [
  {
    name: 'Erwan LE CREN',
    rating: 5,
    image: 'https://i.pravatar.cc/150?u=sarah',
    testimonial: `Praticien très à l'écoute, qui connaît parfaitement son métier qui vous met totalement en confiance tout au long de la séance. Des résultats concrets, je suis reparti soulagé dès la première séance. Je recommande sans hésiter !`,
  },
  {
    name: 'Guillaume MACQUART',
    rating: 5,
    image: 'https://i.pravatar.cc/150?u=john',
    testimonial: `Nouveau praticien sur Aime, j'ai voulu essayer. Praticien disponible, super agréable, et professionnel. Sportif lui-même, il interprète très bien les douleurs liées au sport et sait comment les traiter! A recommander sans réserve.`,
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
        <div className="grid grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Testimonial key={testimonial.name} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}
