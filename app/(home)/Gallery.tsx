import cab1 from '@/public/images/cabinet/cab_1.jpg'
import cab2 from '@/public/images/cabinet/cab_2.jpg'
import cab6 from '@/public/images/cabinet/cab_6.jpg'
import Carousel from '@/src/components/ui/carousel'

const slideData = [
  {
    title: 'Le cabinet',
    src: cab1.src
  },
  {
    title: "La salle d'attente",
    src: cab2.src
  },
  {
    title: 'La façade',
    src: cab6.src
  }
]

export function Gallery() {
  return (
    <section className="bg-background px-6 py-12" id="cabinet">
      <div className="mx-auto flex max-w-7xl flex-col gap-8">
        <div className="flex flex-col gap-6">
          <h2 className="text-center text-2xl leading-none font-semibold">
            Le cabinet en images
          </h2>
          <p className="mx-auto max-w-full text-center text-base lg:max-w-1/2">
            Découvrez mon cabinet, un lieu chaleureux et professionnel où chaque
            séance est pensée pour votre bien-être.
          </p>
        </div>
        <div className="relative h-full w-full overflow-hidden pb-18">
          <Carousel slides={slideData} />
        </div>
      </div>
    </section>
  )
}
