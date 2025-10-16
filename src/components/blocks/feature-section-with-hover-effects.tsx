import { cn } from '@/src/lib/utils'

export function FeaturesSectionWithHoverEffects() {
  const features = [
    {
      title: "Techniques d'énergie musculaire",
      description:
        'Méthode douce qui utilise la contraction volontaire des muscles pour relâcher les tensions, améliorer la mobilité articulaire et rééquilibrer le système musculo-squelettique.',
      icon: <span className="text-4xl">⚡</span>,
    },
    {
      title: 'Ostéopathie structurelle',
      description:
        "S'appuie sur des manipulations précises des articulations et des muscles pour restaurer la mobilité, corriger les déséquilibres et soulager les douleurs mécaniques.",
      icon: <span className="text-4xl">🦴</span>,
    },
    {
      title: 'Ostéopathie du sport',
      description:
        "Permet d'optimiser les performances, d'améliorer la récupération et de prévenir les blessures grâce à des techniques adaptées à la pratique physique.",
      icon: <span className="text-4xl">💪</span>,
    },
    {
      title: 'K-Tape',
      description:
        'Technique utilisant des bandes adhésives élastiques pour soutenir les muscles et les articulations sans limiter le mouvement.',
      icon: <span className="text-4xl">🩹</span>,
    },
    {
      title: 'Ostéopathie de la femme & de la femme enceinte',
      description:
        'Accompagne les femmes à chaque étape de leur vie : cycles, grossesse, post-partum… Elle vise à soulager les douleurs pelviennes, lombaires ou ligamentaires, et à favoriser le bien-être global.',
      icon: <span className="text-4xl">🤰</span>,
    },
    {
      title: 'Ostéopathie pédiatrique',
      description:
        'Destinée aux nourrissons et aux enfants, elle traite les troubles liés à la naissance (plagiocéphalie, reflux, sommeil) et soutient un bon développement moteur et postural.',
      icon: <span className="text-4xl">👶</span>,
    },

    {
      title: 'Ostéopathie maxillo-faciale et oro-faciale',
      description:
        'Cible les tensions au niveau de la mâchoire, du visage et du crâne. Utile en cas de bruxisme, douleurs articulaires temporo-mandibulaires ou troubles de la déglutition.',
      icon: <span className="text-4xl">😬</span>,
    },
    {
      title: 'Ostéopathie myofasciale',
      description:
        'Travaille sur les tissus conjonctifs et les fascias, souvent responsables de douleurs diffuses ou chroniques. Elle favorise un relâchement global et une meilleure circulation des fluides.',
      icon: <span className="text-4xl">🌿</span>,
    },
  ]
  return (
    <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  )
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string
  description: string
  icon: React.ReactNode
  index: number
}) => {
  return (
    <div
      className={cn(
        'group/feature relative flex flex-col py-10 lg:border-r dark:border-neutral-800',
        (index === 0 || index === 4) && 'lg:border-l dark:border-neutral-800',
        index < 4 && 'lg:border-b dark:border-neutral-800'
      )}
    >
      {index < 4 && (
        <div className="pointer-events-none absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 to-transparent opacity-0 transition duration-200 group-hover/feature:opacity-100 dark:from-neutral-800" />
      )}
      {index >= 4 && (
        <div className="pointer-events-none absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 to-transparent opacity-0 transition duration-200 group-hover/feature:opacity-100 dark:from-neutral-800" />
      )}
      <div className="relative z-10 mb-4 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="relative z-10 mb-2 px-10 text-lg font-bold">
        <div className="absolute inset-y-0 left-0 h-6 w-1 origin-center rounded-tr-full rounded-br-full bg-neutral-300 transition-all duration-200 group-hover/feature:h-8 group-hover/feature:bg-green-500 dark:bg-neutral-700" />
        <span className="inline-block text-neutral-800 transition duration-200 group-hover/feature:translate-x-2 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="relative z-10 max-w-xs px-10 text-sm text-neutral-600 dark:text-neutral-300">
        {description}
      </p>
    </div>
  )
}
