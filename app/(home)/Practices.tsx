import { FeaturesSectionWithHoverEffects } from '@/src/components/blocks/feature-section-with-hover-effects'

export function Practices() {
  return (
    <section className="bg-background px-6 py-12" id="pratiques">
      <div className="mx-auto flex max-w-7xl flex-col gap-8">
        <div className="flex flex-col gap-6">
          <h2 className="text-center text-2xl leading-none font-semibold">
            Des soins adaptés à chaque besoin
          </h2>
          <p className="mx-auto max-w-full text-center text-base lg:max-w-1/2">
            Pierre-Yves Cointot pratique une ostéopathie complète, fondée sur
            l'écoute et l'adaptation des techniques à chaque profil de patient :
            nourrissons, femmes enceintes, adultes, sportifs ou seniors.
            <br />
            <br /> Son approche intègre différentes spécialités permettant une
            prise en charge personnalisée, en douceur et en profondeur.
          </p>
        </div>
        <FeaturesSectionWithHoverEffects />
      </div>
    </section>
  )
}
