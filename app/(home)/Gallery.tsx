import Carousel from '@/src/components/ui/carousel'

const slideData = [
  {
    title: 'Le cabinet',
    src: 'https://images.unsplash.com/photo-1665483057650-f43811d36187?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=764',
  },
  {
    title: "La salle d'attente",
    src: 'https://images.unsplash.com/photo-1604328702728-d26d2062c20b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170',
  },
  {
    title: 'La façade',
    src: 'https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1176',
  },
]

export function Gallery() {
  return (
    <section className="bg-background px-6 py-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-8">
        <div className="flex flex-col gap-6">
          <h2 className="text-center text-2xl leading-none font-semibold">
            Le cabinet en images
          </h2>
          <p className="mx-auto max-w-full text-center text-base lg:max-w-1/2">
            Découvrez le cabinet de Pierre-Yves Cointot, un lieu chaleureux et
            professionnel où chaque séance est pensée pour votre bien-être.
          </p>
        </div>
        <div className="relative h-full w-full overflow-hidden pb-18">
          <Carousel slides={slideData} />
        </div>
      </div>
    </section>
  )
}
